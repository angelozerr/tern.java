/**
 *  Copyright (c) 2015 Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.eclipse.ide.debugger.webclipse;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.debug.core.DebugException;
import org.eclipse.debug.core.DebugPlugin;
import org.eclipse.debug.core.ILaunch;
import org.eclipse.debug.core.ILaunchConfigurationType;
import org.eclipse.debug.core.ILaunchConfigurationWorkingCopy;
import org.eclipse.debug.core.ILaunchManager;
import org.eclipse.debug.core.ILaunchesListener2;
import org.eclipse.debug.core.IStreamListener;
import org.eclipse.debug.core.model.IProcess;
import org.eclipse.debug.core.model.IStreamMonitor;

import tern.TernException;
import tern.server.nodejs.process.AbstractNodejsProcess;
import tern.server.nodejs.process.NodejsProcessException;

public class WebclipseNodejsDebugProcess extends AbstractNodejsProcess {

	private IFile ternServerFile;
	private ILaunch launch;
	private List<StreamProcessor> streamProcessors = new ArrayList<WebclipseNodejsDebugProcess.StreamProcessor>();

	public WebclipseNodejsDebugProcess(File nodejsBaseDir,
			IFile ternServerFile, File projectDir) throws TernException {
		super(nodejsBaseDir, projectDir);
		this.ternServerFile = ternServerFile;
	}

	@Override
	public void start() throws NodejsProcessException {
		if (isStarted()) {
			notifyErrorProcess("Nodejs tern Server is already started."); //$NON-NLS-1$
			throw new NodejsProcessException(
					"Nodejs tern Server is already started."); //$NON-NLS-1$
		}
		final ILaunchManager manager = DebugPlugin.getDefault()
				.getLaunchManager();
		try {
			ILaunchConfigurationType type = manager
					.getLaunchConfigurationType(WebclipseDebugger.LAUNCH_CONFIG_ID);
			final ILaunchConfigurationWorkingCopy lcwc = type
					.newInstance(
							null,
							manager.generateLaunchConfigurationName("tern.js for " + getProjectDir().getName())); //$NON-NLS-1$
			lcwc.setAttribute("jsAppLaunchingDelegateId", //$NON-NLS-1$
					"com.genuitec.eclipse.javascript.debug.nodejs.standalone"); //$NON-NLS-1$

			// Script to launch
			lcwc.setMappedResources(new IResource[] { ternServerFile });

			// Node.js installation path
			lcwc.setAttribute("nodeinstall_path", nodejsBaseDir.toString()); //$NON-NLS-1$

			// Working directory, set to folder containing bin/tern
			lcwc.setAttribute("JS_WORKING_DIR", getProjectDir().toString()); //$NON-NLS-1$

			// Set Tern Server params
			lcwc.setAttribute(
					"JS_PROGRAM_ARGUMENTS", DebugPlugin.renderArguments( //$NON-NLS-1$
									createTernServerArgs().toArray(
											new String[0]), null));

			notifyCreateProcess(Collections.<String> emptyList(), projectDir);

			manager.addLaunchListener(new ILaunchesListener2() {

				@Override
				public void launchesRemoved(ILaunch[] launches) {
				}

				@Override
				public void launchesChanged(ILaunch[] launches) {
				}

				@Override
				public void launchesAdded(ILaunch[] launches) {
				}

				@Override
				public void launchesTerminated(ILaunch[] launches) {
					for (ILaunch lc : launches) {
						if (lc.equals(launch)) {
							manager.removeLaunchListener(this);
							notifyStopProcess();
						}
					}
				}
			});
			
			Job launchJS = new Job("Launching Node.js in debug mode...") {
				@Override
				protected IStatus run(IProgressMonitor monitor) {
					notifyCreateProcess(Collections.<String> emptyList(), projectDir);
					try {
						launch = lcwc.launch("debug", null); //$NON-NLS-1$
					} catch (CoreException e) {
						return e.getStatus();
					}

					// setup std and err listeners
					for (IProcess process : launch.getProcesses()) {
						if ("javascript".equals(process.getAttribute(IProcess.ATTR_PROCESS_TYPE))) { //$NON-NLS-1$
							new StdOut(process.getStreamsProxy()
									.getOutputStreamMonitor());
							new StdErr(process.getStreamsProxy()
									.getErrorStreamMonitor());
						}
					}
					return Status.OK_STATUS;
				}
			};
			launchJS.setRule(ResourcesPlugin.getWorkspace().getRoot());
			launchJS.schedule();
			Job job = Job.getJobManager().currentJob();
			if (job != null) {
				//yield rule and allow for the launchJS job to take the rule
				job.yieldRule(null);
			}
		} catch (Exception e) {
			throw new NodejsProcessException(e);
		}
	}

	@Override
	protected void notifyStopProcess() {
		for (StreamProcessor proc : streamProcessors) {
			proc.close();
		}
		super.notifyStopProcess();
	}

	@Override
	public boolean isStarted() {
		return launch != null && !launch.isTerminated();
	}

	@Override
	public void kill() {
		if (launch != null && !launch.isTerminated()) {
			try {
				launch.terminate();
			} catch (DebugException e) {
				throw new RuntimeException(e);
			}
		}
		launch = null;
	}

	@Override
	public void join() throws InterruptedException {
		throw new UnsupportedOperationException();
	}

	private abstract class StreamProcessor implements IStreamListener {

		private StringBuilder lineBuilder = new StringBuilder();
		private IStreamMonitor monitor;

		public StreamProcessor(IStreamMonitor monitor) {
			this.monitor = monitor;
			monitor.addListener(this);
			streamProcessors.add(this);
			streamAppended(monitor.getContents(), monitor);
		}

		public void close() {
			streamAppended("\n", monitor); //$NON-NLS-1$
			monitor.removeListener(this);
		}

		@Override
		public synchronized void streamAppended(String text,
				IStreamMonitor monitor) {
			int pos = 0;
			int lastPos = 0;
			while ((pos = text.indexOf('\n', pos)) >= 0) {
				lineBuilder.append(text.substring(0, pos++));
				lastPos = pos;
				if (lineBuilder.length() > 0) {
					processLine(lineBuilder.toString());
				}
				lineBuilder.setLength(0);
			}
			lineBuilder.append(text.substring(lastPos));
		}

		protected abstract void processLine(String line);
	}

	private class StdOut extends StreamProcessor {

		private long startTime;

		public StdOut(IStreamMonitor monitor) {
			super(monitor);
			startTime = System.nanoTime();
		}

		@Override
		protected void processLine(String line) {
			if (getPort() == null) {
				// port was not getted, try to get it.
				if (line.startsWith("Listening on port ")) { //$NON-NLS-1$
					Integer port = Integer.parseInt(line.substring(
							"Listening on port ".length(), line.length())); //$NON-NLS-1$

					// port is getted, notify that process is
					// started.
					setPort(port);

					synchronized (lock) {
						lock.notifyAll();
					}
					if (startTime == 0) {
						startTime = System.nanoTime();
					}
					notifyStartProcess(startTime);
				}
			} else {
				// notify data
				notifyDataProcess(line);
			}
		}

	}

	private class StdErr extends StreamProcessor {

		public StdErr(IStreamMonitor monitor) {
			super(monitor);
		}

		@Override
		protected void processLine(String line) {
			if (!line.startsWith("debugger listening on port")) { //$NON-NLS-1$
				notifyErrorProcess(line);
			}
		}

	}

}

/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.server.nodejs.core.debugger;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.variables.VariablesPlugin;
import org.eclipse.debug.core.DebugException;
import org.eclipse.debug.core.DebugPlugin;
import org.eclipse.debug.core.ILaunch;
import org.eclipse.debug.core.ILaunchConfiguration;
import org.eclipse.debug.core.ILaunchConfigurationType;
import org.eclipse.debug.core.ILaunchConfigurationWorkingCopy;
import org.eclipse.debug.core.ILaunchManager;
import org.eclipse.debug.core.IStreamListener;
import org.eclipse.debug.core.model.IStreamMonitor;

import tern.TernException;
import tern.eclipse.ide.server.nodejs.core.debugger.launchConfigurations.NodejsCliFileHelper;
import tern.server.nodejs.process.AbstractNodejsProcess;
import tern.server.nodejs.process.NodejsProcessException;
import tern.utils.TernModuleHelper;

/**
 * Abstract class for node debug process.
 *
 */
public abstract class AbstractNodejsDebugProcess extends AbstractNodejsProcess {

	private final IProject workingDir;
	private final IFile jsFile; // (ex : bin/tern filde)
	private final String launchConfigId;
	private final List<StreamProcessor> streamProcessors;

	protected ILaunch launch;

	public AbstractNodejsDebugProcess(IFile jsFile, IProject workingDir, File nodejsInstallPath, String launchConfigId)
			throws TernException {
		super(nodejsInstallPath, workingDir.getLocation().toFile());
		this.workingDir = workingDir;
		this.jsFile = jsFile;
		this.launchConfigId = launchConfigId;
		this.streamProcessors = new ArrayList<AbstractNodejsDebugProcess.StreamProcessor>();
	}

	protected String getNodeInstallPath() {
		return TernModuleHelper.getPath(nodejsBaseDir);
	}

	protected String getWorkingDir() {
		return NodejsCliFileHelper.getWorkspaceLoc(workingDir);
	}

	@Override
	protected void notifyStopProcess() {
		for (StreamProcessor proc : streamProcessors) {
			proc.close();
		}
		super.notifyStopProcess();
	}

	@Override
	public void start() throws NodejsProcessException {
		if (isStarted()) {
			notifyErrorProcess("Nodejs tern Server is already started."); //$NON-NLS-1$
			throw new NodejsProcessException("Nodejs tern Server is already started."); //$NON-NLS-1$
		}
		ILaunchManager manager = DebugPlugin.getDefault().getLaunchManager();
		try {
			ILaunchConfigurationType type = manager.getLaunchConfigurationType(launchConfigId);
			String launchName = generateConfigurationName();
			ILaunchConfigurationWorkingCopy workingCopy = null;
			// Try to find existing launch
			ILaunchConfiguration configuration = getExistingLaunchConfiguration(type, launchName);
			if (configuration != null) {
				workingCopy = configuration.getWorkingCopy();
			} else {
				workingCopy = type.newInstance(null, manager.generateLaunchConfigurationName(launchName));
			}
			start(workingCopy);
			if (isSaveLaunch()) {
				workingCopy.doSave();
			}
		} catch (Exception e) {
			if (e instanceof NodejsProcessException) {
				throw (NodejsProcessException) e;
			}
			throw new NodejsProcessException(e);
		}
	}

	private ILaunchConfiguration getExistingLaunchConfiguration(ILaunchConfigurationType type, String launchName)
			throws CoreException {
		ILaunchManager manager = DebugPlugin.getDefault().getLaunchManager();
		ILaunchConfiguration[] configs = manager.getLaunchConfigurations(type);
		for (ILaunchConfiguration config : configs) {
			if (config.getName().startsWith(launchName)) {
				return config;
			}
		}
		return null;
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
		public synchronized void streamAppended(String text, IStreamMonitor monitor) {
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

	protected class StdOut extends StreamProcessor {

		private long startTime;

		public StdOut(IStreamMonitor monitor) {
			super(monitor);
			startTime = System.nanoTime();
		}

		@Override
		protected void processLine(String line) {
			if (getPort() == null) {
				if (isWaitOnPort()) {
					// port was not getted, try to get it.
					if (line.length() > 0) { // $NON-NLS-1$
						Integer port = Integer.parseInt(line.substring("Listening on port ".length(), line.length())); //$NON-NLS-1$

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
					synchronized (lock) {
						lock.notifyAll();
					}
					if (startTime == 0) {
						startTime = System.nanoTime();
					}
					notifyStartProcess(startTime);
					notifyDataProcess(line);
				}
			} else {
				// notify data
				notifyDataProcess(line);
			}
		}

	}

	protected class StdErr extends StreamProcessor {

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

	public IFile getJsFile() {
		return jsFile;
	}

	protected String getMode() throws NodejsProcessException {
		return getLaunchConfiguration().getLaunchMode();
	}

	private boolean isSaveLaunch() throws NodejsProcessException {
		return getLaunchConfiguration().isSaveLaunch();
	}

	private boolean isWaitOnPort() {
		try {
			return getLaunchConfiguration().isWaitOnPort();
		} catch (NodejsProcessException e) {
			return false;
		}
	}

	private String generateConfigurationName() throws NodejsProcessException {
		return getLaunchConfiguration().generateLaunchConfigurationName();
	}

	protected abstract void start(ILaunchConfigurationWorkingCopy lcwc) throws Exception;
}

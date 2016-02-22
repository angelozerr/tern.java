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
import java.util.Collections;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.debug.core.DebugPlugin;
import org.eclipse.debug.core.ILaunch;
import org.eclipse.debug.core.ILaunchConfigurationWorkingCopy;
import org.eclipse.debug.core.ILaunchManager;
import org.eclipse.debug.core.ILaunchesListener2;
import org.eclipse.debug.core.model.IProcess;

import tern.TernException;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCorePlugin;
import tern.eclipse.ide.server.nodejs.core.debugger.AbstractNodejsDebugProcess;

/**
 * Webclipse debugger process implementation.
 */
public class WebclipseNodejsDebugProcess extends AbstractNodejsDebugProcess {

	public WebclipseNodejsDebugProcess(IFile jsFile, File workingDir, File nodejsInstallPath,
			String launchConfigId) throws TernException {
		super(jsFile, workingDir, nodejsInstallPath, launchConfigId);
	}
	
	@Override
	protected void start(final ILaunchConfigurationWorkingCopy workingCopy) throws TernException {
		workingCopy.setAttribute("jsAppLaunchingDelegateId", //$NON-NLS-1$
				"com.genuitec.eclipse.javascript.debug.nodejs.standalone"); //$NON-NLS-1$

		// Script to launch (ex: bin/tern)
		IFile ternServerFile = getJsFile();
		workingCopy.setMappedResources(new IResource[] { ternServerFile });

		// Node.js installation path
		workingCopy.setAttribute("nodeinstall_path", getNodeInstallPath()); //$NON-NLS-1$

		// Working directory: the project
		workingCopy.setAttribute("JS_WORKING_DIR", getWorkingDir()); //$NON-NLS-1$

		// Set Tern Server params
		workingCopy.setAttribute(
				"JS_PROGRAM_ARGUMENTS", DebugPlugin.renderArguments( //$NON-NLS-1$
								createNodejsArgs().toArray(
										new String[0]), null));

		notifyCreateProcess(Collections.<String> emptyList(), projectDir);

		final ILaunchManager manager = DebugPlugin.getDefault().getLaunchManager();
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
					launch = workingCopy.launch(getMode(), monitor);
				} catch (Exception e) {
					if (e instanceof CoreException) {
					return ((CoreException) e).getStatus();
					}
					return new Status(Status.ERROR, TernNodejsCorePlugin.PLUGIN_ID, "Error while launching webclipse launch", e);
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
		
	}

}

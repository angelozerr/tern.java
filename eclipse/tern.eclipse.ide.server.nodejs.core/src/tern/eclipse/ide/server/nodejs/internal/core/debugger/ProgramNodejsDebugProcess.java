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
package tern.eclipse.ide.server.nodejs.internal.core.debugger;

import java.io.File;
import java.util.Collections;

import org.eclipse.core.externaltools.internal.IExternalToolConstants;
import org.eclipse.core.resources.IFile;
import org.eclipse.debug.core.DebugPlugin;
import org.eclipse.debug.core.ILaunch;
import org.eclipse.debug.core.ILaunchConfigurationWorkingCopy;
import org.eclipse.debug.core.ILaunchManager;
import org.eclipse.debug.core.ILaunchesListener2;
import org.eclipse.debug.core.model.IProcess;
import org.eclipse.debug.core.model.RuntimeProcess;

import tern.TernException;
import tern.eclipse.ide.server.nodejs.core.debugger.AbstractNodejsDebugProcess;
import tern.eclipse.ide.server.nodejs.core.debugger.launchConfigurations.NodejsCliFileHelper;
import tern.server.nodejs.process.NodejsProcessException;

/**
 * Program debugger process implementation.
 */
@SuppressWarnings("restriction")
public class ProgramNodejsDebugProcess extends AbstractNodejsDebugProcess {

	public ProgramNodejsDebugProcess(IFile jsFile, File workingDir, File nodejsInstallPath, String launchConfigId)
			throws TernException {
		super(jsFile, workingDir, nodejsInstallPath, launchConfigId);
	}

	@Override
	protected void start(ILaunchConfigurationWorkingCopy workingCopy) throws Exception {

		// Node.js installation path
		workingCopy.setAttribute(IExternalToolConstants.ATTR_LOCATION, getNodeInstallPath());

		// Working directory: the project
		workingCopy.setAttribute(IExternalToolConstants.ATTR_WORKING_DIRECTORY, getWorkingDir());

		// Arguments
		String args = getArgs();
		workingCopy.setAttribute(IExternalToolConstants.ATTR_TOOL_ARGUMENTS, args);

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

		launch = workingCopy.launch("run", null); //only works in run mode //$NON-NLS-1$

		// setup std and err listeners
		for (IProcess process : launch.getProcesses()) {
			if (process instanceof RuntimeProcess) {
				new StdOut(process.getStreamsProxy().getOutputStreamMonitor());
				new StdErr(process.getStreamsProxy().getErrorStreamMonitor());
			}
		}

	}

	private String getArgs() throws NodejsProcessException {
		StringBuilder args = new StringBuilder();
		args.append(NodejsCliFileHelper.getWorkspaceLoc(getJsFile()));
		for (String arg : createNodejsArgs()) {
			args.append(" "); //$NON-NLS-1$
			args.append(arg);
		}
		return args.toString();
	}
}

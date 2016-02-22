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
package tern.eclipse.ide.debugger.nodeclipse;

import java.io.File;
import java.util.Collections;

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

/**
 * Nodeclipse debugger process implementation.
 */
public class NodeclipseNodejsDebugProcess extends AbstractNodejsDebugProcess {

	public NodeclipseNodejsDebugProcess(IFile jsFile, File workingDir, File nodejsInstallPath,
			String launchConfigId) throws TernException {
		super(jsFile, workingDir, nodejsInstallPath, launchConfigId);
	}

	@Override
	protected void start(final ILaunchConfigurationWorkingCopy workingCopy) throws Exception {

		// Script to launch
		IFile ternServerFile = getJsFile();
		workingCopy.setAttribute("key_file_path", ternServerFile.getFullPath().toString()); //$NON-NLS-1$

		// Node.js installation path
		// XXX currently not supported by configuration delegate
		workingCopy.setAttribute("nodeinstall_path", getNodeInstallPath()); //$NON-NLS-1$

		// Working directory, set to folder containing bin/tern
		workingCopy.setAttribute("attr_working_directory", getWorkingDir()); //$NON-NLS-1$

		// Set Tern Server params
		workingCopy.setAttribute("attr_program_arguments", DebugPlugin.renderArguments( //$NON-NLS-1$
				createNodejsArgs().toArray(new String[0]), null));

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

		launch = workingCopy.launch(super.getMode(), null);

		// setup std and err listeners
		for (IProcess process : launch.getProcesses()) {
			if (process instanceof RuntimeProcess) {
				new StdOut(process.getStreamsProxy().getOutputStreamMonitor());
				new StdErr(process.getStreamsProxy().getErrorStreamMonitor());
			}
		}

	}

}

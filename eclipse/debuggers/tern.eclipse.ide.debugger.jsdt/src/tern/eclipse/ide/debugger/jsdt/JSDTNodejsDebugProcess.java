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
package tern.eclipse.ide.debugger.jsdt;

import java.io.File;
import java.util.Collections;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
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

/**
 * Webclipse debugger process implementation.
 */
public class JSDTNodejsDebugProcess extends AbstractNodejsDebugProcess {

	public JSDTNodejsDebugProcess(IFile jsFile, File workingDir, File nodejsInstallPath,
			String launchConfigId) throws TernException {
		super(jsFile, workingDir, nodejsInstallPath, launchConfigId);
	}
	
//	<booleanAttribute key="attr_add_network_console_field" value="false"/>
//	<stringAttribute key="attr_app_arguments" value=""/>
//	<stringAttribute key="attr_app_path" value="${workspace_loc:/ternjs/node_modules/tern/bin/tern}"/>
//	<stringAttribute key="attr_app_project" value="ternjs"/>
//	<stringAttribute key="attr_app_project_relative_path" value="a.js"/>
//	<booleanAttribute key="attr_break_field" value="true"/>
//	<stringAttribute key="attr_host_field" value="localhost"/>
//	<stringAttribute key="attr_node_arguments" value=""/>
//	<stringAttribute key="attr_port_field" value="5858"/>
//	
	@Override
	protected void start(final ILaunchConfigurationWorkingCopy workingCopy) throws Exception {
		//workingCopy.setAttribute("jsAppLaunchingDelegateId", //$NON-NLS-1$
		//		"com.genuitec.eclipse.javascript.debug.nodejs.standalone"); //$NON-NLS-1$

		// Script to launch (ex: bin/tern)
		IFile ternServerFile = getJsFile();
		workingCopy.setMappedResources(new IResource[] { ternServerFile });
		workingCopy.setAttribute("attr_working_directory", getWorkingDir()); //$NON-NLS-1$

		workingCopy.setAttribute("attr_app_path", NodejsCliFileHelper.getWorkspaceLoc(ternServerFile.getLocation().toFile())); //$NON-NLS-1$
		workingCopy.setAttribute("attr_app_project", ternServerFile.getProject().getName()); //$NON-NLS-1$
		workingCopy.setAttribute("attr_app_project_relative_path", ternServerFile.getProjectRelativePath().toString()); //$NON-NLS-1$
		
		// Node.js installation path
		//workingCopy.setAttribute("nodeinstall_path", getNodeInstallPath()); //$NON-NLS-1$

		// Working directory: the project
		workingCopy.setAttribute("attr_working_directory", getWorkingDir()); //$NON-NLS-1$

		workingCopy.setAttribute("attr_break_field", true); //$NON-NLS-1$
		workingCopy.setAttribute("attr_host_field", "localhost"); //$NON-NLS-1$
		workingCopy.setAttribute("attr_port_field", "5858"); //$NON-NLS-1$
		
		workingCopy.setAttribute("attr_add_network_console_field", false); //$NON-NLS-1$
		
		// Set Tern Server params
		workingCopy.setAttribute(
				"attr_app_arguments", DebugPlugin.renderArguments( //$NON-NLS-1$
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

		launch = workingCopy.launch(super.getMode(), null);
		// setup std and err listeners
		Thread.sleep(2000);
		for (IProcess process : launch.getProcesses()) {
			if (process instanceof RuntimeProcess) {
				new StdOut(process.getStreamsProxy().getOutputStreamMonitor());
				new StdErr(process.getStreamsProxy().getErrorStreamMonitor());
			}
		}

		System.err.println("eeeee");
	}

}

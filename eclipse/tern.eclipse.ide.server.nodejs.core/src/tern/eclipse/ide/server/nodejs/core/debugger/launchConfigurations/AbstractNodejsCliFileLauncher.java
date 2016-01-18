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
package tern.eclipse.ide.server.nodejs.core.debugger.launchConfigurations;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.externaltools.internal.IExternalToolConstants;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.debug.core.ILaunchConfiguration;

import tern.TernException;
import tern.eclipse.ide.server.nodejs.core.debugger.INodejsDebugger;
import tern.server.nodejs.process.INodejsLaunchConfiguration;
import tern.server.nodejs.process.INodejsProcess;

/**
 * Launcher executed with a client file (ex : lib/cli.js for protractor) with
 * tern debugger {@link INodejsDebugger}.
 *
 */
public abstract class AbstractNodejsCliFileLauncher implements INodejsLaunchConfiguration {

	private final IFile configFile;
	private final IFile cliFile;
	private final INodejsDebugger debugger;
	private final File nodeInstallPath;
	private final String mode;

	public AbstractNodejsCliFileLauncher(IFile configFile, IFile cliFile, INodejsDebugger debugger,
			File nodeInstallPath, String mode) {
		this.configFile = configFile;
		this.cliFile = cliFile;
		this.debugger = debugger;
		this.nodeInstallPath = nodeInstallPath;
		this.mode = mode;
	}

	public AbstractNodejsCliFileLauncher(ILaunchConfiguration configuration, String mode)
			throws CoreException, NodejsCliFileConfigException {
		this(getConfigFile(configuration), getCliFile(configuration), getDebugger(configuration),
				getNodeInstallPath(configuration), mode);
	}

	private static IFile getConfigFile(ILaunchConfiguration configuration)
			throws NodejsCliFileConfigException, CoreException {
		String param = configuration.getAttribute(IExternalToolConstants.ATTR_LOCATION, (String) null);
		return NodejsCliFileHelper.getConfigFile(param);
	}

	private static IFile getCliFile(ILaunchConfiguration configuration)
			throws NodejsCliFileConfigException, CoreException {
		String param = configuration.getAttribute(INodejsCliFileLaunchConfigurationConstants.ATTR_CLI_FILE,
				(String) null);
		return NodejsCliFileHelper.getCliFile(param);
	}

	private static File getNodeInstallPath(ILaunchConfiguration configuration)
			throws NodejsCliFileConfigException, CoreException {
		String nodeInstall = configuration.getAttribute(INodejsCliFileLaunchConfigurationConstants.ATTR_NODE_INSTALL,
				(String) null);
		String nodePath = configuration.getAttribute(INodejsCliFileLaunchConfigurationConstants.ATTR_NODE_INSTALL,
				(String) null);
		return NodejsCliFileHelper.getNodeInstallPath(nodeInstall, nodePath);
	}

	private static INodejsDebugger getDebugger(ILaunchConfiguration configuration)
			throws CoreException, NodejsCliFileConfigException {
		String debuggerId = configuration.getAttribute(INodejsCliFileLaunchConfigurationConstants.ATTR_DEBUGGER,
				(String) null);
		return NodejsCliFileHelper.getDebugger(debuggerId);
	}

	public void start() throws TernException {
		INodejsProcess process = debugger.createProcess(cliFile, configFile.getProject(), nodeInstallPath);
		process.setLaunchConfiguration(this);
		process.start();
	}

	@Override
	public List<String> createNodeArgs() {
		List<String> args = new ArrayList<String>();
		// here we need to generate file system path because Webclispe cannot
		// support
		// program args like ${workspace_loc:\test-protractor\spec.js}
		args.add(configFile.getLocation().toOSString());
		// Uncomment that once Webclipse can support it.
		// args.add(VariableHelper.getWorkspaceLoc(protractorConfigFile));
		return args;
	}

	@Override
	public String getLaunchMode() {
		return mode;
	}

	@Override
	public boolean isSaveLaunch() {
		return false;
	}

	@Override
	public boolean isWaitOnPort() {
		return false;
	}

	public IFile getConfigFile() {
		return configFile;
	}
}

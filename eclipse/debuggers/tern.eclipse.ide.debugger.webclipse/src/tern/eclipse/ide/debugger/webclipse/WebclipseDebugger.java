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

import org.eclipse.core.resources.IFile;

import tern.TernException;
import tern.eclipse.ide.server.nodejs.core.debugger.AbstractNodejsDebuggerDelegate;
import tern.server.nodejs.process.INodejsProcess;

/**
 * Webclipse debugger delegate implementation.
 */
public class WebclipseDebugger extends AbstractNodejsDebuggerDelegate {

	private static final String LAUNCH_CONFIG_ID = "com.genuitec.eclipse.javascript.debug.core.jsStandaloneAppLaunchConfigurationType"; //$NON-NLS-1$

	public WebclipseDebugger() {
		super(LAUNCH_CONFIG_ID, true);
	}

	@Override
	public INodejsProcess createProcess(IFile jsFile, File workingDir, File nodejsInstallPath)
			throws TernException {
		return new WebclipseNodejsDebugProcess(jsFile, workingDir, nodejsInstallPath, getLaunchId());
	}

}

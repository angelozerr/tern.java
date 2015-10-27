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
import org.eclipse.debug.core.DebugPlugin;

import tern.TernException;
import tern.eclipse.ide.server.nodejs.core.debugger.INodejsDebuggerDelegate;
import tern.server.nodejs.process.INodejsProcess;

public class WebclipseDebugger implements INodejsDebuggerDelegate {

	static final String LAUNCH_CONFIG_ID = "com.genuitec.eclipse.javascript.debug.core.jsStandaloneAppLaunchConfigurationType"; //$NON-NLS-1$

	@Override
	public boolean isInstalled() {
		return DebugPlugin.getDefault().getLaunchManager()
				.getLaunchConfigurationType(LAUNCH_CONFIG_ID) != null;
	}

	@Override
	public INodejsProcess createProcess(File projectDir, File nodejsBaseDir,
			IFile ternServerFile) throws TernException {
		return new WebclipseNodejsDebugProcess(nodejsBaseDir, ternServerFile,
				projectDir);
	}

}

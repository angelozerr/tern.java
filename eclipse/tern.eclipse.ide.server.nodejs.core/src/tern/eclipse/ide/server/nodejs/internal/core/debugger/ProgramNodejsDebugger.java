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

import org.eclipse.core.resources.IFile;

import tern.TernException;
import tern.eclipse.ide.server.nodejs.core.debugger.AbstractNodejsDebuggerDelegate;
import tern.server.nodejs.process.INodejsProcess;

/**
 * Program debugger delegate implementation.
 */
public class ProgramNodejsDebugger extends AbstractNodejsDebuggerDelegate {

	private static final String LAUNCH_CONFIG_ID = "org.eclipse.ui.externaltools.ProgramLaunchConfigurationType"; //$NON-NLS-1$

	public ProgramNodejsDebugger() {
		super(LAUNCH_CONFIG_ID, false);
	}

	@Override
	public INodejsProcess createProcess(IFile jsFile, File workingDir, File nodejsInstallPath)
			throws TernException {
		return new ProgramNodejsDebugProcess(jsFile, workingDir, nodejsInstallPath, getLaunchId());
	}
}

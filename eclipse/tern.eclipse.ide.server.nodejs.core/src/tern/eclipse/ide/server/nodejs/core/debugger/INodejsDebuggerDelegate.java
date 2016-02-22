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
package tern.eclipse.ide.server.nodejs.core.debugger;

import java.io.File;

import org.eclipse.core.resources.IFile;

import tern.TernException;
import tern.server.nodejs.process.INodejsProcess;

/**
 * Node.js debugger API to run/debug node application (ex : run/debug tern,
 * protractor, etc).
 *
 */
public interface INodejsDebuggerDelegate {

	/**
	 * Returns true if the node debugger can support "run/debug" and false if it
	 * supports only "run".
	 * 
	 * @return true if the node debugger can support "run/debug" and false if it
	 *         supports only "run".
	 */
	boolean canSupportDebug();

	/**
	 * Returns true if the debugger is installed and false otherwise.
	 * 
	 * @return true if the debugger is installed and false otherwise.
	 */
	boolean isInstalled();

	/**
	 * Create a node.js process which will start the given jsFile in the given
	 * working directory by using the given node install.
	 * 
	 * @param jsFile
	 *            JavaScript file to run/debug.
	 * @param workingDir
	 *            the working directory to use to start the node process.
	 * @param nodejsInstallPath
	 *            the node install path.
	 * @return a node.js process which will start the given jsFile in the given
	 *         working directory by using the given node install.
	 * @throws TernException
	 */
	INodejsProcess createProcess(IFile jsFile, File workingDir, File nodejsInstallPath) throws TernException;

}

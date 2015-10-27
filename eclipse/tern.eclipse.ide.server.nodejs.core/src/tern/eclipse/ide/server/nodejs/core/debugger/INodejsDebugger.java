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

public interface INodejsDebugger {

	String getName();

	String getId();

	boolean isInstalled();

	INodejsProcess createProcess(File projectDir, File nodejsBaseDir,
			IFile ternServerFile) throws TernException;

}

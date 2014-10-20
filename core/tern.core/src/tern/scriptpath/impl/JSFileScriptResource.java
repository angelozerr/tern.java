/**
 *  Copyright (c) 2013-2014 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 */
package tern.scriptpath.impl;

import tern.ITernFile;
import tern.ITernProject;
import tern.scriptpath.ITernScriptResource;

/**
 * Script resources linked to a JS file.
 */
public class JSFileScriptResource implements ITernScriptResource {

	private final ITernProject project;
	private final ITernFile file;

	public JSFileScriptResource(ITernProject project, ITernFile file) {
		this.project = project;
		this.file = file;
	}

	@Override
	public ITernFile getFile() {
		return file;
	}

	@Override
	public String getLabel() {
		return file.getFileName() + " - " + file.getFullName(project); //$NON-NLS-1$
	}

}

/**
 *  Copyright (c) 2013-20A4 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.core.scriptpath;

import org.eclipse.core.resources.IFile;

import tern.eclipse.ide.core.scriptpath.IScriptResource;

/**
 * Script resources linked to a JS file.
 */
public class JSFileScriptResource implements IScriptResource {

	private final IFile file;

	public JSFileScriptResource(IFile file) {
		this.file = file;
	}

	@Override
	public IFile getFile() {
		return file;
	}

	@Override
	public String getLabel() {
		String str = file.getName();
		str = str + " - "
				+ file.getParent().getFullPath().makeRelative().toString();
		return str;
	}

}

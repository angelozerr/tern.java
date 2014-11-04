/**
 *  Copyright (c) 2014 Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.scriptpath.impl;

import tern.ITernFile;
import tern.ITernProject;

public abstract class AbstractTernFileScriptPath extends AbstractTernScriptPath {

	private final ITernFile file;
	
	public AbstractTernFileScriptPath(ITernProject project, ITernFile file, String externalLabel) {
		super(project, ScriptPathsType.FILE, externalLabel);
		this.file = file;
	}

	protected ITernFile getFile() {
		return file;
	}
	
	@Override
	public String getLabel() {
		String fName = file.getFullName(getOwnerProject());
		if (fName.startsWith(ITernFile.PROJECT_PROTOCOL)) {
			fName = fName.substring(ITernFile.PROJECT_PROTOCOL.length() + 1);
		} else if (fName.startsWith(ITernFile.EXTERNAL_PROTOCOL)) {
			fName = fName.substring(ITernFile.EXTERNAL_PROTOCOL.length() + 1);
		} 
		StringBuilder text = new StringBuilder(file.getFileName())
				.append(" - ").append(fName); //$NON-NLS-1$
		if (getExternalLabel() != null) {
			text.append(" (").append(getExternalLabel()).append(")"); //$NON-NLS-1$ //$NON-NLS-2$
		}
		return text.toString();
	}
	
	@Override
	public String getPath() {
		return file.getFullName(getOwnerProject());
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class clazz) {
		if (clazz == ITernFile.class) {
			return file;
		}
		return file.getAdapter(clazz);
	}
	
	@Override
	public int hashCode() {
		return super.hashCode() * 17 + file.hashCode();
	}
	
	@Override
	public boolean equals(Object obj) {
		if (obj instanceof AbstractTernFileScriptPath) {
			return super.equals(obj) &&
					file.equals(((AbstractTernFileScriptPath) obj).file);
		}
		return false;
	}

}

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

import tern.ITernProject;
import tern.scriptpath.ITernScriptPath;
import tern.utils.StringUtils;

/**
 * Base class for {@link ITernScriptPath}
 * 
 */
public abstract class AbstractTernScriptPath implements ITernScriptPath {

	private final ITernProject project;
	private final ScriptPathsType type;
	private final boolean external;
	private final String externalLabel;

	public AbstractTernScriptPath(ITernProject project, ScriptPathsType type,
			String externalLabel) {
		this.project = project;
		this.type = type;
		this.external = !StringUtils.isEmpty(externalLabel);
		this.externalLabel = externalLabel;
	}

	@Override
	public ITernProject getOwnerProject() {
		return project;
	}

	@Override
	public ScriptPathsType getType() {
		return type;
	}

	@Override
	public boolean isExternal() {
		return external;
	}

	@Override
	public String getExternalLabel() {
		return externalLabel;
	}

}

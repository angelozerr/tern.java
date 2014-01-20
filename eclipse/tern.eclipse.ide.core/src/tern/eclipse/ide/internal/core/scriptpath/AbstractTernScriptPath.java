/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.eclipse.ide.internal.core.scriptpath;

import org.eclipse.core.resources.IResource;

import tern.eclipse.ide.core.scriptpath.ITernScriptPath;

/**
 * Base class for {@link ITernScriptPath}
 * 
 */
public abstract class AbstractTernScriptPath implements ITernScriptPath {

	private final IResource resource;
	private final ScriptPathsType type;

	public AbstractTernScriptPath(IResource resource, ScriptPathsType type) {
		this.resource = resource;
		this.type = type;
	}

	@Override
	public IResource getResource() {
		return resource;
	}

	@Override
	public String getPath() {
		return getResource().getProjectRelativePath().toString();
	}

	@Override
	public ScriptPathsType getType() {
		return type;
	}
}

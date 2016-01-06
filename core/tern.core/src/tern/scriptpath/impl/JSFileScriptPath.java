/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
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

import java.util.Collections;
import java.util.List;

import tern.ITernFile;
import tern.ITernProject;
import tern.scriptpath.ITernScriptResource;

/**
 * HTML/JSP page script path. This script path implementation gives the
 * capability to select an js file with "Add File" in the Tern "Script Path"
 * property page project.
 * 
 */
public class JSFileScriptPath extends AbstractTernFileScriptPath {

	private final List<ITernScriptResource> resources;

	public JSFileScriptPath(ITernProject project, ITernFile file, String external) {
		super(project, file, external);
		this.resources = Collections.<ITernScriptResource>singletonList(
				new JSFileScriptResource(project, file));
	}

	@Override
	public List<ITernScriptResource> getScriptResources() {
		return resources;
	}
	
}

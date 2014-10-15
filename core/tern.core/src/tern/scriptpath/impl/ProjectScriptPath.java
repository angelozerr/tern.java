/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.scriptpath.impl;

import java.util.ArrayList;
import java.util.List;

import tern.ITernProject;
import tern.scriptpath.ITernScriptResource;
import tern.scriptpath.ITernScriptPath;

/**
 * Project script path. This script path implementation gives the capability to
 * select a project with "Add Project" in the Tern "Script Path" property page
 * project and retrieve list of JS files which are hosted in this ide tern
 * project.
 * 
 */
public class ProjectScriptPath extends AbstractTernScriptPath {

	private final ITernProject project;
	private final List<ITernScriptResource> scripts;

	public ProjectScriptPath(ITernProject project, ITernProject ownerProject,
			String external) {
		super(ownerProject, ScriptPathsType.PROJECT, external);
		this.project = project;
		this.scripts = new ArrayList<ITernScriptResource>();
	}

	public ITernProject getProject() {
		return project;
	}
	
	@Override
	public String getLabel() {
		if (getExternalLabel() != null) {
			return new StringBuilder(project.getName()).append(" (") //$NON-NLS-1$
					.append(getExternalLabel()).append(")").toString(); //$NON-NLS-1$
		}
		return project.getName();
	}

	@Override
	public String getPath() {
		return project.getName();
	}

	@Override
	public List<ITernScriptResource> getScriptResources() {
		this.scripts.clear();
		for (ITernScriptPath scriptPath : project.getScriptPaths()) {
			if (scriptPath.getType() != ScriptPathsType.PROJECT ||
					!scriptPath.getOwnerProject().equals(project)) {
				this.scripts.addAll(scriptPath.getScriptResources());
			}
		}
		return scripts;
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class clazz) {
		return project.getAdapter(clazz);
	}

}

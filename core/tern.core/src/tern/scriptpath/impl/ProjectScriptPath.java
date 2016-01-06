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
public class ProjectScriptPath extends ContainerTernScriptPath {

	private final ITernProject project;
	private final List<ITernScriptResource> scripts;

	public ProjectScriptPath(ITernProject project, ITernProject ownerProject,
			String[] inclusionPatterns, String[] exclusionPatterns,
			String external) {
		super(ownerProject, ScriptPathsType.PROJECT, inclusionPatterns,
				exclusionPatterns, external);
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
		collect(scripts);
		return scripts;
	}

	protected void collect(List<ITernScriptResource> scripts) {
		for (ITernScriptPath scriptPath : project.getScriptPaths()) {
			if (scriptPath.getType() != ScriptPathsType.PROJECT
					&& !scriptPath.getOwnerProject().equals(project)) {
				this.scripts.addAll(scriptPath.getScriptResources());
			}
		}
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class clazz) {
		return project.getAdapter(clazz);
	}

	@Override
	public int hashCode() {
		return super.hashCode() * 17 + project.hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		if (obj instanceof ProjectScriptPath) {
			return super.equals(obj)
					&& project.equals(((ProjectScriptPath) obj).project);
		}
		return false;
	}

}

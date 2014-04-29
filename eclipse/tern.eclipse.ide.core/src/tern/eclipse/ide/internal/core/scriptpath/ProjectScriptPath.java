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
package tern.eclipse.ide.internal.core.scriptpath;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;

import tern.TernFileManager;
import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.core.scriptpath.IScriptResource;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath;
import tern.eclipse.ide.internal.core.Trace;
import tern.server.protocol.TernDoc;

import com.eclipsesource.json.JsonArray;

/**
 * Project script path. This script path implementation gives the capability to
 * select a project with "Add Project" in the Tern "Script Path" property page
 * project and retrieve list of JS files which are hosted in this ide tern
 * project.
 * 
 */
public class ProjectScriptPath extends AbstractTernScriptPath {

	private final IProject ownerProject;
	private final Collection<IScriptResource> scripts;

	public ProjectScriptPath(IProject project, IProject ownerProject) {
		super(project, ScriptPathsType.PROJECT);
		this.ownerProject = ownerProject;
		this.scripts = new ArrayList<IScriptResource>();
	}

	@Override
	public IProject getOwnerProject() {
		return ownerProject;
	}

	@Override
	public String getPath() {
		return ((IProject) getResource()).getName();
	}

	@Override
	public Collection<IScriptResource> getScriptResources() {
		this.scripts.clear();
		IProject project = (IProject) getResource();
		try {
			IDETernProject ternProject = IDETernProject.getTernProject(project);
			Collection<ITernScriptPath> scriptPaths = ternProject
					.getScriptPaths();
			for (ITernScriptPath scriptPath : scriptPaths) {
				this.scripts.addAll(scriptPath.getScriptResources());
			}
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE,
					"Error while retrieving script resources from the project script path "
							+ project.getName(), e);
		}
		return scripts;
	}

	@Override
	public void updateFiles(TernFileManager ternFileManager, TernDoc doc,
			JsonArray names) throws IOException {

		IProject project = (IProject) getResource();
		try {
			IDETernProject ternProject = IDETernProject.getTernProject(project);
			Collection<ITernScriptPath> scriptPaths = ternProject
					.getScriptPaths();
			for (ITernScriptPath scriptPath : scriptPaths) {
				scriptPath.updateFiles(ternFileManager, doc, names);
			}
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE,
					"Error while updating files script resources from the project script path "
							+ project.getName(), e);
		}
	}

}

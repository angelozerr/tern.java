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
package tern.eclipse.ide.internal.core.scriptpath;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceVisitor;
import org.eclipse.core.runtime.CoreException;

import tern.ITernFile;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.eclipse.ide.internal.core.Trace;
import tern.scriptpath.ITernScriptResource;
import tern.scriptpath.impl.AbstractTernScriptPath;
import tern.scriptpath.impl.JSFileScriptResource;

/**
 * Folder script path. This script path implementation gives the capability to
 * select a folder with "Add Folder" in the Tern "Script Path" property page
 * project and retrieve list of JS files which are hosted in this folder and
 * their subfolders.
 * 
 */
public class FolderScriptPath extends AbstractTernScriptPath {

	private IContainer container;
	
	public FolderScriptPath(ITernProject project, IContainer container, String external) {
		super(project, ScriptPathsType.FOLDER, external);
		this.container = container;
	}

	@Override
	public List<ITernScriptResource> getScriptResources() {
		ScriptResourceVisitor visitor = new ScriptResourceVisitor();
		try {
			container.accept(visitor);
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE,
					"Error while retrieving script resources from the folder script path "
							+ container.getName(), e);
		}
		return visitor.resources;
	}
	
	public String getLabel() {
		StringBuilder text = new StringBuilder(container.getName()).append(" - ").append( //$NON-NLS-1$
				container.getFullPath().makeRelative().toString());
		if (getExternalLabel() != null) {
			text.append(" (").append(getExternalLabel()).append(")"); //$NON-NLS-1$ //$NON-NLS-2$
		}
		return text.toString();
	};

	@Override
	public String getPath() {
		return container.getProjectRelativePath().toString();
	}
	
	private class ScriptResourceVisitor implements IResourceVisitor{
		
		public List<ITernScriptResource> resources = new ArrayList<ITernScriptResource>();

		@Override
		public boolean visit(IResource resource) throws CoreException {
			switch (resource.getType()) {
				case IResource.PROJECT:
				case IResource.FOLDER:
					return true;
				case IResource.FILE:
					if (TernResourcesManager.isJSFile(resource)) {
						ITernFile file = TernResourcesManager.getTernFile(resource);
						if (file != null) {
							resources.add(new JSFileScriptResource(getOwnerProject(), file));
						}
					}
			}
			return false;
		}
		
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class clazz) {
		if (clazz == IContainer.class || clazz == IResource.class || clazz == IFolder.class) {
			return container;
		}
		if (clazz == IProject.class && container instanceof IProject) {
			return container;
		}
		return null;
	}
}

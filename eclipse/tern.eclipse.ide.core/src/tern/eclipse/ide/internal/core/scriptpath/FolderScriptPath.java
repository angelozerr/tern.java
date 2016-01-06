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
package tern.eclipse.ide.internal.core.scriptpath;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;

import tern.ITernProject;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.IIDETernScriptPathReporter;
import tern.eclipse.ide.core.utils.PathUtils;
import tern.eclipse.ide.internal.core.Trace;
import tern.scriptpath.ITernScriptResource;
import tern.scriptpath.impl.ContainerTernScriptPath;

/**
 * Folder script path. This script path implementation gives the capability to
 * select a folder with "Add Folder" in the Tern "Script Path" property page
 * project and retrieve list of JS files which are hosted in this folder and
 * their subfolders.
 * 
 */
public class FolderScriptPath extends ContainerTernScriptPath implements IIDETernScriptPath {

	private final IContainer container;
	private final IIDETernScriptPathReporter reporter;

	public FolderScriptPath(ITernProject project, IContainer container, String[] inclusionPatterns,
			String[] exclusionPatterns, String external) {
		super(project, ScriptPathsType.FOLDER, inclusionPatterns, exclusionPatterns, external);
		this.container = container;
		this.reporter = ((IIDETernProject) project).getScriptPathReporter();
	}

	@Override
	public List<ITernScriptResource> getScriptResources() {
		List<ITernScriptResource> resources = new ArrayList<ITernScriptResource>();
		ScriptResourceProxyVisitor visitor = new ScriptResourceProxyVisitor(this, resources, reporter);
		try {
			if (container.exists()) {
				container.accept(visitor, IResource.NONE);
			}
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE,
					"Error while retrieving script resources from the folder script path " + container.getName(), e);
		}
		return resources;
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

	@Override
	public int hashCode() {
		return super.hashCode() * 17 + container.hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		if (obj instanceof FolderScriptPath) {
			return super.equals(obj) && container.equals(((FolderScriptPath) obj).container);
		}
		return false;
	}

	@Override
	public boolean isBelongToContainer(IPath path) {
		IPath folderPath = getFullPath();
		return PathUtils.isBelongToContainer(path, folderPath);
	}

	@Override
	public boolean isInScope(IPath path, int resourceType) {
		IPath folderPath = getFullPath();
		IPath relativePath = PathUtils.getRelativePath(path, folderPath, resourceType);
		return isInScope(relativePath, EclipsePathAdapter.INSTANCE);
	}

	public IPath getFullPath() {
		return container.getFullPath();
	}
}

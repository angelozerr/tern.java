/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.core.scriptpath;

import java.util.List;

import org.eclipse.core.resources.IContainer;
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
import tern.scriptpath.impl.ProjectScriptPath;

/**
 * Extends {@link ProjectScriptPath} to collect files from Eclipse
 * {@link IProject}.
 *
 */
public class EclipseProjectScriptPath extends ProjectScriptPath implements IIDETernScriptPath {

	private final IIDETernScriptPathReporter reporter;

	public EclipseProjectScriptPath(ITernProject project, ITernProject ownerProject, String[] inclusionPatterns,
			String[] exclusionPatterns, String external) {
		super(project, ownerProject, inclusionPatterns, exclusionPatterns, external);
		this.reporter = ((IIDETernProject) project).getScriptPathReporter();
	}

	@Override
	protected void collect(List<ITernScriptResource> scripts) {
		// collect files from references project
		super.collect(scripts);
		// collect files from the project
		IContainer container = ((IIDETernProject) super.getProject()).getProject();
		ScriptResourceProxyVisitor visitor = new ScriptResourceProxyVisitor(this, scripts, reporter);
		try {
			if (container.exists()) {
				container.accept(visitor, IResource.NONE);
			}
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE,
					"Error while retrieving script resources from the project script path " + container.getName(), e);
		}
	}

	@Override
	public boolean isBelongToContainer(IPath path) {
		IProject project = ((IIDETernProject) getOwnerProject()).getProject();
		IPath projectPath = project.getFullPath();
		return PathUtils.isBelongToContainer(path, projectPath);
	}

	@Override
	public boolean isInScope(IPath path, int resourceType) {
		IProject project = ((IIDETernProject) getOwnerProject()).getProject();
		IPath projectPath = project.getFullPath();
		IPath relativePath = PathUtils.getRelativePath(path, projectPath, resourceType);
		return isInScope(relativePath, EclipsePathAdapter.INSTANCE);
	}

}

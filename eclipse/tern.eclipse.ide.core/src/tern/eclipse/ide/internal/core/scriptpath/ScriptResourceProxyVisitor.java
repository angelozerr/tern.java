/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
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

import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceProxy;
import org.eclipse.core.resources.IResourceProxyVisitor;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;

import tern.ITernFile;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.eclipse.ide.core.IIDETernScriptPathReporter;
import tern.scriptpath.ITernScriptPath;
import tern.scriptpath.ITernScriptPath.ScriptPathsType;
import tern.scriptpath.ITernScriptResource;
import tern.scriptpath.impl.JSFileScriptResource;

/**
 * {@link IResourceProxyVisitor} implementation to collect JavaScript files for
 * the tern scope.
 *
 */
public class ScriptResourceProxyVisitor implements IResourceProxyVisitor {

	private final IIDETernScriptPath scriptPath;
	private final IIDETernScriptPathReporter reporter;
	private final List<ITernScriptResource> resources;
	private final boolean isAlsoProject;

	public ScriptResourceProxyVisitor(IIDETernScriptPath scriptPath, List<ITernScriptResource> resources,
			IIDETernScriptPathReporter reporter) {
		this.scriptPath = scriptPath;
		this.resources = resources;
		this.reporter = reporter;
		this.isAlsoProject = scriptPath.getType() == ScriptPathsType.PROJECT;
	}

	@Override
	public boolean visit(IResourceProxy proxy) throws CoreException {
		if (proxy.isDerived())
			return false;
		int resourceType = proxy.getType();
		switch (resourceType) {
		case IResource.PROJECT:
			return true;
		case IResource.FOLDER:
			IPath folderPath = proxy.requestFullPath();
			if (isAlsoProject) {
				if (isExcludedFromProject(folderPath, scriptPath.getOwnerProject())) {
					if (reporter != null) {
						reporter.report(folderPath, scriptPath,
								"Exclude folder (from project) because a tern script folder path already include it.", false);
					}
					return false;
				}
			}
			/*
			 * if (!scriptPath.hasInclusionPatterns()) { return true; }
			 */
			return isInScope(folderPath, resourceType);
		case IResource.FILE:
			String filename = proxy.getName();
			if (TernResourcesManager.isJSFile(filename)) {
				IPath path = proxy.requestFullPath();
				if (isInScope(path, resourceType)) {
					IResource resource = proxy.requestResource();
					ITernFile file = TernResourcesManager.getTernFile(resource);
					resources.add(new JSFileScriptResource(scriptPath.getOwnerProject(), file));
				}
			}
		}
		return false;
	}

	protected boolean isInScope(IPath path, int resourceType) {
		boolean include = scriptPath.isInScope(path, resourceType);
		if (reporter != null) {
			if (include) {
				reporter.report(path, scriptPath, null, true);
			} else {
				reporter.report(path, scriptPath, null, false);
			}
		}
		return include;
	}

	private boolean isExcludedFromProject(IPath folderPath, ITernProject ownerProject) {
		// answer whether the folder should be ignored when walking the project
		// as a source folder
		// if (childPath.segmentCount() > 2) return false; // is a subfolder of
		// a package

		for (ITernScriptPath scriptPath : ownerProject.getScriptPaths()) {
			if (scriptPath.getType() == ScriptPathsType.FOLDER) {
				if (folderPath.equals(((FolderScriptPath) scriptPath).getFullPath()))
					return true;
			}
		}
		return false;
	}

}

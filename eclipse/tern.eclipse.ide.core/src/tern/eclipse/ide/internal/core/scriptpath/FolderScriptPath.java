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

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceVisitor;
import org.eclipse.core.runtime.CoreException;

import tern.TernFileManager;
import tern.eclipse.ide.core.scriptpath.IScriptResource;
import tern.eclipse.ide.core.utils.FileUtils;
import tern.server.protocol.TernDoc;

/**
 * Folder script path. This script path implementation gives the capability to
 * select a folder with "Add Folder" of the Tern "Script Path" property page
 * project and retrieve list of JS files which are hosted in this folder and
 * their subfolders.
 * 
 */
public class FolderScriptPath extends AbstractTernScriptPath {

	private final Collection<IScriptResource> scripts;

	private IResourceVisitor scriptResourcesVisitor;

	public FolderScriptPath(IFolder resource) {
		super(resource, ScriptPathsType.FOLDER);
		this.scripts = new ArrayList<IScriptResource>();
	}

	@Override
	public Collection<IScriptResource> getScriptResources() {
		this.scripts.clear();
		IContainer container = (IContainer) getResource();
		try {
			container.accept(getScriptResourcesVisitor());
		} catch (CoreException e) {
			e.printStackTrace();
		}
		return scripts;
	}

	@Override
	public void updateFiles(TernFileManager ternFileManager, TernDoc doc,
			List names) throws IOException {
		IContainer container = (IContainer) getResource();
		try {
			container
					.accept(newUpdateFilesVisitor(ternFileManager, doc, names));
		} catch (CoreException e) {
			e.printStackTrace();
		}
	}

	public IResourceVisitor getScriptResourcesVisitor() {
		if (scriptResourcesVisitor == null) {
			scriptResourcesVisitor = new IResourceVisitor() {

				@Override
				public boolean visit(IResource resource) throws CoreException {
					switch (resource.getType()) {
					case IResource.FILE:
						IFile file = (IFile) resource;
						if (FileUtils.isJSFile(file)) {
							FolderScriptPath.this.scripts
									.add(new JSFileScriptResource(file));
							return true;
						}
						return false;
					case IResource.PROJECT:
					case IResource.FOLDER:
						return true;
					default:
						return false;
					}
				}
			};
		}
		return scriptResourcesVisitor;
	}

	public IResourceVisitor newUpdateFilesVisitor(
			final TernFileManager ternFileManager, final TernDoc doc,
			final List names) {
		return new IResourceVisitor() {
			@Override
			public boolean visit(IResource resource) throws CoreException {
				switch (resource.getType()) {
				case IResource.FILE:
					IFile file = (IFile) resource;
					if (FileUtils.isJSFile(file)) {
						try {
							ternFileManager.updateFile(file, doc, names);
						} catch (IOException e) {
							e.printStackTrace();
						}
						return true;
					}
					return false;
				case IResource.PROJECT:
				case IResource.FOLDER:
					return true;
				default:
					return false;
				}
			}
		};
	}
}

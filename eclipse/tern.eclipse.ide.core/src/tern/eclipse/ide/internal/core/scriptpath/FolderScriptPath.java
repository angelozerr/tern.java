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
import tern.eclipse.ide.internal.core.Trace;
import tern.server.protocol.TernDoc;

import com.eclipsesource.json.JsonArray;

/**
 * Folder script path. This script path implementation gives the capability to
 * select a folder with "Add Folder" in the Tern "Script Path" property page
 * project and retrieve list of JS files which are hosted in this folder and
 * their subfolders.
 * 
 */
public class FolderScriptPath extends AbstractTernScriptPath {

	private final Collection<IScriptResource> scripts;

	private IResourceVisitor scriptResourcesVisitor;

	public FolderScriptPath(IFolder folder) {
		super(folder, ScriptPathsType.FOLDER);
		this.scripts = new ArrayList<IScriptResource>();
	}

	@Override
	public Collection<IScriptResource> getScriptResources() {
		this.scripts.clear();
		IFolder folder = (IFolder) getResource();
		try {
			folder.accept(getScriptResourcesVisitor());
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE,
					"Error while retrieving script resources from the folder script path "
							+ folder.getName(), e);
		}
		return scripts;
	}

	@Override
	public void updateFiles(TernFileManager ternFileManager, TernDoc doc,
			JsonArray names) throws IOException {
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
			final JsonArray names) {
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

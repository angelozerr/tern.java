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
package tern.eclipse.ide.core;

import java.io.IOException;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceChangeEvent;
import org.eclipse.core.resources.IResourceChangeListener;
import org.eclipse.core.resources.IResourceDelta;
import org.eclipse.core.resources.IResourceDeltaVisitor;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.Path;
import org.eclipse.jface.text.IDocument;

import tern.TernFileManager;
import tern.eclipse.ide.core.utils.FileUtils;
import tern.eclipse.ide.internal.core.IDETernProject;
import tern.eclipse.ide.internal.core.TernFileConfigurationManager;
import tern.eclipse.ide.internal.core.Trace;
import tern.server.protocol.html.ScriptTagRegion;
import tern.utils.IOUtils;

/**
 * Extension of {@link TernFileManager} to works with Eclipse {@link IFile}
 * 
 */
public class IDETernFileManager extends TernFileManager<IFile> implements
		IResourceChangeListener, IResourceDeltaVisitor {

	private final IProject project;

	/**
	 * Constructor of file manager with the owner Eclipse project.
	 */
	public IDETernFileManager(IProject project) {
		this.project = project;
		ResourcesPlugin.getWorkspace().addResourceChangeListener(this);
	}

	/**
	 * Dispose the file manager.
	 */
	public void dispose() {
		super.cleanIndexedFiles();
		ResourcesPlugin.getWorkspace().removeResourceChangeListener(this);
	}

	@Override
	public String getFileName(IFile file) {
		String fileName = file.getProjectRelativePath().toString();
		if (!isBelongToLocalProject(file)) {
			// the given file is hosted in an external tern project,
			return getFileName(file.getProject().getName(), fileName);
		}
		return fileName;
	}

	/**
	 * Returns true if the given file belong to the local tern project and false
	 * otherwise.
	 * 
	 * @param file
	 * @return
	 */
	private boolean isBelongToLocalProject(IFile file) {
		return file.getProject().getName().equals(this.project.getName());
	}

	@Override
	public String getFileContent(IFile file) throws IOException {
		try {
			return IOUtils.toString(file.getContents(), file.getCharset());
		} catch (CoreException e) {
			throw new IOException(e);
		}
	}

	@Override
	public IFile getRelativeFile(IFile file, String path) {
		IContainer parent = file.getParent();
		IFile relativeFile = getRelativeFile(path, parent);
		if (relativeFile != null && relativeFile.exists()) {
			return relativeFile;
		}
		return null;
	}

	/**
	 * Returns the relative file and null if the given path is not valid.
	 * 
	 * @param path
	 * @param parent
	 * @return
	 */
	private IFile getRelativeFile(String path, IContainer parent) {
		try {
			return parent.getFile(new Path(path));
		} catch (Throwable e) {
			return null;
		}
	}

	@Override
	protected IFile getFile(String projectName, String path) {
		if (projectName == null) {
			// project name is null, return file from the local tern project.
			return project.getFile(path);
		}
		// project name is defined, return file from the external tern project.
		IProject project = ResourcesPlugin.getWorkspace().getRoot()
				.getProject(projectName);
		if (project != null) {
			return project.getFile(path);
		}
		return null;
	}

	void removeIndexedFile(IFile file) {
		super.removeIndexedFile(getFileName(file));
	}

	@Override
	public void resourceChanged(IResourceChangeEvent event) {
		try {
			IResourceDelta delta = event.getDelta();
			if (delta != null) {
				delta.accept(this);
			}
		} catch (Throwable e) {
			Trace.trace(Trace.SEVERE, "", e);
		}
	}

	@Override
	public boolean visit(IResourceDelta delta) throws CoreException {
		IResource resource = delta.getResource();
		if (resource == null) {
			return false;
		}
		switch (resource.getType()) {
		case IResource.ROOT:
		case IResource.FOLDER:
			return true;
		case IResource.PROJECT:
			if (resource instanceof IProject) {
				IProject project = (IProject) resource;
				if (!(project.isAccessible())) {
					return false;
				}
				if (!IDETernProject.hasTernNature(project)) {
					return false;
				}
				return true;
			}
		case IResource.FILE:
			// TODO check content type
			removeIndexedFile((IFile) resource);
			return true;
		}
		return false;
	}

	@Override
	public ScriptTagRegion[] getScriptTags(IFile file) {
		if (FileUtils.isHTMLFile(file)) {
			return TernFileConfigurationManager.getManager().getScriptTags(file);
		}
		return null;
	}

}

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

import tern.TernFileManager;
import tern.eclipse.ide.internal.core.Trace;
import tern.utils.IOUtils;

/**
 * Extension of {@link TernFileManager} to works with Eclipse {@link IFile}
 * 
 */
public class IDETernFileManager extends TernFileManager<IFile> implements
		IResourceChangeListener, IResourceDeltaVisitor {

	public IDETernFileManager() {
		ResourcesPlugin.getWorkspace().addResourceChangeListener(this);
	}

	public void dispose() {
		super.cleanIndexedFiles();
		ResourcesPlugin.getWorkspace().removeResourceChangeListener(this);
	}

	@Override
	public String getFileName(IFile file) {
		return file.getProjectRelativePath().toString();
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
		IFile relativeFile = parent.getFile(new Path(path));
		if (relativeFile != null && relativeFile.exists()) {
			return relativeFile;
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

}

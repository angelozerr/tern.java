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
package tern.eclipse.ide.internal.core.resources;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;

import tern.ITernFile;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.resources.AbstractTernFile;
import tern.utils.IOUtils;

public class IDETernFile extends AbstractTernFile implements ITernFile {

	private IFile iFile;
	
	public IDETernFile(IFile file) {
		this.iFile = file;
	}
	
	@Override
	public String getFullName(ITernProject project) {
		IProject ip = (IProject) project.getAdapter(IProject.class);
		if (iFile.getProject().equals(ip)) {
			return iFile.getProjectRelativePath().toString();
		}
		return PROJECT_PROTOCOL + iFile.getFullPath().makeRelative().toString();
	}
	
	@Override
	public String getFileName() {
		return iFile.getName();
	}
	
	@Override
	public String getFileExtension() {
		return iFile.getFileExtension();
	}
	
	@Override
	public ITernFile getRelativeFile(String relativePath) {
		IContainer parent = iFile.getParent();
		IFile relativeFile = parent.getFile(new Path(relativePath));
		if (relativeFile != null && relativeFile.exists()) {
			return TernResourcesManager.getTernFile(relativeFile);
		}
		File rf = new File(parent.getLocation().toFile(), relativePath);
		if (rf.isFile()) {
			return TernResourcesManager.getTernFile(rf);
		}
		return null;
	}
	
	@Override
	public String getContents() throws IOException {
		try {
			InputStream input = iFile.getContents();
			try {
				return IOUtils.toString(input, iFile.getCharset());
			} finally {
				input.close();
			}
		} catch (CoreException e) {
			throw new IOException(e);
		}
	}
	
	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class adapterClass) {
		if (adapterClass == IFile.class || adapterClass == IResource.class) {
			return iFile;
		}
		if (adapterClass == File.class) {
			IPath path = iFile.getLocation();
			if (path != null) {
				return path.toFile();
			}
		}
		return null;
	}
	
	@Override
	public String toString() {
		return iFile.getFullPath().toString();
	}

	@Override
	public boolean isAccessible() {
		return iFile.isAccessible();
	}
	
	public IFile getFile() {
		return iFile;
	}
}

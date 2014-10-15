/*
 * Copyright 2014, Genuitec, LLC
 * All Rights Reserved.
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
	
	protected IDETernFile(IFile file) {
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
			//use cache if possible
			return TernResourcesManager.getTernFile(relativeFile);
		}
		File rf = new File(parent.getLocation().toFile(), relativePath);
		if (rf.exists()) {
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
			return iFile.getLocation().toFile();
		}
		return null;
	}
	
	@Override
	public String toString() {
		return iFile.getFullPath().toString();
	}

	public static boolean canCreate(IFile file) {
		IPath path = file.getLocation();
		if (path == null) {
			return false;
		}
		File f = path.toFile();
		if (!f.isFile()) {
			return false;
		}
		return true;
	}
	
	public static IDETernFile create(IFile file) {
		if (canCreate(file)) {
			return new IDETernFile(file);
		}
		return null;
	}
	
}

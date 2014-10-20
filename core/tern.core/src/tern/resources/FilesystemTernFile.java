/**
 *  Copyright (c) 2014 Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.resources;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import tern.ITernFile;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.utils.ExtensionUtils;
import tern.utils.IOUtils;

/**
 * Basic Tern file implementation, which provides wrapper for java.io.File
 */
public class FilesystemTernFile extends AbstractTernFile implements ITernFile {

	private File file;
	private File canonical;
	
	public FilesystemTernFile(File file) {
		this.file = file;
	}
	
	@Override
	public boolean isAccessible() {
		return file.isFile() && file.canRead();
	}

	@Override
	public String getFullName(ITernProject project) {
		if (canonical == null) {
			//get the canonical path of the file
			try {
				canonical = file.getCanonicalFile();
			} catch (IOException ex) {
				//best effort
				canonical = file;
			}
		}
		if (project != null) {
			//check if the file belongs to the project
			try {
				String path = project.getProjectDir().getCanonicalPath().replace('\\', '/');
				if (!path.endsWith("/")) { //$NON-NLS-1$
					path += "/"; //$NON-NLS-1$
				}
				String fileName = canonical.toString().replace('\\', '/');
				if (fileName.startsWith(path)) {
					return fileName.substring(path.length());
				}
			} catch (Exception ex) {
				//ignore
			}
		}
		//if it doesn't, use the external protocol
		return EXTERNAL_PROTOCOL + canonical.toString();
	}

	@Override
	public String getFileName() {
		String full = getFullName(null);
		int last = full.lastIndexOf('/');
		if (last >=0 ) {
			return full.substring(last + 1);
		}
		return full;
	}

	@Override
	public String getContents() throws IOException {
		FileInputStream input = new FileInputStream(file);
		try {
			return IOUtils.toString(input);
		} finally {
			input.close();
		}
	}

	@Override
	public ITernFile getRelativeFile(String relativePath) {
		File f = new File(file, relativePath);
		return TernResourcesManager.getTernFile(f);
	}
	
	@Override
	public String getFileExtension() {
		return ExtensionUtils.getFileExtension(getFileName());
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class adapterClass) {
		if (adapterClass == File.class) {
			return file;
		}
		return null;
	}
	
	@Override
	public String toString() {
		return file.toString();
	}

}

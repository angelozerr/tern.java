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
package tern.eclipse.ide.internal.core.resources;

import java.io.File;
import java.io.IOException;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.Path;
import org.eclipse.core.runtime.QualifiedName;

import tern.ITernFileSynchronizer;
import tern.ITernResourcesManagerDelegate;
import tern.ITernFile;
import tern.ITernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.core.Trace;
import tern.resources.FilesystemTernFile;
import tern.utils.ExtensionUtils;

public class IDEResourcesManager implements ITernResourcesManagerDelegate {

	static final QualifiedName TERN_PROJECT = new QualifiedName(
			TernCorePlugin.PLUGIN_ID + ".sessionprops", "TernProject"); //$NON-NLS-1$ //$NON-NLS-2$

	private static IDEResourcesManager instance = new IDEResourcesManager();
	
	private IDEResourcesManager() {
	}
	
	public static IDEResourcesManager getInstance() {
		return instance;
	}

	@Override
	public ITernProject getTernProject(Object obj) {
		if (obj instanceof IProject) {
			IProject project = (IProject) obj;
			try {
				if (!IDETernProject.hasTernNature(project)) {
					return null;
				}
				IDETernProject ternProject = (IDETernProject) project
						.getSessionProperty(TERN_PROJECT);
				if (ternProject == null) {
					ternProject = new IDETernProject(project);
					project.setSessionProperty(TERN_PROJECT, ternProject);
					try {
						ternProject.load();
					} catch (IOException e) {
						Trace.trace(Trace.SEVERE, "Error while loading tern project", e);
					}
				}
				return ternProject;
			} catch (CoreException ex) {
				Trace.trace(Trace.SEVERE, "Error creating " + 
						project.getName() + ": " + ex.getMessage(), ex);
			}
		}
		return null;
	}

	@Override
	public ITernFile getTernFile(ITernProject project, String name) {
		Object file;
		if (name.startsWith(ITernFile.EXTERNAL_PROTOCOL)) {
			file = new File(name.substring(ITernFile.EXTERNAL_PROTOCOL.length() + 1));
		} else if (name.startsWith(ITernFile.PROJECT_PROTOCOL)) {
			file = ResourcesPlugin.getWorkspace().getRoot().getFile(new Path(
					name.substring(ITernFile.PROJECT_PROTOCOL.length() + 1)));
		} else {
			IProject ip = (IProject) project.getAdapter(IProject.class); 
			file = ip.getFile(name);
		}
		return getTernFile(file);
	}

	@Override
	public ITernFile getTernFile(Object fileObject) {
		if (fileObject instanceof File) {
			File file = (File)fileObject;
			//it is possible that this file maps to a file in the workspace
			IFile[] files = ResourcesPlugin.getWorkspace().getRoot().findFilesForLocationURI(file.toURI());
			if (files.length == 0) {
				return new FilesystemTernFile(file);
			}
			//create IDETernFile
			fileObject = files[0];
		}
		if (fileObject instanceof IFile) {
			return new IDETernFile((IFile)fileObject);
		}
		return null;
	}

	@Override
	public ITernFileSynchronizer createTernFileSynchronizer(ITernProject project) {
		return new IDETernFileSynchronizer(project);
	}

	protected String getExtension(Object fileObject) {
		if (fileObject instanceof IFile) {
			return ((IFile)fileObject).getFileExtension();
		} else if (fileObject instanceof ITernFile) {
			return ((ITernFile)fileObject).getFileExtension();
		} else if (fileObject instanceof File) {
			return ExtensionUtils.getFileExtension(((File)fileObject).getName());
		}
		return null;
	}
	
	@Override
	public boolean isHTMLFile(Object fileObject) {
		String ext = getExtension(fileObject);
		return ext != null && ExtensionUtils.HTML_EXTENSIONS.contains(ext.toLowerCase());
	}

	@Override
	public boolean isJSFile(Object fileObject) {
		String ext = getExtension(fileObject);
		return ext != null && ExtensionUtils.JS_EXTENSION.equals(ext.toLowerCase());
	}
}

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
package tern.eclipse.ide.core;

import java.io.IOException;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.QualifiedName;

import tern.TernProject;
import tern.eclipse.ide.internal.core.Trace;
import tern.eclipse.ide.internal.core.preferences.TernCorePreferencesSupport;
import tern.server.ITernServer;

/**
 * Eclipse IDE Tern project.
 * 
 */
public class IDETernProject extends TernProject {

	private static final long serialVersionUID = 1L;

	private static final QualifiedName TERN_PROJECT = new QualifiedName(
			TernCorePlugin.PLUGIN_ID + ".sessionprops", "TernProject");

	private final IProject project;

	private ITernServer ternServer;

	private IDETernFileManager fileManager;

	IDETernProject(IProject project) throws CoreException {
		super(project.getLocation().toFile());
		this.project = project;
		this.fileManager = new IDETernFileManager();
		project.setSessionProperty(TERN_PROJECT, this);
	}

	public static IDETernProject getTernProject(IProject project)
			throws CoreException {
		IDETernProject ternProject = (IDETernProject) project
				.getSessionProperty(TERN_PROJECT);
		if (ternProject == null) {
			ternProject = new IDETernProject(project);
			try {
				ternProject.load();
			} catch (IOException e) {
				Trace.trace(Trace.SEVERE, "Error while loading tern project", e);
			}
		}
		return ternProject;
	}

	public IProject getProject() {
		return project;
	}

	public ITernServer getTernServer() {
		if (ternServer == null || ternServer.isDisposed()) {
			try {
				ITernServerType type = TernCorePreferencesSupport.getInstance()
						.getServerType();
				this.ternServer = type.createServer(this);
			} catch (Exception e) {
				// should be improved?
				Trace.trace(Trace.SEVERE, "Error while creating tern server", e);
			}
			this.fileManager.cleanFiles();
		}
		return ternServer;
	}

	public static boolean hasTernNature(IProject project) {
		try {
			return project.hasNature(TernNature.ID);
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE, "Error tern nature", e);
			return false;
		}
	}

	@Override
	public void save() throws IOException {
		super.save();
		if (ternServer != null) {
			ternServer.dispose();
		}
		this.fileManager.cleanFiles();
	}

	public IDETernFileManager getFileManager() {
		return fileManager;
	}
}

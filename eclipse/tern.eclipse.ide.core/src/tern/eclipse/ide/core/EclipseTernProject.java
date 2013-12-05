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
public class EclipseTernProject extends TernProject {

	private static final QualifiedName TERN_PROJECT = new QualifiedName(
			TernCorePlugin.PLUGIN_ID + ".sessionprops", "TernProject");

	private final IProject project;

	private ITernServer ternServer;

	EclipseTernProject(IProject project) throws CoreException {
		super(project.getLocation().toFile());
		this.project = project;
		project.setSessionProperty(TERN_PROJECT, this);
	}

	public static EclipseTernProject getTernProject(IProject project)
			throws CoreException {
		EclipseTernProject ternProject = (EclipseTernProject) project
				.getSessionProperty(TERN_PROJECT);
		if (ternProject == null) {
			ternProject = new EclipseTernProject(project);
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
				ITernServerConfiguration configuration = TernCorePreferencesSupport
						.getInstance().getServerConfiguration(type);
				this.ternServer = type.createServer(this, configuration);
			} catch (Exception e) {
				// should be improved?
				Trace.trace(Trace.SEVERE, "Error while creating tern server", e);
			}
		}
		return ternServer;
	}

}

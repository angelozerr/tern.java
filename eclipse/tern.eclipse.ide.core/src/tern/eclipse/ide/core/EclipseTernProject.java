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
import tern.server.ITernServer;
import tern.server.nodejs.LoggingInterceptor;
import tern.server.nodejs.NodejsTernServer;
import tern.server.nodejs.process.PrintNodejsProcessListener;

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
		if (ternServer == null) {
			// TODO : manage implementation of tern server (Nodejs, Rhino, etc)
			this.ternServer = new NodejsTernServer(this);
			((NodejsTernServer) ternServer)
					.addInterceptor(new LoggingInterceptor());
			((NodejsTernServer) ternServer)
					.addProcessListener(PrintNodejsProcessListener
							.getInstance());
		}
		return ternServer;
	}
}

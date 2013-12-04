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
import org.eclipse.core.resources.IProjectNature;
import org.eclipse.core.runtime.CoreException;

/**
 * Eclipse Tern nature with ID "tern.eclipse.ide.core.ternature".
 * 
 */
public class TernNature implements IProjectNature {

	public static final String ID = TernCorePlugin.PLUGIN_ID + ".ternnature"; //$NON-NLS-1$

	private IProject project;

	public void configure() throws CoreException {
		// Add nature-specific information
		// for the project, such as adding a builder
		// to a project's build spec.
	}

	public void deconfigure() throws CoreException {
		// Remove the nature-specific information here.
	}

	public IProject getProject() {
		return project;
	}

	public void setProject(IProject value) {
		project = value;
	}

}

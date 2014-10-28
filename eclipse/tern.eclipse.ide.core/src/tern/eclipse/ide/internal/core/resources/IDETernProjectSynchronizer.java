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

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceChangeEvent;
import org.eclipse.core.resources.IResourceChangeListener;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;

import tern.eclipse.ide.internal.core.Trace;

/**
 * Tern project synchronizer used to dispose the tern project when the Eclipse
 * project is removed or closed.
 *
 */
public class IDETernProjectSynchronizer implements IResourceChangeListener {

	private static final IDETernProjectSynchronizer INSTANCE = new IDETernProjectSynchronizer();

	public static IDETernProjectSynchronizer getInstance() {
		return INSTANCE;
	}

	public IDETernProjectSynchronizer() {

	}

	public void initialize() {
		ResourcesPlugin.getWorkspace().addResourceChangeListener(
				this,
				IResourceChangeEvent.PRE_CLOSE
						| IResourceChangeEvent.PRE_DELETE);
	}

	/**
	 * Dispose the file manager.
	 */
	public void dispose() {
		ResourcesPlugin.getWorkspace().removeResourceChangeListener(this);
	}

	@Override
	public void resourceChanged(IResourceChangeEvent event) {
		try {
			IResource resource = event.getResource();
			switch (event.getType()) {
			case IResourceChangeEvent.PRE_DELETE:
				// called when project is deleted.
			case IResourceChangeEvent.PRE_CLOSE:
				// called when project is closed.
				if (resource != null && resource.getType() == IResource.PROJECT) {
					IProject project = (IProject) resource;
					disposeTernProject(project);
				}
				break;
			}
		} catch (Throwable e) {
			Trace.trace(Trace.SEVERE, "", e);
		}
	}

	/**
	 * Dispose the tern project linked to the given project if it is linked to a
	 * tern project.
	 * 
	 * @param project
	 * @throws CoreException
	 */
	private void disposeTernProject(IProject project) throws CoreException {
		IDETernProject ternProject = IDETernProject.getTernProject(project);
		if (ternProject != null) {
			ternProject.dispose();
		}
	}
}

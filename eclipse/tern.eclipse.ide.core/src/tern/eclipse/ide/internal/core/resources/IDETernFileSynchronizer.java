/**
 *  Copyright (c) 2013-2014 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 */
package tern.eclipse.ide.internal.core.resources;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceChangeEvent;
import org.eclipse.core.resources.IResourceChangeListener;
import org.eclipse.core.resources.IResourceDelta;
import org.eclipse.core.resources.IResourceDeltaVisitor;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.jobs.Job;

import tern.ITernFile;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.eclipse.ide.internal.core.Trace;
import tern.resources.TernFileSynchronizer;
import tern.resources.TernProject;

/**
 * Extension of {@link TernFileManager} to works with Eclipse {@link IFile}
 * 
 */
public class IDETernFileSynchronizer extends TernFileSynchronizer implements
		IResourceChangeListener, IResourceDeltaVisitor {

	/**
	 * Constructor of file manager with the owner Eclipse project.
	 */
	public IDETernFileSynchronizer(ITernProject project) {
		super(project);
		ResourcesPlugin.getWorkspace().addResourceChangeListener(this);
	}

	/**
	 * Dispose the file manager.
	 */
	@Override
	public void dispose() {
		super.dispose();
		ResourcesPlugin.getWorkspace().removeResourceChangeListener(this);
	}

	void removeIndexedFile(IFile file) {
		ITernFile tf = TernResourcesManager.getTernFile(file);
		if (tf != null) {
			super.removeIndexedFile(tf.getFullName(getProject()));
		}
	}

	@Override
	public void resourceChanged(IResourceChangeEvent event) {
		try {
			switch (event.getType()) {
			case IResourceChangeEvent.POST_CHANGE:
				IResourceDelta delta = event.getDelta();
				if (delta != null) {
					delta.accept(this);
				}
				break;
			}
		} catch (Throwable e) {
			Trace.trace(Trace.SEVERE, "Error while tern file synchronization",
					e);
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
			IProject project = (IProject) resource;
			// check if the current project is the tern project
			return project.equals(getIDETernProject().getProject());
		case IResource.FILE:
			if (isTernProjectFile(resource)) {
				IDETernProject ternProject = getIDETernProject();
				// refresh tern project outside the resource delta to avoid
				// having problem
				// "org.eclipse.core.internal.resources.ResourceException: The resource tree is locked for modifications"
				// See https://github.com/angelozerr/tern.java/issues/161
				Job configJob = new RefreshTernProjectJob(ternProject);
				configJob.setRule(ternProject.getProject());
				configJob.schedule();
			} else {
				// FIXME : manage delete + move file
				/*
				 * switch (delta.getKind()) { case IResourceDelta.ADDED:
				 * System.err.println("Resource " + resource.getLocation() +
				 * " was added"); break; case IResourceDelta.REMOVED:
				 * System.err.println("Resource " + resource.getLocation() +
				 * " was removed"); break; case IResourceDelta.CHANGED:
				 * System.err.println("Resource " + resource.getLocation() +
				 * " has changed"); break; }
				 */

				removeIndexedFile((IFile) resource);
			}
			return true;
		}
		return false;
	}

	private boolean isTernProjectFile(IResource resource) {
		// check if file name is .tern-project
		if (!TernProject.TERN_PROJECT_FILE.equals(resource.getName())) {
			return false;
		}
		// check if parent of file is a project
		if (resource.getParent() == null
				|| resource.getParent().getType() != IResource.PROJECT) {
			return false;
		}
		return true;
	}

	private boolean isBelongToProject(IResource resource) {
		IProject project = resource.getProject();
		return getIDETernProject().getProject().equals(project);

	}

	private IDETernProject getIDETernProject() {
		return (IDETernProject) getProject();
	}

}

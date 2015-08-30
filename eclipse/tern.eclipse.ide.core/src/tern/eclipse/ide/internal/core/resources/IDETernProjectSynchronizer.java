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
import org.eclipse.core.resources.IResourceDelta;
import org.eclipse.core.resources.IResourceDeltaVisitor;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.jobs.Job;

import tern.eclipse.ide.internal.core.Trace;
import tern.resources.TernProject;

/**
 * Tern project synchronizer used to :
 * 
 * <ul>
 * <li>dispose the tern project when the Eclipse project is removed or closed.</li>
 * <li>synchronize tern file indexes</li>
 * </ul>
 */
public class IDETernProjectSynchronizer implements IResourceChangeListener,
		IResourceDeltaVisitor {

	private static final IDETernProjectSynchronizer INSTANCE = new IDETernProjectSynchronizer();

	public static IDETernProjectSynchronizer getInstance() {
		return INSTANCE;
	}

	public IDETernProjectSynchronizer() {

	}

	public void initialize() {
		ResourcesPlugin.getWorkspace().addResourceChangeListener(this);
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

	@Override
	public boolean visit(IResourceDelta delta) throws CoreException {
		IResource resource = delta.getResource();
		if (resource == null) {
			return false;
		}
		switch (resource.getType()) {
		case IResource.ROOT:
			return true;
		case IResource.PROJECT:
			IProject project = (IProject) resource;
			// if project is created, or removed stop the synchronization
			switch (delta.getKind()) {
			case IResourceDelta.ADDED:
			case IResourceDelta.REMOVED:
				return false;
			}
			// check if the current project has tern nature
			return IDETernProject.hasTernNature(project);
		case IResource.FOLDER:
			return true;
		case IResource.FILE:
			IDETernProject ternProject = IDETernProject.getTernProject(resource
					.getProject());
			if (ternProject == null) {
				// tern project was not loaded, none synchronization is
				// required.
				return false;
			}
			if (isTernProjectFile(resource)) {
				switch (delta.getKind()) {
				case IResourceDelta.CHANGED:
					// refresh tern project outside the resource delta to avoid
					// having problem
					// "org.eclipse.core.internal.resources.ResourceException: The resource tree is locked for modifications"
					// See https://github.com/angelozerr/tern.java/issues/161
					Job configJob = new RefreshTernProjectJob(ternProject);
					
					// We cannot use a project-based rule, because IProject.setDescription() uses a workspace-wide operation,
					// so a workspace-based rule is to be used here
					// See: https://github.com/angelozerr/tern.java/issues/251
//					configJob.setRule(ternProject.getProject());
					configJob.setRule(ternProject.getProject().getWorkspace().getRoot());
					configJob.schedule();
					break;
				case IResourceDelta.REMOVED:
					ternProject.dispose();
					break;
				}
			} else {
				ternProject.getFileSynchronizer().refresh(resource);
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
}

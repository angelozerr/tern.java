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

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceChangeEvent;
import org.eclipse.core.resources.IResourceChangeListener;
import org.eclipse.core.resources.IResourceDelta;
import org.eclipse.core.resources.IResourceDeltaVisitor;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;

import tern.ITernFile;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.eclipse.ide.internal.core.Trace;
import tern.eclipse.ide.internal.core.resources.IDETernProject;
import tern.resources.TernFileSynchronizer;

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
	public void dispose() {
		super.cleanIndexedFiles();
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
			IResourceDelta delta = event.getDelta();
			if (delta != null) {
				delta.accept(this);
			}
		} catch (Throwable e) {
			Trace.trace(Trace.SEVERE, "", e);
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
			if (resource instanceof IProject) {
				IProject project = (IProject) resource;
				if (!(project.isAccessible())) {
					return false;
				}
				if (!IDETernProject.hasTernNature(project)) {
					return false;
				}
				return true;
			}
		case IResource.FILE:
			removeIndexedFile((IFile) resource);
			return true;
		}
		return false;
	}

}

package tern.eclipse.ide.core;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceChangeEvent;
import org.eclipse.core.resources.IResourceChangeListener;
import org.eclipse.core.resources.IResourceDelta;
import org.eclipse.core.resources.IResourceDeltaVisitor;
import org.eclipse.core.runtime.CoreException;

import tern.eclipse.ide.internal.core.Trace;

class IDETernFileChangeListener implements IResourceChangeListener,
		IResourceDeltaVisitor {

	private IDETernFileManager fileManager;

	public IDETernFileChangeListener(IDETernFileManager fileManager) {
		this.fileManager = fileManager;
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
			// TODO check content type
			fileManager.removeIndexedFile((IFile) resource);
			return true;
		}
		return false;
	}

}

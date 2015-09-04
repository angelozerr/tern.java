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
package tern.eclipse.ide.ui.properties;

import java.io.IOException;

import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IAdaptable;
import org.eclipse.ui.dialogs.PropertyPage;

import tern.TernException;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.IWorkingCopy;
import tern.eclipse.ide.core.IWorkingCopyListener;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.Trace;

/**
 * 
 * Base tern property page.
 * 
 */
public abstract class AbstractTernPropertyPage extends PropertyPage {

	private IWorkingCopy workingCopy;

	public IIDETernProject getTernProject() throws CoreException {
		return TernCorePlugin.getTernProject(getResource().getProject());
	}

	protected IResource getResource() {
		IResource resource = null;
		IAdaptable adaptable = getElement();
		if (adaptable instanceof IResource) {
			resource = (IResource) adaptable;
		} else if (adaptable != null) {
			Object o = adaptable.getAdapter(IResource.class);
			if (o instanceof IResource) {
				resource = (IResource) o;
			}
		}
		return resource;
	}

	/**
	 * Returns the working copy of the tern project.
	 * 
	 * @return
	 */
	protected IWorkingCopy getWorkingCopy() {
		if (workingCopy == null) {
			try {
				workingCopy = getTernProject().getWorkingCopy(this);
			} catch (Throwable e) {
				Trace.trace(Trace.SEVERE, "Error while getting working copy", e);
			}
		}
		return workingCopy;
	}

	/**
	 * Save the working copy.
	 * 
	 * @throws CoreException
	 * @throws IOException
	 * @throws TernException
	 */
	private void saveWorkingCopy() throws CoreException, IOException, TernException {
		getWorkingCopy().commit(this);
	}

	@Override
	public final void dispose() {
		super.dispose();
		try {
			if (workingCopy != null) {
				if (this instanceof IWorkingCopyListener) {
					workingCopy.removeWorkingCopyListener((IWorkingCopyListener) this);
				}
				// on close page, clear the working copy.
				workingCopy.clear();
			}
		} catch (Throwable e) {
		}
	}

	@Override
	public final boolean performOk() {
		try {
			doPerformOk();
			saveWorkingCopy();
		} catch (Exception e) {
			Trace.trace(Trace.SEVERE, "Error while saving tern project", e);
		}
		return super.performOk();
	}

	protected abstract void doPerformOk() throws Exception;

}

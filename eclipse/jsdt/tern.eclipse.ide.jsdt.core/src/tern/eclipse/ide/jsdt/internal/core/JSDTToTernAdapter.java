/**
 *  Copyright (c) 2015 Red Hat Inc. and others
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *    Mickael Istria (Red Hat Inc.)
 */
package tern.eclipse.ide.jsdt.internal.core;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IAdapterFactory;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.jface.text.IDocument;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.core.IJavaScriptUnit;

import tern.ITernFile;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;

public class JSDTToTernAdapter implements IAdapterFactory {

	@Override
	public Object getAdapter(Object adaptableObject, Class/*<T>*/ adapterType) {
	//public <T> T getAdapter(Object adaptableObject, Class<T> adapterType) {
		try {
			if (ITernProject.class.equals(adapterType)) {
				IProject project = null;
				if (adaptableObject instanceof IProject) {
					project = (IProject) adaptableObject;
				} else if (adaptableObject instanceof IJavaScriptProject) {
					project = ((IJavaScriptProject)adaptableObject).getProject();
				}
				if (project != null) {
					return /*(T)*/ TernCorePlugin.getTernProject(((IJavaScriptProject)adaptableObject).getProject());
				}
			}
			
			if (ITernFile.class.equals(adapterType)) {
				IResource resource = null;
				if (adaptableObject instanceof IFile) {
					resource = (IFile)adaptableObject;
				} else if (adaptableObject instanceof IJavaScriptUnit) {
					IJavaScriptUnit unit = (IJavaScriptUnit)adaptableObject;
				}
				if (resource != null) {
					return /*(T)*/ TernCorePlugin.getTernProject(resource.getProject()).getFile(resource.getProjectRelativePath().toString());
				}
			}
		} catch (CoreException ex) {
			JSDTTernCorePlugin.getDefault().getLog().log(new Status(
					IStatus.ERROR,
					JSDTTernCorePlugin.getDefault().getBundle().getSymbolicName(),
					ex.getMessage(),
					ex));
		}
		
		return null;
	}

	@Override
	public Class<?>[] getAdapterList() {
		return new Class<?>[] { ITernProject.class, ITernFile.class };
	}

}

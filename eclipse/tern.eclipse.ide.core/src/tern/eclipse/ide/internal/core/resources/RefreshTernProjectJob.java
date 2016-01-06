/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.core.resources;

import java.io.IOException;

import org.eclipse.core.resources.WorkspaceJob;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.osgi.util.NLS;

import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.core.TernCoreMessages;

/**
 * Refresh the given tern project.
 * 
 */
class RefreshTernProjectJob extends WorkspaceJob {

	private final IDETernProject project;

	protected RefreshTernProjectJob(IDETernProject project) {
		super(TernCoreMessages.RefreshTernProjectJob_name);
		this.project = project;
	}

	@Override
	public IStatus runInWorkspace(IProgressMonitor monitor)
			throws CoreException {
		if (monitor.isCanceled()) {
			return Status.CANCEL_STATUS;
		}
		monitor.beginTask(NLS.bind(
				TernCoreMessages.RefreshTernProjectJob_taskName,
				project.getName()), 1);

		try {
			project.load();
		} catch (IOException e) {
			IStatus status = new Status(Status.ERROR, TernCorePlugin.PLUGIN_ID,
					"Error while refreshing .tern-project", e);
			throw new CoreException(status);
		}

		monitor.worked(1);
		monitor.done();
		return Status.OK_STATUS;
	}
}

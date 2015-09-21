/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.tools.internal.ui.wizards;

import java.io.IOException;
import java.io.InputStream;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Path;
import org.eclipse.core.runtime.Status;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.ide.IDE;

import tern.eclipse.ide.core.utils.FileUtils;
import tern.utils.IOUtils;

public class NewFileOperation implements IOperation {

	private final NewFileWizardPage page;

	private String containerName;
	private String fileName;

	public NewFileOperation(NewFileWizardPage page) {
		this.page = page;
	}

	@Override
	public void init() {
		containerName = page.getContainerName();
		fileName = page.getFileName();

	}

	@Override
	public void run(IProgressMonitor monitor, Object model)
			throws CoreException {
		doFinish(containerName, fileName, monitor);
	}

	/**
	 * The worker method. It will find the container, create the file if missing
	 * or just replace its contents, and open the editor on the newly created
	 * file.
	 * 
	 * @param fileName
	 */
	private void doFinish(String containerName, String fileName,
			IProgressMonitor monitor) throws CoreException {
		// create a sample file
		monitor.setTaskName("Creating " + fileName);
		IWorkspaceRoot root = ResourcesPlugin.getWorkspace().getRoot();
		IResource resource = root.findMember(new Path(containerName));
		if (!resource.exists() || !(resource instanceof IContainer)) {
			throwCoreException("Container \"" + containerName
					+ "\" does not exist.");
		}
		IContainer container = (IContainer) resource;
		final IFile file = container.getFile(new Path(fileName));
		try {
			InputStream stream = openContentStream(page.getModel(),
					file.getProject());
			if (file.exists()) {
				file.setContents(stream, true, true, monitor);
			} else {
				file.create(stream, true, monitor);
			}
			stream.close();
		} catch (IOException e) {
		}
		monitor.worked(1);
		monitor.setTaskName("Opening file for editing...");
		page.getShell().getDisplay().asyncExec(new Runnable() {
			public void run() {
				IWorkbenchPage page = PlatformUI.getWorkbench()
						.getActiveWorkbenchWindow().getActivePage();
				try {
					IDE.openEditor(page, file, true);
				} catch (PartInitException e) {
				}
			}
		});
		monitor.worked(1);
	}

	/**
	 * We will initialize file contents with a sample text.
	 * 
	 * @param name
	 * 
	 * @param project
	 */

	private InputStream openContentStream(Object options, IProject project) {
		String contents = page
				.getGenerator(FileUtils.getLineSeparator(project)).generate(
						options);
		return IOUtils.toInputStream(contents);
	}

	private void throwCoreException(String message) throws CoreException {
		IStatus status = new Status(IStatus.ERROR, "_wizard", IStatus.OK,
				message, null);
		throw new CoreException(status);
	}

	@Override
	public int getTotal() {
		return 2;
	}

}

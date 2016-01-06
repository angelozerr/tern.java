/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.ui;

import java.io.IOException;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.jface.text.IDocument;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.PlatformUI;

import tern.ITernFile;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.internal.ui.util.AllInOneWorkbenchListener;
import tern.eclipse.ide.ui.TernUIPlugin;

/**
 * This class is responsible for tracking currently activated editors and
 * triggering synchronization of files to Tern Server. Following rules are
 * applied:
 * <ul>
 * <li>if JS or HTML file is opened, ensureSynch is called</li>
 * <li>if JS editor looses focus, it's contents are uploaded to tern server</li>
 * <li>if HTML editor looses focus, it is removed from the server on the next
 * synchronization</li>
 * </ul>
 */
public class EditorActivationTracker extends AllInOneWorkbenchListener {

	private static final EditorActivationTracker INSTANCE = new EditorActivationTracker();

	public static EditorActivationTracker getInstance() {
		return INSTANCE;
	}

	private EditorActivationTracker() {
		initialize();
		// initialize sync if needed
		Display.getDefault().asyncExec(new Runnable() {
			@Override
			public void run() {
				IWorkbench bench = PlatformUI.getWorkbench();
				if (bench.getWorkbenchWindowCount() > 0) {
					partActivated(bench.getActiveWorkbenchWindow()
							.getActivePage().getActivePart());
				}
			}
		});
	}

	@Override
	public void partActivated(IWorkbenchPart part) {
		IFile file = getFile(part);
		if (file != null
				&& (TernResourcesManager.isHTMLFile(file) || TernResourcesManager
						.isJSFile(file))) {
			// Ensure that everything is synchronized when JS or HTML file is
			// opened
			final ITernProject project = TernResourcesManager
					.getTernProject(file.getProject());
			if (project != null) {
				new Job("Synchronizing script resources with Tern server...") {
					@Override
					protected IStatus run(IProgressMonitor monitor) {
						monitor.beginTask("", -1); //$NON-NLS-1$
						project.getFileSynchronizer().ensureSynchronized();
						return Status.OK_STATUS;
					}
				}.schedule();
			}
		}
	}

	@Override
	public void partDeactivated(IWorkbenchPart part) {
		IFile file = getFile(part);
		boolean isHtml = false;
		if (file != null
				&& (TernResourcesManager.isJSFile(file) || (isHtml = TernResourcesManager
						.isHTMLFile(file)))) {
			final ITernProject project = TernResourcesManager
					.getTernProject(file.getProject());
			if (project != null) {
				if (isHtml) {
					// Remove HTML file contents from the server next time
					// content assist is invoked
					project.getFileSynchronizer().refresh(file);
					return;
				}
				IDocument document = (IDocument) part
						.getAdapter(IDocument.class);
				if (document != null) {
					// Synchronize file with the server, when user moves to the
					// other editor without saving content. This allows Tern
					// server to calculate completion proposals based on unsaved
					// content.
					final ITernFile tf = new TernDocumentFile(file, document);
					new Job("Synchronizing sources with Tern server") {
						@Override
						protected IStatus run(IProgressMonitor monitor) {
							try {
								project.getFileSynchronizer().synchronizeFile(
										tf);
							} catch (IOException e) {
								TernUIPlugin
										.getDefault()
										.getLog()
										.log(new Status(IStatus.ERROR,
												TernUIPlugin.PLUGIN_ID, e
														.getMessage(), e));
							}
							return Status.OK_STATUS;
						}
					}.schedule();
				}
			}
		}
	}

	private IFile getFile(IWorkbenchPart part) {
		if (part instanceof IEditorPart) {
			IEditorInput input = ((IEditorPart) part).getEditorInput();
			if (input instanceof IFileEditorInput) {
				return ((IFileEditorInput) input).getFile();
			}
		}
		return null;
	}

}

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
package tern.eclipse.ide.internal.ui.util;

import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.ui.IPageListener;
import org.eclipse.ui.IPartListener;
import org.eclipse.ui.IPerspectiveDescriptor;
import org.eclipse.ui.IPerspectiveListener;
import org.eclipse.ui.IWindowListener;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;

public class AllInOneWorkbenchListener implements IWindowListener,
		IPerspectiveListener, IPartListener, IPageListener {

	public AllInOneWorkbenchListener() {
	}

	public void initialize() {
		new Job("Init AllInOneWorkbenchListener") { //$NON-NLS-1$

			{
				setSystem(true);
			}

			@Override
			protected IStatus run(IProgressMonitor monitor) {
				if (PlatformUI.isWorkbenchRunning()) {
					final IWorkbench workbench = PlatformUI.getWorkbench();
					workbench.getDisplay().asyncExec(new Runnable() {
						public void run() {
							hookListeners(workbench);
						};
					});
				} else {
					schedule(100);
				}
				return Status.OK_STATUS;
			}
		}.schedule();
	}

	public void dispose() {
		final IWorkbench workbench = PlatformUI.getWorkbench();
		unhookListeners(workbench);
	}

	private void hookListeners(final IWorkbench workbench) {
		workbench.addWindowListener(this);
		for (IWorkbenchWindow window : workbench.getWorkbenchWindows()) {
			hookListeners(window);
		}
	}

	private void unhookListeners(final IWorkbench workbench) {
		// If the display is disposed, then we're shutting down and the
		// listeners have already been removed.
		if (workbench.getDisplay().isDisposed())
			return;

		workbench.removeWindowListener(this);

		// Walk through the workbench windows and unhook the listeners from each
		// of them.
		for (IWorkbenchWindow window : workbench.getWorkbenchWindows()) {
			unhookListeners(window);
		}
	}

	private void hookListeners(IWorkbenchWindow window) {
		if (window == null)
			return;
		window.addPageListener(this);
		window.addPerspectiveListener(this);
		for (IWorkbenchPage page : window.getPages()) {
			hookListeners(page);
		}
	}

	private void unhookListeners(IWorkbenchWindow window) {
		if (window == null)
			return;
		window.removePageListener(this);
		window.removePerspectiveListener(this);
		for (IWorkbenchPage page : window.getPages()) {
			unhookListeners(page);
		}
	}

	private void hookListeners(IWorkbenchPage page) {
		IPerspectiveDescriptor perspective = page.getPerspective();
		if (perspective != null) {
			perspectiveActivated(page, perspective);
		}
		page.addPartListener(this);
	}

	private void unhookListeners(IWorkbenchPage page) {
		page.removePartListener(this);
	}

	public void windowOpened(IWorkbenchWindow window) {
		hookListeners(window);
	}

	public void windowClosed(IWorkbenchWindow window) {
		unhookListeners(window);
	}

	public void windowActivated(IWorkbenchWindow window) {
	}

	public void windowDeactivated(IWorkbenchWindow window) {
	}

	public void pageActivated(IWorkbenchPage page) {
	}

	public void pageClosed(IWorkbenchPage page) {
		unhookListeners(page);
	}

	public void pageOpened(IWorkbenchPage page) {
		hookListeners(page);
	}

	public void partActivated(IWorkbenchPart part) {
	}

	public void partDeactivated(IWorkbenchPart part) {
	}

	public void partBroughtToTop(IWorkbenchPart part) {
	}

	public void partClosed(IWorkbenchPart part) {
	}

	public void partOpened(IWorkbenchPart part) {
	}

	public void perspectiveActivated(IWorkbenchPage page,
			IPerspectiveDescriptor perspective) {
	}

	public void perspectiveChanged(IWorkbenchPage page,
			IPerspectiveDescriptor perspective, String changeId) {
	}

};
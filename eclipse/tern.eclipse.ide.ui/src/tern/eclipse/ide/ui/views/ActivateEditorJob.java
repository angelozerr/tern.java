/**
- *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.ui.views;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.ui.progress.UIJob;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.server.protocol.outline.IJSNode;

/**
 * Job which is executed when the treeview of the tern outline is clicked to
 * select the well content of the active JavaScript Editor.
 *
 */
class ActivateEditorJob extends UIJob {

	private static final int UPDATE_DELAY = 100;

	private final AbstractTernOutlineView view;
	private IJSNode currentNodeToOpen;

	public ActivateEditorJob(AbstractTernOutlineView view) {
		super(TernUIMessages.Link_With_Editor_Job_);
		super.setSystem(true);
		super.setPriority(Job.SHORT);
		this.view = view;
	}

	@Override
	public IStatus runInUIThread(IProgressMonitor monitor) {
		AbstractTernContentOutlinePage page = view.getCurrentTernPage();
		if (page != null) {
			try {
				view.ignoreEditorActivation = true;
				IFile file = page.getFile();
				if (file != null) {
					EditorUtils.openInEditor(currentNodeToOpen, file);
				} else {
					EditorUtils.openInEditor(currentNodeToOpen);
				}
			} finally {
				view.ignoreEditorActivation = false;
			}
		}
		return Status.OK_STATUS;
	}

	public void openInEditor(IJSNode node, boolean force) {
		AbstractTernContentOutlinePage page = view.getCurrentTernPage();
		if (page == null) {
			return;
		}
		if (!force && (!view.isLinkingEnabled() || view.ignoreSelectionChanged)) {
			return;
		}
		this.currentNodeToOpen = node;
		/*
		 * Create and schedule a UI Job to activate the editor in a valid
		 * Display thread
		 */
		schedule(UPDATE_DELAY);
	}

}

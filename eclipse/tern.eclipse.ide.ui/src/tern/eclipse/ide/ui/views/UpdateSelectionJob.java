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
import org.eclipse.jface.text.ITextSelection;
import org.eclipse.jface.viewers.IPostSelectionProvider;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.ISelectionProvider;
import org.eclipse.jface.viewers.IStructuredContentProvider;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.navigator.CommonViewer;
import org.eclipse.ui.texteditor.ITextEditor;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.server.protocol.outline.IJSNode;
import tern.utils.StringUtils;

/**
 * Job which is executed when there is a selection inside JavaScript Editor to
 * select the well node in the tern outline.
 *
 */
class UpdateSelectionJob extends Job implements ISelectionChangedListener {

	private static final int UPDATE_DELAY = 100;

	private final AbstractTernOutlineView view;
	private ISelection selection;
	private ITextEditor textEditor;

	public UpdateSelectionJob(AbstractTernOutlineView view) {
		super(TernUIMessages.Link_With_Editor_Job_);
		super.setSystem(true);
		super.setPriority(Job.SHORT);
		this.view = view;
	}

	@Override
	protected IStatus run(IProgressMonitor monitor) {
		BestNode bestNode = findBestNode(selection);
		if (bestNode != null) {
			try {
				view.ignoreSelectionChanged = true;
				final IJSNode node = bestNode.node;
				final CommonViewer viewer = bestNode.viewer;
				Display.getDefault().syncExec(new Runnable() {
					@Override
					public void run() {
						viewer.setSelection(new StructuredSelection(node));
					}
				});
			} finally {
				view.ignoreSelectionChanged = false;
			}
		}
		return Status.OK_STATUS;
	}

	@Override
	public void selectionChanged(SelectionChangedEvent event) {
		selectInTreeview(event.getSelection());
	}

	public void setCurrentPart(IWorkbenchPart part) {
		if (this.textEditor != null) {
			uninstall(this.textEditor.getSelectionProvider());
		}
		if (part instanceof ITextEditor) {
			this.textEditor = (ITextEditor) part;
			ISelectionProvider provider = this.textEditor.getSelectionProvider();
			selectInTreeview(provider.getSelection());
			install(provider);
		} else {
			this.textEditor = null;
		}
	}

	private void selectInTreeview(ISelection selection) {
		if (view.ignoreEditorActivation) {
			return;
		}
		this.selection = selection;
		super.schedule(UPDATE_DELAY);
	}

	private void install(ISelectionProvider selectionProvider) {
		if (selectionProvider == null) {
			return;
		}
		if (selectionProvider instanceof IPostSelectionProvider) {
			IPostSelectionProvider provider = (IPostSelectionProvider) selectionProvider;
			provider.addPostSelectionChangedListener(this);
		} else {
			selectionProvider.addSelectionChangedListener(this);
		}
	}

	private void uninstall(ISelectionProvider selectionProvider) {
		if (selectionProvider == null) {
			return;
		}
		if (selectionProvider instanceof IPostSelectionProvider) {
			IPostSelectionProvider provider = (IPostSelectionProvider) selectionProvider;
			provider.removePostSelectionChangedListener(this);
		} else {
			selectionProvider.removeSelectionChangedListener(this);
		}
	}

	private class BestNode {
		public final IJSNode node;
		public final CommonViewer viewer;

		public BestNode(IJSNode node, CommonViewer viewer) {
			this.node = node;
			this.viewer = viewer;
		}
	}

	private BestNode findBestNode(ISelection selection) {
		if (!view.isLinkingEnabled() /* && !ignoreSelectionChanged */ ) {
			return null;
		}
		CommonViewer viewer = view.getCurrentViewer();
		if (viewer == null) {
			return null;
		}
		IStructuredContentProvider contentProvider = (IStructuredContentProvider) viewer.getContentProvider();
		if (contentProvider == null || selection == null || selection.isEmpty()
				|| !(selection instanceof ITextSelection)) {
			return null;
		}
		Object[] elements = contentProvider.getElements(viewer.getInput());
		IFile currentFile = view.getCurrentTernPage().getCurrentFile();
		if (elements != null) {
			Object elt = null;
			IJSNode bestNode = null;
			for (int i = 0; i < elements.length; i++) {
				elt = elements[i];
				if (elt instanceof IJSNode) {
					bestNode = findBestNode((IJSNode) elt, (ITextSelection) selection, currentFile);
					if (bestNode != null) {
						return new BestNode(bestNode, viewer);
					}
				}
			}
		}
		return null;
	}

	private IJSNode findBestNode(IJSNode node, ITextSelection selection, IFile currentFile) {
		int start = selection.getOffset(), end = start + selection.getLength();
		if (node.getStart() != null) {
			if (node.getStart() <= start && node.getEnd() >= end) {
				if (!StringUtils.isEmpty(node.getFile()) && currentFile != null
						&& !currentFile.equals(EditorUtils.getFile(node))) {
					// doesn't match the file
					return null;
				}
				// node is found, check if node is a container (like a function)
				if (node.isContainer()) {
					// check if there is a child which match the selection
					IJSNode child = findBestNodeInChildren(node, selection, currentFile);
					if (child != null) {
						return child;
					}
				}
				return node;
			}
		}
		return findBestNodeInChildren(node, selection, currentFile);
	}

	protected IJSNode findBestNodeInChildren(IJSNode node, ITextSelection selection, IFile currentFile) {
		if (node.hasChidren()) {
			for (IJSNode child : node.getChildren()) {
				IJSNode c = findBestNode(child, selection, currentFile);
				if (c != null) {
					return c;
				}
			}
		}
		return null;
	}

	public void dispose() {
		if (this.textEditor != null) {
			uninstall(this.textEditor.getSelectionProvider());
		}
		super.cancel();
	}

}

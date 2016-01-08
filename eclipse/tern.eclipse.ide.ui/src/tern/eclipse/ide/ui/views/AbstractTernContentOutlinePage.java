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
import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.action.IToolBarManager;
import org.eclipse.jface.text.DocumentEvent;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IDocumentListener;
import org.eclipse.jface.viewers.DoubleClickEvent;
import org.eclipse.jface.viewers.IDoubleClickListener;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.ui.navigator.CommonViewer;
import org.eclipse.ui.part.Page;
import org.eclipse.ui.views.contentoutline.IContentOutlinePage;

import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.internal.ui.views.actions.LinkEditorAction;
import tern.eclipse.ide.internal.ui.views.actions.TerminateTernServerAction;
import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.server.ITernServer;
import tern.server.ITernServerListener;
import tern.server.protocol.outline.IJSNode;

/**
 * Abstract class for tern outline page.
 *
 */
public abstract class AbstractTernContentOutlinePage extends Page
		implements IContentOutlinePage, ITernServerListener, IDocumentListener {

	private final AbstractTernOutlineView view;
	private CommonViewer viewer;

	// Commons actions
	private LinkEditorAction toggleLinkingAction;
	private TerminateTernServerAction terminateAction;

	private final IProject project;
	private IDocument currentDocument;
	private IFile currentFile;

	public AbstractTernContentOutlinePage(IProject project, AbstractTernOutlineView view) {
		this.project = project;
		this.view = view;
	}

	@Override
	public void addSelectionChangedListener(ISelectionChangedListener listener) {
		this.viewer.addSelectionChangedListener(listener);
	}

	@Override
	public ISelection getSelection() {
		return this.viewer.getSelection();
	}

	@Override
	public void removeSelectionChangedListener(ISelectionChangedListener listener) {
		this.viewer.removePostSelectionChangedListener(listener);
	}

	@Override
	public void setSelection(ISelection selection) {
		this.viewer.setSelection(selection);
	}

	@Override
	public Control getControl() {
		return this.viewer != null ? this.viewer.getControl() : null;
	}

	@Override
	public void setFocus() {
		getControl().setFocus();
	}

	@Override
	public void createControl(Composite parent) {
		viewer = new CommonViewer(getViewerId(), parent, SWT.MULTI);
		viewer.addDoubleClickListener(new IDoubleClickListener() {
			@Override
			public void doubleClick(DoubleClickEvent event) {
				IStructuredSelection selection = (IStructuredSelection) event.getSelection();
				if (!selection.isEmpty()) {
					if (selection.getFirstElement() instanceof IJSNode) {
						IJSNode node = (IJSNode) selection.getFirstElement();
						view.openInEditor(node, true);
					}
				}
			}

		});
		viewer.addSelectionChangedListener(new ISelectionChangedListener() {

			@Override
			public void selectionChanged(SelectionChangedEvent event) {
				updateEnabledActions();
				IStructuredSelection selection = (IStructuredSelection) event.getSelection();
				if (!selection.isEmpty()) {
					if (selection.getFirstElement() instanceof IJSNode) {
						IJSNode node = (IJSNode) selection.getFirstElement();
						IFile nodeFile = EditorUtils.getFile(node);
						if (nodeFile == null || nodeFile.equals(getCurrentFile())) {
							view.openInEditor(node, false);
						}
					}
				}
			}

		});
		// viewer.setAutoExpandLevel(TreeViewer.ALL_LEVELS);

		// Actions
		registerActions(getSite().getActionBars().getToolBarManager());
		registerContextMenu(viewer.getControl());

		try {
			IProject project = getProject();
			TernCorePlugin.getTernProject(project).addServerListener(this);
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE, "error while getting tern project", e);
		}

		updateEnabledActions();
	}

	protected void registerActions(IToolBarManager manager) {
		this.toggleLinkingAction = new LinkEditorAction(view, getViewer());
		manager.add(toggleLinkingAction);
		this.terminateAction = new TerminateTernServerAction(this);
		manager.add(terminateAction);
	}

	protected void registerContextMenu(Control control) {
	}

	public CommonViewer getViewer() {
		return viewer;
	}

	protected void updateEnabledActions() {

	}

	@Override
	public void onStart(ITernServer server) {
		refreshOutline();
		terminateAction.setEnabled(true);
	}

	@Override
	public void onStop(ITernServer server) {
		terminateAction.setEnabled(false);
	}

	@Override
	public void dispose() {
		super.dispose();
		if (this.currentDocument != null) {
			currentDocument.removeDocumentListener(this);
		}
		try {
			IProject project = getProject();
			TernCorePlugin.getTernProject(project).removeServerListener(this);
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE, "error while getting tern project", e);
		}
	}

	public void setCurrentFile(IFile currentFile) {
		// Old file/document
		IFile oldFile = this.currentFile;
		IDocument oldDocument = this.currentDocument;
		if (oldDocument != null) {
			oldDocument.removeDocumentListener(this);
		}
		// new file/document
		this.currentFile = currentFile;
		this.currentDocument = EditorUtils.getDocument(currentFile);
		if (currentDocument != null) {
			currentDocument.addDocumentListener(this);
		}
		if (isRefreshOutline(oldFile, currentFile)) {
			refreshOutline();
		}
	}

	protected abstract boolean isRefreshOutline(IFile oldFile, IFile newFile);

	protected abstract String getViewerId();

	public final IFile getCurrentFile() {
		return currentFile;
	}

	public IDocument getCurrentDocument() {
		return currentDocument;
	}

	public final IProject getProject() {
		return project;
	}

	public abstract IFile getFile();

	/**
	 * Refresh the outline tree in a job.
	 */
	public void refreshOutline() {
		view.refreshOutline();
	}

	@Override
	public void documentChanged(DocumentEvent event) {
		refreshOutline();
	}

	@Override
	public void documentAboutToBeChanged(DocumentEvent event) {
	}
}

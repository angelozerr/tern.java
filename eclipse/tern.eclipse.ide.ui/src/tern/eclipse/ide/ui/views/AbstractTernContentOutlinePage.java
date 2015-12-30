/**
- *  Copyright (c) 2013-2015 Angelo ZERR.
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
import org.eclipse.jface.action.IToolBarManager;
import org.eclipse.jface.viewers.DoubleClickEvent;
import org.eclipse.jface.viewers.IDoubleClickListener;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.ui.navigator.CommonViewer;
import org.eclipse.ui.part.Page;
import org.eclipse.ui.views.contentoutline.IContentOutlinePage;

import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.server.protocol.outline.IJSNode;

public abstract class AbstractTernContentOutlinePage extends Page implements IContentOutlinePage {

	private CommonViewer viewer;

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
		return this.viewer.getControl();
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
						IFile file = getFile();
						if (file != null) {
							EditorUtils.openInEditor(node, file);
						} else {
							EditorUtils.openInEditor(node);
						}
					}
				}
			}
		});
		viewer.addSelectionChangedListener(new ISelectionChangedListener() {

			@Override
			public void selectionChanged(SelectionChangedEvent event) {
				updateEnabledActions();
			}

		});
		viewer.setAutoExpandLevel(TreeViewer.ALL_LEVELS);
		registerActions(getSite().getActionBars().getToolBarManager());
		registerContextMenu(viewer.getControl());
		init(viewer);
		updateEnabledActions();
	}

	protected void registerContextMenu(Control control) {
	}

	protected void registerActions(IToolBarManager manager) {
	}

	public CommonViewer getViewer() {
		return viewer;
	}

	protected void updateEnabledActions() {

	}

	protected abstract String getViewerId();

	protected abstract void init(CommonViewer viewer);

	protected abstract IFile getFile();

}

/**
 *  Copyright (c) 2013-2016 Angelo ZERR, and others
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Mickael Istria (Red Hat Inc.) - reduce coupling to TernOutlineView
 */
package tern.eclipse.ide.ui.views;

import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.jface.text.DocumentEvent;
import org.eclipse.jface.text.IDocumentListener;
import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.Viewer;

import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.server.protocol.outline.IJSNode;

public abstract class AbstractTernOutlineContentProvider implements ITreeContentProvider, IDocumentListener {

	public static final Object COMPUTING_NODE = new Object();
	private static final Object[] EMPTY_ARRAY = new Object[0];

	protected TernDocumentFile document;
	private TernCommonViewer viewer;

	public AbstractTernOutlineContentProvider() {
	}

	@Override
	public Object[] getElements(Object element) {
		if (!viewer.isParsed()) {
			return new Object[] { COMPUTING_NODE };
		}
		return viewer.getOutline().getRoot().getChildren().toArray();
	}

	@Override
	public Object[] getChildren(Object element) {
		if (element instanceof IJSNode) {
			return ((IJSNode) element).getChildren().toArray();
		}
		return EMPTY_ARRAY;
	}

	@Override
	public Object getParent(Object element) {
		if (element instanceof IJSNode) {
			return ((IJSNode) element).getParent();
		}
		return null;
	}

	@Override
	public boolean hasChildren(Object element) {
		if (element instanceof IJSNode) {
			return ((IJSNode) element).hasChidren();
		}
		return false;
	}

	@Override
	public final void inputChanged(Viewer viewer, Object oldInput, Object newInput) {
		this.viewer = (TernCommonViewer) viewer;
		if (doInputChanged(viewer, oldInput, newInput)) {
			this.viewer.refreshOutline();
		}
	}

	@Override
	public void documentChanged(DocumentEvent event) {
		this.viewer.refreshOutline();
	}

	@Override
	public void dispose() {
		if (this.document != null) {
			this.document.getDocument().removeDocumentListener(this);
		}
	}

	@Override
	public void documentAboutToBeChanged(DocumentEvent event) {
	}

	protected abstract boolean doInputChanged(Viewer viewer, Object oldInput, Object newInput);

}

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
package tern.eclipse.ide.internal.ui.views;

import org.eclipse.core.runtime.IAdaptable;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IDocumentListener;
import org.eclipse.jface.viewers.Viewer;

import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.ui.views.AbstractTernOutlineContentProvider;

public class TernOutlineContentProvider extends AbstractTernOutlineContentProvider implements IDocumentListener {

	@Override
	protected boolean doInputChanged(Viewer viewer, Object oldInput, Object newInput) {
		IDocument oldDocument = null;
		if (this.document != null) {
			oldDocument = document.getDocument();
			oldDocument.removeDocumentListener(this);
		}
		if (newInput instanceof TernDocumentFile) {
			this.document = (TernDocumentFile) newInput;
		} else if (newInput instanceof IAdaptable) {
			this.document = (TernDocumentFile) ((IAdaptable) newInput).getAdapter(TernDocumentFile.class);
		} else {
			this.document = null;
		}
		IDocument newDocument = null;
		if (this.document != null) {
			newDocument = document.getDocument();
			newDocument.addDocumentListener(this);
		}
		return newDocument != null && !newDocument.equals(oldDocument);
	}

}

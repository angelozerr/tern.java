/**
 *  Copyright (c) 2013-2015 Angelo ZERR, and others
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
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.jface.text.DocumentEvent;
import org.eclipse.jface.text.IDocumentListener;
import org.eclipse.jface.viewers.Viewer;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.ui.views.AbstractTernOutlineContentProvider;
import tern.server.TernPlugin;
import tern.server.protocol.outline.TernOutlineCollector;
import tern.server.protocol.outline.TernOutlineQuery;

public class TernOutlineContentProvider extends AbstractTernOutlineContentProvider implements IDocumentListener {

	private static final int UPDATE_DELAY = 500;

	private TernDocumentFile document;

	@Override
	public void dispose() {
		super.dispose();
		if (this.document != null) {
			this.document.getDocument().removeDocumentListener(this);
		}
	}

	@Override
	public void inputChanged(Viewer viewer, Object oldInput, Object newInput) {
		if (this.document != null) {
			document.getDocument().removeDocumentListener(this);
		}
		if (newInput instanceof TernDocumentFile) {
			this.document = (TernDocumentFile) newInput;
		} else if (newInput instanceof IAdaptable) {
			this.document = (TernDocumentFile) ((IAdaptable) newInput).getAdapter(TernDocumentFile.class);
		}
		if (this.document != null) {
			document.getDocument().addDocumentListener(this);
		}
		super.inputChanged(viewer, oldInput, newInput);
	}

	@Override
	public void documentChanged(DocumentEvent event) {
		if (this.refreshJob.getState() != Job.NONE) {
			this.refreshJob.cancel();
		}
		this.refreshJob.schedule(UPDATE_DELAY);
	}

	@Override
	public void documentAboutToBeChanged(DocumentEvent event) {
	}

	@Override
	protected TernOutlineCollector loadOutline() throws Exception {
		IIDETernProject ternProject = TernCorePlugin.getTernProject(document.getFile().getProject());
		if (ternProject == null || !ternProject.hasPlugin(TernPlugin.outline)) {
			return null;
		}
		// Call tern-outline
		TernOutlineQuery query = new TernOutlineQuery(document.getFileName());
		TernOutline outline = new TernOutline(document, ternProject);
		ternProject.request(query, document, outline);
		return outline;
	}

}

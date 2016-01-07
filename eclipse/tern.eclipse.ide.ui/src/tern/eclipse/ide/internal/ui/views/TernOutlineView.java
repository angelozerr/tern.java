/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.ui.views;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.jface.text.IDocument;
import org.eclipse.ui.views.contentoutline.IContentOutlinePage;

import tern.TernResourcesManager;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.ui.views.AbstractTernOutlineView;
import tern.server.TernPlugin;
import tern.server.protocol.outline.TernOutlineCollector;
import tern.server.protocol.outline.TernOutlineQuery;

/**
 * Tern outline view.
 *
 */
public class TernOutlineView extends AbstractTernOutlineView {

	@Override
	protected boolean isAdaptFor(IFile file) {
		return TernResourcesManager.isJSFile(file) && TernCorePlugin.hasTernNature(file.getProject());
	}

	@Override
	protected IContentOutlinePage createOutlinePage(IProject project) {
		return new TernContentOutlinePage(project, this);
	}

	@Override
	public TernOutlineCollector loadOutline(IFile file, IDocument document) throws Exception {
		IIDETernProject ternProject = TernCorePlugin.getTernProject(file.getProject());
		if (ternProject == null || !ternProject.hasPlugin(TernPlugin.outline)) {
			return null;
		}
		TernDocumentFile ternFile = new TernDocumentFile(file, document);
		// Call tern-outline
		TernOutlineQuery query = new TernOutlineQuery(ternFile.getFileName());
		TernOutline outline = new TernOutline(ternFile, ternProject);
		ternProject.request(query, ternFile, outline);
		return outline;
	}

	@Override
	public boolean isOutlineAvailable(IFile file) {
		try {
			IIDETernProject ternProject = TernCorePlugin.getTernProject(file.getProject());
			if (ternProject == null || !ternProject.hasPlugin(TernPlugin.outline)) {
				return false;
			}
		} catch (Exception e) {
			Trace.trace(Trace.SEVERE, "Error while getting tern project", e);
			return false;
		}
		return true;
	}
}

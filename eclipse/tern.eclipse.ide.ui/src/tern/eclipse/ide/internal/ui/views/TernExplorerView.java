/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
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
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.part.IPageBookViewPage;
import org.eclipse.ui.views.contentoutline.ContentOutline;
import org.eclipse.ui.views.contentoutline.IContentOutlinePage;

import tern.TernResourcesManager;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.ui.utils.EditorUtils;

public class TernExplorerView extends ContentOutline {

	@Override
	protected PageRec doCreatePage(IWorkbenchPart part) {
		// Try to get an outline page.
		IContentOutlinePage page = getOutlinePage(part);
		if (page != null) {
			if (page instanceof IPageBookViewPage) {
				initPage((IPageBookViewPage) page);
			}
			page.createControl(getPageBook());
			return new PageRec(part, page);
		}
		// There is no content outline
		return null;
	}

	private IContentOutlinePage getOutlinePage(IWorkbenchPart part) {
		if (part != null && part instanceof IEditorPart) {
			IFile file = EditorUtils.getFile((IEditorPart) part);
			if (file != null && TernResourcesManager.isJSFile(file)) {
				IProject project = file.getProject();
				if (TernCorePlugin.hasTernNature(project)) {
					IDocument document = EditorUtils.getDocument(file);
					if (document != null) {
						return new TernContentOutlinePage(new TernDocumentFile(file, document));
					}
				}
			}
		}
		return null;
	}
}

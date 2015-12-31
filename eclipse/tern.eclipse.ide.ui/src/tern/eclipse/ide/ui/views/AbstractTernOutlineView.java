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
package tern.eclipse.ide.ui.views;

import org.eclipse.core.resources.IFile;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.part.IPageBookViewPage;
import org.eclipse.ui.views.contentoutline.ContentOutline;
import org.eclipse.ui.views.contentoutline.IContentOutlinePage;

import tern.eclipse.ide.ui.utils.EditorUtils;

/**
 * Abstract class for outline view based on tern project.
 *
 */
public abstract class AbstractTernOutlineView extends ContentOutline {

	@Override
	protected PageRec doCreatePage(IWorkbenchPart part) {
		IFile file = getFile(part);
		if (file == null) {
			// The opened file in the given editor cannot be displayed in the
			// outline
			return null;
		}

		PageRec pageRec = getPageRec(part, file);
		if (pageRec != null) {
			return pageRec;
		}
		// Try to get an outline page.
		IContentOutlinePage page = getOutlinePage(part);
		if (page != null) {
			if (page instanceof IPageBookViewPage) {
				initPage((IPageBookViewPage) page);
			}
			page.createControl(getPageBook());
			return createPageRec(part, page, file);
		}
		// There is no content outline
		return null;
	}

	protected PageRec getPageRec(IWorkbenchPart part, IFile file) {
		return null;
	}

	protected PageRec createPageRec(IWorkbenchPart part, IContentOutlinePage page, IFile file) {
		return new PageRec(part, page);
	}

	private IContentOutlinePage getOutlinePage(IWorkbenchPart part) {
		IFile file = getFile(part);
		if (file != null) {
			return createOutlinePage(file);
		}
		return null;
	}

	protected IFile getFile(IWorkbenchPart part) {
		if (part != null && part instanceof IEditorPart) {
			IFile file = EditorUtils.getFile((IEditorPart) part);
			if (file != null && isAdaptFor(file)) {
				return file;
			}
		}
		return null;
	}

	/**
	 * Returns true if the outline view is adapted for the given file and false
	 * otherwise.
	 * 
	 * @param file
	 * @return true if the outline view is adapted for the given file and false
	 *         otherwise.
	 */
	protected abstract boolean isAdaptFor(IFile file);

	/**
	 * Create the outline view for the given file.
	 * 
	 * @param file
	 * @return the outline view for the given file.
	 */
	protected abstract IContentOutlinePage createOutlinePage(IFile file);
}

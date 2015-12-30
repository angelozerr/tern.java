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
import org.eclipse.jface.text.IDocument;
import org.eclipse.ui.views.contentoutline.IContentOutlinePage;

import tern.TernResourcesManager;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.eclipse.ide.ui.views.AbstractTernOutlineView;

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
	protected IContentOutlinePage createOutlinePage(IFile file) {
		IDocument document = EditorUtils.getDocument(file);
		if (document != null) {
			return new TernContentOutlinePage(new TernDocumentFile(file, document));
		}
		return null;
	}
}

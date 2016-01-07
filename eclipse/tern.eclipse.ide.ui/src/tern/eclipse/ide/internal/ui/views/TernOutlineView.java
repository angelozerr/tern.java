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
import org.eclipse.ui.part.IPage;
import org.eclipse.ui.views.contentoutline.IContentOutlinePage;

import tern.TernResourcesManager;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
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
	protected TernOutlineCollector loadOutline() throws Exception {
		IPage page = getCurrentPage();
		if (!(page instanceof TernContentOutlinePage)) {
			return null;
		}
		TernDocumentFile document = ((TernContentOutlinePage) page).getTernFile();
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

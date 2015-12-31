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
package tern.eclipse.ide.internal.ui.views;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.action.IToolBarManager;
import org.eclipse.ui.navigator.CommonViewer;

import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.internal.ui.views.actions.LexicalSortingAction;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.views.AbstractTernContentOutlinePage;

public class TernContentOutlinePage extends AbstractTernContentOutlinePage {

	private final TernDocumentFile ternFile;
	private LexicalSortingAction sortAction;

	public TernContentOutlinePage(TernDocumentFile ternFile) {
		this.ternFile = ternFile;
	}

	@Override
	protected String getViewerId() {
		return TernUIPlugin.PLUGIN_ID + ".outline";
	}

	@Override
	protected IFile getFile() {
		return ternFile.getFile();
	}

	@Override
	protected void init(CommonViewer viewer) {
		viewer.setInput(ternFile);
	}

	@Override
	protected void registerActions(IToolBarManager manager) {
		sortAction = new LexicalSortingAction(this);
		manager.add(sortAction);
		super.registerActions(manager);
	}
}

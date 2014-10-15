/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.tools.internal.ui.wizards.webbrowser;

import org.eclipse.swt.widgets.Composite;

import tern.eclipse.ide.tools.core.webbrowser.EditorOptions;
import tern.eclipse.ide.tools.internal.ui.wizards.NewFileWizardPage;
import tern.utils.ExtensionUtils;

public abstract class NewEditorWizardPage<T extends EditorOptions> extends
		NewFileWizardPage<T> {

	public NewEditorWizardPage(String pageName) {
		super(pageName, ExtensionUtils.HTML_EXTENSION);
	}

	@Override
	protected void initialize() {
		super.initialize();
		getFileText().setText("index.html");
	}

	@Override
	protected void updateModel(T options) {
		// options.setBaseURL("http://codemirror.net/");
		// options.setTernBaseURL("http://ternjs.net/");
		// options.setBaseURL("file://C:/Documents and Settings/azerr/git/tern.java/core/tern.server.nodejs/node_modules/tern/node_modules/codemirror/");
		// options.setTernBaseURL("file://C:/Documents and Settings/azerr/git/tern.java/core/tern.server.nodejs/node_modules/tern/");
		options.setEditorContent("var elt = document.getElementById('xxx');");
	}

	@Override
	protected void createBody(Composite container) {
		super.createBody(container);
	}
}

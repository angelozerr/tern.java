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

import tern.eclipse.ide.core.utils.FileUtils;
import tern.eclipse.ide.tools.core.webbrowser.orion.OrionOptions;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;
import tern.eclipse.ide.tools.internal.ui.wizards.NewFileWizardPage;

/**
 * Page to fill Orion information.
 * 
 */
public class NewOrionWizardPage extends NewFileWizardPage<OrionOptions> {

	private static final String PAGE = "NewOrionWizardPage";

	public NewOrionWizardPage() {
		super(PAGE, FileUtils.HTML_EXTENSION);
		setTitle(TernToolsUIMessages.NewOrionWizardPage_title);
		setDescription(TernToolsUIMessages.NewOrionWizardPage_description);
	}

	@Override
	protected void updateModel(OrionOptions options) {
		//options.setBaseURL("http://eclipse.org/orion/editor/releases/5.0/");
		//options.setTernBaseURL("http://ternjs.net/");
		options.setEditorContent("var elt = document.getElementById('xxx');");
	}

}

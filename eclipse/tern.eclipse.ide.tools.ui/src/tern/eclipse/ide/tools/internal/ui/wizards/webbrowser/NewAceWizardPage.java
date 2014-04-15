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
import tern.eclipse.ide.tools.core.webbrowser.ace.AceOptions;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;
import tern.eclipse.ide.tools.internal.ui.wizards.NewFileWizardPage;

/**
 * Page to fill Ace information.
 * 
 */
public class NewAceWizardPage extends NewFileWizardPage<AceOptions> {

	private static final String PAGE = "NewAceWizardPage";

	public NewAceWizardPage() {
		super(PAGE, FileUtils.HTML_EXTENSION);
		setTitle(TernToolsUIMessages.NewAceWizardPage_title);
		setDescription(TernToolsUIMessages.NewAceWizardPage_description);
	}

	@Override
	protected void updateModel(AceOptions options) {
		//options.setBaseURL("http://ace.c9.io/");
		//options.setTernBaseURL("http://ternjs.net/");
		// options.setTernAceBaseURL("https://raw.githubusercontent.com/angelozerr/tern.ace/master/lib/");
		//options.setTernAceBaseURL("file://C:/Documents and Settings/azerr/git/tern.ace/lib/");
		options.setEditorContent("var elt = document.getElementById('xxx');");
	}

}

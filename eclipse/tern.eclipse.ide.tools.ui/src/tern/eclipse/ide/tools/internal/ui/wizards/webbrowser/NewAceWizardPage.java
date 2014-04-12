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

import org.eclipse.jface.viewers.ISelection;

import tern.eclipse.ide.core.utils.FileUtils;
import tern.eclipse.ide.tools.core.webbrowser.ace.AceOptions;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;
import tern.eclipse.ide.tools.internal.ui.wizards.NewFileWizardPage;

/**
 * Page to fill Ace information.
 * 
 */
public class NewAceWizardPage extends NewFileWizardPage {

	private static final String PAGE = "NewAceWizardPage";

	private final AceOptions options;

	public NewAceWizardPage(AceOptions options, ISelection selection) {
		super(PAGE, FileUtils.HTML_EXTENSION, selection);
		this.options = options;
		setTitle(TernToolsUIMessages.NewAceWizardPage_title);
		setDescription(TernToolsUIMessages.NewAceWizardPage_description);
	}

	@Override
	protected void synchModel() {
		options.setBaseURL("http://ace.c9.io/");
		options.setTernBaseURL("http://ternjs.net/");
		options.setEditorContent("var elt = document.getElementById('xxx');");
	}

}

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
package tern.eclipse.ide.tools.internal.ui.wizards.webbrowser;

import tern.eclipse.ide.tools.core.generator.IGenerator;
import tern.eclipse.ide.tools.core.webbrowser.orion.HTMLOrionEditor;
import tern.eclipse.ide.tools.core.webbrowser.orion.OrionOptions;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;

/**
 * Page to fill Orion information.
 * 
 */
public class NewOrionWizardPage extends NewEditorWizardPage<OrionOptions> {

	private static final String PAGE = "NewOrionWizardPage";

	public NewOrionWizardPage() {
		super(PAGE);
		setTitle(TernToolsUIMessages.NewOrionWizardPage_title);
		setDescription(TernToolsUIMessages.NewOrionWizardPage_description);
	}

	// options.setBaseURL("http://eclipse.org/orion/editor/releases/5.0/");

	@Override
	public IGenerator getGenerator(String lineSeparator) {
		return HTMLOrionEditor.create(lineSeparator);
	}
}

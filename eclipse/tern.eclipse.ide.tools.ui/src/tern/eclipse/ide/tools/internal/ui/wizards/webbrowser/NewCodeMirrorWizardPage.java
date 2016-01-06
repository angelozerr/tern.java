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
package tern.eclipse.ide.tools.internal.ui.wizards.webbrowser;

import tern.eclipse.ide.tools.core.generator.IGenerator;
import tern.eclipse.ide.tools.core.webbrowser.codemirror.CodeMirrorOptions;
import tern.eclipse.ide.tools.core.webbrowser.codemirror.HTMLCodeMirrorEditor;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;

/**
 * Page to fill CodeMirror information.
 * 
 */
public class NewCodeMirrorWizardPage extends
		NewEditorWizardPage<CodeMirrorOptions> {

	private static final String PAGE = "NewCodeMirrorWizardPage";

	public NewCodeMirrorWizardPage() {
		super(PAGE);
		setTitle(TernToolsUIMessages.NewCodeMirrorWizardPage_title);
		setDescription(TernToolsUIMessages.NewCodeMirrorWizardPage_description);
	}

	@Override
	public IGenerator getGenerator(String lineSeparator) {
		return HTMLCodeMirrorEditor.create(lineSeparator);
	}
}

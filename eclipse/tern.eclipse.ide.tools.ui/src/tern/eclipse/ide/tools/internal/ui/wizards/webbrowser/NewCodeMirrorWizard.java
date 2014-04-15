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

import tern.eclipse.ide.tools.core.generator.IGenerator;
import tern.eclipse.ide.tools.core.webbrowser.codemirror.CodeMirrorOptions;
import tern.eclipse.ide.tools.core.webbrowser.codemirror.HTMLCodeMirrorEditor;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;

/**
 * Wizard to create HTML page with Tern and CodeMirror editor.
 */
public class NewCodeMirrorWizard extends NewEditorWizard<CodeMirrorOptions> {

	public NewCodeMirrorWizard() {
		super.setWindowTitle(TernToolsUIMessages.NewCodeMirrorWizard_windowTitle);
		// super.setDefaultPageImageDescriptor(ImageResource
		// .getImageDescriptor(ImageResource.IMG_NEWTYPEDEF_WIZ));
	}

	@Override
	protected NewCodeMirrorWizardPage createNewFileWizardPage() {
		return new NewCodeMirrorWizardPage();
	}

	@Override
	protected IGenerator getGenerator(String lineSeparator) {
		return HTMLCodeMirrorEditor.create(lineSeparator);
	}

	@Override
	protected CodeMirrorOptions createModel() {
		return new CodeMirrorOptions();
	}

}

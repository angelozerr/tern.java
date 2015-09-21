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

import tern.eclipse.ide.tools.core.webbrowser.ace.AceOptions;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;

/**
 * Wizard to create HTML page with Tern and Ace editor.
 */
public class NewAceWizard extends NewEditorWizard<AceOptions> {

	public NewAceWizard() {
		super.setWindowTitle(TernToolsUIMessages.NewAceWizard_windowTitle);
		// super.setDefaultPageImageDescriptor(ImageResource
		// .getImageDescriptor(ImageResource.IMG_NEWTYPEDEF_WIZ));
	}

	@Override
	protected NewAceWizardPage createNewFileWizardPage() {
		return new NewAceWizardPage();
	}

	@Override
	protected AceOptions createModel() {
		return new AceOptions();
	}

	@Override
	protected String getTaskLabel() {
		return TernToolsUIMessages.NewAceWizard_taskLabel;
	}

}

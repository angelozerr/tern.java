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
package tern.eclipse.ide.tools.internal.ui.wizards;

import tern.eclipse.ide.tools.core.generator.TernDefOptions;
import tern.eclipse.ide.tools.internal.ui.ImageResource;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;

/**
 * Wizard to create Tern JSON type definitions.
 * 
 * @see http://ternjs.net/doc/manual.html#typedef
 * 
 */
public class NewTernDefWizard extends NewFileWizard<TernDefOptions> {

	public NewTernDefWizard() {
		super.setWindowTitle(TernToolsUIMessages.NewTernDefWizard_windowTitle);
		super.setDefaultPageImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_NEWTYPEDEF_WIZ));
	}

	@Override
	protected NewTernDefWizardPage createNewFileWizardPage() {
		return new NewTernDefWizardPage();
	}

	@Override
	protected TernDefOptions createModel() {
		return new TernDefOptions();
	}

	@Override
	protected String getTaskLabel() {
		return TernToolsUIMessages.NewTernDefWizard_taskLabel;
	}

}

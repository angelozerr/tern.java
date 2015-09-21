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

import tern.eclipse.ide.tools.core.generator.TernPluginOptions;
import tern.eclipse.ide.tools.internal.ui.ImageResource;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;

/**
 * Wizard to create Tern Server plugins.
 * 
 * @see http://ternjs.net/doc/manual.html#plugins
 * 
 */
public class NewTernPluginWizard extends NewFileWizard<TernPluginOptions> {

	public NewTernPluginWizard() {
		super.setWindowTitle(TernToolsUIMessages.NewTernPluginWizard_windowTitle);
		super.setDefaultPageImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_NEWPLUGIN_WIZ));
	}

	@Override
	protected NewTernPluginWizardPage createNewFileWizardPage() {
		return new NewTernPluginWizardPage();
	}

	@Override
	protected TernPluginOptions createModel() {
		return new TernPluginOptions();
	}

	@Override
	protected String getTaskLabel() {
		return TernToolsUIMessages.NewTernPluginWizard_taskLabel;
	}

}

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
package tern.eclipse.ide.tools.internal.ui.wizards;

import org.eclipse.jface.viewers.ISelection;

import tern.eclipse.ide.core.utils.FileUtils;
import tern.eclipse.ide.tools.core.generator.TernPluginOptions;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;

/**
 * Page to fill tern plugin information.
 * 
 */
public class NewTernPluginWizardPage extends
		NewFileWizardPage<TernPluginOptions> {

	private static final String PAGE = "NewTernPluginWizardPage";

	public NewTernPluginWizardPage() {
		super(PAGE, FileUtils.JS_EXTENSION);
		setTitle(TernToolsUIMessages.NewTernPluginWizardPage_title);
		setDescription(TernToolsUIMessages.NewTernPluginWizardPage_description);
	}

	@Override
	protected void updateModel(TernPluginOptions options) {
		options.setPluginName(getName());
		options.setDefName(getName());
	}

}

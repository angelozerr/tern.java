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
package tern.eclipse.ide.internal.ui.wizards;

import org.eclipse.jface.viewers.ISelection;

import tern.eclipse.ide.core.generator.IGenerator;
import tern.eclipse.ide.core.generator.TernPluginOptions;
import tern.eclipse.ide.core.generator.TernPluginGenerator;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;

/**
 * Wizard to create Tern Server plugins.
 * 
 * @see http://ternjs.net/doc/manual.html#plugins
 * 
 */
public class NewTernPluginWizard extends NewFileWizard<TernPluginOptions> {

	public NewTernPluginWizard() {
		super.setWindowTitle(TernUIMessages.NewTernPluginWizard_windowTitle);
		super.setDefaultPageImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_NEWPLUGIN_WIZ));
	}

	@Override
	protected NewFileWizardPage createNewFileWizardPage(
			TernPluginOptions options, ISelection selection) {
		return new NewTernPluginWizardPage(options, selection);
	}

	@Override
	protected IGenerator getGenerator(String lineSeparator) {
		return TernPluginGenerator.create(lineSeparator);
	}

	@Override
	protected TernPluginOptions createOptions() {
		return new TernPluginOptions();
	}

}

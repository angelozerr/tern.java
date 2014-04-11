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
import tern.eclipse.ide.core.generator.TernDefGenerator;
import tern.eclipse.ide.core.generator.TernDefOptions;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;

/**
 * Wizard to create Tern JSON type definitions.
 * 
 * @see http://ternjs.net/doc/manual.html#typedef
 * 
 */
public class NewTernDefWizard extends NewFileWizard<TernDefOptions> {

	public NewTernDefWizard() {
		super.setWindowTitle(TernUIMessages.NewTernDefWizard_windowTitle);
		super.setDefaultPageImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_NEWTYPEDEF_WIZ));
	}

	@Override
	protected NewFileWizardPage createNewFileWizardPage(TernDefOptions options,
			ISelection selection) {
		return new NewTernDefWizardPage(options, selection);
	}

	@Override
	protected IGenerator getGenerator(String lineSeparator) {
		return TernDefGenerator.create(lineSeparator);
	}

	@Override
	protected TernDefOptions createOptions() {
		return new TernDefOptions();
	}

}

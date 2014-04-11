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

import tern.eclipse.ide.core.generator.TernDefOptions;
import tern.eclipse.ide.core.utils.FileUtils;
import tern.eclipse.ide.internal.ui.TernUIMessages;

/**
 * Page to fill tern def information.
 * 
 */
public class NewTernDefWizardPage extends NewFileWizardPage {

	private static final String PAGE = "NewTernDefWizardPage";

	private final TernDefOptions options;

	public NewTernDefWizardPage(TernDefOptions options, ISelection selection) {
		super(PAGE, FileUtils.JSON_EXTENSION, selection);
		this.options = options;
		setTitle(TernUIMessages.NewTernDefWizardPage_title);
		setDescription(TernUIMessages.NewTernDefWizardPage_description);
	}

	@Override
	protected void synchModel() {
		options.setDefName(getName());
	}

}

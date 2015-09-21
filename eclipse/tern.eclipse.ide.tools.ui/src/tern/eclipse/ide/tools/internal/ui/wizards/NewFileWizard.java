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

import org.eclipse.ui.INewWizard;

import tern.eclipse.ide.tools.core.generator.Options;

/**
 * Abstract wizard to create a file.
 */
public abstract class NewFileWizard<T extends Options> extends TernWizard<T>
		implements INewWizard {

	public NewFileWizard() {
		super();
		setNeedsProgressMonitor(true);
	}

	@Override
	public void addPages() {
		NewFileWizardPage<T> page = createNewFileWizardPage();
		super.addPage(page);
		super.addOperation(new NewFileOperation(page));
	}

	protected abstract NewFileWizardPage createNewFileWizardPage();
}

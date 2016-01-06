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
package tern.eclipse.ide.tools.internal.ui.wizards.repository;

import org.eclipse.ui.IImportWizard;

import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;
import tern.eclipse.ide.tools.internal.ui.wizards.TernWizard;

/**
 * Install tern modules wizard.
 *
 */
public class InstallTernModulesWizard extends TernWizard<InstallTernModulesOptions>
		implements IImportWizard {

	private InstallTernModulesSelectionWizardPage page = new InstallTernModulesSelectionWizardPage();
	@Override
	public void addPages() {
		super.addPage(page);
		super.addOperation(new InstallTernModulesOperation());
	}

	@Override
	protected InstallTernModulesOptions createModel() {
		return new InstallTernModulesOptions();
	}

	@Override
	protected String getTaskLabel() {
		return TernToolsUIMessages.InstallTernModulesWizard_taskLabel;
	}
	
	@Override
	public boolean performFinish() {

		super.performFinish();
		
		// TODO : close wizard only if there are no errors.
		return false;
	}

}

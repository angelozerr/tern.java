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

import org.eclipse.ui.IImportWizard;

import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;

/**
 * Download tern plugins wizard.
 *
 */
public class DownloadTernModulesWizard extends TernWizard<DownloadOptions>
		implements IImportWizard {

	@Override
	public void addPages() {
		super.addPage(new DownloadTernModulesSelectionWizardPage());
		super.addOperation(new DownloadTernModulesOperation());
	}

	@Override
	protected DownloadOptions createModel() {
		return new DownloadOptions();
	}

	@Override
	protected String getTaskLabel() {
		return TernToolsUIMessages.DownloadTernModulesWizard_taskLabel;
	}

}

package tern.eclipse.ide.tools.internal.ui.wizards;

import org.eclipse.ui.INewWizard;

import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;
import tern.eclipse.ide.tools.internal.ui.wizards.TernWizard;

public class DownloadTernModulesWizard extends TernWizard<DownloadOptions>
		implements INewWizard {

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

package tern.eclipse.ide.tools.internal.ui.wizards.webbrowser;

import tern.eclipse.ide.tools.core.webbrowser.EditorOptions;
import tern.eclipse.ide.tools.internal.ui.wizards.NewFileWizard;

public abstract class NewEditorWizard<T extends EditorOptions> extends
		NewFileWizard<T> {

	@Override
	public void addPages() {
		super.addPage(new TernDefsSelectionWizardPage());
		super.addPage(new TernPluginsSelectionWizardPage());
		super.addPages();
	}
}

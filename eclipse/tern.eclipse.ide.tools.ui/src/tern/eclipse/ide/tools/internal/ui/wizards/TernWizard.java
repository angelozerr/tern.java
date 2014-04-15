package tern.eclipse.ide.tools.internal.ui.wizards;

import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.IWizardPage;
import org.eclipse.jface.wizard.Wizard;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchWizard;

public abstract class TernWizard<T> extends Wizard {

	private T model;
	private IStructuredSelection selection;

	@Override
	public void addPage(IWizardPage page) {
		if (page instanceof ITernWizardPage) {
			if (model == null) {
				model = createModel();
			}
			((ITernWizardPage) page).setModel(model);
			((ITernWizardPage) page).setSelection(selection);
		}
		super.addPage(page);
	}

	/**
	 * We will accept the selection in the workbench to see if we can initialize
	 * from it.
	 * 
	 * @see IWorkbenchWizard#init(IWorkbench, IStructuredSelection)
	 */
	public void init(IWorkbench workbench, IStructuredSelection selection) {
		this.selection = selection;
	}

	public T getModel() {
		return model;
	}

	public IStructuredSelection getSelection() {
		return selection;
	}

	protected abstract T createModel();
}

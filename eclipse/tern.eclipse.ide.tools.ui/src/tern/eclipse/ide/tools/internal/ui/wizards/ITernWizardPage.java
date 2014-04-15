package tern.eclipse.ide.tools.internal.ui.wizards;

import org.eclipse.jface.viewers.ISelection;

public interface ITernWizardPage<T> {

	void setModel(T model);

	void setSelection(ISelection selection);
}

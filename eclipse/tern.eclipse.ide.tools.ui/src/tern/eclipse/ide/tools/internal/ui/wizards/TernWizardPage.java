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

import org.eclipse.core.resources.IResource;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.WizardPage;
import org.eclipse.swt.widgets.Composite;

/**
 * Tern wizard page.
 * 
 * @param <T>
 *            model to update by each pages of wizard.
 */
public abstract class TernWizardPage<T> extends WizardPage implements
		ITernWizardPage<T> {

	private T model;
	private ISelection selection;

	protected TernWizardPage(String pageName) {
		super(pageName);
	}

	@Override
	public void setModel(T model) {
		this.model = model;
	}

	public T getModel() {
		return model;
	}

	@Override
	public void setSelection(ISelection selection) {
		this.selection = selection;
	}

	public ISelection getSelection() {
		return selection;
	}

	protected IResource getResource() {
		if (selection != null && selection.isEmpty() == false
				&& selection instanceof IStructuredSelection) {
			IStructuredSelection ssel = (IStructuredSelection) selection;
			if (ssel.size() > 1)
				return null;
			Object obj = ssel.getFirstElement();
			if (obj instanceof IResource) {
				return (IResource) obj;
			}
		}
		return null;
	}

	@Override
	public final void createControl(Composite parent) {
		Composite container = createUI(parent);
		initialize();
		dialogChanged();
		setControl(container);
	}

	protected void initialize() {

	}

	protected void dialogChanged() {
		String message = validate();
		updateStatus(message);
		if (message == null) {
			updateModel(model);
		}
	}

	private void updateStatus(String message) {
		setErrorMessage(message);
		setPageComplete(message == null);
	}

	protected abstract Composite createUI(Composite parent);

	protected abstract String validate();

	protected abstract void updateModel(T model);
}

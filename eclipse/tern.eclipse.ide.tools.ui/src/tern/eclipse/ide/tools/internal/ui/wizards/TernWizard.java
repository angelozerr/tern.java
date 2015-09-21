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

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.operation.IRunnableWithProgress;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.IWizardPage;
import org.eclipse.jface.wizard.Wizard;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchWizard;

public abstract class TernWizard<T> extends Wizard {

	private T model;
	private IStructuredSelection selection;
	private final List<IOperation> operations;
	private int total;

	public TernWizard() {
		this.operations = new ArrayList<IOperation>();
		this.total = 0;
	}

	public void addOperation(IOperation operation) {
		operations.add(operation);
		total += operation.getTotal();
	}

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

	@Override
	public boolean performFinish() {
		for (IOperation operation : operations) {
			operation.init();
		}
		IRunnableWithProgress op = new IRunnableWithProgress() {
			public void run(IProgressMonitor monitor)
					throws InvocationTargetException {
				monitor.beginTask(getTaskLabel(), total);
				try {
					for (IOperation operation : operations) {
						operation.run(monitor, model);
					}
				} catch (Throwable e) {
					throw new InvocationTargetException(e);
				} finally {
					monitor.done();
				}

			}
		};
		try {
			getContainer().run(true, false, op);
		} catch (InterruptedException e) {
			return false;
		} catch (InvocationTargetException e) {
			Throwable realException = e.getTargetException();
			MessageDialog.openError(getShell(), "Error",
					realException.getMessage());
			return false;
		}
		return true;
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

	protected abstract String getTaskLabel();

}

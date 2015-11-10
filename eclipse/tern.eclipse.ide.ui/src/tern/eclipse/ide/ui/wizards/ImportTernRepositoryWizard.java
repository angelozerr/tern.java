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
package tern.eclipse.ide.ui.wizards;

import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.Wizard;
import org.eclipse.ui.IImportWizard;
import org.eclipse.ui.IWorkbench;

import tern.eclipse.ide.core.IIDETernRepository;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;

/**
 * Standard workbench wizard for importing tern repository in the workspace as
 * simple project.
 * <p>
 * This class may be instantiated and used without further configuration; this
 * class is not intended to be subclassed.
 * </p>
 * <p>
 * Example:
 * 
 * <pre>
 * IIDETernRepository repository = ...
 * IWizard wizard = new ImportTernRepositoryWizard(repository);
 * wizard.init(workbench, selection);
 * WizardDialog dialog = new WizardDialog(shell, wizard);
 * dialog.open();
 * </pre>
 * 
 * During the call to <code>open</code>, the wizard dialog is presented to the
 * user. When the user hits Finish, a project is created.
 * </p>
 * 
 * @noextend This class is not intended to be subclassed by clients.
 */
public class ImportTernRepositoryWizard extends Wizard implements IImportWizard {

	private ImportTernRepositoryWizardPage mainPage;
	private final IIDETernRepository repository;

	public ImportTernRepositoryWizard(IIDETernRepository repository) {
		this.repository = repository;
	}

	@Override
	public void addPages() {
		super.addPages();
		mainPage = new ImportTernRepositoryWizardPage(repository);
		addPage(mainPage);
	}

	@Override
	public void init(IWorkbench workbench, IStructuredSelection selection) {
		setWindowTitle(TernUIMessages.ImportTernRepositoryWizard_title);
		setDefaultPageImageDescriptor(ImageResource.getImageDescriptor(ImageResource.IMG_LOGO)); // $NON-NLS-1$
	}

	@Override
	public boolean performFinish() {
		return mainPage.importRepository();
	}
}

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
package tern.eclipse.ide.ui.controls;

import java.util.ArrayList;
import java.util.Collection;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.preferences.DefaultScope;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;
import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.dialogs.IDialogSettings;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.viewers.ArrayContentProvider;
import org.eclipse.jface.viewers.CheckStateChangedEvent;
import org.eclipse.jface.viewers.CheckboxTableViewer;
import org.eclipse.jface.viewers.ICheckStateListener;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.jface.viewers.TableViewerColumn;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Table;

import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.preferences.TernCorePreferenceConstants;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.dialogs.EditRepositoryDialog;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.viewers.TernRepositoryLabelProvider;
import tern.repository.ITernRepository;
import tern.repository.TernRepository;
import tern.server.ITernModule;
import tern.utils.TernModuleHelper;

/**
 * Tern repository block.
 * 
 */
public class TernRepositoryBlock extends AbstractTableBlock {

	private CheckboxTableViewer repositoryViewer;
	private final IProject project;
	private TernModulesBlock modulesBlock;

	public TernRepositoryBlock(IProject project) {
		this.project = project;
	}

	public Control createControl(Composite ancestor) {

		Composite parent = new Composite(ancestor, SWT.BORDER);
		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		parent.setLayout(layout);
		Font font = ancestor.getFont();
		parent.setFont(font);
		parent.setLayoutData(new GridData(GridData.FILL_BOTH));

		createRepositoryTable(parent);
		createModulesTable(parent);

		Dialog.applyDialogFont(parent);
		return parent;
	}

	private void createRepositoryTable(Composite parent) {

		Table table = new Table(parent, SWT.CHECK | SWT.SINGLE | SWT.BORDER
				| SWT.FULL_SELECTION | SWT.V_SCROLL);

		GridData data = new GridData(GridData.FILL_BOTH);
		table.setLayoutData(data);
		table.setFont(parent.getFont());

		table.setHeaderVisible(true);
		table.setLinesVisible(false);

		repositoryViewer = new CheckboxTableViewer(table);

		// create name column
		TableViewerColumn nameColumn = new TableViewerColumn(repositoryViewer,
				SWT.NONE);
		nameColumn.getColumn().setWidth(100);
		nameColumn.getColumn().setResizable(true);
		nameColumn.getColumn().setText(
				TernUIMessages.TernRepositoryBlock_repositoryName);

		// create name column
		TableViewerColumn filenameColumn = new TableViewerColumn(
				repositoryViewer, SWT.NONE);
		filenameColumn.getColumn().setWidth(300);
		filenameColumn.getColumn().setResizable(true);
		filenameColumn.getColumn().setText(
				TernUIMessages.TernRepositoryBlock_filenameColumn);

		repositoryViewer.setLabelProvider(TernRepositoryLabelProvider
				.getInstance());
		repositoryViewer.setContentProvider(ArrayContentProvider.getInstance());

		addSelectionChangedListener(new ISelectionChangedListener() {

			@Override
			public void selectionChanged(SelectionChangedEvent event) {
				refreshModules();
			}

		});

		repositoryViewer.addCheckStateListener(new ICheckStateListener() {

			@Override
			public void checkStateChanged(CheckStateChangedEvent event) {
				ITernRepository repository = (ITernRepository) event
						.getElement();
				// check and select only one tern repository.
				checkAndSelect(repository);
			}
		});
		restoreColumnSettings();
	}

	public void addSelectionChangedListener(ISelectionChangedListener listener) {
		repositoryViewer.addSelectionChangedListener(listener);
	}

	private void createModulesTable(Composite parent) {
		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		parent.setLayout(layout);

		// create UI modules
		modulesBlock = new TernModulesBlock(project,
				TernUIMessages.TernRepositoryBlock_modules_desc);
		Control control = modulesBlock.createControl(parent);
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 1;
		control.setLayoutData(data);

	}

	private void refreshModules() {
		IStructuredSelection selection = (IStructuredSelection) repositoryViewer
				.getSelection();
		if (!selection.isEmpty()) {
			ITernRepository repository = (ITernRepository) selection
					.getFirstElement();
			refreshModules(repository);
		}
	}

	private void refreshModules(ITernRepository repository) {
		IScopeContext[] lookupOrder = new IScopeContext[] {
				InstanceScope.INSTANCE, DefaultScope.INSTANCE };
		String moduleNames = Platform.getPreferencesService().getString(
				TernCorePlugin.getDefault().getBundle().getSymbolicName(),
				TernCorePreferenceConstants.DEFAULT_TERN_MODULES,
				TernCorePreferenceConstants.DEFAULT_TERN_MODULES_VALUE,
				lookupOrder);
		modulesBlock.loadModules(repository, moduleNames.split(","));
	}

	public void setCheckedModules(String[] selectedModules) {
		modulesBlock.loadModules(getCurrentRepository(), selectedModules);
	}

	@Override
	protected Table getTable() {
		return repositoryViewer.getTable();
	}

	@Override
	protected IDialogSettings getDialogSettings() {
		return TernUIPlugin.getDefault().getDialogSettings();
	}

	@Override
	protected String getQualifier() {
		return TernUIPlugin.PLUGIN_ID + ".repository.";
	}

	public void loadRepositories() {
		ITernRepository checkedRepository = null;
		ITernRepository currentRepository = TernCorePlugin
				.getTernRepositoryManager().getRepository(project);
		// clone the list of tern repository.
		Collection<ITernRepository> repositories = new ArrayList<ITernRepository>();
		ITernRepository clonedRepository = null;
		for (ITernRepository repository : TernCorePlugin
				.getTernRepositoryManager().getRepositories()) {
			clonedRepository = repository.isDefault() ? repository
					: new TernRepository(repository.getName(),
							repository.getTernBaseDir(), repository.isDefault());
			if (repository.equals(currentRepository)) {
				checkedRepository = clonedRepository;
			}
			repositories.add(clonedRepository);
		}
		// refresh the viewer
		repositoryViewer.setInput(repositories);
		// check the default tern repository
		if (checkedRepository != null) {
			setCheckedRepository(checkedRepository);
		}
	}

	/**
	 * Check and select the given tern repository.
	 * 
	 * @param repository
	 *            the tern repository to check.
	 */
	public void setCheckedRepository(ITernRepository repository) {
		if (repository != null) {
			checkAndSelect(repository);
		}
	}

	/**
	 * Returns the checked tern repository.
	 * 
	 * @return the checked tern repository.
	 */
	public ITernRepository getCheckedRepository() {
		Object[] elements = repositoryViewer.getCheckedElements();
		return (ITernRepository) elements[0];
	}

	/**
	 * Create and add a new tern repository.
	 * 
	 * @param parentShell
	 */
	public void addRepository(Shell parentShell) {
		EditRepositoryDialog dialog = new EditRepositoryDialog(parentShell,
				getRepositories());
		if (dialog.open() == Window.OK) {
			ITernRepository newTernRepository = dialog.getRepository();
			if (newTernRepository != null) {
				getRepositories().add(newTernRepository);
				refresh();
			}
		}
	}

	/**
	 * Remove the current repository.
	 * 
	 * @param parentShell
	 */
	public void removeRepository(Shell parentShell) {
		if (MessageDialog.openConfirm(parentShell,
				TernUIMessages.TernRepositoryBlock_removeRepository_title,
				TernUIMessages.TernRepositoryBlock_removeRepository_message)) {
			ITernRepository repository = getCurrentRepository();
			if (repository != null) {
				getRepositories().remove(repository);
				refresh();
			}
		}
	}

	/**
	 * Refresh the current repository.
	 * 
	 */
	public void refreshRepository() {
		ITernRepository repository = getCurrentRepository();
		if (repository != null) {
			repository.refresh();
			refreshModules();
		}
	}

	/**
	 * Edit the current repository.
	 * 
	 * @param parentShell
	 */
	public void editRepository(Shell parentShell) {
		ITernRepository repository = getCurrentRepository();
		if (repository != null && !repository.isDefault()) {
			EditRepositoryDialog dialog = new EditRepositoryDialog(parentShell,
					getRepositories(), repository);
			if (dialog.open() == Window.OK) {
				repositoryViewer.refresh(repository);
				repository.refresh();
				refreshModules();
			}
		}
	}

	/**
	 * Returns the cloned tern repository.
	 * 
	 * @return
	 */
	private Collection<ITernRepository> getRepositories() {
		return (Collection<ITernRepository>) repositoryViewer.getInput();
	}

	/**
	 * Refresh tern repository and linked modules.
	 */
	private void refresh() {
		repositoryViewer.refresh();
		refreshModules();
	}

	/**
	 * Save repositories.
	 */
	public void saveRepositories() {
		// save repositories
		TernCorePlugin.getTernRepositoryManager().setRepositories(
				getRepositories());
		saveDefaultModules();
	}

	public void saveDefaultModules() {
		// save default modules
		new InstanceScope().getNode(
				TernCorePlugin.getDefault().getBundle().getSymbolicName()).put(
				TernCorePreferenceConstants.DEFAULT_TERN_MODULES,
				getDefaultModules());
	}

	private String getDefaultModules() {
		ITernModule[] modules = modulesBlock.getCheckedModules().toArray(
				ITernModule.EMPTY_MODULE);
		return TernModuleHelper.getModulesAsString(modules);
	}

	/**
	 * Returns the current repository.
	 * 
	 * @return the current repository.
	 */
	private ITernRepository getCurrentRepository() {
		IStructuredSelection selection = (IStructuredSelection) repositoryViewer
				.getSelection();
		if (selection.isEmpty()) {
			return null;
		}
		return (ITernRepository) selection.getFirstElement();
	}

	/**
	 * Check and select the single given tern repository.
	 * 
	 * @param repository
	 *            the repository to select and check.
	 */
	private void checkAndSelect(ITernRepository repository) {
		repositoryViewer.setCheckedElements(new Object[] { repository });
		repositoryViewer.setSelection(new StructuredSelection(repository));
	}

}

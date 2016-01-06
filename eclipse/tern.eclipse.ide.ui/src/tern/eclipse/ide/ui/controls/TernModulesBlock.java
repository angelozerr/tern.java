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
package tern.eclipse.ide.ui.controls;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.dialogs.IDialogSettings;
import org.eclipse.jface.viewers.ArrayContentProvider;
import org.eclipse.jface.viewers.CheckStateChangedEvent;
import org.eclipse.jface.viewers.CheckboxTableViewer;
import org.eclipse.jface.viewers.ICheckStateListener;
import org.eclipse.jface.viewers.IElementComparer;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.TableViewerColumn;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.jface.viewers.ViewerSorter;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.SashForm;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.TabFolder;
import org.eclipse.swt.widgets.TabItem;
import org.eclipse.swt.widgets.Table;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.internal.ui.controls.DependenciesPanel;
import tern.eclipse.ide.internal.ui.controls.DetailsPanel;
import tern.eclipse.ide.internal.ui.controls.OptionsPanel;
import tern.eclipse.ide.internal.ui.viewers.TernModuleVersionEditingSupport;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.viewers.TernModuleLabelProvider;
import tern.metadata.TernModuleMetadata;
import tern.repository.ITernRepository;
import tern.server.ITernModule;
import tern.server.ITernModuleConfigurable;
import tern.utils.StringUtils;
import tern.utils.TernModuleHelper;

/**
 * Block to select Tern plugins + JSON Type Definitions.
 * 
 */
public class TernModulesBlock extends AbstractTableBlock {

	private static final IElementComparer TERN_MODULES_COMPARER = new IElementComparer() {

		@Override
		public boolean equals(Object a, Object b) {
			return a.equals(b);
		}

		@Override
		public int hashCode(Object element) {
			return element.hashCode();
		}
	};

	private final String tableLabel;
	private final IProject project;

	private final Map<String, ITernModule> ternModules = new HashMap<String, ITernModule>();
	private CheckboxTableViewer tableViewer;
	private DetailsPanel detailsPanel;
	private DependenciesPanel dependenciesPanel;
	private OptionsPanel optionsPanel;
	private TabItem optionsTabItem;
	private TabFolder tabFolder;
	private TabItem detailsTabItem;
	private Button selectDependenciesCheckbox;

	private Collection<ITernModule> checkedModules;
	private boolean checkUpdating;

	public TernModulesBlock(IProject project, String tableLabel) {
		this.project = project;
		this.tableLabel = tableLabel;
	}

	public Control createControl(Composite ancestor) {

		Composite parent = new Composite(ancestor, SWT.NULL);
		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		parent.setLayout(layout);
		Font font = ancestor.getFont();
		parent.setFont(font);

		GridData data;
		if (tableLabel != null) {
			Composite header = new Composite(parent, SWT.NONE);
			data = new GridData();
			data.horizontalSpan = 2;
			header.setLayoutData(data);
			header.setLayout(new GridLayout(2, false));

			// Create description
			Label tableLabel = new Label(header, SWT.NONE);
			tableLabel.setText(this.tableLabel);
			tableLabel.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
			tableLabel.setFont(font);
			// Create dependencies checkbox
			selectDependenciesCheckbox = new Button(header, SWT.CHECK);
			selectDependenciesCheckbox.setSelection(true);
		}

		SashForm sashForm = new SashForm(parent, SWT.HORIZONTAL | SWT.SMOOTH);
		data = new GridData(SWT.FILL, SWT.FILL, true, true);
		sashForm.setLayoutData(data);

		createModulesMaster(sashForm);
		createModulesDetails(sashForm);

		Dialog.applyDialogFont(parent);
		return parent;
	}

	/**
	 * Create table of tern modules.
	 * 
	 * @param ancestor
	 */
	private void createModulesMaster(Composite ancestor) {
		Composite parent = new Composite(ancestor, SWT.NULL);
		GridLayout layout = new GridLayout();
		layout.numColumns = 2;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		parent.setLayout(layout);
		Font font = ancestor.getFont();
		parent.setFont(font);

		Table table = new Table(parent, SWT.CHECK | SWT.BORDER
				| SWT.FULL_SELECTION | SWT.V_SCROLL);

		GridData data = new GridData(GridData.FILL_BOTH);
		data.widthHint = 350;
		data.heightHint = 400;
		table.setLayoutData(data);
		table.setFont(parent.getFont());

		table.setHeaderVisible(true);
		table.setLinesVisible(true);

		tableViewer = new CheckboxTableViewer(table);

		// create name column
		TableViewerColumn nameColumn = new TableViewerColumn(tableViewer,
				SWT.NONE);
		nameColumn.getColumn().setWidth(180);
		nameColumn.getColumn().setResizable(true);
		nameColumn.getColumn().setText(
				TernUIMessages.TernModulesBlock_moduleName);
		nameColumn.getColumn().addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				sortByName();
			}
		});

		// create version column
		TableViewerColumn versionColumn = new TableViewerColumn(tableViewer,
				SWT.NONE);
		versionColumn.getColumn().setWidth(100);
		versionColumn.getColumn().setResizable(true);
		versionColumn.getColumn().setText(
				TernUIMessages.TernModulesBlock_moduleVersion);
		final TernModuleVersionEditingSupport versionEditiongSupport = new TernModuleVersionEditingSupport(
				tableViewer);
		versionColumn.setEditingSupport(versionEditiongSupport);

		tableViewer.setComparer(TERN_MODULES_COMPARER);
		tableViewer.setLabelProvider(TernModuleLabelProvider.getInstance());
		tableViewer.setContentProvider(ArrayContentProvider.getInstance());

		// when a module is checked and dependencies checkbox is checked, tern
		// module dependencies must be selected too
		addCheckStateListener(new ICheckStateListener() {

			@Override
			public void checkStateChanged(CheckStateChangedEvent e) {
				if (checkUpdating) {
					return;
				}
				try {
					checkUpdating = true;
					ITernModule module = ((ITernModule) e.getElement());
					// update checked modules list
					updateCheckedModules(module, e.getChecked());
					if (e.getChecked() && isSelectDependencies()) {
						TernModuleMetadata metadata = module.getMetadata();
						if (metadata != null) {
							ITernModule dependencyModule = null;
							// loop for each dependencies and check it if needed
							for (String moduleName : metadata
									.getDependencies(module.getVersion())) {
								dependencyModule = ternModules.get(moduleName);
								if (dependencyModule != null) {
									// update module selection
									if (!tableViewer
											.getChecked(dependencyModule)) {
										tableViewer.setChecked(
												dependencyModule, true);
									}
									// update checked modules list
									updateCheckedModules(dependencyModule, true);
									if (dependencyModule instanceof ITernModuleConfigurable) {
										ITernModuleConfigurable configurable = (ITernModuleConfigurable) dependencyModule;
										if (configurable.hasVersion()) {
											// update version
											String version = configurable
													.getModule(moduleName)
													.getVersion();
											versionEditiongSupport.setValue(
													dependencyModule, version);
										}
									}
								}
							}
						}
					}
				} finally {
					checkUpdating = false;
				}
			}
		});

		// when a module is selected, details, dependencies, options tabs must
		// be
		// refreshed.
		addSelectionChangedListener(new ISelectionChangedListener() {

			@Override
			public void selectionChanged(SelectionChangedEvent e) {
				if (!e.getSelection().isEmpty()) {
					ITernModule module = (ITernModule) ((IStructuredSelection) e
							.getSelection()).getFirstElement();
					refreshModule(module);
				} else {
					refreshModule(null);
				}
			}
		});
		restoreColumnSettings();
	}

	private void createModulesDetails(Composite parent) {

		// Create tab folder.
		tabFolder = new TabFolder(parent, SWT.NONE);
		GridData data = new GridData(GridData.FILL_HORIZONTAL);
		data.heightHint = 80;
		tabFolder.setLayoutData(data);

		// create details tab
		this.detailsPanel = new DetailsPanel(tabFolder, project);
		detailsTabItem = new TabItem(tabFolder, SWT.NULL);
		detailsTabItem.setControl(this.detailsPanel);
		detailsTabItem.setText(TernUIMessages.TernModulesBlock_detailsTabLabel);

		// create dependencies tab
		this.dependenciesPanel = new DependenciesPanel(tabFolder, project);
		TabItem dependenciesTabItem = new TabItem(tabFolder, SWT.NULL);
		dependenciesTabItem.setControl(this.dependenciesPanel);
		dependenciesTabItem
				.setText(TernUIMessages.TernModulesBlock_dependenciesTabLabel);

		// create options panel.
		this.optionsPanel = new OptionsPanel(tabFolder, project);
	}

	/**
	 * Refresh tab items with the given module information
	 * 
	 * @param module
	 */
	private void refreshModule(ITernModule module) {
		if (TernModuleHelper.hasOptions(module)) {
			// module has options, create options tab if needed
			if (optionsTabItem == null) {
				this.optionsTabItem = new TabItem(tabFolder, SWT.NULL);
				optionsTabItem.setControl(this.optionsPanel);
				optionsTabItem
						.setText(TernUIMessages.TernModulesBlock_optionsTabLabel);
			}
			optionsPanel.refresh(module);

		} else {
			// module has no options, don't display options tab
			if (optionsTabItem != null) {
				optionsTabItem.dispose();
			}
			optionsTabItem = null;
		}

		detailsPanel.refresh(module);
		dependenciesPanel.refresh(module);
		// select the details tab.
		tabFolder.setSelection(detailsTabItem);
	}

	public void addSelectionChangedListener(ISelectionChangedListener listener) {
		tableViewer.addSelectionChangedListener(listener);
	}

	public void removeSelectionChangedListener(
			ISelectionChangedListener listener) {
		tableViewer.removeSelectionChangedListener(listener);
	}

	public void addCheckStateListener(ICheckStateListener listener) {
		tableViewer.addCheckStateListener(listener);
	}

	public void removeCheckStateListener(ICheckStateListener listener) {
		tableViewer.removeCheckStateListener(listener);
	}

	/**
	 * Sorts by name.
	 */
	private void sortByName() {
		tableViewer.setSorter(new ViewerSorter() {
			@Override
			public int compare(Viewer viewer, Object e1, Object e2) {
				if ((e1 instanceof ITernModule) && (e2 instanceof ITernModule)) {
					ITernModule left = (ITernModule) e1;
					ITernModule right = (ITernModule) e2;
					return getNameOrLabel(left).compareToIgnoreCase(
							getNameOrLabel(right));
				}
				return super.compare(viewer, e1, e2);
			}

			private String getNameOrLabel(ITernModule module) {
				TernModuleMetadata metadata = module.getMetadata();
				if (metadata == null) {
					return module.getName();
				}
				return StringUtils.isEmpty(metadata.getLabel()) ? module
						.getName() : metadata.getLabel();
			}

			@Override
			public boolean isSorterProperty(Object element, String property) {
				return true;
			}
		});
	}

	public void setTernModules(ITernModule[] modules) {
		ternModules.clear();
		for (ITernModule module : modules) {
			if (module instanceof ITernModuleConfigurable) {
				ITernModuleConfigurable configurable = (ITernModuleConfigurable) module;
				if (!configurable.hasVersion()) {
					ternModules.put(module.getName(), module);
				} else {
					Collection<ITernModule> mods = configurable.getModules();
					for (ITernModule mod : mods) {
						ternModules.put(mod.getName(), module);
					}
				}
			} else {
				ternModules.put(module.getName(), module);
			}
		}
		tableViewer.setInput(modules);
	}

	public Collection<ITernModule> getCheckedModules() {
		if (checkedModules != null) {
			return checkedModules;
		}
		return Collections.emptyList();
	}

	public void setCheckedModules(Collection<ITernModule> checkedModules) {
		this.checkedModules = checkedModules;
		tableViewer.setCheckedElements(checkedModules.toArray());
	}

	public void setCheckedModule(ITernModule module, boolean selected) {
		updateCheckedModules(module, selected);
		tableViewer.setChecked(module, selected);
	}

	private void updateCheckedModules(ITernModule module, boolean checked) {
		if (checked) {
			if (!checkedModules.contains(module)) {
				checkedModules.add(module);
			}
		} else {
			checkedModules.remove(module);
		}
	}

	@Override
	protected void setSortColumn(int column) {
		switch (column) {
		case 1:
			sortByName();
			break;
		}
		super.setSortColumn(column);
	}

	@Override
	protected Table getTable() {
		return tableViewer.getTable();
	}

	@Override
	protected IDialogSettings getDialogSettings() {
		return TernUIPlugin.getDefault().getDialogSettings();
	}

	@Override
	protected String getQualifier() {
		return TernUIPlugin.PLUGIN_ID + ".modules.";
	}

	/**
	 * Load plugins from tern project.
	 * 
	 * @param moduleNames
	 * @param repository
	 */
	public void loadModules() {
		try {

			// load modules from the given tern project
			IIDETernProject ternProject = getTernProject();
			if (ternProject != null) {

				// Add list of tern modules from the repository and local
				List<ITernModule> allModules = ternProject.getAllModules();
				// Group by type
				allModules = TernModuleHelper.groupByType(allModules);

				// checked modules
				List<ITernModule> checkedModules = TernCorePlugin
						.getTernRepositoryManager().getCheckedModules(
								ternProject, allModules);
				refresh(allModules, checkedModules);
				/*
				 * if (checkedModules.size() > 0) { ITernModule firstModule =
				 * checkedModules.get(0); tableViewer.setSelection(new
				 * StructuredSelection( firstModule)); }
				 */
			}

		} catch (Throwable e) {
			Trace.trace(Trace.SEVERE, "Error while loading plugins.", e);
		}
	}

	/**
	 * Load modules from the given tern repository and check the modules with
	 * the given checked module names.
	 * 
	 * @param repository
	 *            tern repository which hosts tern modules.
	 * @param checkedModuleNames
	 *            module names to check.
	 */
	public void loadModules(ITernRepository repository,
			String[] checkedModuleNames) {
		try {
			// load modules from the given repository
			List<ITernModule> allModules = new ArrayList<ITernModule>(
					Arrays.asList(repository.getModules()));
			// Group by type
			List<ITernModule> groupedModules = TernModuleHelper
					.groupByType(allModules);
			// checked modules
			List<ITernModule> checkedModules = TernCorePlugin
					.getTernRepositoryManager().getCheckedModules(
							checkedModuleNames, allModules, groupedModules);
			refresh(groupedModules, checkedModules);
		} catch (Throwable e) {
			Trace.trace(Trace.SEVERE, "Error while loading plugins.", e);
		}
	}

	public void refresh(Collection<ITernModule> allModules,
			Collection<ITernModule> checkedModules) {
		this.setTernModules(allModules.toArray(ITernModule.EMPTY_MODULE));
		this.setCheckedModules(checkedModules);
	}

	/**
	 * Returns true if tern modules dependencies must be select when a tern
	 * module is selected and false otherwise.
	 * 
	 * @return true if tern modules dependencies must be select when a tern
	 *         module is selected and false otherwise.
	 */
	private boolean isSelectDependencies() {
		return selectDependenciesCheckbox != null
				&& selectDependenciesCheckbox.getSelection();
	}

	/**
	 * Returns the tern project and null otherwise.
	 * 
	 * @return the tern project and null otherwise.
	 * 
	 * @throws CoreException
	 */
	public IIDETernProject getTernProject() throws CoreException {
		return project != null ? TernCorePlugin.getTernProject(project) : null;
	}

	/**
	 * Returns the eclipse project and null otherwise.
	 * 
	 * @return the eclipse project and null otherwise.
	 */
	public IProject getProject() {
		return project;
	}

	public void setEnabled(boolean enabled) {
		getTable().setEnabled(enabled);
	}

	public boolean isCheckUpdating() {
		return checkUpdating;
	}

}

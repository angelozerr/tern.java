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
package tern.eclipse.ide.ui.controls;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.dialogs.IDialogSettings;
import org.eclipse.jface.viewers.ArrayContentProvider;
import org.eclipse.jface.viewers.CheckboxTableViewer;
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
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.TabFolder;
import org.eclipse.swt.widgets.TabItem;
import org.eclipse.swt.widgets.Table;

import tern.TernException;
import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.internal.ui.controls.DependenciesPanel;
import tern.eclipse.ide.internal.ui.controls.DetailsPanel;
import tern.eclipse.ide.internal.ui.controls.OptionsPanel;
import tern.eclipse.ide.internal.ui.properties.AbstractTableBlock;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.viewers.TernFacetLabelProvider;
import tern.eclipse.ide.ui.viewers.TernFacetVersionEditingSupport;
import tern.server.ITernDef;
import tern.server.ITernFacet;
import tern.server.ITernPlugin;
import tern.utils.StringUtils;
import tern.utils.TernFacetHelper;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

/**
 * Block to select Tern plugins + JSON Type Definitions.
 * 
 */
public class TernFacetsBlock extends AbstractTableBlock {

	// private static final String SASH2W1 = "sash.2.weight.1";
	// private static final String SASH2W2 = "sash.2.weight.2";

	private final String tableLabel;
	private Composite fControl;
	private final List<ITernFacet> ternFacets = new ArrayList<ITernFacet>();
	private CheckboxTableViewer tableViewer;
	private DetailsPanel detailsPanel;
	private DependenciesPanel dependenciesPanel;
	private OptionsPanel optionsPanel;

	public TernFacetsBlock(String tableLabel) {
		this.tableLabel = tableLabel;
	}

	public void createControl(Composite ancestor) {

		Composite parent = new Composite(ancestor, SWT.NULL);
		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		parent.setLayout(layout);
		Font font = ancestor.getFont();
		parent.setFont(font);
		fControl = parent;

		GridData data;
		if (tableLabel != null) {
			Label tableLabel = new Label(parent, SWT.NONE);
			tableLabel.setText(this.tableLabel);
			data = new GridData();
			data.horizontalSpan = 2;
			tableLabel.setLayoutData(data);
			tableLabel.setFont(font);
		}

		SashForm sform2 = new SashForm(parent, SWT.HORIZONTAL | SWT.SMOOTH);
		data = new GridData(SWT.FILL, SWT.FILL, true, true);
		sform2.setLayoutData(data);

		createFacetsMaster(sform2);
		createFacetsDetails(sform2);

		Dialog.applyDialogFont(parent);
	}

	/**
	 * Create table of tern facets.
	 * 
	 * @param ancestor
	 */
	private void createFacetsMaster(Composite ancestor) {
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
		nameColumn.getColumn()
				.setText(TernUIMessages.TernFacetsBlock_facetName);
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
				TernUIMessages.TernFacetsBlock_facetVersion);
		versionColumn.setEditingSupport(new TernFacetVersionEditingSupport(
				tableViewer));

		tableViewer.setLabelProvider(new TernFacetLabelProvider());
		tableViewer.setContentProvider(ArrayContentProvider.getInstance());

		addSelectionChangedListener(new ISelectionChangedListener() {

			@Override
			public void selectionChanged(SelectionChangedEvent e) {
				if (!e.getSelection().isEmpty()) {
					ITernFacet facet = (ITernFacet) ((IStructuredSelection) e
							.getSelection()).getFirstElement();
					refreshFacet(facet);
				} else {
					refreshFacet(null);
				}
			}
		});
		restoreColumnSettings();
	}

	private void createFacetsDetails(Composite parent) {

		// Create tab folder.
		TabFolder tabFolder = new TabFolder(parent, SWT.NONE);
		GridData data = new GridData(GridData.FILL_HORIZONTAL);
		data.heightHint = 80;
		tabFolder.setLayoutData(data);

		// create details tab
		this.detailsPanel = new DetailsPanel(tabFolder);
		TabItem detailsTabItem = new TabItem(tabFolder, SWT.NULL);
		detailsTabItem.setControl(this.detailsPanel);
		detailsTabItem.setText(TernUIMessages.TernFacetsBlock_detailsTabLabel);

		// create dependencies tab
		this.dependenciesPanel = new DependenciesPanel(tabFolder);
		TabItem dependenciesTabItem = new TabItem(tabFolder, SWT.NULL);
		dependenciesTabItem.setControl(this.dependenciesPanel);
		dependenciesTabItem
				.setText(TernUIMessages.TernFacetsBlock_dependenciesTabLabel);

		// create options tab
		this.optionsPanel = new OptionsPanel(tabFolder);
		TabItem optionsTabItem = new TabItem(tabFolder, SWT.NULL);
		optionsTabItem.setControl(this.optionsPanel);
		optionsTabItem.setText(TernUIMessages.TernFacetsBlock_optionsTabLabel);
	}

	private void refreshFacet(ITernFacet facet) {
		detailsPanel.refresh(facet);
		dependenciesPanel.refresh(facet);
		optionsPanel.refresh(facet);
	}

	public void addSelectionChangedListener(ISelectionChangedListener listener) {
		tableViewer.addSelectionChangedListener(listener);
	}

	public void removeSelectionChangedListener(
			ISelectionChangedListener listener) {
		tableViewer.removeSelectionChangedListener(listener);
	}

	/**
	 * Sorts by name.
	 */
	private void sortByName() {
		tableViewer.setSorter(new ViewerSorter() {
			@Override
			public int compare(Viewer viewer, Object e1, Object e2) {
				if ((e1 instanceof ITernFacet) && (e2 instanceof ITernFacet)) {
					ITernFacet left = (ITernFacet) e1;
					ITernFacet right = (ITernFacet) e2;
					return left.getName().compareToIgnoreCase(right.getName());
				}
				return super.compare(viewer, e1, e2);
			}

			@Override
			public boolean isSorterProperty(Object element, String property) {
				return true;
			}
		});
	}

	public Control getControl() {
		return fControl;
	}

	protected void setTernFacets(ITernFacet[] vms) {
		ternFacets.clear();
		for (ITernFacet element : vms) {
			ternFacets.add(element);
		}
		tableViewer.setInput(ternFacets);
		// tableViewer.refresh();
	}

	public Object[] getCheckedFacets() {
		return tableViewer.getCheckedElements();
	}

	public void setCheckedFacets(Object[] selectedFacets) {
		tableViewer.setCheckedElements(selectedFacets);

		/*
		 * if (selectedFacets == null) { setSelection(new
		 * StructuredSelection()); } else { setSelection(new
		 * StructuredSelection(selectedFacets)); }
		 */
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
		return "";
	}

	/**
	 * Load plugins from tern project.
	 */
	public void loadFacets(IProject project) {
		try {
			// Load list of Tern Plugins + JSON Type Definitions.
			List<ITernFacet> allFacets = new ArrayList<ITernFacet>();
			ITernFacet[] defaultFacets = TernCorePlugin
					.getTernServerTypeManager().getTernFacetsGroupByType();
			for (ITernFacet defaultFacet : defaultFacets) {
				allFacets.add(defaultFacet);
			}
			List<ITernFacet> initialFacets = null;
			if (project != null) {
				// Select Tern Plugins + JSON Type Definitions according
				// settings of
				// the project.
				IDETernProject ternProject = IDETernProject
						.getTernProject(project);
				initialFacets = new ArrayList<ITernFacet>();
				// Tern Plugins
				JsonObject plugins = ternProject.getPlugins();
				for (String name : plugins.names()) {
					ITernPlugin plugin = TernCorePlugin
							.getTernServerTypeManager().findTernPlugin(
									name.toString());
					if (plugin != null) {
						if (StringUtils.isEmpty(plugin.getVersion())) {
							initialFacets.add(plugin);
						} else {
							try {
								initialFacets.add(TernFacetHelper.findWrapper(
										plugin, allFacets));
							} catch (TernException e) {
								Trace.trace(Trace.SEVERE,
										"Error while finding wrapper.", e);
							}
						}
					}
				}
				// JSON Type Definitions
				JsonArray defs = ternProject.getLibs();
				for (JsonValue name : defs) {
					ITernDef def = TernCorePlugin.getTernServerTypeManager()
							.findTernDef(name.asString());
					if (StringUtils.isEmpty(def.getVersion())) {
						initialFacets.add(def);
					} else {
						try {
							initialFacets.add(TernFacetHelper.findWrapper(def,
									allFacets));
						} catch (TernException e) {
							Trace.trace(Trace.SEVERE,
									"Error while finding wrapper.", e);
						}
					}
				}
			}
			this.setTernFacets(allFacets.toArray(ITernFacet.EMPTY_FACET));
			if (initialFacets != null) {
				this.setCheckedFacets(initialFacets.toArray());
			}

		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE, "Error while loading plugins.", e);
		}
	}
}

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
import org.eclipse.jface.dialogs.IDialogSettings;
import org.eclipse.jface.viewers.CheckboxTableViewer;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.jface.viewers.ViewerSorter;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Table;
import org.eclipse.swt.widgets.TableColumn;

import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.internal.ui.properties.AbstractTableBlock;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.viewers.TernFacetContentProvider;
import tern.eclipse.ide.ui.viewers.TernFacetLabelProvider;
import tern.server.ITernDef;
import tern.server.ITernFacet;
import tern.server.ITernPlugin;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

/**
 * Block to select Tern plugins + JSON Type Definitions.
 * 
 */
public class TernFacetsBlock extends AbstractTableBlock {

	private final String tableLabel;
	private Composite fControl;
	private final List<ITernFacet> ternFacets = new ArrayList<ITernFacet>();
	private CheckboxTableViewer tableViewer;

	public TernFacetsBlock(String tableLabel) {
		this.tableLabel = tableLabel;
	}

	public void createControl(Composite ancestor) {

		Composite parent = new Composite(ancestor, SWT.NULL);
		GridLayout layout = new GridLayout();
		layout.numColumns = 2;
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

		Table table = new Table(parent, SWT.CHECK | SWT.BORDER
				| SWT.FULL_SELECTION | SWT.V_SCROLL);

		data = new GridData(GridData.FILL_BOTH);
		data.widthHint = 450;
		table.setLayoutData(data);
		table.setFont(font);

		table.setHeaderVisible(true);
		table.setLinesVisible(true);

		TableColumn column1 = new TableColumn(table, SWT.NONE);
		column1.setWidth(180);
		column1.setResizable(true);
		column1.setText(TernUIMessages.TernFacetsBlock_facetName);
		column1.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				sortByName();
			}
		});

		TableColumn column2 = new TableColumn(table, SWT.NONE);
		column2.setWidth(180);
		column2.setResizable(true);
		column2.setText(TernUIMessages.TernFacetsBlock_facetPath);
		column2.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				sortByPath();
			}
		});

		tableViewer = new CheckboxTableViewer(table);
		tableViewer.setLabelProvider(new TernFacetLabelProvider());
		tableViewer
				.setContentProvider(new TernFacetContentProvider(ternFacets));

		final Label descriptionLabel = new Label(parent, SWT.NONE);
		descriptionLabel.setText("");
		data = new GridData(GridData.FILL_HORIZONTAL);
		data.horizontalSpan = 2;
		descriptionLabel.setLayoutData(data);
		descriptionLabel.setFont(font);

		addSelectionChangedListener(new ISelectionChangedListener() {

			@Override
			public void selectionChanged(SelectionChangedEvent e) {
				descriptionLabel.setText("");
				if (!e.getSelection().isEmpty()) {
					ITernFacet facet = (ITernFacet) ((IStructuredSelection) e
							.getSelection()).getFirstElement();
					String description = TernUIPlugin
							.getTernDescriptorManager().getDescription(
									facet.getName());
					if (description != null) {
						descriptionLabel.setText(description);
					}
				}
			}
		});
		restoreColumnSettings();
	}

	public void addSelectionChangedListener(ISelectionChangedListener listener) {
		tableViewer.addSelectionChangedListener(listener);
	}

	public void removeSelectionChangedListener(
			ISelectionChangedListener listener) {
		tableViewer.removeSelectionChangedListener(listener);
	}

	/**
	 * Sorts by type, and name within type.
	 */
	// private void sortByType() {
	// tableViewer.setSorter(new ViewerSorter() {
	// @Override
	// public int compare(Viewer viewer, Object e1, Object e2) {
	// ITernPlugin left = (ITernPlugin) e1;
	// ITernPlugin right = (ITernPlugin) e2;
	// return left
	// .getProcessorType()
	// .getLabel()
	// .compareToIgnoreCase(
	// right.getProcessorType().getLabel());
	// }
	//
	// @Override
	// public boolean isSorterProperty(Object element, String property) {
	// return true;
	// }
	// });
	// }

	private void sortByPath() {
		tableViewer.setSorter(new ViewerSorter() {
			@Override
			public int compare(Viewer viewer, Object e1, Object e2) {
				ITernFacet left = (ITernFacet) e1;
				ITernFacet right = (ITernFacet) e2;
				return left.getPath().compareToIgnoreCase(right.getPath());
			}

			@Override
			public boolean isSorterProperty(Object element, String property) {
				return true;
			}
		});
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
		// case 2:
		// sortByType();
		// break;
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
					.getTernServerTypeManager().getTernFacets();
			for (ITernFacet defaultFacet : defaultFacets) {
				allFacets.add(defaultFacet);
			}
			this.setTernFacets(allFacets.toArray(ITernFacet.EMPTY_FACET));
			if (project != null) {
				// Select Tern Plugins + JSON Type Definitions according
				// settings of
				// the project.
				IDETernProject ternProject = IDETernProject
						.getTernProject(project);
				List<ITernFacet> initialFacets = new ArrayList<ITernFacet>();
				// Tern Plugins
				JsonObject plugins = ternProject.getPlugins();
				for (String name : plugins.names()) {
					ITernPlugin plugin = TernCorePlugin
							.getTernServerTypeManager().findTernPlugin(
									name.toString());
					if (plugin != null) {
						initialFacets.add(plugin);
					}
				}
				// JSON Type Definitions
				JsonArray defs = ternProject.getLibs();
				for (JsonValue name : defs) {
					ITernDef def = TernCorePlugin.getTernServerTypeManager()
							.findTernDef(name.asString());
					if (def != null) {
						initialFacets.add(def);
					}
				}
				this.setCheckedFacets(initialFacets.toArray());
			}

		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE, "Error while loading plugins.", e);
		}
	}
}

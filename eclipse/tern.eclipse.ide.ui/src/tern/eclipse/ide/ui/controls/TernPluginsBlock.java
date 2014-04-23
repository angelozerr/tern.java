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
import org.eclipse.jface.viewers.IStructuredContentProvider;
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
import org.json.simple.JSONObject;

import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.internal.ui.properties.AbstractTableBlock;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.viewers.TernPluginLabelProvider;
import tern.server.ITernPlugin;

/**
 * Table of Tern plugins.
 * 
 */
public class TernPluginsBlock extends AbstractTableBlock {

	private final String tableLabel;
	private Composite fControl;
	private final List<ITernPlugin> ternPlugins = new ArrayList<ITernPlugin>();
	private CheckboxTableViewer tableViewer;

	public TernPluginsBlock(String tableLabel) {
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
		column1.setText(TernUIMessages.TernPluginsBlock_pluginName);
		column1.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				sortByName();
			}
		});

		TableColumn column2 = new TableColumn(table, SWT.NONE);
		column2.setWidth(180);
		column2.setResizable(true);
		column2.setText(TernUIMessages.TernPluginsBlock_pluginPath);
		column2.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				sortByPath();
			}
		});

		tableViewer = new CheckboxTableViewer(table);
		tableViewer.setLabelProvider(new TernPluginLabelProvider());
		tableViewer.setContentProvider(new ProcessorsContentProvider());

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
				ITernPlugin plugin = (ITernPlugin) ((IStructuredSelection) e
						.getSelection()).getFirstElement();
				String description = TernUIPlugin.getTernDescriptorManager()
						.getDescription(plugin.getName());
				if (description != null) {
					descriptionLabel.setText(description);
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
				ITernPlugin left = (ITernPlugin) e1;
				ITernPlugin right = (ITernPlugin) e2;
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
				if ((e1 instanceof ITernPlugin) && (e2 instanceof ITernPlugin)) {
					ITernPlugin left = (ITernPlugin) e1;
					ITernPlugin right = (ITernPlugin) e2;
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

	protected void setTernPlugins(ITernPlugin[] vms) {
		ternPlugins.clear();
		for (ITernPlugin element : vms) {
			ternPlugins.add(element);
		}
		tableViewer.setInput(ternPlugins);
		// tableViewer.refresh();
	}

	public Object[] getCheckedPlugins() {
		return tableViewer.getCheckedElements();
	}

	public void setCheckedPlugins(Object[] selectedPlugins) {
		tableViewer.setCheckedElements(selectedPlugins);

		/*
		 * if (selectedPlugins == null) { setSelection(new
		 * StructuredSelection()); } else { setSelection(new
		 * StructuredSelection(selectedPlugins)); }
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

	private class ProcessorsContentProvider implements
			IStructuredContentProvider {
		public Object[] getElements(Object input) {
			return ternPlugins.toArray();
		}

		public void inputChanged(Viewer viewer, Object oldInput, Object newInput) {
		}

		public void dispose() {
		}
	}

	@Override
	protected String getQualifier() {
		return "";
	}

	/**
	 * Load plugins from tern project.
	 */
	public void loadPlugins(IProject project) {
		try {
			// Load list of tern plugins
			List<ITernPlugin> allPlugins = new ArrayList<ITernPlugin>();
			ITernPlugin[] defaultPlugins = TernCorePlugin
					.getTernServerTypeManager().getTernPlugins();
			for (ITernPlugin defaultPlugin : defaultPlugins) {
				allPlugins.add(defaultPlugin);
			}
			this.setTernPlugins(allPlugins.toArray(ITernPlugin.EMPTY_PLUGIN));
			// Select tern plugin
			if (project != null) {
				IDETernProject ternProject = IDETernProject
						.getTernProject(project);
				JSONObject plugins = ternProject.getPlugins();
				List<ITernPlugin> initialPlugins = new ArrayList<ITernPlugin>();
				for (Object name : plugins.keySet()) {
					ITernPlugin plugin = TernCorePlugin
							.getTernServerTypeManager().findTernPlugin(
									name.toString());
					if (plugin != null) {
						initialPlugins.add(plugin);
					}
				}
				this.setCheckedPlugins(initialPlugins.toArray());
			}

		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE, "Error while loading plugins.", e);
		}
	}
}

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
import org.eclipse.jface.viewers.ITableLabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.jface.viewers.ViewerSorter;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.graphics.Image;
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
import tern.server.ITernPlugin;

/**
 * Table of Tern plugins.
 * 
 */
public class TernPluginsBlock extends AbstractTableBlock {

	private Composite fControl;
	private final List<ITernPlugin> ternPlugins = new ArrayList<ITernPlugin>();
	private CheckboxTableViewer tableViewer;

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

		Label tableLabel = new Label(parent, SWT.NONE);
		tableLabel.setText(TernUIMessages.TernPluginsBlock_desc);
		data = new GridData();
		data.horizontalSpan = 2;
		tableLabel.setLayoutData(data);
		tableLabel.setFont(font);

		Table fTable = new Table(parent, SWT.CHECK | SWT.BORDER
				| SWT.FULL_SELECTION | SWT.V_SCROLL);

		data = new GridData(GridData.FILL_BOTH);
		data.widthHint = 450;
		fTable.setLayoutData(data);
		fTable.setFont(font);

		fTable.setHeaderVisible(true);
		fTable.setLinesVisible(true);

		TableColumn column1 = new TableColumn(fTable, SWT.NONE);
		column1.setWidth(180);
		column1.setResizable(true);
		column1.setText(TernUIMessages.TernPluginsBlock_pluginName);
		column1.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				sortByName();
			}
		});

		TableColumn column2 = new TableColumn(fTable, SWT.NONE);
		column2.setWidth(180);
		column2.setResizable(true);
		column2.setText(TernUIMessages.TernPluginsBlock_pluginPath);
		column2.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				sortByPath();
			}
		});

		tableViewer = new CheckboxTableViewer(fTable);
		tableViewer.setLabelProvider(new TernPluginabelProvider());
		tableViewer.setContentProvider(new ProcessorsContentProvider());

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

	private static class TernPluginabelProvider extends LabelProvider implements
			ITableLabelProvider {
		public String getColumnText(Object element, int columnIndex) {
			if (element instanceof ITernPlugin) {
				ITernPlugin install = (ITernPlugin) element;
				switch (columnIndex) {
				case 0:
					return install.getName();
				case 1:
					return install.getPath();
				}
			}
			return element.toString();
		}

		public Image getColumnImage(Object element, int columnIndex) {
			return null;
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

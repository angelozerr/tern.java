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
package tern.eclipse.ide.internal.ui.controls;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.eclipse.core.resources.IProject;
import org.eclipse.jface.viewers.ArrayContentProvider;
import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.jface.viewers.TableViewerColumn;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Table;

import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.viewers.TernModuleLabelProvider;
import tern.metadata.TernModuleMetadata;
import tern.server.ITernModule;

/**
 * Display dependencies of the tern module.
 *
 */
public class TernModuleDependenciesPanel extends AbstractTernModulePanel {

	public TernModuleDependenciesPanel(Composite parent, ITernModule module,
			IProject project) {
		super(parent, module, project);
	}

	@Override
	protected void createUI(Composite parent, ITernModule module,
			IProject project) {

		GridLayout layout = new GridLayout(1, false);
		super.setLayout(layout);

		Table table = new Table(parent, SWT.BORDER | SWT.FULL_SELECTION
				| SWT.V_SCROLL);

		GridData data = new GridData(GridData.FILL_BOTH);
		table.setLayoutData(data);
		table.setFont(parent.getFont());

		table.setHeaderVisible(true);
		table.setLinesVisible(true);

		TableViewer tableViewer = new TableViewer(table);

		// create name column
		TableViewerColumn nameColumn = new TableViewerColumn(tableViewer,
				SWT.NONE);
		nameColumn.getColumn().setWidth(180);
		nameColumn.getColumn().setResizable(true);
		nameColumn.getColumn().setText(
				TernUIMessages.TernModulesBlock_moduleName);

		List<ITernModule> ternModules = new ArrayList<ITernModule>();
		TernModuleMetadata metadata = module.getMetadata();
		if (metadata != null) {
			ITernModule dependencyModule = null;
			Collection<String> dependencies = metadata.getDependencies(module
					.getVersion());
			for (String dependency : dependencies) {
				// try plugin
				dependencyModule = TernCorePlugin.getTernServerTypeManager()
						.findTernPlugin(dependency);
				if (dependencyModule == null) {
					// try def
					dependencyModule = TernCorePlugin
							.getTernServerTypeManager().findTernDef(dependency);
				}
				if (dependencyModule != null) {
					ternModules.add(dependencyModule);
				}
			}
		}

		tableViewer.setLabelProvider(new TernModuleLabelProvider());
		tableViewer.setContentProvider(ArrayContentProvider.getInstance());
		tableViewer.setInput(ternModules);

	}
}

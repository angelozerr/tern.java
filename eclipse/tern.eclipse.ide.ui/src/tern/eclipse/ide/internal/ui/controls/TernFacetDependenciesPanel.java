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

import org.eclipse.jface.viewers.ArrayContentProvider;
import org.eclipse.jface.viewers.CheckboxTableViewer;
import org.eclipse.jface.viewers.TableViewerColumn;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Table;

import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.viewers.TernFacetLabelProvider;
import tern.metadata.TernFacetMetadata;
import tern.server.ITernFacet;

/**
 * Display dependencies of the tern facet.
 *
 */
public class TernFacetDependenciesPanel extends AbstractTernFacetPanel {

	public TernFacetDependenciesPanel(Composite parent, ITernFacet facet) {
		super(parent, facet);
	}

	@Override
	protected void createUI(Composite parent, ITernFacet facet,
			TernFacetMetadata metadata) {

		GridLayout layout = new GridLayout(1, false);
		super.setLayout(layout);

		Table table = new Table(parent, SWT.CHECK | SWT.BORDER
				| SWT.FULL_SELECTION | SWT.V_SCROLL);

		GridData data = new GridData(GridData.FILL_BOTH);
		table.setLayoutData(data);
		table.setFont(parent.getFont());

		table.setHeaderVisible(true);
		table.setLinesVisible(true);

		CheckboxTableViewer tableViewer = new CheckboxTableViewer(table);

		// create name column
		TableViewerColumn nameColumn = new TableViewerColumn(tableViewer,
				SWT.NONE);
		nameColumn.getColumn().setWidth(180);
		nameColumn.getColumn().setResizable(true);
		nameColumn.getColumn()
				.setText(TernUIMessages.TernFacetsBlock_facetName);

		List<ITernFacet> ternFacets = new ArrayList<ITernFacet>();
		if (metadata != null) {
			ITernFacet dependencyFacet = null;
			Collection<String> dependencies = metadata.getDependencies();
			for (String dependency : dependencies) {
				// try plugin
				dependencyFacet = TernCorePlugin.getTernServerTypeManager()
						.findTernPlugin(dependency);
				if (dependencyFacet == null) {
					// try def
					dependencyFacet = TernCorePlugin.getTernServerTypeManager()
							.findTernDef(dependency);
				}
				if (dependencyFacet != null) {
					ternFacets.add(dependencyFacet);
				}
			}
		}

		tableViewer.setLabelProvider(new TernFacetLabelProvider());
		tableViewer.setContentProvider(ArrayContentProvider.getInstance());
		tableViewer.setInput(ternFacets);

	}

}

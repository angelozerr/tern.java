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

import org.eclipse.jface.viewers.ArrayContentProvider;
import org.eclipse.jface.viewers.CellEditor;
import org.eclipse.jface.viewers.ColumnViewer;
import org.eclipse.jface.viewers.ComboBoxViewerCellEditor;
import org.eclipse.jface.viewers.EditingSupport;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;

import tern.TernException;
import tern.server.ITernDef;
import tern.server.ITernFacetConfigurable;
import tern.server.ITernPlugin;

/**
 * {@link EditingSupport} to display a combo with version for
 * {@link ITernPlugin} or {@link ITernDef}.
 *
 */
public class TernFacetVersionEditingSupport extends EditingSupport {

	private final ComboBoxViewerCellEditor cellEditor;

	public TernFacetVersionEditingSupport(ColumnViewer viewer) {
		super(viewer);
		cellEditor = new ComboBoxViewerCellEditor((Composite) getViewer()
				.getControl(), SWT.READ_ONLY);
		cellEditor.setLabelProvider(new LabelProvider());
		cellEditor.setContenProvider(ArrayContentProvider.getInstance());
	}

	@Override
	protected boolean canEdit(Object element) {
		if (element instanceof ITernFacetConfigurable) {
			return ((ITernFacetConfigurable) element).getAvailableVersions()
					.size() > 0;
		}
		return false;
	}

	@Override
	protected CellEditor getCellEditor(Object element) {
		if (element instanceof ITernFacetConfigurable) {
			cellEditor.setInput(((ITernFacetConfigurable) element)
					.getAvailableVersions());
			return cellEditor;
		}
		return null;
	}

	@Override
	protected Object getValue(Object element) {
		if (element instanceof ITernFacetConfigurable) {
			return ((ITernFacetConfigurable) element).getVersion();
		}
		return null;
	}

	@Override
	protected void setValue(Object element, Object value) {
		if (element instanceof ITernFacetConfigurable) {
			try {
				((ITernFacetConfigurable) element).setVersion(value.toString());
			} catch (TernException e) {
				e.printStackTrace();
			}
		}
	}

}

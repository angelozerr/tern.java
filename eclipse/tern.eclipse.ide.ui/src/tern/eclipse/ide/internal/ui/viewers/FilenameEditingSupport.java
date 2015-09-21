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
package tern.eclipse.ide.internal.ui.viewers;

import org.eclipse.jface.viewers.CellEditor;
import org.eclipse.jface.viewers.ColumnViewer;
import org.eclipse.jface.viewers.EditingSupport;
import org.eclipse.jface.viewers.TextCellEditor;
import org.eclipse.swt.widgets.Composite;

import tern.eclipse.ide.ui.viewers.MemberWrapper;

/**
 * Editing support for filename.
 *
 */
public class FilenameEditingSupport extends EditingSupport {

	private final TextCellEditor editor;

	public FilenameEditingSupport(ColumnViewer viewer) {
		super(viewer);
		Composite parent = (Composite) viewer.getControl();
		this.editor = new TextCellEditor(parent);
	}

	@Override
	protected CellEditor getCellEditor(Object element) {
		return editor;
	}

	@Override
	protected boolean canEdit(Object element) {
		return true;
	}

	@Override
	protected Object getValue(Object element) {
		return ((MemberWrapper) element).getName();
	}

	@Override
	protected void setValue(Object element, Object value) {
		MemberWrapper wrapper = ((MemberWrapper) element);
		wrapper.setName(value.toString());
		getViewer().update(element, null);
	}

}

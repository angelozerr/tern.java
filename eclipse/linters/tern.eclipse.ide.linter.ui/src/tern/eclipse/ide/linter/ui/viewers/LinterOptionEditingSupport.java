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
package tern.eclipse.ide.linter.ui.viewers;

import org.eclipse.jface.viewers.CellEditor;
import org.eclipse.jface.viewers.CheckboxCellEditor;
import org.eclipse.jface.viewers.ColumnViewer;
import org.eclipse.jface.viewers.EditingSupport;
import org.eclipse.swt.widgets.Composite;

import tern.eclipse.ide.linter.core.ITernLinterOption;

/**
 * Editing support to edit linter option value.
 *
 */
public class LinterOptionEditingSupport extends EditingSupport {

	private final NumberCellEditor numberEditor;
	private final CheckboxCellEditor booleanEditor;

	public LinterOptionEditingSupport(ColumnViewer viewer) {
		super(viewer);
		numberEditor = new NumberCellEditor((Composite) getViewer()
				.getControl());
		booleanEditor = new CheckboxCellEditor((Composite) getViewer()
				.getControl());
	}

	@Override
	protected CellEditor getCellEditor(Object element) {
		if (!(element instanceof ITernLinterOption)) {
			return null;
		}
		ITernLinterOption option = (ITernLinterOption) element;
		if (option.isBooleanType()) {
			return booleanEditor;
		}
		if (option.isNumberType()) {
			return numberEditor;
		}
		return null;
	}

	@Override
	protected boolean canEdit(Object element) {
		if (!(element instanceof ITernLinterOption)) {
			return false;
		}
		return !((ITernLinterOption) element).isCategoryType();
	}

	@Override
	protected Object getValue(Object element) {
		if (!(element instanceof ITernLinterOption)) {
			return null;
		}
		ITernLinterOption option = (ITernLinterOption) element;
		if (option.isBooleanType()) {
			return option.getBooleanValue();
		}
		if (option.isNumberType()) {
			return option.toString();
		}
		return null;
	}

	@Override
	protected void setValue(Object element, Object value) {
		if (element instanceof ITernLinterOption) {
			ITernLinterOption option = (ITernLinterOption) element;
			if (option.isBooleanType()) {
				option.setValue(getBoolean(value));
			} else if (option.isNumberType()) {
				option.setValue(getNumber(value));
			}
			getViewer().refresh(element, true);
		}
	}

	private Boolean getBoolean(Object value) {
		if (value instanceof String) {
			try {
				return Boolean.valueOf((String) value);
			} catch (Throwable e) {
				return null;
			}
		} else if (value instanceof Boolean) {
			return (Boolean) value;
		}
		return null;
	}

	private Long getNumber(Object value) {
		if (value instanceof String) {
			try {
				return Long.valueOf((String) value);
			} catch (Throwable e) {
				return null;
			}
		} else if (value instanceof Long) {
			return (Long) value;
		}
		return null;
	}

}

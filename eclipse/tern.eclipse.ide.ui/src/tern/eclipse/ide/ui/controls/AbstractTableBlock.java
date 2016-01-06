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

import org.eclipse.jface.dialogs.IDialogSettings;
import org.eclipse.swt.widgets.Table;

/**
 * Blocks that contain a table. This abstract class conveniently saves and
 * restores the table's column settings.
 * 
 */
public abstract class AbstractTableBlock {
	private int fSortColumn;

	protected abstract Table getTable();

	protected abstract IDialogSettings getDialogSettings();

	protected abstract String getQualifier();

	protected void setSortColumn(int column) {
		fSortColumn = column;
	}

	/**
	 * Persist table settings into the give dialog store, prefixed with the
	 * given key.
	 */
	public void saveColumnSettings() {
		int columnCount = getTable().getColumnCount();
		for (int i = 0; i < columnCount; i++) {
			getDialogSettings()
					.put(getQualifier() + ".columnWidth" + i, getTable().getColumn(i).getWidth()); //$NON-NLS-1$
		}
		getDialogSettings().put(getQualifier() + ".sortColumn", fSortColumn); //$NON-NLS-1$
	}

	/**
	 * Restore table settings from the given dialog store using the given key.
	 */
	public void restoreColumnSettings() {
		getTable().layout(true);
		restoreColumnWidths(getDialogSettings(), getQualifier());
		int col = 0;
		try {
			col = getDialogSettings().getInt(getQualifier() + ".sortColumn"); //$NON-NLS-1$
		} catch (NumberFormatException e) {
			col = 1;
		}
		setSortColumn(col);
	}

	private void restoreColumnWidths(IDialogSettings settings, String qualifier) {
		int columnCount = getTable().getColumnCount();
		for (int i = 0; i < columnCount; i++) {
			int width = -1;
			try {
				width = settings.getInt(qualifier + ".columnWidth" + i); //$NON-NLS-1$
			} catch (NumberFormatException e) {
			}

			if (width > 0)
				getTable().getColumn(i).setWidth(width);
		}
	}

	public void dispose() {
		if (getTable() != null && !getTable().isDisposed())
			saveColumnSettings();
	}
}

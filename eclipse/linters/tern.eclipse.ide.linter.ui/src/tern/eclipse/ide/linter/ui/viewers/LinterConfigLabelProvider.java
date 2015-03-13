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
package tern.eclipse.ide.linter.ui.viewers;

import org.eclipse.jface.viewers.ITableColorProvider;
import org.eclipse.jface.viewers.ITableLabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Display;

import tern.eclipse.ide.linter.core.ITernLinterConfig;
import tern.eclipse.ide.linter.core.ITernLinterOption;

/**
 * Label provider used to display option of {@link ITernLinterConfig} in a tree.
 *
 */
public class LinterConfigLabelProvider extends LabelProvider implements
		ITableLabelProvider, ITableColorProvider {

	private static final LinterConfigLabelProvider INSTANCE = new LinterConfigLabelProvider();

	public static LinterConfigLabelProvider getInstance() {
		return INSTANCE;
	}

	@Override
	public String getColumnText(Object element, int columnIndex) {
		if (element instanceof ITernLinterOption) {
			switch (columnIndex) {
			case 0:
				return ((ITernLinterOption) element).getId();
			case 1:
				return ((ITernLinterOption) element).toString();
			}
		}
		return null;
	}

	@Override
	public Image getColumnImage(Object element, int columnIndex) {
		return null;
	}

	@Override
	public String getText(Object element) {
		return getColumnText(element, 0);
	}

	@Override
	public Color getForeground(Object element, int columnIndex) {
		return null;
	}

	@Override
	public Color getBackground(Object element, int columnIndex) {
		if (element instanceof ITernLinterOption
				&& ((ITernLinterOption) element).isCategoryType()) {
			return Display.getCurrent().getSystemColor(SWT.COLOR_GRAY);
		}
		return null;
	}

}

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
package tern.eclipse.ide.linter.ui.viewers;

import org.eclipse.jface.resource.ColorRegistry;
import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.jface.viewers.DelegatingStyledCellLabelProvider.IStyledLabelProvider;
import org.eclipse.jface.viewers.StyledString.Styler;
import org.eclipse.jface.viewers.ITableLabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.jface.viewers.StyledString;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.RGB;
import org.eclipse.swt.graphics.TextStyle;
import org.eclipse.wst.sse.ui.internal.util.EditorUtility;

import tern.eclipse.ide.linter.core.ITernLinterOption;
import tern.utils.StringUtils;

public class LinterConfigLabelProvider extends LabelProvider implements
		ITableLabelProvider, IStyledLabelProvider {

	private static final String TERN_BLUE = "TERN_BLUE";

	static {
		ColorRegistry colorRegistry = JFaceResources.getColorRegistry();
		colorRegistry.put(TERN_BLUE, new RGB(0, 0, 128));
	}

	private static final Styler BLUE_STYLER = StyledString
			.createColorRegistryStyler(TERN_BLUE, null);

	private static final LinterConfigLabelProvider INSTANCE = new LinterConfigLabelProvider();

	public static LinterConfigLabelProvider getInstance() {
		return INSTANCE;
	}

	@Override
	public String getColumnText(Object element, int columnIndex) {
		if (element instanceof ITernLinterOption) {
			return ((ITernLinterOption) element).getId();
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
	public StyledString getStyledText(Object element) {
		StyledString styledString = new StyledString();
		styledString.append(getText(element));
		if (element instanceof ITernLinterOption) {
			ITernLinterOption option = (ITernLinterOption) element;
			String value = option.toString();
			if (!StringUtils.isEmpty(value)) {
				styledString.append(": ");
				styledString.append(value, BLUE_STYLER);
			}
		}
		return styledString;
	}

}

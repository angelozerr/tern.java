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
package tern.eclipse.ide.internal.ui.views;

import org.eclipse.jface.viewers.DelegatingStyledCellLabelProvider.IStyledLabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.jface.viewers.StyledString;
import org.eclipse.swt.graphics.Image;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.jface.images.TernImagesRegistry;
import tern.server.protocol.outline.JSNode;
import tern.utils.StringUtils;

public class TernOutlineLabelProvider extends LabelProvider implements IStyledLabelProvider {

	@Override
	public String getText(Object element) {
		if (element == TernOutlineContentProvider.COMPUTING_NODE) {
			return TernUIMessages.TernOutline_computing;
		}
		if (element instanceof JSNode) {
			return ((JSNode) element).getName();
		}
		return super.getText(element);
	}

	@Override
	public Image getImage(Object element) {
		if (element == TernOutlineContentProvider.COMPUTING_NODE) {
			return ImageResource.getImage(ImageResource.IMG_LOGO);
		}
		if (element instanceof JSNode) {
			JSNode jsNode = (JSNode) element;
			String jsType = jsNode.getType();
			if (jsNode.isClass()) {
				return TernImagesRegistry.getImage(TernImagesRegistry.IMG_CLASS);
			}
			boolean isFunction = jsNode.isFunction();
			boolean isArray = jsNode.isArray();
			return TernImagesRegistry.getImage(jsType, isFunction, isArray, false);
		}
		return super.getImage(element);
	}

	@Override
	public StyledString getStyledText(Object element) {
		if (element == TernOutlineContentProvider.COMPUTING_NODE) {
			return new StyledString(TernUIMessages.TernOutline_computing);
		}
		if (element instanceof JSNode) {
			JSNode node = ((JSNode) element);
			StyledString buff = new StyledString(StringUtils.isEmpty(node.getName()) ? "" : node.getName());
			String type = node.getType();
			if (!StringUtils.isEmpty(type)) {
				buff.append(" : ", StyledString.DECORATIONS_STYLER);
				buff.append(type, StyledString.DECORATIONS_STYLER);
			}
			return buff;
		}
		return new StyledString(getText(element));
	}
}

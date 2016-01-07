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
package tern.eclipse.ide.internal.ui.views;

import org.eclipse.jface.viewers.StyledString;
import org.eclipse.swt.graphics.Image;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.views.AbstractTernOutlineLabelProvider;
import tern.eclipse.jface.images.TernImagesRegistry;
import tern.server.protocol.outline.IJSNode;
import tern.server.protocol.outline.JSNode;
import tern.utils.StringUtils;

public class TernOutlineLabelProvider extends AbstractTernOutlineLabelProvider {

	@Override
	protected String getUnavailableText() {
		return TernUIMessages.TernOutline_unavailable;
	}
	
	@Override
	protected Image getUnavailableImage() {
		return ImageResource.getImage(ImageResource.IMG_LOGO);
	}
	
	@Override
	protected String getComputingText() {
		return TernUIMessages.TernOutline_computing;
	}

	@Override
	protected Image getComputingImage() {
		return ImageResource.getImage(ImageResource.IMG_LOGO);
	}

	@Override
	protected String getText(IJSNode element) {
		return element.getName();
	}

	@Override
	protected Image getImage(IJSNode element) {
		JSNode jsNode = (JSNode) element;
		if (jsNode.isClass()) {
			return TernImagesRegistry.getImage(TernImagesRegistry.IMG_CLASS);
		}
		if (jsNode.isImport()) {
			return TernImagesRegistry.getImage(TernImagesRegistry.IMG_IMPORT);
		}
		boolean isFunction = jsNode.isFunction();
		boolean isArray = jsNode.isArray();
		String jsType = jsNode.getType();
		return TernImagesRegistry.getImage(jsType, isFunction, isArray, false);
	}

	@Override
	protected StyledString getStyledText(IJSNode element) {
		JSNode node = ((JSNode) element);
		StyledString buff = new StyledString(StringUtils.isEmpty(node.getName()) ? "" : node.getName());
		String type = node.getType();
		if (!StringUtils.isEmpty(type)) {
			buff.append(" : ", StyledString.DECORATIONS_STYLER);
			buff.append(type, StyledString.DECORATIONS_STYLER);
		}
		return buff;
	}
}

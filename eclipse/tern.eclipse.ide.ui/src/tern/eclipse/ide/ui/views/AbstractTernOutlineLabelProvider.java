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
package tern.eclipse.ide.ui.views;

import org.eclipse.jface.viewers.DelegatingStyledCellLabelProvider.IStyledLabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.jface.viewers.StyledString;
import org.eclipse.swt.graphics.Image;

import tern.server.protocol.outline.IJSNode;

/**
 * Label provider for tern outline.
 *
 */
public abstract class AbstractTernOutlineLabelProvider extends LabelProvider implements IStyledLabelProvider {

	@Override
	public String getText(Object element) {
		if (element == TernOutlineContentProvider.UNAVAILABLE_NODE) {
			return getUnavailableText();
		} else if (element == TernOutlineContentProvider.COMPUTING_NODE) {
			return getComputingText();
		} else if (element instanceof IJSNode) {
			return getText((IJSNode) element);
		}
		return super.getText(element);
	}

	@Override
	public Image getImage(Object element) {
		if (element == TernOutlineContentProvider.UNAVAILABLE_NODE) {
			return getUnavailableImage();
		} else if (element == TernOutlineContentProvider.COMPUTING_NODE) {
			return getComputingImage();
		} else if (element instanceof IJSNode) {
			return getImage((IJSNode) element);
		}
		return super.getImage(element);
	}

	@Override
	public StyledString getStyledText(Object element) {
		if (element == TernOutlineContentProvider.COMPUTING_NODE) {
			return new StyledString(getComputingText());
		}
		if (element instanceof IJSNode) {
			return getStyledText((IJSNode) element);
		}
		return new StyledString(getText(element));
	}

	protected abstract String getUnavailableText();

	protected abstract Image getUnavailableImage();

	protected abstract String getComputingText();

	protected abstract Image getComputingImage();

	protected abstract String getText(IJSNode element);

	protected abstract Image getImage(IJSNode element);

	protected abstract StyledString getStyledText(IJSNode element);
}

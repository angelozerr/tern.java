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
package tern.eclipse.jface.viewers;

import org.eclipse.jface.fieldassist.IContentProposal;
import org.eclipse.jface.viewers.ILabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.swt.graphics.Image;

import tern.eclipse.jface.fieldassist.TernContentProposal;
import tern.eclipse.jface.images.TernImagesRegistry;
import tern.server.protocol.completions.TernCompletionItem;

/**
 * Label provider to manage image with {@link TernContentProposal}.
 * 
 */
public class TernLabelProvider extends LabelProvider {

	private static final ILabelProvider INSTANCE = new TernLabelProvider();

	public static ILabelProvider getInstance() {
		return INSTANCE;
	}

	@Override
	public String getText(Object element) {
		if (element instanceof IContentProposal) {
			return ((IContentProposal) element).getLabel();
		}
		return super.getText(element);
	}

	@Override
	public Image getImage(Object element) {
		if (element instanceof TernCompletionItem) {
			TernCompletionItem item = ((TernCompletionItem) element);
			return TernImagesRegistry.getImage(item, false);
		}
		return super.getImage(element);
	}

}

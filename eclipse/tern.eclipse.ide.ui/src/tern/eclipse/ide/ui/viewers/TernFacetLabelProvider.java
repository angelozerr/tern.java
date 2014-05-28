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
package tern.eclipse.ide.ui.viewers;

import org.eclipse.jface.viewers.ITableLabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.swt.graphics.Image;

import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.server.ITernFacet;
import tern.server.ITernFacetWrapper;
import tern.server.ITernPlugin;

/**
 * Label provider for {@link ITernPlugin} and {@link ITernFacet}.
 * 
 */
public class TernFacetLabelProvider extends LabelProvider implements
		ITableLabelProvider {

	@Override
	public String getColumnText(Object element, int columnIndex) {
		if (element instanceof ITernFacet) {
			ITernFacet facet = (ITernFacet) element;
			switch (columnIndex) {
			case 0:
				return facet.getName();
			case 1:
				String version = facet.getVersion();
				return version != null ? version : "";
			}
		}
		return element.toString();
	}

	@Override
	public Image getColumnImage(Object element, int columnIndex) {
		switch (columnIndex) {
		case 0:
			if (element instanceof ITernFacet) {
				ITernFacet facet = (ITernFacet) element;
				Image image = TernUIPlugin.getTernDescriptorManager().getImage(
						facet.getName());
				if (image != null) {
					return image;
				}
				return getDefaultImage(facet);
			}
		}
		return null;
	}

	private Image getDefaultImage(ITernFacet facet) {
		switch (facet.getFacetType()) {
		case Def:
			return ImageResource.getImage(ImageResource.IMG_TYPE_DEF);
		case Plugin:
			return ImageResource.getImage(ImageResource.IMG_PLUGIN);
		case Wrapper:
			return getDefaultImage(((ITernFacetWrapper) facet)
					.getWrappedFacet());
		}
		return null;
	}

}

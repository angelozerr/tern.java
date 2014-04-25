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
import tern.server.ITernDef;

/**
 * Label provider for {@link ITernDef}.
 * 
 */
public class TernDefLabelProvider extends LabelProvider implements
		ITableLabelProvider {

	@Override
	public String getColumnText(Object element, int columnIndex) {
		if (element instanceof ITernDef) {
			ITernDef ternDef = (ITernDef) element;
			switch (columnIndex) {
			case 0:
				return ternDef.getName();
			case 1:
				return ternDef.getPath();
			}
		}
		return element.toString();
	}

	@Override
	public Image getColumnImage(Object element, int columnIndex) {
		switch (columnIndex) {
		case 0:
			if (element instanceof ITernDef) {
				ITernDef ternDef = (ITernDef) element;
				Image image = TernUIPlugin.getTernDescriptorManager().getImage(
						ternDef.getName());
				if (image != null) {
					return image;
				}
				return ImageResource.getImage(ImageResource.IMG_TYPE_DEF);
			}
		}
		return null;
	}

}

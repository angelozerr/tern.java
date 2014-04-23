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
import tern.server.ITernPlugin;

/**
 * Label provider for {@link ITernPlugin}.
 * 
 */
public class TernPluginLabelProvider extends LabelProvider implements
		ITableLabelProvider {

	@Override
	public String getColumnText(Object element, int columnIndex) {
		if (element instanceof ITernPlugin) {
			ITernPlugin plugin = (ITernPlugin) element;
			switch (columnIndex) {
			case 0:
				return plugin.getName();
			case 1:
				return plugin.getPath();
			}
		}
		return element.toString();
	}

	@Override
	public Image getColumnImage(Object element, int columnIndex) {
		switch (columnIndex) {
		case 0:
			if (element instanceof ITernPlugin) {
				ITernPlugin plugin = (ITernPlugin) element;
				Image image = TernUIPlugin.getTernDescriptorManager().getImage(
						plugin.getName());
				if (image != null) {
					return image;
				}
				return ImageResource.getImage(ImageResource.IMG_PLUGIN);
			}
		}
		return null;
	}

}

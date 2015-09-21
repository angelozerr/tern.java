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
package tern.eclipse.ide.internal.ui.descriptors;

import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.plugin.AbstractUIPlugin;

import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.descriptors.ITernModuleImage;
import tern.utils.StringUtils;

/**
 * Tern module image.
 *
 */
public class TernModuleImage implements ITernModuleImage {

	private final String id;
	private final String imageKey;

	public TernModuleImage(IConfigurationElement ce) {
		this.id = ce.getAttribute("id");
		this.imageKey = getImageKey(ce, id);
	}

	private String getImageKey(IConfigurationElement ce, String id) {
		String iconPath = ce.getAttribute("icon");
		if (StringUtils.isEmpty(iconPath)) {
			return null;
		}
		String name = ce.getDeclaringExtension().getContributor().getName();
		String imageKey = new StringBuilder("ternDescriptor_").append(name)
				.append(id).toString();

		ImageDescriptor imageDescriptor = AbstractUIPlugin
				.imageDescriptorFromPlugin(name, iconPath);
		if (imageDescriptor == null && iconPath != null
				&& iconPath.length() > 0)
			imageDescriptor = ImageDescriptor.getMissingImageDescriptor();
		ImageResource.registerImageDescriptor(imageKey, imageDescriptor);
		return imageKey;
	}

	public String getId() {
		return id;
	}

	@Override
	public Image getImage() {
		if (imageKey == null) {
			return null;
		}
		return ImageResource.getImage(imageKey);
	}

	@Override
	public ImageDescriptor getImageDescriptor() {
		if (imageKey == null) {
			return null;
		}
		return ImageResource.getImageDescriptor(imageKey);
	}

	public void dispose() {

	}

}

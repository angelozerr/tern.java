package tern.eclipse.ide.internal.ui.descriptors;

import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.plugin.AbstractUIPlugin;

import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.descriptors.ITernDescriptor;
import tern.utils.StringUtils;

public class TernDescriptor implements ITernDescriptor {

	private final String id;
	private final String imageKey;

	public TernDescriptor(IConfigurationElement ce) {
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

	public void dispose() {

	}

}

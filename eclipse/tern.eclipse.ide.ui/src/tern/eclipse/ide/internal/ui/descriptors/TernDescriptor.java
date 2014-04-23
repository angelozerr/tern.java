package tern.eclipse.ide.internal.ui.descriptors;

import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.plugin.AbstractUIPlugin;

import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.descriptors.ITernDescriptor;

public class TernDescriptor implements ITernDescriptor {

	private final String id;
	private final String description;
	private final String imageKey;

	public TernDescriptor(IConfigurationElement ce) {
		this.id = ce.getAttribute("id");
		this.description = ce.getAttribute("description");
		this.imageKey = getImageKey(ce.getDeclaringExtension().getContributor()
				.getName(), id);
		String name = ce.getDeclaringExtension().getContributor().getName();
		String iconPath = ce.getAttribute("icon");
		ImageDescriptor imageDescriptor = AbstractUIPlugin
				.imageDescriptorFromPlugin(name, iconPath);
		if (imageDescriptor == null && iconPath != null
				&& iconPath.length() > 0)
			imageDescriptor = ImageDescriptor.getMissingImageDescriptor();
		ImageResource.registerImageDescriptor(imageKey, imageDescriptor);
	}

	private String getImageKey(String name, String id) {
		return new StringBuilder("ternDescriptor_").append(name).append(id)
				.toString();
	}

	public String getId() {
		return id;
	}

	@Override
	public String getDescription() {
		return description;
	}

	@Override
	public Image getImage() {
		return ImageResource.getImage(imageKey);
	}

	public void dispose() {

	}

}

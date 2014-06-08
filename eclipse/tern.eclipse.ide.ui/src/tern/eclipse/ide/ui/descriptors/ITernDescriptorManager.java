package tern.eclipse.ide.ui.descriptors;

import org.eclipse.swt.graphics.Image;

public interface ITernDescriptorManager {

	Image getImage(String id);

	ITernDescriptor getTernDescriptor(String id);

}

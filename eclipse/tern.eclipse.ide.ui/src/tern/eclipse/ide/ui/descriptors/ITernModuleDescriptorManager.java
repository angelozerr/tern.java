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
package tern.eclipse.ide.ui.descriptors;

import java.net.URL;

import org.eclipse.core.resources.IProject;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Composite;

import tern.eclipse.ide.ui.descriptors.options.ITernModuleOptionFactory;
import tern.server.ITernModule;
import tern.server.protocol.completions.TernCompletionItem;

public interface ITernModuleDescriptorManager {

	/**
	 * Returns the image for the given module name.
	 * 
	 * @param id
	 *            module name.
	 * @return the image for the given module name.
	 */
	Image getImage(String id);

	/**
	 * Returns the image for the given tern completion item.
	 * 
	 * @param item
	 *            tern completion item.
	 * @return the image for the given tern completion item.
	 */
	Image getImage(TernCompletionItem item);

	/**
	 * Returns the image for the given module name.
	 * 
	 * @param id
	 *            module name.
	 * @return the image for the given module name.
	 */
	ImageDescriptor getImageDescriptor(String id);

	/**
	 * Returns the image descriptor for the given tern completion item.
	 * 
	 * @param item
	 *            tern completion item.
	 * @return the image descriptor for the given tern completion item.
	 */
	ImageDescriptor getImageDescriptor(TernCompletionItem element);

	/**
	 * Returns the image URL for the given image descriptor.
	 * 
	 * @param descriptor
	 *            image descriptor.
	 * @return the image URL for the given image descriptor.
	 */
	URL getImageURL(ImageDescriptor descriptor);

	/**
	 * Returns the descriptor for the given module name.
	 * 
	 * @param id
	 *            module name.
	 * @return the descriptor for the given module name.
	 */
	ITernModuleImage getTernModuleImage(String id);

	/**
	 * Create options panel for the given module.
	 * 
	 * @param parent
	 *            composite
	 * @param module
	 *            tern module.
	 * @param project
	 *            the current project or null otherwise.
	 * @return options panel for the given module.
	 */
	Composite createOptionsPanel(Composite parent, ITernModule module,
			IProject project);

	void destroy();

	ITernModuleOptionFactory getTernModuleOptionFactory(String id);

}

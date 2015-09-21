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
package tern.eclipse.ide.ui.descriptors;

import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.swt.graphics.Image;

/**
 * Tern module image API.
 */
public interface ITernModuleImage {

	/**
	 * Returns the module name.
	 * 
	 * @return
	 */
	String getId();

	/**
	 * Returns the image of the module.
	 * 
	 * @return the image of the module.
	 */
	Image getImage();

	/**
	 * Returns the image descriptor of the module.
	 * 
	 * @return the image descriptor of the module.
	 */
	ImageDescriptor getImageDescriptor();

}

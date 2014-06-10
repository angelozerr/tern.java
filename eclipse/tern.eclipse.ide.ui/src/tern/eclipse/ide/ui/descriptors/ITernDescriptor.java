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

import org.eclipse.swt.graphics.Image;

/**
 * Tern descriptor API.
 */
public interface ITernDescriptor {

	/**
	 * Returns the facet name.
	 * 
	 * @return
	 */
	String getId();

	/**
	 * Returns the image of the facet.
	 * 
	 * @return the image of the facet.
	 */
	Image getImage();

}

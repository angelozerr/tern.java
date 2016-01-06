/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern;

public interface ITernAdaptable {

	/**
	 * Provides a way to adapt ITernAdaptable to an environment specific object.
	 * E.g. it can return {@link java.io.File} object or Eclipse 
	 * {@code org.eclipse.core.resources.IResource}. 
	 * 
	 * @param adapterClass
	 * @return Adapter extending/implementing requested class or null
	 */
	Object getAdapter(@SuppressWarnings("rawtypes") Class adapterClass);
	
}

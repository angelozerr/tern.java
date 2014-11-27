/**
 *  Copyright (c) 2014 Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern;

import java.io.IOException;

public interface ITernResourcesManagerDelegate {

	/**
	 * Return a tern project associated with the specified resource. New project
	 * should be created only if it is a first such call on the resource.
	 * 
	 * @param project
	 * @param force
	 *            true if .tern-project must be created if it doesn't exists,
	 *            and false otherwise.
	 * @return
	 * @throws IOException
	 */
	ITernProject getTernProject(Object project, boolean force)
			throws IOException;

	/**
	 * Creates a new cache manager for the specified project.
	 * 
	 * @param project
	 * @return
	 */
	ITernFileSynchronizer createTernFileSynchronizer(ITernProject project);

	/**
	 * Creates a new tern file object with specified name. The name is
	 * interpreted relatively to the provided project.
	 * 
	 * @param project
	 * @param name
	 * @return
	 */
	ITernFile getTernFile(ITernProject project, String name);

	/**
	 * Creates a new tern file object for the specified resource object. Return
	 * null if specified resource cannot be adapted to ITernFile.
	 * 
	 * @param fileObject
	 * @return
	 */
	ITernFile getTernFile(Object fileObject);

	/**
	 * Returns whether the file referred by a file object is an HTML file.
	 * 
	 * @param fileObject
	 * @return
	 */
	boolean isHTMLFile(Object fileObject);

	/**
	 * Returns whether the file referred by a file object is a JS file.
	 * 
	 * @param fileObject
	 * @return
	 */
	boolean isJSFile(Object fileObject);

}

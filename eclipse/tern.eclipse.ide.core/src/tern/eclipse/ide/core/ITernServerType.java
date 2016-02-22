/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.core;

import tern.ITernProject;
import tern.server.ITernServer;

/**
 * Tern server type API.
 * 
 */
public interface ITernServerType {

	/**
	 * Returns the id of this tern server type. Each known tern server type has
	 * a distinct id. Ids are intended to be used internally as keys; they are
	 * not intended to be shown to end users.
	 * 
	 * @return the tern server type id
	 */
	String getId();

	/**
	 * Returns the displayable name for this tern server type.
	 * <p>
	 * Note that this name is appropriate for the current locale.
	 * </p>
	 * 
	 * @return a displayable name for this tern server type
	 */
	String getName();

	/**
	 * Create an instance of tern server by using the given tern project.
	 * 
	 * @param project
	 *            tern project.
	 * @return an instance of tern server by using the given tern project.
	 * @throws Exception
	 */
	ITernServer createServer(ITernProject project) throws Exception;

	/**
	 * Dispose the whole tern server created.
	 */
	void dispose();

}

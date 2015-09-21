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
package tern.eclipse.ide.server.nodejs.core;

/**
 * Nodejs install manager API.
 * 
 */
public interface INodejsInstallManager {

	/**
	 * Returns an array of all known Nodejs install.
	 * <p>
	 * A new array is returned on each call, so clients may store or modify the
	 * result.
	 * </p>
	 * 
	 * @return the array of Nodejs installs {@link INodejsInstall}
	 */
	INodejsInstall[] getNodejsInstalls();

	/**
	 * Returns the Nodejs install with the given id, or <code>null</code> if
	 * none. This convenience method searches the list of known Nodejs installs
	 * ({@link #getNodejsInstalls()}) for the one with a matching generator type
	 * id ({@link INodejsInstall#getId()}). The id may not be null.
	 * 
	 * @param id
	 *            the Nodejs install id
	 * @return the Nodejs install, or <code>null</code> if there is no Nodejs
	 *         installwith the given id
	 */
	INodejsInstall findNodejsInstall(String id);
}

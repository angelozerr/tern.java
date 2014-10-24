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
package tern;

import java.io.File;

import tern.server.ITernModule;

/**
 * Tern repository is a base dir which contains the tern.js JS files :
 * 
 * <ul>
 * <li>bin folder</li>
 * <li>defs folder</li>
 * <li>plugin folder</li>
 * <li>node_modules folder</li>
 * </ul>
 *
 */
public interface ITernRepository {

	/**
	 * Returns the tern repository name.
	 * 
	 * @return the tern repository name.
	 */
	String getName();

	/**
	 * Returns the tern base dir which contains ternjs and their custom plugins.
	 * 
	 * @return the tern base dir which contains ternjs and their custom plugins.
	 */
	File getTernBaseDir();

	/**
	 * Returns the tern base dir which contains ternjs and their custom plugins
	 * as string.
	 * 
	 * @return the tern base dir which contains ternjs and their custom plugins
	 *         as string.
	 */
	String getTernBaseDirAsString();

	/**
	 * Update the tern base dir which contains ternjs and their custom plugins.
	 * 
	 * @param ternFile
	 */
	void setTernBaseDir(File ternFile);

	/**
	 * Returns true if the repository is a default repository and false
	 * otherwise (custom repository).
	 * 
	 * @return true if the repository is a default repository and false
	 *         otherwise (custom repository).
	 */
	boolean isDefault();

	/**
	 * Refresh the tern modules of this repository;
	 */
	void refresh();

	/**
	 * Returns the tern modules (plugins and JSON type defitions).
	 * 
	 * @return the tern modules (plugins and JSON type defitions).
	 * @throws TernException
	 */
	ITernModule[] getModules() throws TernException;
}

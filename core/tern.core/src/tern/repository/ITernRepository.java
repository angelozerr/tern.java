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
package tern.repository;

import java.io.File;
import java.io.IOException;

import tern.TernException;
import tern.metadata.TernModuleMetadata;
import tern.server.ITernModule;
import tern.server.ITernPlugin;

/**
 * Tern repository is a local base dir which contains the tern.js JS files :
 * 
 * <ul>
 * <li>metadata</li>
 * <li>node_modules
 *   <ul>
 *     <li>tern
 *       <ul>
 * 			<li>bin</li>
 * 			<li>defs</li>
 * 			<li>plugin</li>
 *       </ul>
 *     </li>
 *   </ul>
 * </li>
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
	 * Returns the base directory of the tern repository.
	 * 
	 * @return the base directory of the tern repository.
	 */
	File getBaseDir();

	/**
	 * Update the tbase directory of the tern repository.
	 * 
	 * @param baseDir
	 */
	void setBaseDir(File baseDir);
	
	/**
	 * Returns the node_modules directory.
	 * 
	 * @return the node_modules directory.
	 */
	File getNodeModulesDir();
	
	/**
	 * Returns the tern base dir (node_modules/tern) which contains ternjs and their custom plugins.
	 * 
	 * @return the tern base dir (node_modules/tern) which contains ternjs and their custom plugins.
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

	/**
	 * Returns the file of the given module and null otherwise.
	 * 
	 * @param module
	 * @return the file of the given module and null otherwise.
	 */
	File getFile(ITernModule module);

	/**
	 * Returns the module by name and null otherwise.
	 * 
	 * @param name
	 * @return the module by name and null otherwise.
	 */
	ITernModule getModule(String name);

	/**
	 * Returns the module by origin and null otherwise.
	 * 
	 * @param origin
	 * @return the module by origin and null otherwise.
	 */
	ITernModule getModuleByOrigin(String origin);

	/**
	 * Returns the list fo tern plugin which are linter.
	 * 
	 * @return the list fo tern plugin which are linter.
	 */
	ITernPlugin[] getLinters();

	/**
	 * Install the given module file to the repository.
	 * 
	 * @param moduleFile
	 *            module file which is a zip/jar or folder which contains tern
	 *            module.
	 * @throws IOException
	 * @throws TernException
	 */
	void install(File moduleFile) throws IOException, TernException;

	/**
	 * Returns the {@link TernModuleMetadata} from the given module name and
	 * null otherwise.
	 * 
	 * @param moduleName
	 * @return the {@link TernModuleMetadata} from the given module name and
	 *         null otherwise.
	 */
	TernModuleMetadata getDefaultMetadata(String moduleName);
	
}

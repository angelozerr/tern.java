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
package tern.server;

import java.util.Collection;
import java.util.Set;

import tern.TernException;

import com.eclipsesource.json.JsonObject;

/**
 * Wrapper for {@link ITernModule} used to configure {@link ITernModule} :
 * 
 * <ul>
 * <li>version of the module</li>
 * <li>options of the module if it's a plugin</li>
 * </ul>
 *
 */
public interface ITernModuleConfigurable extends ITernModule {

	/**
	 * Set version of the tern module
	 */
	ITernModule setVersion(String version) throws TernException;

	/**
	 * Returns the current wrapped module.
	 */
	ITernModule getWrappedModule();

	/**
	 * returns list of available versions.
	 */
	Set<String> getAvailableVersions();

	/**
	 * Set tern plugin options.
	 * 
	 * @param options
	 */
	void setOptions(JsonObject options);

	/**
	 * Returns the tern plugin options.
	 * 
	 * @return the tern plugin options.
	 */
	JsonObject getOptions();

	/**
	 * Returns the module by name and null otherwise.
	 * 
	 * @param name
	 * @return the module by name and null otherwise.
	 */
	ITernModule getModule(String name);

	/**
	 * Return list of modules
	 * 
	 * @return list of modules
	 */
	Collection<ITernModule> getModules();

	/**
	 * Returns true if configurable module has version and false otherwise.
	 * 
	 * @return true if configurable module has version and false otherwise.
	 */
	boolean hasVersion();
}

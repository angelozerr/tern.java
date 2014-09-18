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

import java.io.IOException;

import tern.server.ITernDef;
import tern.server.ITernPlugin;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;

/**
 * Tern project API.
 *
 * @param <T>
 *            file object.
 */
public interface ITernProject<T> {

	// --------------------- JSON Type Definitions

	/**
	 * Add JSON Type Definition.
	 * 
	 * @param lib
	 *            the JSON Type Definition.
	 */
	void addLib(ITernDef lib);

	/**
	 * Add JSON Type Definition.
	 * 
	 * @param lib
	 *            the JSON Type Definition.
	 */
	void addLib(String lib);

	/**
	 * Returns true if the given lib exists and false otherwise.
	 * 
	 * @param lib
	 * @return true if the given lib exists and false otherwise.
	 */
	boolean hasLib(String lib);

	/**
	 * Returns true if the given lib exists and false otherwise.
	 * 
	 * @param lib
	 * @return true if the given lib exists and false otherwise.
	 */
	boolean hasLib(ITernDef lib);

	/**
	 * Return the JSON Type Definitions of the tern project.
	 * 
	 * @return the JSON Type Definitions of the tern project.
	 */
	JsonArray getLibs();

	/**
	 * Clear JSON Type Definitions.
	 */
	void clearLibs();

	// --------------------- Tern Plugins

	/**
	 * Add Tern plugin.
	 * 
	 * @param plugin
	 *            the tern plugin to add.
	 * @return true if plugin to add, replace an existing plugin and false
	 *         otherwise.
	 */
	void addPlugin(ITernPlugin plugin);

	/**
	 * Add Tern plugin with options.
	 * 
	 * @param plugin
	 *            the tern plugin to add.
	 * @param options
	 *            plugin options.
	 */
	void addPlugin(ITernPlugin module, JsonObject options);

	/**
	 * Returns true if the given plugin exists and false otherwise.
	 * 
	 * @param plugin
	 * @return true if the given plugin exists and false otherwise.
	 */
	boolean hasPlugin(ITernPlugin plugin);

	/**
	 * Returns true if the given plugin exists and false otherwise.
	 * 
	 * @param plugin
	 * @return true if the given plugin exists and false otherwise.
	 */
	boolean hasPlugin(String plugin);

	/**
	 * Return the JSON plugins of the tern project.
	 * 
	 * @return the JSON plugins of the tern project.
	 */
	JsonObject getPlugins();

	/**
	 * Clear plugins.
	 */
	void clearPlugins();

	// ---------------- Tern save

	/**
	 * Save the tern project in the file .tern-project of the project base dir.
	 * 
	 * @throws IOException
	 */
	void save() throws IOException;

	/**
	 * Save the tern project in the file .tern-project of the project base dir
	 * if the project is dirty.
	 * 
	 * @throws IOException
	 */
	void saveIfNeeded() throws IOException;

	/**
	 * Returns the setted tern file manager and null otherwise.
	 * 
	 * @return
	 */
	public TernFileManager<T> getFileManager();

}

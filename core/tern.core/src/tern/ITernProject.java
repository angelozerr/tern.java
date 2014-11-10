/**
 *  Copyright (c) 2013-2014 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 */
package tern;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.w3c.dom.Node;

import tern.scriptpath.ITernScriptPath;
import tern.server.ITernDef;
import tern.server.ITernPlugin;
import tern.server.ITernServer;
import tern.server.protocol.TernQuery;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.definition.ITernDefinitionCollector;
import tern.server.protocol.lint.ITernLintCollector;
import tern.server.protocol.type.ITernTypeCollector;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;

/**
 * Tern project API.
 *
 */
public interface ITernProject extends ITernAdaptable {

	public static final String TERN_PROJECT_FILE = ".tern-project"; //$NON-NLS-1$

	// --------------------- Basic
	/**
	 * Returns name of the project
	 * 
	 * @return
	 */
	String getName();

	/**
	 * Returns associated tern server if any. This call may result in creating
	 * one if it hasn't been created already.
	 * 
	 * @return
	 */
	ITernServer getTernServer();

	/**
	 * Convenience method for handling exceptions.
	 * 
	 * @param t
	 */
	void handleException(Throwable t);

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

	// ---------------- File management

	/**
	 * Returns the project base dir.
	 * 
	 * @return the project base dir.
	 */
	File getProjectDir();

	/**
	 * Returns the .tern-project file.
	 * 
	 * @return the .tern-project file
	 */
	File getTernProjectFile();

	/**
	 * Returns a tern file for the specified name. Name must be supported by
	 * current ITernFileFactory and the file must exist, otherwise null is
	 * returned.
	 * 
	 * @param name
	 * @return
	 */
	ITernFile getFile(String name);

	/**
	 * Returns a tern file for the file object. File object has to be supported
	 * by current ITernFileFactory and referred file must exist, or null will be
	 * returned
	 * 
	 * @param name
	 * @return ITernFile or null, if the file does not exist
	 */
	ITernFile getFile(Object fileObject);

	/**
	 * Returns file cache manager.
	 * 
	 * @return
	 */
	ITernFileSynchronizer getFileSynchronizer();

	/**
	 * Returns a list of script include paths
	 * 
	 * @return
	 */
	List<ITernScriptPath> getScriptPaths();

	/**
	 * Provides a way to adapt ITernProject to an environment specific object
	 * representing project. E.g. it can return {@link java.io.File} object or
	 * Eclipse {@code org.eclipse.core.resources.IProject}.
	 * 
	 * @param adapterClass
	 * @return Adapter extending/implementing requested class or null
	 */
	Object getAdapter(@SuppressWarnings("rawtypes") Class adapterClass);

	// ---------- Completion
	void request(TernQuery query, ITernFile file,
			ITernCompletionCollector collector) throws IOException,
			TernException;

	void request(TernQuery query, JsonArray names, ITernScriptPath scriptPath,
			Node domNode, ITernFile file, ITernCompletionCollector collector)
			throws IOException, TernException;

	// ---------- Definition
	void request(TernQuery query, ITernFile file,
			ITernDefinitionCollector collector) throws IOException,
			TernException;

	void request(TernQuery query, JsonArray names, ITernScriptPath scriptPath,
			Node domNode, ITernFile file, ITernDefinitionCollector collector)
			throws IOException, TernException;

	// ---------- Type
	void request(TernQuery query, ITernFile file, ITernTypeCollector collector)
			throws IOException, TernException;

	void request(TernQuery query, JsonArray names, ITernScriptPath scriptPath,
			Node domNode, ITernFile file, ITernTypeCollector collector)
			throws IOException, TernException;

	// ---------- Lint
	void request(TernQuery query, ITernFile file, ITernLintCollector collector)
			throws IOException, TernException;

	/**
	 * Returns the tern repository used by the tern project.
	 * 
	 * @return the tern repository used by the tern project.
	 */
	ITernRepository getRepository();
}

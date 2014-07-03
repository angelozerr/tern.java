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
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;

import tern.server.ITernDef;
import tern.server.ITernPlugin;
import tern.server.protocol.JsonHelper;
import tern.utils.IOUtils;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;
import com.eclipsesource.json.ParseException;

/**
 * Tern project configuration.
 * 
 * <pre>
 * A .tern-project file is a JSON file in a format like this:
 * 
 * {
 *   "libs": [
 *     "browser",
 *     "jquery"
 *   ],
 *   "loadEagerly": [
 *     "importantfile.js"
 *   ],
 *   "plugins": {
 *     "requirejs": {
 *       "baseURL": "./",
 *       "paths": {}
 *     }
 *   }
 * }
 * </pre>
 * 
 * @see http://ternjs.net/doc/manual.html#configuration
 */
public class TernProject<T> extends DirtyableJsonObject {

	private static final long serialVersionUID = 1L;

	public static final String TERN_PROJECT = ".tern-project";

	private static final String PLUGINS_FIELD_NAME = "plugins";
	private static final String LIBS_FIELD_NAME = "libs";

	private final File projectDir;
	private DirtyableJsonArray patterns;

	private boolean dirty;

	/**
	 * tern file manager.
	 */
	private TernFileManager<T> fileManager;

	/**
	 * Tern project constructor.
	 * 
	 * @param projectDir
	 *            the project base dir.
	 */
	public TernProject(File projectDir) {
		super(null);
		this.projectDir = projectDir;
	}

	/**
	 * Returns the project base dir.
	 * 
	 * @return the project base dir.
	 */
	public File getProjectDir() {
		return projectDir;
	}

	/**
	 * Add JSON Type Definition.
	 * 
	 * @param lib
	 *            the JSON Type Definition.
	 */
	public void addLib(ITernDef lib) {
		addLib(lib.getName());
	}

	/**
	 * Add JSON Type Definition.
	 * 
	 * @param lib
	 *            the JSON Type Definition.
	 */
	public void addLib(String lib) {
		if (!hasLib(lib)) {
			getLibs().add(lib);
		}
	}

	/**
	 * Returns true if the given lib exists and false otherwise.
	 * 
	 * @param lib
	 * @return true if the given lib exists and false otherwise.
	 */
	public boolean hasLib(String lib) {
		JsonArray libs = getLibs();
		if (libs != null) {
			for (JsonValue l : libs) {
				if (l.isString() && l.asString().equals(lib))
					return true;
			}
		}
		return false;
	}

	/**
	 * Returns true if the given lib exists and false otherwise.
	 * 
	 * @param lib
	 * @return true if the given lib exists and false otherwise.
	 */
	public boolean hasLib(ITernDef lib) {
		return hasLib(lib.getName());
	}

	/**
	 * Return the JSON Type Definitions of the tern project.
	 * 
	 * @return the JSON Type Definitions of the tern project.
	 */
	public JsonArray getLibs() {
		JsonArray libs = (JsonArray) super.get(LIBS_FIELD_NAME);
		if (libs == null) {
			libs = new DirtyableJsonArray(this);
			add(LIBS_FIELD_NAME, libs);
		}
		return libs;
	}

	/**
	 * Add Tern plugin.
	 * 
	 * @param plugin
	 *            the tern plugin to add.
	 * @return true if plugin to add, replace an existing plugin and false
	 *         otherwise.
	 */
	public void addPlugin(ITernPlugin plugin) {
		addPlugin(plugin, null);
	}

	/**
	 * Add Tern plugin.
	 * 
	 * @param plugin
	 *            the tern plugin to add.
	 * @param options
	 *            plugin options.
	 */
	public void addPlugin(ITernPlugin plugin, JsonObject options) {
		JsonObject plugins = getPlugins();
		if (options == null)
			options = new JsonObject();
		if (!hasPlugin(plugin)) {
			plugins.add(plugin.getName(), options);
		} else {
			if (!JsonHelper.isSameJson(plugins.get(plugin.getName()), options)) {
				plugins.set(plugin.getName(), options);
			}
		}
	}

	/**
	 * Returns true if the given plugin exists and false otherwise.
	 * 
	 * @param plugin
	 * @return true if the given plugin exists and false otherwise.
	 */
	public boolean hasPlugin(ITernPlugin plugin) {
		JsonObject plugins = (JsonObject) super.get(PLUGINS_FIELD_NAME);
		return plugins == null ? false : plugins.get(plugin.getName()) != null;
	}

	/**
	 * Return the JSON plugins of the tern project.
	 * 
	 * @return the JSON plugins of the tern project.
	 */
	public JsonObject getPlugins() {
		JsonObject plugins = (JsonObject) super.get(PLUGINS_FIELD_NAME);
		if (plugins == null) {
			plugins = new DirtyableJsonObject(this);
			add(PLUGINS_FIELD_NAME, plugins);
		}
		return plugins;
	}

	public void addLoadEagerlyPattern(String pattern) {
		if (patterns == null) {
			patterns = new DirtyableJsonArray(this);
			add("loadEagerly", patterns);
		}
		patterns.add(pattern);
	}

	/**
	 * Save the tern project in the file .tern-project of the project base dir.
	 * 
	 * @throws IOException
	 */
	public void save() throws IOException {
		projectDir.mkdirs();
		Writer writer = null;
		try {
			writer = new FileWriter(new File(projectDir, TERN_PROJECT));
			super.writeTo(writer);
		} finally {
			if (writer != null) {
				IOUtils.closeQuietly(writer);
			}
		}
		this.dirty = false;
	}

	/**
	 * Save the tern project in the file .tern-project of the project base dir
	 * if the project is dirty.
	 * 
	 * @throws IOException
	 */
	public void saveIfNeeded() throws IOException {
		if (isDirty()) {
			save();
		}
	}

	/**
	 * Load the tern project from the .tern-project of the project base dir.
	 * 
	 * @throws IOException
	 */
	public void load() throws IOException {
		File file = new File(projectDir, TERN_PROJECT);
		if (file.exists()) {
			try {
				JsonHelper.readFrom(new FileReader(file), this);
			} catch (ParseException e) {
				throw new IOException(e);
			}
		}
		this.dirty = false;
	}

	/**
	 * Set the tern file manager.
	 * 
	 * @param fileManager
	 */
	public void setFileManager(TernFileManager<T> fileManager) {
		this.fileManager = fileManager;
	}

	/**
	 * Returns the setted tern file manager and null otherwise.
	 * 
	 * @return
	 */
	public TernFileManager<T> getFileManager() {
		return fileManager;
	}

	public void clearLibs() {
		remove(LIBS_FIELD_NAME);
	}

	public void clearPlugins() {
		remove(PLUGINS_FIELD_NAME);
	}

	/**
	 * Returns true if the project is dirty and false otherwise.
	 * 
	 * @return true if the project is dirty and false otherwise
	 */
	public boolean isDirty() {
		return dirty;
	}

	@Override
	public void setDirty(boolean dirty) {
		this.dirty = dirty;
	}
}

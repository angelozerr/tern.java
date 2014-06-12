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
import tern.server.TernDef;
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
public class TernProject<T> extends JsonObject {

	private static final long serialVersionUID = 1L;

	public static final String TERN_PROJECT = ".tern-project";

	private static final String PLUGINS_FIELD_NAME = "plugins";
	private static final String LIBS_FIELD_NAME = "libs";

	private final File projectDir;
	private JsonArray patterns;

	/**
	 * tern file managaer.
	 */
	private TernFileManager<T> fileManager;

	/**
	 * Tern project constructor.
	 * 
	 * @param projectDir
	 *            the project base dir.
	 */
	public TernProject(File projectDir) {
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
	 * @return true if lib to add, replace an existing lib and false otherwise.
	 */
	public boolean addLib(ITernDef lib) {
		return addLib(lib.getName());
	}

	/**
	 * Add JSON Type Definition.
	 * 
	 * @param lib
	 *            the JSON Type Definition.
	 * @return true if lib to add, replace an existing lib and false otherwise.
	 */
	public boolean addLib(String lib) {
		boolean exists = hasLib(lib);
		if (!exists) {
			getLibs().add(lib);
		}
		return exists;
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
	public boolean hasLib(TernDef lib) {
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
			libs = new JsonArray();
			super.add(LIBS_FIELD_NAME, libs);
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
	public boolean addPlugin(ITernPlugin plugin) {
		return addPlugin(plugin, null);
	}

	/**
	 * Add Tern plugin.
	 * 
	 * @param plugin
	 *            the tern plugin to add.
	 * @param options
	 *            plugin options.
	 * @return true if plugin to add, replace an existing plugin and false
	 *         otherwise.
	 */
	public boolean addPlugin(ITernPlugin plugin, JsonObject options) {
		boolean exists = hasPlugin(plugin);
		getPlugins().add(plugin.getName(),
				options != null ? options : new JsonObject());
		return exists;
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
			plugins = new JsonObject();
			super.add(PLUGINS_FIELD_NAME, plugins);
		}
		return plugins;
	}

	public void addLoadEagerlyPattern(String pattern) {
		if (patterns == null) {
			patterns = new JsonArray();
			super.add("loadEagerly", patterns);
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
				e.printStackTrace();
			}
		}
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
		super.remove(LIBS_FIELD_NAME);
	}

	public void clearPlugins() {
		super.remove(PLUGINS_FIELD_NAME);
	}

}

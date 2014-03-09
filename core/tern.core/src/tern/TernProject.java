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
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import tern.server.ITernPlugin;
import tern.utils.IOUtils;

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
public class TernProject<T> extends JSONObject {

	private static final long serialVersionUID = 1L;

	public static final String TERN_PROJECT = ".tern-project";

	private static final String PLUGINS_FIELD_NAME = "plugins";
	private static final String LIBS_FIELD_NAME = "libs";

	private final File projectDir;
	private List<String> patterns;

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
	 */
	public void addLib(String lib) {
		getLibs().add(lib);
	}

	/**
	 * Return the JSON Type Defintnions of the tern project.
	 * 
	 * @return the JSON Type Defintnions of the tern project.
	 */
	public List getLibs() {
		List libs = (List) super.get(LIBS_FIELD_NAME);
		if (libs == null) {
			libs = new JSONArray();
			super.put(LIBS_FIELD_NAME, libs);
		}
		return libs;
	}

	/**
	 * Add Tern plugin.
	 * 
	 * @param plugin
	 *            the tern plugin to add.
	 */
	public void addPlugin(ITernPlugin plugin) {
		getPlugins().put(plugin.getName(), "../");
	}

	/**
	 * Return the JSON plugins of the tern project.
	 * 
	 * @return the JSON plugins of the tern project.
	 */
	public JSONObject getPlugins() {
		JSONObject plugins = (JSONObject) super.get(PLUGINS_FIELD_NAME);
		if (plugins == null) {
			plugins = new JSONObject();
			super.put(PLUGINS_FIELD_NAME, plugins);
		}
		return plugins;
	}

	public void addLoadEagerlyPattern(String pattern) {
		if (patterns == null) {
			patterns = new ArrayList<String>();
			super.put("loadEagerly", patterns);
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
			super.writeJSONString(writer);
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
			JSONParser parser = new JSONParser();
			try {
				JSONObject result = (JSONObject) parser.parse(new FileReader(
						file));
				super.putAll(result);
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
}

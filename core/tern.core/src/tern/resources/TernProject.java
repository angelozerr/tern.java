/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 *  								  - asynchronous file upload
 */
package tern.resources;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.Collections;
import java.util.List;

import org.w3c.dom.Document;
import org.w3c.dom.Node;

import tern.ITernFile;
import tern.ITernFileSynchronizer;
import tern.ITernProject;
import tern.TernException;
import tern.internal.resources.InternalTernResourcesManager;
import tern.repository.ITernRepository;
import tern.scriptpath.ITernScriptPath;
import tern.scriptpath.impl.dom.DOMElementsScriptPath;
import tern.server.ITernDef;
import tern.server.ITernPlugin;
import tern.server.ITernServer;
import tern.server.protocol.JsonHelper;
import tern.server.protocol.TernDoc;
import tern.server.protocol.TernQuery;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.definition.ITernDefinitionCollector;
import tern.server.protocol.guesstypes.ITernGuessTypesCollector;
import tern.server.protocol.guesstypes.TernGuessTypesQuery;
import tern.server.protocol.lint.ITernLintCollector;
import tern.server.protocol.type.ITernTypeCollector;
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
public class TernProject extends JsonObject implements ITernProject {

	private static final long serialVersionUID = 1L;

	private static final String PLUGINS_FIELD_NAME = "plugins"; //$NON-NLS-1$
	private static final String LIBS_FIELD_NAME = "libs"; //$NON-NLS-1$
	private static final String LOAD_EAGERLY_FIELD_NAME = "loadEagerly"; //$NON-NLS-1$

	private final File projectDir;
	private File ternProjectFile;

	/**
	 * tern file synchronizer.
	 */
	private ITernFileSynchronizer fileSynchronizer;

	private String lastTernProjectFileContent;

	private Object libLock = new Object();
	
	/**
	 * Tern project constructor.
	 * 
	 * @param projectDir
	 *            the project base dir.
	 */
	public TernProject(File projectDir) {
		this.projectDir = projectDir;
		this.ternProjectFile = new File(projectDir, TERN_PROJECT_FILE);
		this.fileSynchronizer = InternalTernResourcesManager.getInstance()
				.createTernFileSynchronizer(this);
	}

	@Override
	public String getName() {
		return projectDir.getName();
	}

	/**
	 * Returns the project base dir.
	 * 
	 * @return the project base dir.
	 */
	@Override
	public File getProjectDir() {
		return projectDir;
	}

	@Override
	public File getTernProjectFile() {
		return ternProjectFile;
	}

	/**
	 * Returns true if lib or plugins exists and false otheriwse.
	 * 
	 * @return true if lib or plugins exists and false otheriwse.
	 */
	public boolean hasModules() {
		return hasLibs() || hasPlugins();
	}

	/**
	 * Add JSON Type Definition.
	 * 
	 * @param lib
	 *            the JSON Type Definition.
	 */
	@Override
	public void addLib(ITernDef lib) {
		addLib(lib.getName());
	}

	/**
	 * Add JSON Type Definition.
	 * 
	 * @param lib
	 *            the JSON Type Definition.
	 */
	@Override
	public void addLib(String lib) {
	  synchronized(libLock) {
		if (!hasLib(lib)) {
			getLibs().add(lib);
		}
	  }
	}

	/**
	 * Returns true if the given lib exists and false otherwise.
	 * 
	 * @param lib
	 * @return true if the given lib exists and false otherwise.
	 */
	@Override
	public boolean hasLib(String lib) {
	  synchronized(libLock) {
		JsonArray libs = getLibs();
		if (libs != null) {
			for (JsonValue l : libs) {
				if (l.isString() && l.asString().equals(lib))
					return true;
			}
		}
		return false;
	  }
	}

	/**
	 * Returns true if lib exist and false otherwise.
	 * 
	 * @return
	 */
	public boolean hasLibs() {
		return super.get(LIBS_FIELD_NAME) != null;
	}

	/**
	 * Returns true if the given lib exists and false otherwise.
	 * 
	 * @param lib
	 * @return true if the given lib exists and false otherwise.
	 */
	@Override
	public boolean hasLib(ITernDef lib) {
		return hasLib(lib.getName());
	}

	/**
	 * Return the JSON Type Definitions of the tern project.
	 * 
	 * @return the JSON Type Definitions of the tern project.
	 */
	@Override
	public JsonArray getLibs() {
	  synchronized(libLock) {
		JsonArray libs = (JsonArray) super.get(LIBS_FIELD_NAME);
		if (libs == null) {
			libs = new JsonArray();
			add(LIBS_FIELD_NAME, libs);
		}
		return libs;
	  }
	}

	/**
	 * Clear JSON Type Definitions.
	 */
	@Override
	public void clearLibs() {
	  synchronized(libLock) {
		remove(LIBS_FIELD_NAME);
	  }
	}

	/**
	 * Returns true if plugins exist and false otherwise.
	 * 
	 * @return
	 */
	public boolean hasPlugins() {
		return super.get(PLUGINS_FIELD_NAME) != null;
	}

	/**
	 * Add Tern plugin.
	 * 
	 * @param plugin
	 *            the tern plugin to add.
	 * @return true if plugin to add, replace an existing plugin and false
	 *         otherwise.
	 */
	@Override
	public void addPlugin(ITernPlugin plugin) {
		addPlugin(plugin, null);
	}

	/**
	 * Add Tern plugin with options.
	 * 
	 * @param plugin
	 *            the tern plugin to add.
	 * @param options
	 *            plugin options.
	 */
	@Override
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
	@Override
	public boolean hasPlugin(ITernPlugin plugin) {
		return hasPlugin(plugin.getName());
	}

	/**
	 * Returns true if the given plugin exists and false otherwise.
	 * 
	 * @param plugin
	 * @return true if the given plugin exists and false otherwise.
	 */
	@Override
	public boolean hasPlugin(String plugin) {
		JsonObject plugins = (JsonObject) super.get(PLUGINS_FIELD_NAME);
		return plugins == null ? false : plugins.get(plugin) != null;
	}

	/**
	 * Return the JSON plugins of the tern project.
	 * 
	 * @return the JSON plugins of the tern project.
	 */
	@Override
	public JsonObject getPlugins() {
		JsonObject plugins = (JsonObject) super.get(PLUGINS_FIELD_NAME);
		if (plugins == null) {
			plugins = new JsonObject();
			add(PLUGINS_FIELD_NAME, plugins);
		}
		return plugins;
	}

	/**
	 * Clear plugins.
	 */
	@Override
	public void clearPlugins() {
		remove(PLUGINS_FIELD_NAME);
	}

	public void addLoadEagerlyPattern(String pattern) {
		JsonArray patterns = (JsonArray) super.get(LOAD_EAGERLY_FIELD_NAME);
		if (patterns == null) {
			patterns = new JsonArray();
			add(LOAD_EAGERLY_FIELD_NAME, patterns);
		}
		patterns.add(pattern);
	}

	/**
	 * Save the tern project in the file .tern-project of the project base dir.
	 * 
	 * @throws IOException
	 */
	@Override
	public final void save() throws IOException {
		try {
			doSave();
		} finally {
			this.lastTernProjectFileContent = toString();
		}
	}

	/**
	 * Save the tern project in the file .tern-project of the project base dir.
	 * 
	 * @throws IOException
	 */
	protected void doSave() throws IOException {
		if (isDirty()) {
			getProjectDir().mkdirs();
			Writer writer = null;
			try {
				writer = new FileWriter(ternProjectFile);
				super.writeTo(writer);
			} finally {
				if (writer != null) {
					IOUtils.closeQuietly(writer);
				}
			}
		}
	}

	/**
	 * Load the tern project from the .tern-project of the project base dir.
	 * 
	 * @throws IOException
	 */
	public final void load() throws IOException {
		doLoad();
		this.lastTernProjectFileContent = toString();
	}

	/**
	 * Load the tern project from the .tern-project of the project base dir.
	 * 
	 * @throws IOException
	 */
	protected void doLoad() throws IOException {
		if (ternProjectFile.exists()) {
			try {
				JsonHelper.readFrom(new FileReader(ternProjectFile), this);
			} catch (ParseException e) {
				throw new IOException(e);
			}
		} else {
			createEmptyTernProjectFile();
		}
		this.lastTernProjectFileContent = toString();
	}

	/**
	 * Create an empty a .tern-project file.
	 * 
	 * @throws IOException
	 */
	protected void createEmptyTernProjectFile() throws IOException {
		save();
	}

	@Override
	public void handleException(Throwable t) {
		t.printStackTrace();
	}

	/**
	 * Returns file cache manager.
	 * 
	 * @return
	 */
	@Override
	public ITernFileSynchronizer getFileSynchronizer() {
		return fileSynchronizer;
	}

	@Override
	public ITernServer getTernServer() {
		return null;
	}

	@Override
	public ITernFile getFile(String name) {
		return InternalTernResourcesManager.getInstance().getTernFile(this,
				name);
	}

	@Override
	public ITernFile getFile(Object fileObject) {
		return InternalTernResourcesManager.getInstance().getTernFile(
				fileObject);
	}

	@Override
	public List<ITernScriptPath> getScriptPaths() {
		return Collections.emptyList();
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class adapterClass) {
		if (adapterClass == File.class) {
			return getProjectDir();
		}
		return null;
	}

	protected void synchronize(TernDoc doc, JsonArray names,
			ITernScriptPath scriptPath, Node domNode, ITernFile file) {
		ITernFileSynchronizer synchronizer = getFileSynchronizer();
		synchronizer.ensureSynchronized();
		if (file != null) {
			if (doc.getQuery() != null) {
				doc.getQuery().setFile(file.getFullName(this));
			}
			if (domNode != null) {
				DOMElementsScriptPath domPath = createDOMElementsScriptPath(
						domNode, file);
				synchronizer.synchronizeScriptPath(domPath,
						file.getFullName(this));
			} else {
				try {
					synchronizer.synchronizeFile(doc, file);
				} catch (IOException e) {
					handleException(e);
				}
			}
		}
		if (names != null) {
			synchronizer.fillSyncedFileNames(names, scriptPath);
		}
	}

	protected DOMElementsScriptPath createDOMElementsScriptPath(Node domNode,
			ITernFile file) {
		final Document doc = domNode.getOwnerDocument();
		return new DOMElementsScriptPath(this, file, null) {
			@Override
			protected Document getDocument() {
				return doc;
			}
		};
	}

	@Override
	public void request(TernQuery query, ITernFile file,
			ITernCompletionCollector collector) throws IOException,
			TernException {
		request(query, null, null, null, file, collector);
	}

	@Override
	public void request(TernQuery query, JsonArray names,
			ITernScriptPath scriptPath, Node domNode, ITernFile file,
			ITernCompletionCollector collector) throws IOException,
			TernException {
		TernDoc doc = new TernDoc(query);
		synchronize(doc, names, scriptPath, domNode, file);
		ITernServer server = getTernServer();
		server.request(doc, collector);
	}

	@Override
	public void request(TernQuery query, ITernFile file,
			ITernDefinitionCollector collector) throws IOException,
			TernException {
		request(query, null, null, null, file, collector);
	}

	@Override
	public void request(TernQuery query, JsonArray names,
			ITernScriptPath scriptPath, Node domNode, ITernFile file,
			ITernDefinitionCollector collector) throws IOException,
			TernException {
		TernDoc doc = new TernDoc(query);
		synchronize(doc, names, scriptPath, domNode, file);
		ITernServer server = getTernServer();
		server.request(doc, collector);
	}

	@Override
	public void request(TernQuery query, ITernFile file,
			ITernTypeCollector collector) throws IOException, TernException {
		request(query, null, null, null, file, collector);
	}

	@Override
	public void request(TernQuery query, JsonArray names,
			ITernScriptPath scriptPath, Node domNode, ITernFile file,
			ITernTypeCollector collector) throws IOException, TernException {
		TernDoc doc = new TernDoc(query);
		synchronize(doc, names, scriptPath, domNode, file);
		ITernServer server = getTernServer();
		server.request(doc, collector);
	}

	@Override
	public void request(TernQuery query, ITernFile file,
			ITernLintCollector collector) throws IOException, TernException {
		TernDoc doc = new TernDoc(query);
		synchronize(doc, null, null, null, file);
		ITernServer server = getTernServer();
		server.request(doc, collector);
	}

	@Override
	public void request(TernQuery query, ITernLintCollector collector)
			throws IOException, TernException {
		request(query, null, collector);
	}

	@Override
	public void request(TernGuessTypesQuery query, ITernFile file,
			ITernGuessTypesCollector collector) throws IOException,
			TernException {
		TernDoc doc = new TernDoc(query);
		synchronize(doc, null, null, null, file);
		ITernServer server = getTernServer();
		server.request(doc, collector);
	}

	@Override
	public ITernRepository getRepository() {
		return null;
	}

	public boolean isDirty() {
		return !toString().equals(lastTernProjectFileContent);
	}
}

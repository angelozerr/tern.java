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
package tern.eclipse.ide.internal.core;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.QualifiedName;
import org.eclipse.core.runtime.Status;
import org.eclipse.jface.text.IDocument;
import org.w3c.dom.Node;

import tern.TernException;
import tern.TernProject;
import tern.angular.protocol.completions.TernAngularCompletionsQuery;
import tern.eclipse.ide.core.IDETernFileManager;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.ITernConsoleConnector;
import tern.eclipse.ide.core.ITernProjectLifecycleListener.LifecycleEventType;
import tern.eclipse.ide.core.ITernServerPreferencesListener;
import tern.eclipse.ide.core.ITernServerType;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.TernNature;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath.ScriptPathsType;
import tern.eclipse.ide.core.utils.FileUtils;
import tern.eclipse.ide.internal.core.preferences.TernCorePreferencesSupport;
import tern.eclipse.ide.internal.core.scriptpath.DOMElementsScriptPath;
import tern.eclipse.ide.internal.core.scriptpath.FolderScriptPath;
import tern.eclipse.ide.internal.core.scriptpath.JSFileScriptPath;
import tern.eclipse.ide.internal.core.scriptpath.ProjectScriptPath;
import tern.server.IResponseHandler;
import tern.server.ITernServer;
import tern.server.ITernServerListener;
import tern.server.TernServerAdapter;
import tern.server.protocol.JsonHelper;
import tern.server.protocol.TernDoc;
import tern.server.protocol.TernFile;
import tern.server.protocol.TernQuery;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.definition.ITernDefinitionCollector;
import tern.server.protocol.html.ScriptTagRegion;
import tern.server.protocol.lint.ITernLintCollector;
import tern.server.protocol.type.ITernTypeCollector;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;

/**
 * Eclipse IDE Tern project.
 * 
 */
public class IDETernProject extends TernProject<IFile> implements
		IIDETernProject, ITernServerPreferencesListener {

	private static final int MAX_FILES = 20;

	private static final String PATH_JSON_FIELD = "path";

	private static final String TYPE_JSON_FIELD = "type";

	private static final String SCRIPT_PATHS_JSON_FIELD = "scriptPaths";

	private static final String IDE_JSON_FIELD = "ide";

	private static final long serialVersionUID = 1L;

	private static final QualifiedName TERN_PROJECT = new QualifiedName(
			TernCorePlugin.PLUGIN_ID + ".sessionprops", "TernProject");

	private final IProject project;

	private ITernServer ternServer;

	private final List<ITernScriptPath> scriptPaths;

	private final Object lock = new Object();

	private final Map<String, Object> data;

	private final List<ITernServerListener> listeners;

	IDETernProject(IProject project) throws CoreException {
		super(project.getLocation().toFile());
		this.project = project;
		super.setFileManager(new IDETernFileManager(getProject()));
		project.setSessionProperty(TERN_PROJECT, this);
		this.scriptPaths = new ArrayList<ITernScriptPath>();
		this.data = new HashMap<String, Object>();
		this.listeners = new ArrayList<ITernServerListener>();
		TernCorePlugin.getTernServerTypeManager().addServerPreferencesListener(
				this);
		ensureNatureIsConfigured();
	}

	/**
	 * Returns the tern project of the given eclipse projectand throws exception
	 * if the eclipse project has not tern nature.
	 * 
	 * @param project
	 *            eclipse project.
	 * @return the tern project of the given eclipse projectand throws exception
	 *         if the eclipse project has not tern nature.
	 * @throws CoreException
	 */
	public static IDETernProject getTernProject(IProject project)
			throws CoreException {
		if (!IDETernProject.hasTernNature(project)) {
			throw new CoreException(new Status(IStatus.ERROR,
					TernCorePlugin.PLUGIN_ID, "The project "
							+ project.getName() + " is not a tern project."));
		}
		IDETernProject ternProject = (IDETernProject) project
				.getSessionProperty(IDETernProject.TERN_PROJECT);
		if (ternProject == null) {
			ternProject = new IDETernProject(project);
			try {
				ternProject.load();
			} catch (IOException e) {
				Trace.trace(Trace.SEVERE, "Error while loading tern project", e);
			}
		}
		return ternProject;
	}

	/**
	 * Returns the Eclispe project.
	 * 
	 * @return
	 */
	public IProject getProject() {
		return project;
	}

	/**
	 * Returns the linked instance of tern server.
	 * 
	 * @return
	 */
	private ITernServer getTernServer() {
		if (isServerDisposed()) {
			try {
				ITernServerType type = TernCorePreferencesSupport.getInstance()
						.getServerType();
				this.ternServer = type.createServer(this);
				this.ternServer.addServerListener(new TernServerAdapter() {
					@Override
					public void onStop(ITernServer server) {
						IDETernProject.this.getFileManager()
								.cleanIndexedFiles();
					}
				});
				copyListeners();
				configureConsole();
			} catch (Exception e) {
				// should be improved?
				Trace.trace(Trace.SEVERE, "Error while creating tern server", e);
			}

		}
		return ternServer;
	}

	public boolean isServerDisposed() {
		return ternServer == null || ternServer.isDisposed();
	}

	/**
	 * Return true if the given project have tern nature
	 * "tern.eclipse.ide.core.ternnature" and false otherwise.
	 * 
	 * @param project
	 *            Eclipse project.
	 * @return true if the given project have tern nature
	 *         "tern.eclipse.ide.core.ternnature" and false otherwise.
	 */
	public static boolean hasTernNature(IProject project) {
		return TernNatureAdaptersManager.getManager().hasTernNature(project);
	}

	@Override
	public void load() throws IOException {
		try {
			TernProjectLifecycleManager.getManager()
					.fireTernProjectLifeCycleListenerChanged(this,
							LifecycleEventType.onLoadBefore);
			super.load();
			// Load IDE informations of the tern project.
			loadIDEInfos();
			initAdaptedNaturesInfos();
		} finally {
			TernProjectLifecycleManager.getManager()
					.fireTernProjectLifeCycleListenerChanged(this,
							LifecycleEventType.onLoadAfter);
		}
	}

	/**
	 * Load IDE informations from the JSON .tern-project file.
	 */
	private void loadIDEInfos() {
		// Load script paths
		this.scriptPaths.clear();
		JsonObject ide = (JsonObject) super.get(IDE_JSON_FIELD);
		if (ide != null) {
			// There is ide information.
			JsonArray jsonScripts = (JsonArray) ide
					.get(SCRIPT_PATHS_JSON_FIELD);
			if (jsonScripts != null) {
				// There is scriptPaths defined.
				JsonObject jsonScript = null;
				String type = null;
				String path = null;
				// Loop for each script path.
				for (Object object : jsonScripts) {
					jsonScript = (JsonObject) object;
					type = JsonHelper.getString(jsonScript, TYPE_JSON_FIELD);
					path = JsonHelper.getString(jsonScript, PATH_JSON_FIELD);
					if (type != null && path != null) {
						ScriptPathsType pathType = ScriptPathsType
								.getType(type);
						if (pathType == null) {
							pathType = ScriptPathsType.FILE;
						}
						if (pathType != null) {
							// script path type exists.
							IResource resource = getResource(path, pathType);
							if (resource != null && resource.exists()) {
								// the script path exists, add it.
								this.scriptPaths.add(createScriptPath(resource,
										pathType));
							}
						}
					}
				}
			}

		}
	}

	/*
	 * Configures Tern Modules (Libraries and Plugins) that are default for Tern
	 * Nature Adapters active on a project
	 */
	private void initAdaptedNaturesInfos() {
		try {
			TernNatureAdaptersManager.getManager().addDefaultModules(this);
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE,
					"Error while configuring default tern project modules", e);
			return;
		}

		try {
			saveIfNeeded();
		} catch (IOException e) {
			Trace.trace(Trace.SEVERE, "Error while saving tern project", e);
		}
	}

	/**
	 * Returns the resource of the given path and type.
	 * 
	 * @param path
	 *            the path of the script path
	 * @param pathType
	 *            the type of the script path.
	 * @return
	 */
	private IResource getResource(String path, ScriptPathsType pathType) {
		switch (pathType) {
		case FILE:
			return getProject().getFile(path);
		case FOLDER:
			return getProject().getFolder(path);
		case PROJECT:
			return ResourcesPlugin.getWorkspace().getRoot().getProject(path);
		}
		throw new UnsupportedOperationException(
				"Cannot retrieve resource from the type=" + pathType
						+ " of the path=" + path);
	}

	@Override
	public void save() throws IOException {
		try {
			TernProjectLifecycleManager.getManager()
					.fireTernProjectLifeCycleListenerChanged(this,
							LifecycleEventType.onSaveBefore);
			// Store IDE tern project info.
			saveIDEInfos();
			super.save();
			disposeServer();
		} finally {
			TernProjectLifecycleManager.getManager()
					.fireTernProjectLifeCycleListenerChanged(this,
							LifecycleEventType.onSaveAfter);
		}
	}

	/**
	 * Save IDE informations in the JSON file .tern-project.
	 */
	private void saveIDEInfos() {
		JsonObject ide = new JsonObject();
		// script path
		if (scriptPaths.size() > 0) {
			JsonArray jsonScripts = new JsonArray();
			// Loop for each script path and save it in the JSON file
			// .tern-project.
			for (ITernScriptPath scriptPath : scriptPaths) {
				if (!scriptPath.isExternal()) {
					JsonObject jsonScript = new JsonObject();
					jsonScript
							.add(TYPE_JSON_FIELD, scriptPath.getType().name());
					jsonScript.add(PATH_JSON_FIELD, scriptPath.getPath());
					jsonScripts.add(jsonScript);
				}
			}
			ide.add(SCRIPT_PATHS_JSON_FIELD, jsonScripts);
		}
		super.set(IDE_JSON_FIELD, ide);
	}

	/**
	 * Returns the list of script paths.
	 * 
	 * @return
	 */
	@Override
	public Collection<ITernScriptPath> getScriptPaths() {
		return scriptPaths;
	}

	/**
	 * Create the script path instance from the given resource and type.
	 * 
	 * @param resource
	 *            the root resource.
	 * @param type
	 *            of the script path.
	 * @return
	 */
	public ITernScriptPath createScriptPath(IResource resource,
			ScriptPathsType type) {
		return createScriptPath(resource, type, null);
	}

	private ITernScriptPath createScriptPath(IResource resource,
			ScriptPathsType type, String external) {
		switch (type) {
		case FOLDER:
			return new FolderScriptPath((IFolder) resource, external);
		case FILE:
			IFile file = (IFile) resource;
			if (FileUtils.isJSFile(file)) {
				return new JSFileScriptPath(file, external);
			}
			return new DOMElementsScriptPath(file, external);
		case PROJECT:
			return new ProjectScriptPath((IProject) resource, getProject(),
					external);
		}
		throw new UnsupportedOperationException(
				"Cannot create script path for the given type " + type);
	}

	/**
	 * Set the new script paths to use.
	 * 
	 * @param scriptPaths
	 * @throws IOException
	 */
	public void setScriptPaths(List<ITernScriptPath> scriptPaths)
			throws IOException {
		this.scriptPaths.clear();
		this.scriptPaths.addAll(scriptPaths);
		save();
	}

	@Override
	public ITernScriptPath addExternalScriptPath(IResource resource,
			ScriptPathsType type, String external) throws IOException {
		ITernScriptPath path = createScriptPath(resource, type, external);
		scriptPaths.add(path);
		saveIfNeeded();
		return path;
	}

	@Override
	public void removeExternalScriptPaths(String external) {
		List<ITernScriptPath> initialScriptPaths = new ArrayList<ITernScriptPath>(
				scriptPaths);
		for (ITernScriptPath scriptPath : initialScriptPaths) {
			if (external.equals(scriptPath.getExternalLabel())) {
				scriptPaths.remove(scriptPath);
			}
		}
	}

	@Override
	public boolean equals(Object value) {
		if (value instanceof IDETernProject) {
			return ((IDETernProject) value).getProject().equals(getProject());
		}
		return super.equals(value);
	}

	/**
	 * Returns the script path instance from the given path and null otherwise.
	 * 
	 * @param path
	 *            of the script path resource.
	 * @return the script path instance from the given path and null otherwise.
	 */
	public ITernScriptPath getScriptPath(String path) {
		for (ITernScriptPath scriptPath : scriptPaths) {
			if (scriptPath.getPath().equals(path)) {
				return scriptPath;
			}
		}
		return null;
	}

	/**
	 * Returns true if trace of the tern server (JSON request/response) should
	 * be displayed on the Eclipse console and false otherwise.
	 * 
	 * @return
	 */
	public boolean isTraceOnConsole() {
		return TernCorePreferencesSupport.getInstance().isTraceOnConsole(
				project);
	}

	/**
	 * Configure console to show/hide JSON request/response of the tern server.
	 */
	public void configureConsole() {
		if (ternServer != null) {
			// There is a tern server instance., Retrieve the well connector the
			// the eclipse console.
			ITernConsoleConnector connector = TernConsoleConnectorManager
					.getManager().getConnector(ternServer);
			if (connector != null) {
				if (isTraceOnConsole()) {
					// connect the tern server to the eclipse console.
					connector.connectToConsole(ternServer, this);
				} else {
					// disconnect the tern server to the eclipse console.
					connector.disconnectToConsole(ternServer, this);
				}
			}
		}
	}

	// ---------------- Completions

	@Override
	public void request(TernAngularCompletionsQuery query, JsonArray names,
			ITernCompletionCollector collector) throws IOException,
			TernException {
		syncFiles(new TernDoc(), names, null);
		TernDoc doc = new TernDoc(query);
		request(doc, collector);
	}

	/**
	 * 
	 * @param query
	 * @param scriptPath
	 * @param names
	 * @param collector
	 * @throws IOException
	 * @throws TernException
	 */
	@Override
	public void request(TernQuery query, JsonArray names,
			ITernScriptPath scriptPath, ITernCompletionCollector collector)
			throws IOException, TernException {
		// update files
		syncFiles(new TernDoc(), names, scriptPath);
		TernDoc doc = new TernDoc(query);
		request(doc, collector);
	}

	@Override
	public void request(TernQuery query, JsonArray names, Node domNode,
			IFile domFile, IDocument document,
			ITernCompletionCollector collector) throws IOException,
			TernException {
		synchFiles(names, domNode, domFile, document, new TernDoc());
		TernDoc doc = new TernDoc(query);
		request(doc, collector);
	}

	@Override
	public void request(TernQuery query, IFile file, IDocument document,
			int startOffset, ITernCompletionCollector collector)
			throws IOException, TernException {
		synchFiles(file, document, new TernDoc());
		TernDoc doc = new TernDoc(query);
		/*
		 * String name = getFileManager().getFileName(file);
		 * updateFragmentAround(doc, name, document, startOffset, startOffset);
		 * query.setFile("#0");
		 */
		request(doc, collector);
	}

	private void request(TernDoc doc, ITernCompletionCollector collector)
			throws TernException {
		ITernServer server = getTernServer();
		server.request(doc, collector);
	}

	// ---------- Definition

	/**
	 * 
	 * @param query
	 * @param names
	 * @param scriptPath
	 * @param collector
	 * @throws IOException
	 * @throws TernException
	 */
	@Override
	public void request(TernQuery query, JsonArray names,
			ITernScriptPath scriptPath, ITernDefinitionCollector collector)
			throws IOException, TernException {
		// update files
		syncFiles(new TernDoc(), names, scriptPath);
		TernDoc doc = new TernDoc(query);
		request(doc, collector);
	}

	@Override
	public void request(TernQuery query, JsonArray names, Node domNode,
			IFile domFile, IDocument document,
			ITernDefinitionCollector collector) throws IOException,
			TernException {
		synchFiles(names, domNode, domFile, document, new TernDoc());
		TernDoc doc = new TernDoc(query);
		request(doc, collector);
	}

	@Override
	public void request(TernQuery query, IFile file, IDocument document,
			ITernDefinitionCollector collector) throws IOException,
			TernException {
		synchFiles(file, document, new TernDoc());
		TernDoc doc = new TernDoc(query);
		request(doc, collector);
	}

	private void request(TernDoc doc, ITernDefinitionCollector collector)
			throws TernException {
		ITernServer server = getTernServer();
		server.request(doc, collector);
	}

	// ----------------------- lint

	@Override
	public void request(TernQuery query, IFile file, IDocument document,
			ITernLintCollector collector) throws IOException, TernException {
		synchFiles(file, document, new TernDoc());
		TernDoc doc = new TernDoc(query);
		String name = getFileManager().getFileName(file);
		query.setFile(name);
		/*
		 * String name = getFileManager().getFileName(file);
		 * updateFragmentAround(doc, name, document, startOffset, startOffset);
		 * query.setFile("#0");
		 */
		request(doc, collector);
	}

	private void request(TernDoc doc, ITernLintCollector collector)
			throws TernException {
		ITernServer server = getTernServer();
		server.request(doc, collector);
	}

	// ------------- Type

	@Override
	public void request(TernQuery query, JsonArray names,
			ITernScriptPath scriptPath, ITernTypeCollector collector)
			throws IOException, TernException {
		// update files
		syncFiles(new TernDoc(), names, scriptPath);
		TernDoc doc = new TernDoc(query);
		request(doc, collector);
	}

	@Override
	public void request(TernQuery query, JsonArray names, Node domNode,
			IFile domFile, IDocument document, ITernTypeCollector collector)
			throws IOException, TernException {
		synchFiles(names, domNode, domFile, document, new TernDoc());
		TernDoc doc = new TernDoc(query);
		request(doc, collector);
	}

	@Override
	public void request(TernQuery query, IFile file, IDocument document,
			int startOffset, ITernTypeCollector collector) throws IOException,
			TernException {
		synchFiles(file, document, new TernDoc());
		TernDoc doc = new TernDoc(query);
		/*
		 * String name = getFileManager().getFileName(file);
		 * updateFragmentAround(doc, name, document, startOffset, startOffset);
		 * query.setFile("#0");
		 */
		request(doc, collector);
	}

	private void request(TernDoc doc, ITernTypeCollector collector)
			throws TernException {
		ITernServer server = getTernServer();
		server.request(doc, collector);
	}

	// ----------------------- synch

	/**
	 * 
	 * @param doc
	 * @param names
	 * @param scriptPaths
	 * @throws IOException
	 */
	private void syncFiles(TernDoc doc, JsonArray names,
			ITernScriptPath scriptPath) throws IOException {
		synchronized (lock) {
			for (ITernScriptPath currentScriptPath : scriptPaths) {
				currentScriptPath.updateFiles(getFileManager(), doc,
						getNames(names, currentScriptPath, scriptPath));
			}
			synchFiles(doc);
		}
	}

	private JsonArray getNames(JsonArray names,
			ITernScriptPath currentScriptPath, ITernScriptPath scriptPath) {
		if (names != null) {
			if (scriptPath == null || currentScriptPath.equals(scriptPath)) {
				return names;
			}
			return null;
		}
		return names;
	}

	private void synchFiles(IFile file, IDocument document, TernDoc doc)
			throws IOException {
		synchronized (lock) {
			syncFiles(doc, null, null);
			if (file != null && file.exists()) {
				String name = getFileManager().getFileName(file);
				String text = document.get();
				ScriptTagRegion[] tags = getFileManager().getScriptTags(file);
				doc.addFile(name, text, tags, null);
				TernQuery query = doc.getQuery();
				if (query != null) {
					query.setFile(name);
				}
			}
			synchFiles(doc);
		}
	}

	/*
	 * private void updateFragmentAround(TernDoc doc, String name, IDocument
	 * document, int start, int end) {
	 * 
	 * FindReplaceDocumentAdapter adapter = new FindReplaceDocumentAdapter(
	 * document); try { long s = System.currentTimeMillis();
	 * 
	 * IRegion region = adapter.find(end, "\\bfunction\\b", false, false, false,
	 * true); System.err.println(region);
	 * System.err.println(System.currentTimeMillis() - s);
	 * 
	 * if (region != null) { String text = document.get(region.getOffset(), end
	 * - region.getOffset()); int n =
	 * document.getLineOfOffset(region.getOffset()); System.err.println(n);
	 * doc.addFile(name, text, n); doc.getQuery().setEnd(
	 * JsonHelper.getInteger(doc.getQuery(), "end") - region.getOffset()); }
	 * else { String text = document.get(); doc.addFile(name, text, null); }
	 * 
	 * } catch (BadLocationException e) { // TODO Auto-generated catch block
	 * e.printStackTrace(); }
	 * 
	 * }
	 */

	/*
	 * function getFragmentAround(data, start, end) { var doc = data.doc; var
	 * minIndent = null, minLine = null, endLine, tabSize = 4; for (var p =
	 * start.line - 1, min = Math.max(0, p - 50); p >= min; --p) { var line =
	 * doc.getLine(p), fn = line.search(/\bfunction\b/); if (fn < 0) continue;
	 * var indent = CodeMirror.countColumn(line, null, tabSize); if (minIndent
	 * != null && minIndent <= indent) continue; minIndent = indent; minLine =
	 * p; } if (minLine == null) minLine = min; var max =
	 * Math.min(doc.lastLine(), end.line + 20); if (minIndent == null ||
	 * minIndent == CodeMirror.countColumn(doc.getLine(start.line), null,
	 * tabSize)) endLine = max; else for (endLine = end.line + 1; endLine < max;
	 * ++endLine) { var indent = CodeMirror.countColumn(doc.getLine(endLine),
	 * null, tabSize); if (indent <= minIndent) break; } var from = Pos(minLine,
	 * 0); console.log(doc.getRange(from, Pos(endLine, 0))) return {type:
	 * "part", name: data.name, offsetLines: from.line, text: doc.getRange(from,
	 * Pos(endLine, 0))}; }
	 */

	private void synchFiles(TernDoc doc) {
		if (doc.hasFiles()) {
			JsonArray files = doc.getFiles();
			if (files.size() > MAX_FILES) {
				// max files size reached => send files grouped by MAX_FILES
				TernDoc newDoc = new TernDoc();
				for (int i = 0; i < files.size(); i++) {
					newDoc.addFile((TernFile) files.get(i));
					if (i > 0 && (i % MAX_FILES) == 0) {
						request(newDoc);
						newDoc.cleanFiles();
					}
				}
				if (newDoc.hasFiles()) {
					request(newDoc);
				}
			} else {
				// no max files size reached => send all files.
				request(doc);
			}
			doc.cleanFiles();
		}
	}

	public void request(TernDoc doc) {
		ITernServer server = getTernServer();
		server.request(doc, new IResponseHandler() {

			@Override
			public void onSuccess(Object data, String dataAsJsonString) {
			}

			@Override
			public void onError(String error) {
				Trace.trace(Trace.SEVERE, error);
			}

			@Override
			public boolean isDataAsJsonString() {
				return false;
			}
		});
	}

	private void synchFiles(JsonArray names, Node domNode, IFile domFile,
			IDocument document, TernDoc doc) throws IOException {
		synchronized (lock) {
			boolean hasJS = getFileManager().updateFiles(domNode, domFile, doc,
					names);
			if (!doc.hasFiles()) {
				syncFiles(doc, names, null);
			}
			if (hasJS) {
				synchFiles(domFile, document, doc);
			}
			synchFiles(doc);
		}
	}

	public void disposeServer() {
		if (!isServerDisposed()) {
			if (ternServer != null) {
				ternServer.dispose();
				ternServer = null;
			}
		}
	}

	public <T> T getData(String key) {
		return (T) data.get(key);
	}

	public void setData(String key, Object value) {
		data.put(key, value);
	}

	private void ensureNatureIsConfigured() throws CoreException {
		// Check if .tern-project is correctly configured for adapted nature
		final TernNature tempTernNature = new TernNature();
		tempTernNature.setProject(project);
		if (!tempTernNature.isConfigured()) {
			tempTernNature.configure();
		}
	}

	@Override
	public void serverPreferencesChanged(IProject project) {
		if (project == null || getProject().equals(project)) {
			disposeServer();
		}
	}

	// ----------------------- Tern server listeners.

	@Override
	public void addServerListener(ITernServerListener listener) {
		synchronized (listeners) {
			if (!listeners.contains(listener)) {
				listeners.add(listener);
			}
		}
		copyListeners();
	}

	@Override
	public void removeServerListener(ITernServerListener listener) {
		synchronized (listeners) {
			listeners.remove(listener);
		}
	}

	private void copyListeners() {
		if (ternServer != null) {
			for (ITernServerListener listener : listeners) {
				this.ternServer.addServerListener(listener);
			}
		}
	}
}

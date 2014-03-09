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
package tern.eclipse.ide.core;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.QualifiedName;
import org.eclipse.core.runtime.Status;
import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.FindReplaceDocumentAdapter;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.w3c.dom.Node;

import tern.TernException;
import tern.TernProject;
import tern.angular.protocol.completions.TernAngularCompletionsQuery;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath.ScriptPathsType;
import tern.eclipse.ide.core.utils.FileUtils;
import tern.eclipse.ide.internal.core.TernConsoleConnectorManager;
import tern.eclipse.ide.internal.core.Trace;
import tern.eclipse.ide.internal.core.preferences.TernCorePreferencesSupport;
import tern.eclipse.ide.internal.core.scriptpath.DOMElementsScriptPath;
import tern.eclipse.ide.internal.core.scriptpath.FolderScriptPath;
import tern.eclipse.ide.internal.core.scriptpath.JSFileScriptPath;
import tern.server.IResponseHandler;
import tern.server.ITernServer;
import tern.server.TernServerAdapter;
import tern.server.protocol.TernDoc;
import tern.server.protocol.TernFile;
import tern.server.protocol.TernQuery;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.definition.ITernDefinitionCollector;
import tern.server.protocol.type.ITernTypeCollector;

/**
 * Eclipse IDE Tern project.
 * 
 */
public class IDETernProject extends TernProject<IFile> {

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

	IDETernProject(IProject project) throws CoreException {
		super(project.getLocation().toFile());
		this.project = project;
		super.setFileManager(new IDETernFileManager());
		project.setSessionProperty(TERN_PROJECT, this);
		this.scriptPaths = new ArrayList<ITernScriptPath>();
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
		if (!hasTernNature(project)) {
			throw new CoreException(new Status(IStatus.ERROR,
					TernCorePlugin.PLUGIN_ID, "The project "
							+ project.getName() + " is not a tern project."));
		}
		IDETernProject ternProject = (IDETernProject) project
				.getSessionProperty(TERN_PROJECT);
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
		if (ternServer == null || ternServer.isDisposed()) {
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
				configureConsole();
			} catch (Exception e) {
				// should be improved?
				Trace.trace(Trace.SEVERE, "Error while creating tern server", e);
			}

		}
		return ternServer;
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
		try {
			return project.hasNature(TernNature.ID);
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE, "Error tern nature", e);
			return false;
		}
	}

	@Override
	public void load() throws IOException {
		super.load();
		// Load IDE informatiosn of the tern project.
		loadIDEInfos();
	}

	/**
	 * Load IDE informatiosn from the JSON .tern-project file.
	 */
	private void loadIDEInfos() {
		// Load script paths
		this.scriptPaths.clear();
		JSONObject ide = (JSONObject) super.get(IDE_JSON_FIELD);
		if (ide != null) {
			// There is ide information.
			JSONArray jsonScripts = (JSONArray) ide
					.get(SCRIPT_PATHS_JSON_FIELD);
			if (jsonScripts != null) {
				// There is scriptPaths defined.
				JSONObject jsonScript = null;
				String type = null;
				String path = null;
				// Loop for each script path.
				for (Object object : jsonScripts) {
					jsonScript = (JSONObject) object;
					type = (String) jsonScript.get(TYPE_JSON_FIELD);
					path = (String) jsonScript.get(PATH_JSON_FIELD);
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
		if (pathType.equals(ScriptPathsType.FOLDER)) {
			return getProject().getFolder(path);
		}
		return getProject().getFile(path);
	}

	@Override
	public void save() throws IOException {
		// Store IDE tern project info.
		saveIDEInfos();
		super.save();
		if (ternServer != null) {
			ternServer.dispose();
			ternServer = null;
		}
	}

	/**
	 * Save IDE informations in the JSON file .tern-project.
	 */
	private void saveIDEInfos() {
		JSONObject ide = new JSONObject();
		// script path
		if (scriptPaths.size() > 0) {
			JSONArray jsonScripts = new JSONArray();
			// Loop for each script path and save it in the JSON file
			// .tern-project.
			for (ITernScriptPath scriptPath : scriptPaths) {
				JSONObject jsonScript = new JSONObject();
				jsonScript.put(TYPE_JSON_FIELD, scriptPath.getType().name());
				jsonScript.put(PATH_JSON_FIELD, scriptPath.getPath());
				jsonScripts.add(jsonScript);
			}
			ide.put(SCRIPT_PATHS_JSON_FIELD, jsonScripts);
		}
		super.put(IDE_JSON_FIELD, ide);
	}

	/**
	 * Returns the list of script paths.
	 * 
	 * @return
	 */
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
		switch (type) {
		case FOLDER:
			return new FolderScriptPath((IFolder) resource);
		default:
			IFile file = (IFile) resource;
			if (FileUtils.isJSFile(file)) {
				return new JSFileScriptPath(file);
			}
			return new DOMElementsScriptPath(file);
		}

	}

	/**
	 * Set the new script paths to use.
	 * 
	 * @param scriptPaths
	 */
	public void setScriptPaths(List<ITernScriptPath> scriptPaths) {
		this.scriptPaths.clear();
		this.scriptPaths.addAll(scriptPaths);
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
					connector.connectToConsole(ternServer);
				} else {
					// disconnect the tern server to the eclipse console.
					connector.disconnectToConsole(ternServer);
				}
			}
		}
	}

	// ---------------- Completions

	public void request(TernAngularCompletionsQuery query, List names,
			ITernCompletionCollector collector) throws IOException,
			TernException {
		syncFiles(new TernDoc(), names,
				scriptPaths.toArray(ITernScriptPath.EMPTY_SCRIPT_PATHS));
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
	public void request(TernQuery query, List names,
			ITernScriptPath scriptPath, ITernCompletionCollector collector)
			throws IOException, TernException {
		// update files
		syncFiles(new TernDoc(), names, scriptPath);
		TernDoc doc = new TernDoc(query);
		request(doc, collector);
	}

	public void request(TernQuery query, List names, Node domNode,
			IFile domFile, ITernCompletionCollector collector)
			throws IOException, TernException {
		synchFiles(names, domNode, domFile, new TernDoc());
		TernDoc doc = new TernDoc(query);
		request(doc, collector);
	}

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
	public void request(TernQuery query, List names,
			ITernScriptPath scriptPath, ITernDefinitionCollector collector)
			throws IOException, TernException {
		// update files
		syncFiles(new TernDoc(), names, scriptPath);
		TernDoc doc = new TernDoc(query);
		request(doc, collector);
	}

	public void request(TernQuery query, List names, Node domNode,
			IFile domFile, ITernDefinitionCollector collector)
			throws IOException, TernException {
		synchFiles(names, domNode, domFile, new TernDoc());
		TernDoc doc = new TernDoc(query);
		request(doc, collector);
	}

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

	// ----------------------- synch

	/**
	 * 
	 * @param doc
	 * @param names
	 * @param scriptPaths
	 * @throws IOException
	 */
	private void syncFiles(TernDoc doc, List names,
			ITernScriptPath... scriptPaths) throws IOException {
		synchronized (lock) {
			for (int i = 0; i < scriptPaths.length; i++) {
				scriptPaths[i].updateFiles(getFileManager(), doc, names);
			}
			synchFiles(doc);
		}
	}

	private void synchFiles(IFile file, IDocument document, TernDoc doc)
			throws IOException {
		synchronized (lock) {
			syncFiles(doc, null,
					scriptPaths.toArray(ITernScriptPath.EMPTY_SCRIPT_PATHS));
			if (file != null && file.exists()) {
				String name = getFileManager().getFileName(file);
				String text = document.get();
				doc.addFile(name, text, null);
				TernQuery query = doc.getQuery();
				if (query != null) {
					query.setFile(name);
				}
			}
			synchFiles(doc);
		}
	}

	private void updateFragmentAround(TernDoc doc, String name,
			IDocument document, int start, int end) {

		FindReplaceDocumentAdapter adapter = new FindReplaceDocumentAdapter(
				document);
		try {
			long s = System.currentTimeMillis();

			IRegion region = adapter.find(end, "\\bfunction\\b", false, false,
					false, true);
			System.err.println(region);
			System.err.println(System.currentTimeMillis() - s);

			if (region != null) {
				String text = document.get(region.getOffset(),
						end - region.getOffset());
				int n = document.getLineOfOffset(region.getOffset());
				System.err.println(n);
				doc.addFile(name, text, n);
				doc.getQuery().setEnd(
						(Integer) doc.getQuery().get("end")
								- region.getOffset());
			} else {
				String text = document.get();
				doc.addFile(name, text, null);
			}

		} catch (BadLocationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

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
			JSONArray files = doc.getFiles();
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

	private void synchFiles(List names, Node domNode, IFile domFile, TernDoc doc)
			throws IOException {
		synchronized (lock) {
			getFileManager().updateFiles(domNode, domFile, doc, names);
			if (!doc.hasFiles()) {
				syncFiles(doc, names,
						scriptPaths.toArray(ITernScriptPath.EMPTY_SCRIPT_PATHS));
			}
			synchFiles(doc);
		}
	}

	// ------------- Type

	public void request(TernQuery query, List names,
			ITernScriptPath scriptPath, ITernTypeCollector collector)
			throws IOException, TernException {
		// update files
		syncFiles(new TernDoc(), names, scriptPath);
		TernDoc doc = new TernDoc(query);
		request(doc, collector);
	}

	public void request(TernQuery query, List names, Node domNode,
			IFile domFile, ITernTypeCollector collector) throws IOException,
			TernException {
		TernDoc doc = new TernDoc(query);
		synchFiles(names, domNode, domFile, doc);
		request(doc, collector);
	}

	private void request(TernDoc doc, ITernTypeCollector collector)
			throws TernException {
		ITernServer server = getTernServer();
		server.request(doc, collector);
	}

}

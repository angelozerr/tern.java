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
package tern.resources;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import tern.ITernFileSynchronizer;
import tern.ITernFile;
import tern.ITernProject;
import tern.TernException;
import tern.scriptpath.ITernScriptResource;
import tern.scriptpath.ITernScriptPath;
import tern.server.IResponseHandler;
import tern.server.ITernServer;
import tern.server.protocol.TernDoc;
import tern.server.protocol.TernFile;

import com.eclipsesource.json.JsonArray;

/**
 * Tern file synchronizer is used to maintain a cache with indexed files which
 * was already parsed by the tern server to avoid parsing files on each tern
 * request. It is also responsible to keep up-to-date version of those files on
 * the server.
 */
public class TernFileSynchronizer implements ITernFileSynchronizer {

	private static final int MAX_FILES = 20;

	/**
	 * List of JS files which was already parsed by the tern server.
	 */
	private final Set<String> indexedFiles;
	private final Set<String> syncedFiles;
	private final Map<ITernScriptPath, Set<String>> syncedFilesPerPath;
	private final ITernProject project;

	/**
	 * Tern file manager constructor.
	 */
	public TernFileSynchronizer(ITernProject project) {
		this.indexedFiles = new HashSet<String>();
		this.syncedFiles = new HashSet<String>();
		this.syncedFilesPerPath = new HashMap<ITernScriptPath, Set<String>>();
		this.project = project;
	}

	@Override
	public ITernProject getProject() {
		return project;
	}

	/**
	 * Remove the file name from the indexed files.
	 * 
	 * @param name
	 *            file name.
	 */
	protected void removeIndexedFile(String name) {
		synchronized (indexedFiles) {
			internalRemoveIndexedFile(name);
		}
	}

	/**
	 * Returns true if the given file name was already parsed by the tern server
	 * and false otherwise.
	 * 
	 * @param name
	 *            file name.
	 * @return true if the given file name was already parsed by the tern server
	 *         and false otherwise.
	 */
	protected boolean isIndexedFile(String name) {
		synchronized (indexedFiles) {
			return internalIsIndexedFile(name);
		}
	}

	/**
	 * Clean indexed files.
	 */
	@Override
	public void cleanIndexedFiles() {
		synchronized (indexedFiles) {
			indexedFiles.clear();
		}
	}

	/**
	 * Update indexed files from the files coming from tern doc. This method
	 * should be called by tern server if the tern reponse doen't throws error.
	 * 
	 * @param doc
	 *            the tern doc.
	 */
	@Override
	public void filesUploaded(TernDoc doc) {
		if (doc.hasFiles()) {
			synchronized (indexedFiles) {
				JsonArray files = doc.getFiles();
				TernFile file = null;
				for (Object object : files) {
					file = (TernFile) object;
					if (!internalIsIndexedFile(file.getName())) {
						internalAddIndexedFile(file.getName());
					}
				}
			}
		}
	}

	// ----------------- Internal methods

	/**
	 * Add the given file name to the the indexed files.
	 * 
	 * @param name
	 *            file name.
	 * @return
	 */
	private boolean internalAddIndexedFile(String name) {
		return indexedFiles.add(name);
	}

	/**
	 * Remove the file name from the indexed files.
	 * 
	 * @param name
	 *            file name.
	 */
	private boolean internalRemoveIndexedFile(String name) {
		return indexedFiles.remove(name);
	}

	/**
	 * Returns true if the given file name was already parsed by the tern server
	 * and false otherwise.
	 * 
	 * @param name
	 *            file name.
	 * @return true if the given file name was already parsed by the tern server
	 *         and false otherwise.
	 */
	protected boolean internalIsIndexedFile(String name) {
		return indexedFiles.contains(name);
	}

	// ------- Main synchronization code
	@Override
	public void fillSyncedFileNames(JsonArray fileNames, ITernScriptPath path) {
		synchronized (indexedFiles) {
			Set<String> files;
			if (path != null) {
				files = syncedFilesPerPath.get(path);
			} else {
				files = syncedFiles;
			}
			if (files != null) {
				for (String file : files) {
					fileNames.add(file);
				}
			}
		}
	}

	@Override
	public void ensureSynchronized() {
		TernDoc doc = new TernDoc();
		synchronized (indexedFiles) {
			// make sure we do not send duplicate files
			Set<String> requestedFiles = new HashSet<String>();
			syncedFilesPerPath.clear();
			syncedFiles.clear();
			for (ITernScriptPath path : getProject().getScriptPaths()) {
				Set<String> perPath = new HashSet<String>();
				syncedFilesPerPath.put(path, perPath);
				for (ITernScriptResource resource : path.getScriptResources()) {
					ITernFile file = resource.getFile();
					if (file == null) {
						continue;
					}
					String name = file.getFullName(getProject());
					perPath.add(name);
					syncedFiles.add(name);
					if (!indexedFiles.contains(name)
							&& !requestedFiles.contains(name)) {
						try {
							doc.addFile(file.toTernServerFile(getProject()));
							requestedFiles.add(name);
						} catch (IOException e) {
							getProject().handleException(e);
						}
					}
				}
			}
		}
		// perform actual synchronization with the server
		sendFiles(doc);
	}

	@Override
	public void synchronizeFile(ITernFile file) throws IOException {
		TernDoc doc = new TernDoc();
		syncedFiles.add(file.getFullName(getProject()));
		doc.addFile(file.toTernServerFile(getProject()));
		request(doc);
	}

	@Override
	public void synchronizeScriptPath(ITernScriptPath path, String... forced) {
		TernDoc doc = new TernDoc();
		synchronized (indexedFiles) {
			// make sure we do not send duplicate files
			Set<String> requestedFiles = new HashSet<String>();
			List<String> forcedFiles = Arrays.asList(forced);
			Set<String> perPath = new HashSet<String>();
			syncedFilesPerPath.put(path, perPath);
			for (ITernScriptResource resource : path.getScriptResources()) {
				ITernFile file = resource.getFile();
				if (file == null) {
					continue;
				}
				String name = file.getFullName(getProject());
				syncedFiles.add(name);
				perPath.add(name);
				if ((!indexedFiles.contains(name) || forcedFiles.contains(name))
						&& !requestedFiles.contains(name)) {
					try {
						doc.addFile(file.toTernServerFile(getProject()));
						requestedFiles.add(name);
					} catch (IOException e) {
						getProject().handleException(e);
					}
				}
			}
		}
		// perform actual synchronization with the server
		sendFiles(doc);
	}

	protected void sendFiles(TernDoc doc) {
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

	protected void request(TernDoc doc) {
		ITernServer server = project.getTernServer();
		if (server == null) {
			return;
		}
		server.request(doc, new IResponseHandler() {

			@Override
			public void onSuccess(Object data, String dataAsJsonString) {
			}

			@Override
			public void onError(String error, Throwable t) {
				getProject().handleException(new TernException(error, t));
			}

			@Override
			public boolean isDataAsJsonString() {
				return false;
			}
		});
	}

	@Override
	public void dispose() {
		cleanIndexedFiles();
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

}

/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.resources;

import java.io.IOException;
import java.text.MessageFormat;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock.ReadLock;
import java.util.concurrent.locks.ReentrantReadWriteLock.WriteLock;

import tern.ITernFileSynchronizer;
import tern.ITernFile;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.scriptpath.ITernScriptResource;
import tern.scriptpath.ITernScriptPath;
import tern.server.ITernServer;
import tern.server.protocol.TernDoc;
import tern.server.protocol.TernFile;
import tern.server.protocol.TernFile.FileType;
import tern.server.protocol.TernQuery;
import tern.server.protocol.completions.TernCompletionsQuery;
import tern.server.protocol.definition.TernDefinitionQuery;
import tern.server.protocol.type.TernTypeQuery;
import tern.utils.StringUtils;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonValue;

/**
 * Tern file synchronizer is used to maintain a cache with indexed files which
 * was already parsed by the tern server to avoid parsing files on each tern
 * request. It is also responsible to keep up-to-date version of those files on
 * the server.
 */
public class TernFileSynchronizer implements ITernFileSynchronizer {

	// wait 200ms for uploader to finish
	private static final int TIMEOUT = 200;

	// allow to upload maximum 12MB
	private static final int MAX_ALLOWED_SIZE = 12 * 1024 * 1024;

	private final ITernProject project;

	private final ITernFileUploader uploader;

	// Access synchronization
	private final ReentrantReadWriteLock lock = new ReentrantReadWriteLock();
	private final ReadLock readLock = lock.readLock();
	private final WriteLock writeLock = lock.writeLock();

	// Files synchronization
	private final Map<String, String> sentFiles = new HashMap<String, String>();
	private final Set<String> toRefresh = new HashSet<String>();
	private final Map<ITernScriptPath, Set<String>> syncedFilesPerPath = new HashMap<ITernScriptPath, Set<String>>();
	private ITernServer targetServer;

	/**
	 * Tern file manager constructor.
	 */
	public TernFileSynchronizer(ITernProject project) {
		this.project = project;
		this.uploader = createTernFileUploader();

	}

	public ITernFileUploader getTernFileUploader() {
		return uploader;
	}

	protected ITernFileUploader createTernFileUploader() {
		return new SynchronousTernFileUploader(project);
	}

	@Override
	public ITernProject getProject() {
		return project;
	}

	@Override
	public void uploadFailed(TernDoc doc) {
		synchronized (toRefresh) {
			for (JsonValue val : doc.getFiles()) {
				if (val instanceof TernFile) {
					toRefresh.add(((TernFile) val).getName());
				}
			}
		}
	}

	@Override
	public void refresh(Object file) {
		ITernFile tf = TernResourcesManager.getTernFile(file);
		if (tf != null) {
			synchronized (toRefresh) {
				toRefresh.add(tf.getFullName(getProject()));
			}
		}
	}

	@Override
	public void cleanIndexedFiles() {
		writeLock.lock();
		try {
			sentFiles.clear();
			syncedFilesPerPath.clear();
		} finally {
			writeLock.unlock();
		}
		synchronized (toRefresh) {
			toRefresh.clear();
		}
	}

	@Override
	public void fillSyncedFileNames(JsonArray fileNames, ITernScriptPath path) {
		readLock.lock();
		try {
			Set<String> files;
			if (path != null) {
				files = syncedFilesPerPath.get(path);
			} else {
				files = sentFiles.keySet();
			}
			if (files != null) {
				for (String file : files) {
					fileNames.add(file);
				}
			}
		} finally {
			readLock.unlock();
		}
	}

	protected void sizeExceeded() {
		System.out
				.println(MessageFormat
						.format("Size of scripts on {0} script path exceeds 12MB. Content assist might be incomplete.",
								getProject().getName()));
	}

	@Override
	public void ensureSynchronized() {
		TernDoc doc = new TernDoc();
		writeLock.lock();
		try {
			if (project.getTernServer() != targetServer) {
				targetServer = project.getTernServer();
				cleanIndexedFiles();
			}
			syncedFilesPerPath.clear();

			Set<String> synced = new HashSet<String>(sentFiles.keySet());
			Set<String> toRefreshLocal = new HashSet<String>();
			synchronized (toRefresh) {
				toRefreshLocal.addAll(toRefresh);
				toRefresh.clear();
			}
			synced.removeAll(toRefreshLocal);

			long totalSize = 0;
			for (String file : synced) {
				totalSize += sentFiles.get(file).length();
			}

			for (ITernScriptPath path : getProject().getScriptPaths()) {
				Set<String> perPath = new HashSet<String>();
				syncedFilesPerPath.put(path, perPath);
				for (ITernScriptResource resource : path.getScriptResources()) {
					// limit the size of content being sent to the Tern server
					if (totalSize >= MAX_ALLOWED_SIZE) {
						sizeExceeded();
						break;
					}
					ITernFile file = resource.getFile();
					if (file == null) {
						continue;
					}
					String name = file.getFullName(getProject());
					perPath.add(name);
					if (!synced.contains(name)) {
						try {
							TernFile tf = file.toTernServerFile(getProject());
							doc.addFile(tf);
							synced.add(name);
							totalSize += tf.getText().length();
						} catch (IOException e) {
							getProject().handleException(e);
						}
					}
				}
			}

			toRefreshLocal.removeAll(synced);
			for (String toRemove : toRefreshLocal) {
				doc.delFile(toRemove); //$NON-NLS-1$
			}

			// perform actual synchronization with the server
			sendFiles(doc);
		} finally {
			writeLock.unlock();
		}
	}

	@Override
	public void synchronizeFile(ITernFile file) throws IOException {
		writeLock.lock();
		try {
			TernFile tf = file.toTernServerFile(getProject());
			String oldText = sentFiles.get(tf.getName());
			if (tf.getText().equals(oldText) && !uploader.cancel(tf.getName())) {
				// no need to synchronize the file, already up-to-date
				return;
			}
			TernDoc doc = new TernDoc();
			doc.addFile(tf);
			sendFiles(doc);
		} finally {
			writeLock.unlock();
		}
	}

	@Override
	public void synchronizeFile(TernDoc doc, ITernFile file) throws IOException {
		writeLock.lock();
		try {
			try {
				TernQuery query = doc.getQuery();
				if (query != null) {
					if (TernResourcesManager.isJSFile(file)) {
						addJSFile(doc, file);
						return;
					} else if (TernResourcesManager.isHTMLFile(file)) {
						// This is HTML file case: never keep the file on the server
						String queryType = query.getType();
						if (TernCompletionsQuery.isQueryType(queryType) ||
								TernDefinitionQuery.isQueryType(queryType) ||
								TernTypeQuery.isQueryType(queryType)) {
							addHTMLFile(doc, file);
							return;
						}	
					}
				}
				TernFile tf = file.toTernServerFile(getProject());
				String oldText = sentFiles.get(tf.getName());
				if (tf.getText().equals(oldText)
						&& !uploader.cancel(tf.getName())) {
					// no need to synchronize the file, already up-to-date
					return;
				}
				doc.addFile(tf);
			} finally {
				updateSentFiles(doc);
				// as this is
				// wait a bit for the sync to finish
				uploader.join(TIMEOUT);
			}
		} finally {
			writeLock.unlock();
		}
	}

	protected void addJSFile(TernDoc doc, ITernFile file) throws IOException {
		TernQuery query = doc.getQuery();
		String fileName = file.getFullName(getProject());
		query.setFile(fileName);
		TernFile tf = file.toTernServerFile(getProject());
		doc.addFile(tf);
	}

	protected void addHTMLFile(TernDoc doc, ITernFile file) throws IOException {
		TernQuery query = doc.getQuery();
		TernFile tf = file.toTernServerFile(getProject());
		doc.addFile(tf);
		query.set("file", "#" + (doc.getFiles().size() - 1)); //$NON-NLS-1$ //$NON-NLS-2$
	}

	@Override
	public void synchronizeScriptPath(ITernScriptPath path, String... forced) {
		TernDoc doc = new TernDoc();
		writeLock.lock();
		try {
			// make sure we do not send duplicate files
			Set<String> requestedFiles = new HashSet<String>(sentFiles.keySet());
			Set<String> perPath = new HashSet<String>();
			syncedFilesPerPath.put(path, perPath);

			requestedFiles.remove(Arrays.asList(forced));

			long totalSize = 0;
			for (String file : requestedFiles) {
				totalSize += sentFiles.get(file).length();
			}

			for (ITernScriptResource resource : path.getScriptResources()) {
				// limit the number of files being sent to the Tern server
				if (totalSize >= MAX_ALLOWED_SIZE) {
					sizeExceeded();
					break;
				}
				ITernFile file = resource.getFile();
				if (file == null) {
					continue;
				}
				String name = file.getFullName(getProject());
				perPath.add(name);
				if (!requestedFiles.contains(name)) {
					try {
						TernFile tf = file.toTernServerFile(getProject());
						doc.addFile(tf);
						totalSize += tf.getText().length();
						requestedFiles.add(name);
					} catch (IOException e) {
						getProject().handleException(e);
					}
				}
			}
			// perform actual synchronization with the server
			sendFiles(doc);
		} finally {
			writeLock.unlock();
		}
	}

	private void updateSentFiles(TernDoc doc) {
		for (JsonValue value : doc.getFiles()) {
			if (value instanceof TernFile) {
				TernFile file = (TernFile) value;
				if (file.isType(FileType.full)) {
					String contents = file.getText();
					if (StringUtils.isEmpty(contents)) {
						// treat file with empty contents as removed
						sentFiles.remove(file.getName());
					} else {
						sentFiles.put(file.getName(), contents);
					}
				}
			}
		}
	}

	protected void sendFiles(TernDoc doc) {
		if (doc.hasFiles()) {
			updateSentFiles(doc);
			// sync is performed asynchronously
			uploader.request(doc);
		}
	}

	@Override
	public void dispose() {
		cleanIndexedFiles();
	}

}

/**
 *  Copyright (c) 2014 Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern;

import java.io.IOException;

import com.eclipsesource.json.JsonArray;

import tern.scriptpath.ITernScriptPath;
import tern.server.protocol.TernDoc;

public interface ITernFileSynchronizer {

	public ITernProject getProject();

	/**
	 * Ensures that all resources are synchronized with the server. Blocks until
	 * server processes any additional resources.
	 */
	public void ensureSynchronized();

	/**
	 * Fills fileNames array with names of script files synchronized with the
	 * server. If path is provided then only files from a particular path are
	 * going to be added to the array.
	 * 
	 * @param fileNames
	 *            JSON array to be filled with file names.
	 * @param path
	 *            optional script path, from which files should be included.
	 */
	public void fillSyncedFileNames(JsonArray fileNames, ITernScriptPath path);

	/**
	 * Sends the specified file to Tern Server. Useful when needed to upload a
	 * specific version of file for auto-completion.
	 * 
	 * @param domNode
	 * 
	 * @param file
	 * @throws IOException
	 */
	public void synchronizeFile(ITernFile file) throws IOException;

	/**
	 * Adds file to the doc object, if needed. Useful for e.g. content assist
	 * query, because it ensures that the appropriate version of the file is
	 * included along with the query.
	 * 
	 * @param doc
	 * @param file
	 * @throws IOException
	 */
	public void synchronizeFile(TernDoc doc, ITernFile file) throws IOException;

	/**
	 * Sends contents referred by the custom script path to Tern Server. Useful
	 * when needed for example to synchronize files referred by an HTML file.
	 * Files on the forced list will be always synchronized if present on the
	 * path.
	 * 
	 * @param path
	 */
	public void synchronizeScriptPath(ITernScriptPath path, String... forced);

	/**
	 * Notifies cache manager that files has not been successfully uploaded.
	 * This method should be called by tern file uploader or tern server in case
	 * upload fails.
	 * 
	 * @param doc
	 *            the tern doc.
	 */
	public void uploadFailed(TernDoc doc);

	/**
	 * Cleans all cache information. Next call to ensureSynchronized will
	 * perform full synchronization.
	 */
	public void cleanIndexedFiles();

	/**
	 * Dispose the synchronizer.
	 */
	public void dispose();

	/**
	 * Forces file synchronizer to re-upload or remove the file next time
	 * synchronization is happening.
	 */
	void refresh(Object file);

}

/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genutiec.com> - asynchronous request processing and 
 *  									refactoring of collectors API 
 */
package tern.server;

import java.io.IOException;

import tern.ITernFileSynchronizer;
import tern.TernException;
import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultsCollector;
import tern.server.protocol.TernDoc;
import tern.server.protocol.html.ScriptTagRegion;

/**
 * Tern server API.
 * 
 */
public interface ITernServer {

	/**
	 * Add Tern JSON Type Definition.
	 * 
	 * @param def
	 *            the Tern JSON Type Defition to add to the server.
	 * @throws IOException
	 */
	void addDef(ITernDef def) throws TernException;

	/**
	 * Add Tern plugin.
	 * 
	 * @param plugin
	 *            the Tern plugin to add to the server.
	 * @throws IOException
	 */
	void addPlugin(ITernPlugin plugin) throws TernException;

	/**
	 * Register a file with the server. Note that files can also be included in
	 * requests.
	 * 
	 * @param name
	 *            the file name.
	 * @param text
	 *            the content file.
	 */
	void addFile(String name, String text);

	/**
	 * Register a file with the server. Note that files can also be included in
	 * requests.
	 * 
	 * @param name
	 *            the file name.
	 * @param text
	 *            the content file.
	 */
	void addFile(String name, String text, ScriptTagRegion[] tags);

	void request(TernDoc doc, IResponseHandler handler);

	void request(TernDoc doc, ITernResultsCollector collector)
			throws TernException;

	/**
	 * Add server listener.
	 * 
	 * @param listener
	 */
	void addServerListener(ITernServerListener listener);

	/**
	 * Remove server listener.
	 * 
	 * @param listener
	 */
	void removeServerListener(ITernServerListener listener);

	/**
	 * Returns the tern file manager and null otherwise.
	 * 
	 * @return the tern file manager and null otherwise.
	 */
	ITernFileSynchronizer getFileSynchronizer();

	boolean isDataAsJsonString();

	void setDataAsJsonString(boolean dataAsJsonString);

	boolean isDisposed();

	void dispose();

	/**
	 * Set true if tern plugins can be loaded from the project root and false
	 * otherwise.
	 * 
	 * @see https://github.com/marijnh/tern/commit/154
	 *      b0587a64eea193d124005e03d80065ac310e2
	 */
	void setLoadingLocalPlugins(boolean loadingLocalPlugins);

	/**
	 * Returns true if tern plugins can be loaded from the project root and
	 * false otherwise.
	 * 
	 * @return true if tern plugins can be loaded from the project root and
	 *         false otherwise.
	 * @see https://github.com/marijnh/tern/commit/154
	 *      b0587a64eea193d124005e03d80065ac310e2
	 */
	boolean isLoadingLocalPlugins();

	ITernServerRequestProcessor getRequestProcessor();

	void setRequestProcessor(ITernServerRequestProcessor asyncReqProcessor);

	IJSONObjectHelper getJSONObjectHelper();

}

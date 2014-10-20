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
package tern.server;

import java.io.IOException;

import tern.ITernFileSynchronizer;
import tern.TernException;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.definition.ITernDefinitionCollector;
import tern.server.protocol.html.ScriptTagRegion;
import tern.server.protocol.lint.ITernLintCollector;
import tern.server.protocol.type.ITernTypeCollector;

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

	void request(TernDoc doc, ITernCompletionCollector collector)
			throws TernException;

	void request(TernDoc doc, ITernDefinitionCollector collector)
			throws TernException;

	void request(TernDoc doc, ITernTypeCollector collector)
			throws TernException;

	void request(TernDoc doc, ITernLintCollector collector)
			throws TernException;

	void addServerListener(ITernServerListener listener);

	void removeServerListener(ITernServerListener listener);

	/**
	 * Returns the tern file manager and null otherwise.
	 * 
	 * @return the tern file manager and null otherwise.
	 */
	ITernFileSynchronizer getFileSynchronizer();

	boolean isDataAsJsonString();

	void setDataAsJsonString(boolean dataAsJsonString);

	String getText(Object value, String name);

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
}

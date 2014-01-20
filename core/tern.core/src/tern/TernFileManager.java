/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import tern.server.protocol.TernDoc;
import tern.server.protocol.TernFile;
import tern.utils.DOMUtils;
import tern.utils.StringUtils;

/**
 * Tern file manager is used to maintains a cache with indexed files which was
 * already parsed by the tern server to avoid parsing files on each tern
 * request.
 * 
 * @param <T>
 *            the generic file.
 */
public abstract class TernFileManager<T> {

	// HTML elements/attributes names
	private static final String SCRIPT_ELT = "script";
	private static final String HTTP_ATTR = "http";
	private static final String SRC_ATTR = "src";

	/**
	 * List of JS files which was already parsed by the tern server.
	 */
	private final List<String> indexedFiles;

	/**
	 * Tern file manager constructor.
	 */
	public TernFileManager() {
		this.indexedFiles = new ArrayList<String>();
	}

	/**
	 * Update tern doc files from the scripts node list declared in the given
	 * HTML document domNode.
	 * 
	 * @param domNode
	 *            the HTML DOM node which declares scripts elements.
	 * @param domFile
	 *            the HTML file.
	 * @param doc
	 *            the tern doc to update with files to send to the tern server
	 *            to parse it.
	 * @param names
	 *            list to update with the names of visited scripts.
	 * @throws IOException
	 */
	public void updateFiles(Node domNode, T domFile, TernDoc doc, List names)
			throws IOException {

		int scriptIndex = 0;
		Element scriptElt = null;
		String src = null;

		// Get the list of script element of the given DOM node
		NodeList scripts = domNode.getNodeType() == Node.DOCUMENT_NODE ? ((Document) domNode)
				.getElementsByTagName(SCRIPT_ELT)
				: domNode.getOwnerDocument().getElementsByTagName(SCRIPT_ELT);

		// Update the files of tern doc with scripts elements by using indexed
		// file list.
		synchronized (indexedFiles) {
			for (int i = 0; i < scripts.getLength(); i++) {
				scriptElt = (Element) scripts.item(i);
				src = scriptElt.getAttribute(SRC_ATTR);
				if (StringUtils.isEmpty(src)) {
					// JS script declared in the HTML document.
					internalUpdateFile(domFile, scriptElt, scriptIndex++, doc,
							names);

				} else {
					if (src.startsWith(HTTP_ATTR)) {
						// JS script declared in http://
					} else {
						// JS script declared in an external file.
						T relativeFile = getRelativeFile(domFile, src);
						if (relativeFile != null) {
							internalUpdateFile(relativeFile, doc, names);
						}
					}
				}
			}
		}
	}

	/**
	 * Update tern doc files with the content of the script element (here JS
	 * content is declared in the HTML document.)
	 * 
	 * @param domFile
	 *            the file of the HTML document.
	 * @param scriptElt
	 *            the script element which contains the Javascript.
	 * @param scriptIndex
	 *            the index of the script elements which contains the
	 *            Javascript.
	 * @param doc
	 *            the tern doc to update with files to send to the tern server
	 *            to parse it.
	 * @param names
	 *            list to update with the names of visited scripts.
	 */
	public void updateFile(T domFile, Element scriptElt, int scriptIndex,
			TernDoc doc, List names) {
		synchronized (indexedFiles) {// get the file name
			internalUpdateFile(domFile, scriptElt, scriptIndex, doc, names);
		}
	}

	/**
	 * Update tern doc files with the content of given file.
	 * 
	 * @param file
	 *            the file.
	 * @param doc
	 *            the tern doc to update with files to send to the tern server
	 *            to parse it.
	 * @param names
	 *            list to update with the names of visited scripts.
	 */
	public void updateFile(T file, TernDoc doc, List names) throws IOException {
		synchronized (indexedFiles) {
			internalUpdateFile(file, doc, names);
		}
	}

	/**
	 * Add the given file name with the given content to the given tern doc.
	 * 
	 * @param name
	 *            file name
	 * @param text
	 *            file content.
	 * @param doc
	 *            tern doc.
	 */
	protected void addFile(String name, String text, TernDoc doc) {
		doc.addFile(name, text, null);
		// internalAddIndexedFile(name);
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
	public void updateIndexedFiles(TernDoc doc) {
		if (doc.hasFiles()) {
			synchronized (indexedFiles) {
				JSONArray files = doc.getFiles();
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
	 * Update tern doc files with the content of the script element (here JS
	 * content is declared in the HTML document.)
	 * 
	 * @param domFile
	 *            the file of the HTML document.
	 * @param scriptElt
	 *            the script element which contains the Javascript.
	 * @param scriptIndex
	 *            the index of the script elements which contains the
	 *            Javascript.
	 * @param doc
	 *            the tern doc to update with files to send to the tern server
	 *            to parse it.
	 * @param names
	 *            list to update with the names of visited scripts.
	 */
	private void internalUpdateFile(T domFile, Element scriptElt,
			int scriptIndex, TernDoc doc, List names) {
		String name = getFileName(domFile) + "#" + (scriptIndex);
		// check if file name was already indexed.
		if (!internalIsIndexedFile(name)) {
			// file was not parsed by tern server, add the content of the
			// script
			// element to parse
			// in the tern doc files.
			String text = DOMUtils.getTextNodeAsString(scriptElt);
			addFile(name, text, doc);
		}
		// add the file name in the visited list.
		if (names != null) {
			names.add(name);
		}
	}

	/**
	 * Update tern doc files with the content of given file.
	 * 
	 * @param file
	 *            the file.
	 * @param doc
	 *            the tern doc to update with files to send to the tern server
	 *            to parse it.
	 * @param names
	 *            list to update with the names of visited scripts.
	 */
	private void internalUpdateFile(T file, TernDoc doc, List names)
			throws IOException {
		// get the file name
		String name = getFileName(file);
		// check if file name was already indexed.
		if (!internalIsIndexedFile(name)) {
			// file was not parsed by tern server, add the content file to
			// parse
			// in the tern doc files.
			String text = getFileContent(file);
			addFile(name, text, doc);
		}
		// add the file name in the visited list.
		if (names != null) {
			names.add(name);
		}
	}

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

	// ----------------- Abstract methods to implement

	/**
	 * Returns the file name of the given file.
	 * 
	 * @param file
	 *            the generic file.
	 * @return the file name of the given file.
	 */
	public abstract String getFileName(T file);

	/**
	 * Returns the file content of the given file.
	 * 
	 * @param file
	 *            the generic file.
	 * @return the file content of the given file.
	 */
	public abstract String getFileContent(T file) throws IOException;

	/**
	 * Get the relative file to the given file and path.
	 * 
	 * @param file
	 *            the file root.
	 * @param path
	 *            the file path.
	 * @return the relative file to the given file and path.
	 */
	public abstract T getRelativeFile(T file, String path);

}

/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.protocol;

import tern.server.protocol.html.ScriptTagRegion;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;

/**
 * Tern JSON document.
 * 
 * @see http://ternjs.net/doc/manual.html#protocol
 */
public class TernDoc extends JsonObject {

	private static final long serialVersionUID = 1L;

	private static final String FILES_FIELD_NAME = "files";

	private static final String QUERY_FIELD_NAME = "query";

	public TernDoc() {
		this(null);
	}

	public TernDoc(TernQuery query) {
		setQuery(query);
	}

	/**
	 * Set the tern query which describes the kind of information you want to
	 * ask for.
	 * 
	 * @param query
	 *            the tern query which describes the kind of information you
	 *            want to ask for.
	 */
	public void setQuery(TernQuery query) {
		if (query != null) {
			super.set(QUERY_FIELD_NAME, query);
		} else {
			super.remove(QUERY_FIELD_NAME);
		}
	}

	/**
	 * Return the tern query which describes the kind of information you want to
	 * ask for and null otherwise.
	 * 
	 * @return
	 */
	public TernQuery getQuery() {
		return (TernQuery) super.get(QUERY_FIELD_NAME);
	}

	/**
	 * Add a tern file specifications. It may be omitted when the query should
	 * operate on the code that the server already has, without adding anything
	 * new.
	 * 
	 * @param name
	 *            the file name.
	 * @param text
	 *            the file text content.
	 * @param tags
	 *            null if it's JS file content and filled if it's HTML file.
	 * @param offset
	 *            null if "full" file type and "part" otherwise.
	 */
	public void addFile(String name, String text, ScriptTagRegion[] tags,
			Integer offset) {
		addFile(new TernFile(name, text, tags, offset));
	}

	/**
	 * Delete the given file name.
	 * 
	 * @param name
	 *            file name to delete.
	 */
	public void delFile(String name) {
		addFile(new TernFile(name));
	}

	/**
	 * Add a tern file specifications. It may be omitted when the query should
	 * operate on the code that the server already has, without adding anything
	 * new.
	 * 
	 * @param file
	 *            the tern file to add.
	 */
	public void addFile(TernFile file) {
		getFiles().add(file);
	}

	/**
	 * Return the array of file specifications.
	 * 
	 * @return the array of file specifications.
	 */
	public JsonArray getFiles() {
		JsonArray files = (JsonArray) super.get(FILES_FIELD_NAME);
		if (files == null) {
			files = new JsonArray();
			super.add(FILES_FIELD_NAME, files);
		}
		return files;
	}

	/**
	 * Returns true if tern doc has files and false otherwise.
	 * 
	 * @return true if tern doc has files and false otherwise.
	 */
	public boolean hasFiles() {
		JsonArray files = (JsonArray) super.get(FILES_FIELD_NAME);
		return files != null && files.size() > 0;
	}

	public void cleanFiles() {
		super.remove(FILES_FIELD_NAME);
	}

}

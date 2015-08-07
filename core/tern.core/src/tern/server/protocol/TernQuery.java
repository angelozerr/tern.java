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
package tern.server.protocol;

import com.eclipsesource.json.JsonObject;

/**
 * Tern query.
 * 
 * <cite> A query is an object with at least a type property, which determines
 * what kind of query it is. Depending on the type, other properties must or may
 * be present in order to provide further details. </cite>
 * 
 * @see http://ternjs.net/doc/manual.html#protocol
 * 
 */
public class TernQuery extends JsonObject {

	private static final long serialVersionUID = 1L;
	
	private static final String FILE_FIELD_NAME = "file";
	private static final String TYPE_QUERY = "type";
	private static final String LINE_CHAR_POSITIONS_FIELD_NAME = "lineCharPositions";
	private static final String END_FIELD_NAME = "end";

	public TernQuery(String type) {
		super.add(TYPE_QUERY, type);
	}

	public void setFile(String file) {
		super.set(FILE_FIELD_NAME, file);
	}

	public String getFile() {
		return JsonHelper.getString(super.get(FILE_FIELD_NAME));
	}

	public void setEnd(Integer pos) {
		if (pos == null) {
			super.remove(END_FIELD_NAME);
		} else {
			super.add(END_FIELD_NAME, pos);
		}
	}

	/**
	 * Offsets into a file can be either (zero-based) integers, or {line, ch}
	 * objects, where both line and ch are zero-based integers. Offsets returned
	 * by the server will be integers, unless the lineCharPositions field in the
	 * request was set to true, in which case they will be {line, ch} objects.
	 * 
	 * @param lineCharPositions
	 */
	public void setLineCharPositions(boolean lineCharPositions) {
		super.add(LINE_CHAR_POSITIONS_FIELD_NAME, lineCharPositions);
	}

	/**
	 * Returns the tern query type.
	 * 
	 * @return the tern query type.
	 */
	public String getType() {
		return JsonHelper.getString(this, TYPE_QUERY);
	}

	/**
	 * Returns the label of the tern query.
	 * 
	 * @return the label of the tern query.
	 */
	public String getLabel() {
		return getType();
	}
}

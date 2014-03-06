/**
 *  Copyright (c) 2013-20A4 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.protocol;

import org.json.simple.JSONObject;

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
public class TernQuery extends JSONObject {

	private static final String FILE_FIELD_NAME = "file";
	private static final String TYPE_QUERY = "type";

	public TernQuery(String type) {
		super.put(TYPE_QUERY, type);
	}

	public void setFile(String file) {
		super.put(FILE_FIELD_NAME, file);
	}

	public void setEnd(Integer pos) {
		super.put("end", pos);
	}

	public void setLineCharPositions(boolean lineCharPositions) {
		super.put("lineCharPositions", lineCharPositions);
	}

	public String getType() {
		return (String) super.get(TYPE_QUERY);
	}

	protected boolean getBoolean(String name, boolean defaultValue) {
		Boolean result = (Boolean) super.get(name);
		if (result == null) {
			return defaultValue;
		}
		return result;
	}

	public String getLabel() {
		return getType();
	}
}

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
import com.eclipsesource.json.JsonValue;

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

	private static final String FILE_FIELD_NAME = "file";
	private static final String TYPE_QUERY = "type";

	public TernQuery(String type) {
		super.add(TYPE_QUERY, type);
	}

	public void setFile(String file) {
		super.add(FILE_FIELD_NAME, file);
	}

	public void setEnd(Integer pos) {
		if (pos == null) {
			super.remove("end");
		} else {
			super.add("end", pos);
		}
	}

	public void setLineCharPositions(boolean lineCharPositions) {
		super.add("lineCharPositions", lineCharPositions);
	}

	public String getType() {
		return JsonHelper.getString(this, TYPE_QUERY);
	}

	public String getLabel() {
		return getType();
	}
}

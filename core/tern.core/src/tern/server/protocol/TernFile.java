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
 * Tern file.
 * 
 * @see http://ternjs.net/doc/manual.html#protocol
 */
public class TernFile extends JSONObject {

	private static final long serialVersionUID = 1L;

	private static final String NAME_FIELD_NAME = "name";
	private static final String TEXT_FIELD_NAME = "text";
	private static final String OFFSET_FIELD_NAME = "offset";
	private static final String TYPE_FIELD_NAME = "type";

	public TernFile(String name, String text, Integer offset) {
		super.put(NAME_FIELD_NAME, name);
		super.put(TEXT_FIELD_NAME, text);
		if (offset != null) {
			super.put(TYPE_FIELD_NAME, "part");
			super.put("offsetLines", offset);
		} else {
			super.put(TYPE_FIELD_NAME, "full");
		}
	}

	public String getName() {
		return (String) super.get(NAME_FIELD_NAME);
	}

	public String getText() {
		return (String) super.get(TEXT_FIELD_NAME);
	}

	public Integer getOffset() {
		return (Integer) super.get(OFFSET_FIELD_NAME);
	}

	public String getType() {
		return (String) super.get(TYPE_FIELD_NAME);
	}
}

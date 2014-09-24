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

import tern.server.protocol.html.HtmlHelper;
import tern.server.protocol.html.ScriptTagRegion;

import com.eclipsesource.json.JsonObject;

/**
 * Tern file.
 * 
 * @see http://ternjs.net/doc/manual.html#protocol
 */
public class TernFile extends JsonObject {

	private static final long serialVersionUID = 1L;

	private static final String NAME_FIELD_NAME = "name";
	private static final String TEXT_FIELD_NAME = "text";
	private static final String OFFSET_FIELD_NAME = "offset";
	private static final String TYPE_FIELD_NAME = "type";
	private static final String OFFSET_LINES_FIELD_TYPE = "offsetLines";

	private enum FileType {
		part, full
	}

	public TernFile(String name, String text, ScriptTagRegion[] tags,
			Integer offset) {
		super.add(NAME_FIELD_NAME, name);
		super.add(TEXT_FIELD_NAME, getText(text, tags));
		if (offset != null) {
			super.add(TYPE_FIELD_NAME, FileType.part.name());
			super.add(OFFSET_LINES_FIELD_TYPE, offset);
		} else {
			super.add(TYPE_FIELD_NAME, FileType.full.name());
		}
	}

	private String getText(String text, ScriptTagRegion[] tags) {
		if (text == null || tags == null) {
			return text;
		}
		return HtmlHelper.extractJS(text, tags);
	}

	public String getName() {
		return JsonHelper.getString(this, NAME_FIELD_NAME);
	}

	public String getText() {
		return JsonHelper.getString(this, TEXT_FIELD_NAME);
	}

	public Integer getOffset() {
		return JsonHelper.getInteger(this, OFFSET_FIELD_NAME);
	}

	public String getType() {
		return JsonHelper.getString(this, TYPE_FIELD_NAME);
	}
}

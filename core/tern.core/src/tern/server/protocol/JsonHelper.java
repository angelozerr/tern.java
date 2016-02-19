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

import java.io.IOException;
import java.io.Reader;

import com.eclipsesource.json.Json;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonObject.Member;
import com.eclipsesource.json.JsonValue;

import tern.utils.IOUtils;

/**
 * Helper for minimal-json.
 *
 */
public class JsonHelper {

	private JsonHelper() {
	}

	public static String getString(JsonObject json, String name) {
		JsonValue value = json.get(name);
		return getString(value);
	}

	public static String getString(JsonValue value) {
		if (value == null) {
			return null;
		}
		if (value.isString()) {
			return value.asString();
		}
		return value.toString();
	}

	public static Integer getInteger(JsonObject json, String name) {
		JsonValue value = json.get(name);
		return value == null ? null : value.asInt();
	}

	public static Boolean getBoolean(JsonObject json, String name) {
		JsonValue value = json.get(name);
		return value == null ? null : value.asBoolean();
	}

	public static boolean getBoolean(JsonObject json, String name,
			boolean defaultValue) {
		Boolean result = getBoolean(json, name);
		return result != null ? result : defaultValue;
	}

	public static Long getLong(JsonObject json, String name) {
		JsonValue value = json.get(name);
		return value == null ? null : value.asLong();
	}
	
	public static Object getValue(JsonValue value) {
		if (value == null) {
			return null;
		}
		if (value.isString()) {
			return value.asString();
		}
		if (value.isBoolean()) {
			return value.asBoolean();
		}
		if (value.isNumber()) {
			return value.asInt();
		}
		if (value.isNull()) {
			return null;
		}
		return value;
	}

	/**
	 * Read JSON stream from the given reader and set the result in the given
	 * {@link JsonObject} to.
	 * 
	 * @param reader
	 * @param to
	 * @throws IOException
	 */
	public static void readFrom(Reader reader, JsonObject to)
			throws IOException {
		try {
			copy(Json.parse(reader).asObject(), to);
		} finally {
			IOUtils.closeQuietly(reader);
		}
	}

	/**
	 * Copy content of from JSON to to JSON.
	 * 
	 * @param from
	 * @param to
	 */
	public static void copy(JsonObject from, JsonObject to) {
		if (from != null) {
			for (Member member : from) {
				to.set(member.getName(), member.getValue());
			}
		}
	}

	public static boolean isSameJson(JsonValue value1, JsonValue value2) {
		if (value1 == null) {
			return value2 == null;
		}
		if (value2 == null) {
			return false;
		}
		return value1.toString().equals(value2.toString());

	}
}

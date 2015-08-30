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
 * 
 * {@link IJSONObjectHelper} implementation for minimal-json {@link JsonObject}.
 */
public class MinimalJSONHelper implements IJSONObjectHelper {

	public static MinimalJSONHelper INSTANCE = new MinimalJSONHelper();

	@SuppressWarnings("unchecked")
	@Override
	public Iterable<Object> getList(Object jsonObj, String name) {
		JsonValue val = ((JsonObject) jsonObj).get(name);
		if (val != null && val.isArray()) {
			return (Iterable<Object>) val;
		}
		return null;
	}

	@Override
	public Long getCh(Object jsonObj, String name) {
		JsonValue loc = ((JsonObject) jsonObj).get(name);
		if (loc == null) {
			return null;
		}
		if (loc.isNumber()) {
			return loc.asLong();
		}
		return loc != null ? JsonHelper.getLong((JsonObject) loc, "ch") : null;
	}

	@Override
	public String getText(Object jsonObj, String property) {
		return JsonHelper.getString((JsonObject) jsonObj, property);
	}

	@Override
	public boolean isString(Object value) {
		return ((JsonValue) value).isString();
	}

	@Override
	public String getText(Object value) {
		return JsonHelper.getString((JsonValue) value);
	}

	@Override
	public boolean getBoolean(Object jsonObject, String name, boolean defaultValue) {
		return JsonHelper.getBoolean((JsonObject) jsonObject, name, defaultValue);
	}

	@Override
	public Long getLong(Object jsonObject, String name) {
		return JsonHelper.getLong((JsonObject) jsonObject, name);
	}
}
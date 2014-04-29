package tern.server.protocol;

import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

public class JsonHelper {

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
}

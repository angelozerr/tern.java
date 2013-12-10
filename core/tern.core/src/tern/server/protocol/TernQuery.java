package tern.server.protocol;

import org.json.simple.JSONObject;

public class TernQuery extends JSONObject {

	private static final String TYPE_QUERY = "type";

	public TernQuery(String type) {
		super.put(TYPE_QUERY, type);
	}

	public void setFile(String file) {
		super.put("file", file);
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
}

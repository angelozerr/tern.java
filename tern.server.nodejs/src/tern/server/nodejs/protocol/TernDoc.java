package tern.server.nodejs.protocol;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class TernDoc extends JSONObject {

	private JSONArray files;

	public TernDoc() {
		this(null);
	}

	public TernDoc(TernQuery query) {
		if (query != null) {
			super.put("query", query);
		}
	}

	public void addFile(String name, String text, Integer offset) {
		if (files == null) {
			files = new JSONArray();
			super.put("files", files);
		}
		files.add(new TernFile(name, text, offset));
	}
	
}

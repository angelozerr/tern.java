package tern.server.protocol.angular;

import org.json.simple.JSONArray;

import tern.server.protocol.TernQuery;

public class TernAngularQuery extends TernQuery {

	public TernAngularQuery(String subtype, AngularType angularType) {
		super("angular");
		super.put("subtype", subtype);
		super.put("angularType", angularType.name());
	}

	public void setExpression(String expression) {
		super.put("expression", expression);
	}

	public TernAngularScope getScope() {
		TernAngularScope scope = (TernAngularScope) super.get("scope");
		if (scope == null) {
			scope = new TernAngularScope();
			super.put("scope", scope);
		}
		return scope;
	}

	public void addFile(String file) {
		getFiles().add(file);
	}

	public JSONArray getFiles() {
		JSONArray files = (JSONArray) super.get("files");
		if (files == null) {
			files = new JSONArray();
			super.put("files", files);
		}
		return files;
	}

	public AngularType getAngularType() {
		return AngularType.get((String)super.get("angularType"));
	}
}

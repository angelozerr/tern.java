package tern.angular.protocol;

import org.json.simple.JSONArray;

import tern.angular.AngularType;
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

	public boolean hasScope() {
		TernAngularScope scope = (TernAngularScope) super.get("scope");
		if (scope == null) {
			return false;
		}
		return true;
	}

	public boolean hasControllers() {
		if (!hasScope()) {
			return false;
		}
		TernAngularScope scope = (TernAngularScope) super.get("scope");
		return scope.hasControllers();

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

	public boolean hasFiles() {
		JSONArray files = (JSONArray) super.get("files");
		if (files == null) {
			return false;
		}
		return files.size() > 0;
	}

	public AngularType getAngularType() {
		return AngularType.get((String) super.get("angularType"));
	}

	public String getLabel() {
		return new StringBuilder(super.getLabel()).append("_").append(getSubType())
				.toString();
	}

	private String getSubType() {
		return (String) super.get("subtype");
	}
}

package tern.server.protocol.angular;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class TernAngularScope extends JSONObject {

	public void setModule(String module) {
		super.put("module", module);
	}

	public String getModule() {
		return (String) super.get("module");
	}

	public void addController(String controller) {
		getControllers().add(controller);
	}

	public JSONArray getControllers() {
		JSONArray controllers = (JSONArray) super.get("controllers");
		if (controllers == null) {
			controllers = new JSONArray();
			super.put("controllers", controllers);
		}
		return controllers;
	}
}

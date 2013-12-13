package tern.server.protocol.angular;

import org.json.simple.JSONObject;

public class TernAngularScope extends JSONObject {

	public void setModule(String module) {
		super.put("module", module);
	}

	public String getModule() {
		return (String) super.get("module");
	}

	public void setController(String controller) {
		super.put("controller", controller);
	}

	public String getController() {
		return (String) super.get("controller");
	}
}

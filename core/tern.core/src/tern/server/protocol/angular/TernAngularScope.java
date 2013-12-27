package tern.server.protocol.angular;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

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

	public void addModel(String model) {
		// JSONObject json = new JSONObject();
		if (model.indexOf('.') == -1) {
			getProps().put(model, model);
		}
	}

	public JSONObject getProps() {
		JSONObject props = (JSONObject) super.get("props");
		if (props == null) {
			props = new JSONObject();
			super.put("props", props);
		}
		return props;
	}

	public void addRepeat(String expression) {
		Pattern pattern = Pattern
				.compile("^\\s*(.+)\\s+in\\s+(.*?)\\s*(\\s+track\\s+by\\s+(.+)\\s*)?$");
		Matcher matcher = pattern.matcher(expression);
		while (matcher.find()) {
			String lhs = matcher.group(1);
			String rhs = matcher.group(2);

			Pattern pattern2 = Pattern
					.compile("^(?:([\\$\\w]+)|\\(([\\$\\w]+)\\s*,\\s*([\\$\\w]+)\\))$");
			Matcher matcher2 = pattern2.matcher(lhs);
			while (matcher2.find()) {
				String valueIdentifier = matcher.group(3) != null ? matcher
						.group(3) : matcher.group(1);
				String keyIdentifier = matcher.group(2);

				JSONObject repeat = new JSONObject();
				repeat.put("repeat", keyIdentifier);
				getProps().put(valueIdentifier, repeat);
			}

		}
	}

}

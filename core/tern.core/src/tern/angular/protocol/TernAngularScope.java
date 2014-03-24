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
package tern.angular.protocol;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class TernAngularScope extends JSONObject {

	private static final Pattern NGREPEAT_PATTERN = Pattern
			.compile("^\\s*(.+)\\s+in\\s+(.*?)\\s*(\\s+track\\s+by\\s+(.+)\\s*)?$");

	private static final Pattern NGREPEAT_LHS_PATTERN = Pattern
			.compile("^(?:([\\$\\w]+)|\\(([\\$\\w]+)\\s*,\\s*([\\$\\w]+)\\))$");

	public void setModule(String module) {
		super.put("module", module);
	}

	public String getModule() {
		return (String) super.get("module");
	}

	public boolean hasModule() {
		return super.containsKey("module");
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

	public boolean hasControllers() {
		JSONArray controllers = (JSONArray) super.get("controllers");
		if (controllers == null) {
			return false;
		}
		return controllers.size() > 0;
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
		Matcher matcher = NGREPEAT_PATTERN.matcher(expression);
		if (matcher.find()) {
			String lhs = matcher.group(1);
			String rhs = matcher.group(2);

			matcher = NGREPEAT_LHS_PATTERN.matcher(lhs);
			if (matcher.find()) {
				String valueIdentifier = matcher.group(3) != null ? matcher
						.group(3) : matcher.group(1);
				String keyIdentifier = matcher.group(2);

				JSONObject repeat = new JSONObject();
				repeat.put("repeat", rhs);
				if (keyIdentifier != null) {
					getProps().put(keyIdentifier, repeat);
				}
				if (valueIdentifier != null) {
					getProps().put(valueIdentifier, repeat);
				}
			}
		}
	}

}

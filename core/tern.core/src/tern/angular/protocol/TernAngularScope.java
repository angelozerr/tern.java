/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
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

import tern.server.protocol.JsonHelper;
import tern.utils.StringUtils;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;

public class TernAngularScope extends JsonObject {

	private static final String MODULE_FIELD_NAME = "module";

	private static final Pattern NGREPEAT_PATTERN = Pattern
			.compile("^\\s*(.+)\\s+in\\s+(.*?)\\s*(\\s+track\\s+by\\s+(.+)\\s*)?$");

	private static final Pattern NGREPEAT_LHS_PATTERN = Pattern
			.compile("^(?:([\\$\\w]+)|\\(([\\$\\w]+)\\s*,\\s*([\\$\\w]+)\\))$");

	public void setModule(String module) {
		super.add(MODULE_FIELD_NAME, module);
	}

	public String getModule() {
		return JsonHelper.getString(this, MODULE_FIELD_NAME);
	}

	public boolean hasModule() {
		return !StringUtils.isEmpty(getModule());
	}

	public void addController(String controller) {
		getControllers().add(controller);
	}

	public JsonArray getControllers() {
		JsonArray controllers = (JsonArray) super.get("controllers");
		if (controllers == null) {
			controllers = new JsonArray();
			super.add("controllers", controllers);
		}
		return controllers;
	}

	public boolean hasControllers() {
		JsonArray controllers = (JsonArray) super.get("controllers");
		if (controllers == null) {
			return false;
		}
		return controllers.size() > 0;
	}

	public void addModel(String model) {
		// JsonObject json = new JsonObject();
		if (model.indexOf('.') == -1) {
			getProps().add(model, model);
		}
	}

	public JsonObject getProps() {
		JsonObject props = (JsonObject) super.get("props");
		if (props == null) {
			props = new JsonObject();
			super.add("props", props);
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

				JsonObject repeat = new JsonObject();
				repeat.add("repeat", rhs);
				if (keyIdentifier != null) {
					getProps().add(keyIdentifier, repeat);
				}
				if (valueIdentifier != null) {
					getProps().add(valueIdentifier, repeat);
				}
			}
		}
	}

}

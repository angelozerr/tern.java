/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.ui.descriptors.options;

import tern.server.protocol.JsonHelper;

import com.eclipsesource.json.JsonObject;

/**
 * Lint rule.
 *
 */
public class LintRule {

	private final String label;
	private final JsonObject option;

	public LintRule(JsonObject defaultRule, JsonObject options) {
		String ruleId = defaultRule.names().get(0);
		JsonObject labelAndSeverity = (JsonObject) defaultRule.get(ruleId);
		JsonObject option = getRuleOption(ruleId,
				JsonHelper.getString(labelAndSeverity.get("severity")), options);
		this.label = JsonHelper.getString(labelAndSeverity.get("label"));
		this.option = option;
	}

	/**
	 * Returns the label of the rule.
	 * 
	 * @return
	 */
	public String getLabel() {
		return label;
	}

	private JsonObject getRuleOption(String ruleId, String defaultSeverity,
			JsonObject options) {
		JsonObject option = (JsonObject) options.get(ruleId);
		if (option == null) {
			option = new JsonObject();
			option.set("severity", defaultSeverity);
			options.set(ruleId, option);
		}
		return option;
	}

	public String getSeverity() {
		return JsonHelper.getString(option.get("severity"));
	}

	public void setSeverity(String severity) {
		option.set("severity", severity);
	}
}

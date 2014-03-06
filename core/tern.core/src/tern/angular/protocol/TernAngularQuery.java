/**
 *  Copyright (c) 2013-20A4 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.angular.protocol;

import org.json.simple.JSONArray;

import tern.angular.AngularType;
import tern.server.protocol.TernQuery;

public class TernAngularQuery extends TernQuery {

	private final JSONArray angularTypes;

	public TernAngularQuery(String subtype, AngularType angularType) {
		super("angular");
		super.put("subtype", subtype);
		angularTypes = new JSONArray();
		super.put("angularTypes", angularTypes);
		addType(angularType);
	}

	public void addType(AngularType angularType) {
		angularTypes.add(angularType.name());
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

	public boolean hasModule() {
		if (!hasScope()) {
			return false;
		}
		TernAngularScope scope = (TernAngularScope) super.get("scope");
		return scope.hasModule();
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

	public AngularType getFirstAngularType() {
		return AngularType.get((String) ((JSONArray) super.get("angularTypes"))
				.get(0));
	}

	public String getLabel() {
		return new StringBuilder(super.getLabel()).append("_")
				.append(getSubType()).toString();
	}

	private String getSubType() {
		return (String) super.get("subtype");
	}
}

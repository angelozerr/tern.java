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
package tern.eclipse.ide.ui.viewers;

import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

public class MemberWrapper {

	private final JsonObject element;
	private String name;

	public MemberWrapper(JsonObject element, String name) {
		this.element = element;
		this.name = name;
	}

	public JsonObject getElement() {
		return element;
	}

	public String getName() {
		return name;
	}

	public JsonValue getValue() {
		return getElement().get(name);
	}

	public void setName(String name) {
		String oldName = this.name;
		JsonValue oldValue = getValue();
		element.remove(oldName);
		this.name = name;
		element.set(name, oldValue);
	}

	public void setValue(String value) {
		element.set(name, value);
	}
}

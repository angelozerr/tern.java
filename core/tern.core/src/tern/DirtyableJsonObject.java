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
package tern;

import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

/**
 * Extends {@link JsonObject} to observe the changes of this object and mark it
 * as dirty.
 *
 */
public class DirtyableJsonObject extends JsonObject implements Dirtyable {

	private final Dirtyable dirtyable;

	public DirtyableJsonObject(Dirtyable dirtyable) {
		this.dirtyable = dirtyable;
	}

	@Override
	public JsonObject add(String name, boolean value) {
		setDirty(true);
		return super.add(name, value);
	}

	@Override
	public JsonObject add(String name, double value) {
		setDirty(true);
		return super.add(name, value);
	}

	@Override
	public JsonObject add(String name, float value) {
		setDirty(true);
		return super.add(name, value);
	}

	@Override
	public JsonObject add(String name, int value) {
		setDirty(true);
		return super.add(name, value);
	}

	@Override
	public JsonObject add(String name, JsonValue value) {
		setDirty(true);
		return super.add(name, value);
	}

	@Override
	public JsonObject add(String name, long value) {
		setDirty(true);
		return super.add(name, value);
	}

	@Override
	public JsonObject add(String name, String value) {
		setDirty(true);
		return super.add(name, value);
	}

	@Override
	public JsonObject remove(String name) {
		setDirty(true);
		return super.remove(name);
	}

	@Override
	public JsonObject set(String name, boolean value) {
		setDirty(true);
		return super.set(name, value);
	}

	@Override
	public JsonObject set(String name, double value) {
		setDirty(true);
		return super.set(name, value);
	}

	@Override
	public JsonObject set(String name, float value) {
		setDirty(true);
		return super.set(name, value);
	}

	@Override
	public JsonObject set(String name, int value) {
		setDirty(true);
		return super.set(name, value);
	}

	@Override
	public JsonObject set(String name, JsonValue value) {
		setDirty(true);
		return super.set(name, value);
	}

	@Override
	public JsonObject set(String name, long value) {
		setDirty(true);
		return super.set(name, value);
	}

	@Override
	public JsonObject set(String name, String value) {
		setDirty(true);
		return super.set(name, value);
	}

	@Override
	public void setDirty(boolean dirty) {
		this.dirtyable.setDirty(dirty);
	}
}

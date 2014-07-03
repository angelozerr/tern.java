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

import com.eclipsesource.json.JsonArray;

/**
 * Extends {@link JsonArray} to observe the changes of this object and mark it
 * as dirty.
 *
 */
public class DirtyableJsonArray extends JsonArray implements Dirtyable {

	private final Dirtyable dirtyable;

	public DirtyableJsonArray(Dirtyable dirtyable) {
		this.dirtyable = dirtyable;
	}

	@Override
	public JsonArray add(String value) {
		setDirty(true);
		return super.add(value);
	}

	public void setDirty(boolean dirty) {
		this.dirtyable.setDirty(dirty);
	}
}

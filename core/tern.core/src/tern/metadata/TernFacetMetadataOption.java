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
package tern.metadata;

import tern.server.protocol.JsonHelper;

import com.eclipsesource.json.JsonObject;

/**
 * Tern facet metadata options.
 *
 */
public class TernFacetMetadataOption {

	private static final String NAME_FIELD = "name";
	private static final String DESCRIPTION_FIELD = "description";
	private static final String TYPE_FIELD = "type";

	private final String name;
	private final String description;
	private final String type;

	public TernFacetMetadataOption(JsonObject json) {
		this.name = JsonHelper.getString(json, NAME_FIELD);
		this.description = JsonHelper.getString(json, DESCRIPTION_FIELD);
		this.type = JsonHelper.getString(json, TYPE_FIELD);
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public String getType() {
		return type;
	}

}

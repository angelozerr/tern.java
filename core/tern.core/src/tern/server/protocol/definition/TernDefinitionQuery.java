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
package tern.server.protocol.definition;

import tern.server.protocol.JsonHelper;
import tern.server.protocol.TernQuery;

/**
 * Tern defintion query.
 * 
 * <cite> Asks for the definition of something. This will try, for a variable or
 * property, to return the point at which it was defined. If that fails, or the
 * chosen expression is not an identifier or property reference, it will try to
 * return the definition site of the type the expression has. If no type is
 * found, or the type is not an object or function (other types don�t store
 * their definition site), it will fail to return useful information. </cite>
 * 
 * @see http://ternjs.net/doc/manual.html#req_definition
 * 
 */
public class TernDefinitionQuery extends TernQuery {

	private static final long serialVersionUID = 1L;

	private static final String DEFINITION_TYPE_QUERY = "definition";

	private static final String TYPES_FIELD_NAME = "types";

	private static final String DOCS_FIELD_NAME = "docs";

	private static final String URLS_FIELD_NAME = "urls";

	private static final String ORIGINS_FIELD_NAME = "origins";

	public TernDefinitionQuery(String file, Integer pos) {
		super(DEFINITION_TYPE_QUERY);
		setFile(file);
		setEnd(pos);
	}

	/**
	 * Whether to include the types of the completions in the result data.
	 * 
	 * @param types
	 */
	public void setTypes(boolean types) {
		super.add(TYPES_FIELD_NAME, types);
	}

	/**
	 * Whether to include the types of the completions in the result data.
	 * 
	 * @return
	 */
	public boolean isTypes() {
		return JsonHelper.getBoolean(this, TYPES_FIELD_NAME, false);
	}

	public void setDocs(boolean docs) {
		super.add(DOCS_FIELD_NAME, docs);
	}

	public boolean isDocs() {
		return JsonHelper.getBoolean(this, DOCS_FIELD_NAME, false);
	}

	public void setUrls(boolean urls) {
		super.add(URLS_FIELD_NAME, urls);
	}

	public boolean isUrls() {
		return JsonHelper.getBoolean(this, URLS_FIELD_NAME, false);
	}

	public void setOrigins(boolean origins) {
		super.add(ORIGINS_FIELD_NAME, origins);
	}

	public boolean isOrigins() {
		return JsonHelper.getBoolean(this, ORIGINS_FIELD_NAME, false);
	}

	/**
	 * Returns true if the given query type is "definition" and false otherwise.
	 * 
	 * @param queryType
	 *            the query type.
	 * @return true if the given query type is "definition" and false otherwise.
	 */
	public static boolean isQueryType(String queryType) {
		return DEFINITION_TYPE_QUERY.equals(queryType);
	}

}

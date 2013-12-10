/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.server.protocol.completions;

import tern.server.protocol.TernQuery;

/**
 * Tern completion query.
 * 
 */
public class TernCompletionQuery extends TernQuery {

	private static final long serialVersionUID = 1L;

	private static final String COMPLETIONS_TYPE_QUERY = "completions";

	private static final String TYPES_FIELD_NAME = "types";

	private static final String DOCS_FIELD_NAME = "docs";

	private static final String URLS_FIELD_NAME = "urls";

	private static final String ORIGINS_FIELD_NAME = "origins";

	public TernCompletionQuery(String file, Integer pos) {
		super(COMPLETIONS_TYPE_QUERY);
		setFile(file);
		setEnd(pos);
	}

	/**
	 * Whether to include the types of the completions in the result data.
	 * 
	 * @param types
	 */
	public void setTypes(boolean types) {
		super.put(TYPES_FIELD_NAME, types);
	}

	/**
	 * Whether to include the types of the completions in the result data.
	 * 
	 * @return
	 */
	public boolean isTypes() {
		return super.getBoolean(TYPES_FIELD_NAME, false);
	}

	public void setDocs(boolean docs) {
		super.put(DOCS_FIELD_NAME, docs);
	}

	public boolean isDocs() {
		return super.getBoolean(DOCS_FIELD_NAME, false);
	}

	public void setUrls(boolean urls) {
		super.put(URLS_FIELD_NAME, urls);
	}

	public boolean isUrls() {
		return super.getBoolean(URLS_FIELD_NAME, false);
	}

	public void setOrigins(boolean origins) {
		super.put(ORIGINS_FIELD_NAME, origins);
	}

	public boolean isOrigins() {
		return super.getBoolean(ORIGINS_FIELD_NAME, false);
	}

}

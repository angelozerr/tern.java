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
package tern.server.protocol.completions;

import tern.server.protocol.TernQuery;

/**
 * Tern completion query.
 * 
 * <cite> Asks the server for a set of completions at the given point. </cite>
 * 
 * @see http://ternjs.net/doc/manual.html#req_completions
 */
public class TernCompletionsQuery extends TernQuery {

	private static final long serialVersionUID = 1L;

	private static final String COMPLETIONS_TYPE_QUERY = "completions";

	private static final String TYPES_FIELD_NAME = "types";

	private static final String DOCS_FIELD_NAME = "docs";

	private static final String URLS_FIELD_NAME = "urls";

	private static final String ORIGINS_FIELD_NAME = "origins";

	private static final String CASEINSENSITIVE_FIELD_NAME = "caseInsensitive";

	private static final String EXPANDWORDFORWARD_FIELD_NAME = "expandWordForward";

	public TernCompletionsQuery(String file, Integer pos) {
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

	/**
	 * Whether to use a case-insensitive compare between the current word and
	 * potential completions.
	 * 
	 * @param caseInsensitive
	 */
	public void setCaseInsensitive(boolean caseInsensitive) {
		super.put(CASEINSENSITIVE_FIELD_NAME, caseInsensitive);
	}

	/**
	 * Whether to use a case-insensitive compare between the current word and
	 * potential completions.
	 * 
	 * @return
	 */
	public boolean isCaseInsensitive() {
		return super.getBoolean(CASEINSENSITIVE_FIELD_NAME, false);
	}

	/**
	 * When disabled, only the text before the given position is considered part
	 * of the word. When enabled (the default), the whole variable name that the
	 * cursor is on will be included.
	 * 
	 * @param expandWordForward
	 */
	public void setExpandWordForward(boolean expandWordForward) {
		super.put(EXPANDWORDFORWARD_FIELD_NAME, expandWordForward);
	}

	/**
	 * When disabled, only the text before the given position is considered part
	 * of the word. When enabled (the default), the whole variable name that the
	 * cursor is on will be included.
	 * 
	 * @return
	 */
	public boolean isExpandWordForward() {
		return super.getBoolean(EXPANDWORDFORWARD_FIELD_NAME, true);
	}

}

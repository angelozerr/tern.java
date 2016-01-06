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
package tern.server.protocol.completions;

import tern.server.protocol.JsonHelper;
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

	private static final String OMIT_OBJECT_PROTOTYPE_FIELD_NAME = "omitObjectPrototype";

	private static final String GUESS_FIELD_NAME = "guess";

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
	 * Whether to use a case-insensitive compare between the current word and
	 * potential completions.
	 * 
	 * @param caseInsensitive
	 */
	public void setCaseInsensitive(boolean caseInsensitive) {
		super.add(CASEINSENSITIVE_FIELD_NAME, caseInsensitive);
	}

	/**
	 * Whether to use a case-insensitive compare between the current word and
	 * potential completions.
	 * 
	 * @return
	 */
	public boolean isCaseInsensitive() {
		return JsonHelper.getBoolean(this, CASEINSENSITIVE_FIELD_NAME, false);
	}

	/**
	 * When disabled, only the text before the given position is considered part
	 * of the word. When enabled (the default), the whole variable name that the
	 * cursor is on will be included.
	 * 
	 * @param expandWordForward
	 */
	public void setExpandWordForward(boolean expandWordForward) {
		super.add(EXPANDWORDFORWARD_FIELD_NAME, expandWordForward);
	}

	/**
	 * When disabled, only the text before the given position is considered part
	 * of the word. When enabled (the default), the whole variable name that the
	 * cursor is on will be included.
	 * 
	 * @return
	 */
	public boolean isExpandWordForward() {
		return JsonHelper.getBoolean(this, EXPANDWORDFORWARD_FIELD_NAME, true);
	}

	/**
	 * Whether to ignore the properties of Object.prototype unless they have
	 * been spelled out by at least to characters.
	 * 
	 * @param omitObjectPrototype
	 */
	public void setOmitObjectPrototype(boolean omitObjectPrototype) {
		super.add(OMIT_OBJECT_PROTOTYPE_FIELD_NAME, omitObjectPrototype);
	}

	/**
	 * Whether to ignore the properties of Object.prototype unless they have
	 * been spelled out by at least to characters.
	 * 
	 * @return
	 */
	public boolean isOmitObjectPrototype() {
		return JsonHelper.getBoolean(this, OMIT_OBJECT_PROTOTYPE_FIELD_NAME,
				true);
	}

	/**
	 * When completing a property and no completions are found, Tern will use
	 * some heuristics to try and return some properties anyway. Set this to
	 * false to turn that off.
	 * 
	 * @param guess
	 */
	public void setGuess(boolean guess) {
		super.add(GUESS_FIELD_NAME, guess);
	}

	/**
	 * When completing a property and no completions are found, Tern will use
	 * some heuristics to try and return some properties anyway. Set this to
	 * false to turn that off.
	 * 
	 * @return
	 */
	public boolean isGuess() {
		return JsonHelper.getBoolean(this, GUESS_FIELD_NAME, true);
	}

	/**
	 * Returns true if the given query type is "completions" and false
	 * otherwise.
	 * 
	 * @param queryType
	 *            the query type.
	 * @return true if the given query type is "completions" and false
	 *         otherwise.
	 */
	public static boolean isQueryType(String queryType) {
		return COMPLETIONS_TYPE_QUERY.equals(queryType);
	}
}

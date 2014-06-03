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
import com.eclipsesource.json.JsonValue;

/**
 * Tern facet metadata loded from *.metadata.json file.
 *
 */
public class TernFacetMetadata {

	private static final String NAME_FIELD = "name";
	private static final String DESCRIPTION_FIELD = "description";
	private static final String HOMEPAGE_FIELD = "homepage";
	private static final String AUTHOR_FIELD = "author";
	private static final String REPOSITORY_FIELD = "repository";
	private static final String BUGS_FIELD = "bugs";
	private static final String URL_FIELD = "url";

	private final String name;
	private final String description;
	private final String homepage;
	private final String author;
	private final String repositoryURL;
	private final String bugsURL;

	/**
	 * Create facet metadata from JSON object.
	 * 
	 * @param json
	 */
	public TernFacetMetadata(JsonObject json) {
		this.name = JsonHelper.getString(json, NAME_FIELD);
		this.description = JsonHelper.getString(json, DESCRIPTION_FIELD);
		this.homepage = JsonHelper.getString(json, HOMEPAGE_FIELD);
		this.author = JsonHelper.getString(json, AUTHOR_FIELD);
		JsonValue repository = json.get(REPOSITORY_FIELD);
		if (repository != null) {
			this.repositoryURL = JsonHelper.getString((JsonObject) repository,
					URL_FIELD);
		} else {
			this.repositoryURL = null;
		}
		JsonValue bugs = json.get(BUGS_FIELD);
		if (bugs != null) {
			this.bugsURL = JsonHelper.getString((JsonObject) bugs, URL_FIELD);
		} else {
			this.bugsURL = null;
		}
	}

	/**
	 * Returns the name of the facet.
	 * 
	 * @return the name of the facet.
	 */
	public String getName() {
		return name;
	}

	/**
	 * Returns the description of the facet.
	 * 
	 * @return the description of the facet.
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * Returns the home page of the facet.
	 * 
	 * @return the home page of the facet.
	 */
	public String getHomePage() {
		return homepage;
	}

	/**
	 * Returns the author of the facet.
	 * 
	 * @return the author of the facet.
	 */
	public String getAuthor() {
		return author;
	}

	/**
	 * Returns the repository URL of the facet.
	 * 
	 * @return the repository URL of the facet.
	 */
	public String getRepositoryURL() {
		return repositoryURL;
	}

	/**
	 * Returns the bugs URL of the facet.
	 * 
	 * @return the bugs URL of the facet.
	 */
	public String getBugsURL() {
		return bugsURL;
	}
}

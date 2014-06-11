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
package tern.server;

import java.util.Set;

import com.eclipsesource.json.JsonObject;

import tern.TernException;
import tern.metadata.TernFacetMetadata;

/**
 * Wrapper for {@link ITernFacet} used to configure {@link ITernFacet} :
 * 
 * <ul>
 * <li>version of the facet</li>
 * <li>options of the facet if it's a plugin</li>
 * </ul>
 *
 */
public interface ITernFacetConfigurable extends ITernFacet {

	/**
	 * Set version of the tern facet
	 */
	ITernFacet setVersion(String version) throws TernException;

	/**
	 * Returns the current wrapped facet.
	 */
	ITernFacet getWrappedFacet();

	/**
	 * returns list of available versions.
	 */
	Set<String> getAvailableVersions();

	/**
	 * Returns the tern facet metadata.
	 * 
	 * @return the tern facet metadata.
	 */
	TernFacetMetadata getMetadata();

	void setOptions(JsonObject options);

	JsonObject getOptions();

}

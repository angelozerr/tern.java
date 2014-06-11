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

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

import com.eclipsesource.json.JsonObject;

import tern.TernException;
import tern.metadata.TernFacetMetadata;
import tern.utils.StringUtils;

/**
 * Wrapper for {@link ITernFacet} used to configure {@link ITernFacet} :
 * 
 * <ul>
 * <li>version of the facet</li>
 * <li>options of the facet if it's a plugin</li>
 * </ul>
 *
 */
public class TernFacetConfigurable implements ITernFacetConfigurable {

	private ITernFacet wrappedFacet;
	private final Map<String, ITernFacet> facets;
	private JsonObject options;

	public TernFacetConfigurable(ITernFacet facet) {
		this.facets = new LinkedHashMap<String, ITernFacet>();
		this.wrappedFacet = facet;
		addFacet(facet);
	}

	@Override
	public String getName() {
		return getType();
	}

	@Override
	public String getType() {
		return wrappedFacet.getType();
	}

	@Override
	public String getVersion() {
		return wrappedFacet.getVersion();
	}

	@Override
	public String getPath() {
		return wrappedFacet.getPath();
	}

	@Override
	public FacetType getFacetType() {
		return FacetType.Configurable;
	}

	public void addFacet(ITernFacet facet) {
		if (!StringUtils.isEmpty(facet.getVersion())) {
			this.facets.put(facet.getVersion(), facet);
		}
	}

	@Override
	public ITernFacet getWrappedFacet() {
		return wrappedFacet;
	}

	@Override
	public ITernFacet setVersion(String version) throws TernException {
		ITernFacet facet = facets.get(version);
		if (facet == null) {
			throw new TernException("Unsupported version " + version
					+ " for type " + getType());
		}
		wrappedFacet = facet;
		return facet;
	}

	@Override
	public Set<String> getAvailableVersions() {
		return facets.keySet();
	}

	@Override
	public TernFacetMetadata getMetadata() {
		return wrappedFacet.getMetadata();
	}

	@Override
	public JsonObject getOptions() {
		return options;
	}

	@Override
	public void setOptions(JsonObject options) {
		this.options = options;
	}
}

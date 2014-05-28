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

import tern.TernException;

/**
 * Wrapper for {@link ITernFacet} used to manage version of {@link ITernFacet}.
 *
 */
public class TernFacetWrapper implements ITernFacetWrapper {

	private ITernFacet wrappedFacet;
	private final Map<String, ITernFacet> facets;

	public TernFacetWrapper(ITernFacet facet) {
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
		return FacetType.Wrapper;
	}

	public void addFacet(ITernFacet facet) {
		this.facets.put(facet.getVersion(), facet);
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
}

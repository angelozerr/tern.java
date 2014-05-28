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
package tern.utils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import tern.TernException;
import tern.TernProject;
import tern.server.FacetType;
import tern.server.ITernDef;
import tern.server.ITernFacet;
import tern.server.ITernFacetWrapper;
import tern.server.ITernPlugin;
import tern.server.TernFacetWrapper;

/**
 * Helper for {@link ITernFacet}.
 *
 */
public class TernFacetHelper {

	/**
	 * Group the given list {@link ITernDef} by {@link ITernFacet#getType()};
	 * 
	 * @param facets
	 * @param groupedFacets
	 */
	public static void groupByType(ITernFacet[] facets,
			List<ITernFacet> groupedFacets) {
		Map<String, TernFacetWrapper> wrappers = null;
		for (ITernFacet facet : facets) {
			if (StringUtils.isEmpty(facet.getVersion())) {
				groupedFacets.add(facet);
			} else {
				if (wrappers == null) {
					wrappers = new HashMap<String, TernFacetWrapper>();
				}
				TernFacetWrapper wrapper = wrappers.get(facet.getType());
				if (wrapper == null) {
					wrapper = new TernFacetWrapper(facet);
					wrappers.put(facet.getType(), wrapper);
					groupedFacets.add(wrapper);
				} else {
					wrapper.addFacet(facet);
				}
			}
		}
	}

	/**
	 * Update the given list of {@link ITernDef} or {@link ITernPlugin} by using
	 * the given facet.
	 * 
	 * @param facet
	 * @param defs
	 *            to update.
	 * @param plugins
	 *            to update.
	 */
	public static void update(List<ITernDef> defs, List<ITernPlugin> plugins,
			ITernFacet facet) {
		switch (facet.getFacetType()) {
		case Def:
			defs.add((ITernDef) facet);
			break;
		case Plugin:
			plugins.add((ITernPlugin) facet);
			break;
		case Wrapper:
			ITernFacet wrappedFacet = ((ITernFacetWrapper) facet)
					.getWrappedFacet();
			update(defs, plugins, wrappedFacet);
			break;
		}
	}

	/**
	 * Update the given tern project by using the given facet.
	 * 
	 * @param facet
	 * @param ternProject
	 */
	public static void update(ITernFacet facet, TernProject<?> ternProject) {
		switch (facet.getFacetType()) {
		case Def:
			ternProject.addLib((ITernDef) facet);
			break;
		case Plugin:
			ternProject.addPlugin((ITernPlugin) facet);
			break;
		case Wrapper:
			ITernFacet wrappedFacet = ((ITernFacetWrapper) facet)
					.getWrappedFacet();
			update(wrappedFacet, ternProject);
			break;
		}
	}

	/**
	 * Retrieve ITernFacetWrapper for the given facet inside the list of facets.
	 * 
	 * @param facet
	 * @param allFacets
	 * @return
	 * @throws TernException
	 */
	public static ITernFacetWrapper findWrapper(ITernFacet facet,
			List<ITernFacet> allFacets) throws TernException {
		for (ITernFacet f : allFacets) {
			if (f.getFacetType() == FacetType.Wrapper
					&& f.getType() == facet.getType()) {
				((ITernFacetWrapper) f).setVersion(facet.getVersion());
				return (ITernFacetWrapper) f;
			}
		}
		return null;
	}
}

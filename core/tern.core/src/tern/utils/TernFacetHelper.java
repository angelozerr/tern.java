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

import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

import tern.TernException;
import tern.TernProject;
import tern.metadata.TernFacetMetadata;
import tern.server.FacetType;
import tern.server.ITernDef;
import tern.server.ITernFacet;
import tern.server.ITernFacetConfigurable;
import tern.server.ITernPlugin;
import tern.server.TernFacetConfigurable;

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
		Map<String, TernFacetConfigurable> wrappers = null;
		for (ITernFacet facet : facets) {
			if (!isConfigurableFacet(facet)) {
				// facet is not configurable, add it
				groupedFacets.add(facet);
			} else {
				// facet is configurable (version can be customized, or
				// options), wrap it with TernFacetConfigurable
				if (wrappers == null) {
					wrappers = new HashMap<String, TernFacetConfigurable>();
				}
				TernFacetConfigurable wrapper = wrappers.get(facet.getType());
				if (wrapper == null) {
					wrapper = new TernFacetConfigurable(facet);
					wrappers.put(facet.getType(), wrapper);
					groupedFacets.add(wrapper);
				} else {
					wrapper.addFacet(facet);
				}
			}
		}
	}

	/**
	 * Returns true if the given facet can be configured and false otherwise.
	 * 
	 * @param facet
	 * @return true if the given facet can be configured and false otherwise.
	 */
	public static boolean isConfigurableFacet(ITernFacet facet) {
		TernFacetMetadata metadata = facet.getMetadata();
		return !StringUtils.isEmpty(facet.getVersion())
				|| (metadata != null && metadata.getOptions().size() > 0);
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
		update(defs, plugins, null, facet);
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
	private static void update(List<ITernDef> defs, List<ITernPlugin> plugins,
			JsonObject options, ITernFacet facet) {
		switch (facet.getFacetType()) {
		case Def:
			defs.add((ITernDef) facet);
			break;
		case Plugin:
			plugins.add((ITernPlugin) facet);
			break;
		case Configurable:
			ITernFacet wrappedFacet = ((ITernFacetConfigurable) facet)
					.getWrappedFacet();
			JsonObject wrappedOptions = ((ITernFacetConfigurable) facet)
					.getOptions();
			update(defs, plugins, wrappedOptions, wrappedFacet);
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
		update(facet, null, ternProject);
	}

	/**
	 * Update the given tern project by using the given facet.
	 * 
	 * @param facet
	 * @param ternProject
	 */
	private static void update(ITernFacet facet, JsonObject options,
			TernProject<?> ternProject) {
		switch (facet.getFacetType()) {
		case Def:
			ternProject.addLib((ITernDef) facet);
			break;
		case Plugin:
			ternProject.addPlugin((ITernPlugin) facet, options);
			break;
		case Configurable:
			ITernFacet wrappedFacet = ((ITernFacetConfigurable) facet)
					.getWrappedFacet();
			JsonObject wrappedOptions = ((ITernFacetConfigurable) facet)
					.getOptions();
			update(wrappedFacet, wrappedOptions, ternProject);
			break;
		}
	}

	/**
	 * Retrieve {@link ITernFacetConfigurable} for the given facet inside the
	 * list of facets.
	 * 
	 * @param facet
	 * @param options
	 * @param allFacets
	 * @return
	 * @throws TernException
	 */
	public static ITernFacetConfigurable findConfigurable(ITernFacet facet,
			JsonValue options, List<ITernFacet> allFacets) throws TernException {
		String version = facet.getVersion();
		for (ITernFacet f : allFacets) {
			if (f.getFacetType() == FacetType.Configurable
					&& f.getType() == facet.getType()) {
				if (!StringUtils.isEmpty(version)) {
					((ITernFacetConfigurable) f).setVersion(version);
				}
				if (options instanceof JsonObject) {
					((ITernFacetConfigurable) f)
							.setOptions((JsonObject) options);
				}
				return (ITernFacetConfigurable) f;
			}
		}
		return null;
	}

	/**
	 * Returns true if the given facet has filled options and false otherwise.
	 * 
	 * @param facet
	 * @return true if the given facet has filled options and false otherwise.
	 */
	public static boolean hasOptions(ITernFacet facet) {
		if (facet == null || facet.getFacetType() != FacetType.Configurable) {
			return false;
		}
		ITernFacetConfigurable f = (ITernFacetConfigurable) facet;
		return (f.getOptions() != null && f.getOptions().size() > 0);
	}
}

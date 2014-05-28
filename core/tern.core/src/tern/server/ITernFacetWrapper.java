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

import tern.TernException;

/**
 * Wrapper for {@link ITernFacet} used to manage version of {@link ITernFacet}.
 *
 */
public interface ITernFacetWrapper extends ITernFacet {

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

}

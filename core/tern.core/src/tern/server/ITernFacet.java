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

import tern.metadata.TernFacetMetadata;
import tern.metadata.TernFacetMetadataManager;

/**
 * BAse API for JSON Type Definition API & Tern plugins.
 * 
 * @see http://ternjs.net/doc/manual.html#typedef
 * @see http://ternjs.net/doc/manual.html#plugins
 * 
 */
public interface ITernFacet {

	public static final ITernFacet[] EMPTY_FACET = new ITernFacet[0];

	/**
	 * Return the def or plugin name.
	 * 
	 * @return
	 */
	String getName();

	/**
	 * Returns the type of the def or plugin.
	 * 
	 * @return the type of the def or plugin.
	 */
	String getType();

	/**
	 * Returns the version of the def or plugin.
	 * 
	 * @return the version of the def or plugin.
	 */
	String getVersion();

	/**
	 * Return the def or plugin path.
	 * 
	 * @return
	 */
	String getPath();

	/**
	 * Returns the facet type.
	 * 
	 * @return
	 */
	FacetType getFacetType();

	/**
	 * Returns the tern metadata and null otherwise.
	 * 
	 * @return the tern metadata and null otherwise.
	 */
	TernFacetMetadata getMetadata();

}

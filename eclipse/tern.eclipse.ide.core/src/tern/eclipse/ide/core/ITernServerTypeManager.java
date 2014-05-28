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
package tern.eclipse.ide.core;

import tern.server.ITernDef;
import tern.server.ITernFacet;
import tern.server.ITernPlugin;

/**
 * Tern server type manager API.
 * 
 */
public interface ITernServerTypeManager {

	/**
	 * Returns an array of all known tern server types.
	 * <p>
	 * A new array is returned on each call, so clients may store or modify the
	 * result.
	 * </p>
	 * 
	 * @return the array of tern server types {@link ITernServerType}
	 */
	ITernServerType[] getTernServerTypes();

	/**
	 * Returns the tern server type with the given id, or <code>null</code> if
	 * none. This convenience method searches the list of known tern server
	 * types ({@link #getTernServerTypes()}) for the one with a matching tern
	 * server type id ({@link ITernServerType#getId()}). The id may not be null.
	 * 
	 * @param id
	 *            the tern server type id
	 * @return the tern server type, or <code>null</code> if there is no tern
	 *         server type with the given id
	 */
	ITernServerType findTernServerType(String id);

	void refresh();

	ITernFacet[] getTernFacetsGroupByType();
	
	ITernFacet[] getTernFacets();
	
	ITernPlugin[] getTernPlugins();

	ITernPlugin findTernPlugin(String name);

	ITernDef[] getTernDefs();

	ITernDef findTernDef(String string);

}

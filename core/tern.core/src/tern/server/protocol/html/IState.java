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
package tern.server.protocol.html;

/**
 * API for state used while parsing HTML content and extract JS content.
 */
interface IState {

	/**
	 * Update the state with the given character and returns the matched region
	 * and null otherwise.
	 * 
	 * @param c
	 *            current character.
	 * @return update the state with the given character and returns the matched
	 *         region and null otherwise.
	 */
	Region update(char c);

	/**
	 * Returns true if the given region type matches the type of the next region
	 * to find and false otherwise.
	 * 
	 * @param type
	 *            region type.
	 * @return true if the given region type matches the type of the next region
	 *         to find and false otherwise.
	 */
	boolean isNextRegionToFindType(RegionType type);

	/**
	 * Reset the state.
	 */
	void reset();
}
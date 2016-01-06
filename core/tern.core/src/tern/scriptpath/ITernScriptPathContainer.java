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
package tern.scriptpath;

/**
 * Tern script path container which defines inclusion, exclusion patterns.
 *
 */
public interface ITernScriptPathContainer extends ITernScriptPath {

	/**
	 * Returns the list of the inclusion patterns.
	 * 
	 * @return the list of the inclusion patterns.
	 */
	String[] getInclusionPatterns();

	/**
	 * Returns the list of the exclusion patterns.
	 * 
	 * @return the list of the exclusion patterns.
	 */
	String[] getExclusionPatterns();
}

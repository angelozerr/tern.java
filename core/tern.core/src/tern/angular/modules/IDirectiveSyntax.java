/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.angular.modules;

/**
 * Directive name syntax.
 */
public interface IDirectiveSyntax {

	/**
	 * Returns true if directive name can support th eoriginal name (ex :
	 * ngBind) and false otherwise.
	 * 
	 * @return
	 */
	boolean isUseOriginalName();

	/**
	 * Returns true if directive starts with nothing and false otherwise.
	 * 
	 * @return
	 */
	boolean isStartsWithNothing();

	/**
	 * Returns true if directive starts with 'x-' and false otherwise.
	 * 
	 * @return
	 */
	boolean isStartsWithX();

	/**
	 * Returns true if directive starts with 'data-' and false otherwise.
	 * 
	 * @return
	 */
	boolean isStartsWithData();

	/**
	 * Returns if ':' must be used as delimiter and false otherwise.
	 * 
	 * @return
	 */
	boolean isColonDelimiter();

	/**
	 * Returns if '-' must be used as delimiter and false otherwise.
	 * 
	 * @return
	 */
	boolean isMinusDelimiter();

	/**
	 * Returns if '_' must be used as delimiter and false otherwise.
	 * 
	 * @return
	 */
	boolean isUnderscoreDelimiter();

}

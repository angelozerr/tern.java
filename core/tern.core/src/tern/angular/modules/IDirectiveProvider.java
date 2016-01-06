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
package tern.angular.modules;

import org.w3c.dom.Attr;
import org.w3c.dom.Element;

/**
 * Directive provider.
 * 
 */
public interface IDirectiveProvider {

	/**
	 * Returns the angular directive from the given attribute and null
	 * otherwise.
	 * 
	 * @param attr
	 * @return
	 */
	Directive getAngularDirective(Object project, Attr attr);

	/**
	 * Returns the angular directive parameter from the given attribute and null
	 * otherwise.
	 * 
	 * @param attr
	 * @return
	 */
	DirectiveParameter getAngularDirectiveParameter(Object project, Attr attr);

	/**
	 * Returns the angular directive from the given element and null otherwise.
	 * 
	 * @param element
	 * @return
	 */
	Directive getAngularDirective(Object project, Element element);
}

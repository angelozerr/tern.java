/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - Collectors API and code refactoring
 */
package tern.server.protocol.type;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultsCollector;

/**
 * API to collect tern type.
 * 
 */
public interface ITernTypeCollector extends ITernResultsCollector {

	/**
	 * Collector called for "type" query tern server.
	 * 
	 * @param type
	 *            A description of the type of the value. May be "?" when no
	 *            type was found.
	 * @param guess
	 *            Whether the given type was guessed, or should be considered
	 *            reliable.
	 * @param name
	 *            The name associated with the type.
	 * @param exprName
	 *            When the inspected expression was an identifier or a property
	 *            access, this will hold the name of the variable or property.
	 * @param doc
	 *            If the type had documentation and origin information
	 *            associated with it, these will also be returned.
	 * @param url
	 *            If the type had documentation and origin information
	 *            associated with it, these will also be returned.
	 * @param origin
	 *            If the type had documentation and origin information
	 *            associated with it, these will also be returned.
	 * @param item
	 *            object of type (ex : JsonObject)
	 * @param objectHelper
	 *            helper for extracting values of JSON objects.
	 */
	void setType(String type, boolean guess, String name, String exprName,
			String doc, String url, String origin, Object item,
			IJSONObjectHelper objectHelper);
}

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
package tern.server.protocol.guesstypes;

import tern.server.protocol.TernQuery;

public class TernGuessTypesQuery extends TernQuery {

	private static final long serialVersionUID = 1L;

	private static final String GUESS_QUERY = "guess-types";

	private static final String PROPERTY_FIELD_NAME = "property";

	public TernGuessTypesQuery(String file, Integer pos, String property) {
		super(GUESS_QUERY);
		setFile(file);
		setEnd(pos);
		setProperty(property);
	}

	public void setProperty(String property) {
		super.add(PROPERTY_FIELD_NAME, property);
	}

}

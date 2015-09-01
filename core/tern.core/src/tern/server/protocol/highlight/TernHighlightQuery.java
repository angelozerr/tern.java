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
package tern.server.protocol.highlight;

import tern.server.protocol.TernQuery;

/**
 * Tern highlight query to use the tern highlight plugin
 * https://github.com/katspaugh/tj-mode
 *
 */
public class TernHighlightQuery extends TernQuery {

	private static final long serialVersionUID = 1L;

	private static final String HIGHLIGHT_TYPE_QUERY = "highlight";

	private static final String TEXT_FIELD_NAME = "text";

	public TernHighlightQuery(String text) {
		super(HIGHLIGHT_TYPE_QUERY);
		super.set(TEXT_FIELD_NAME, text);
	}

}

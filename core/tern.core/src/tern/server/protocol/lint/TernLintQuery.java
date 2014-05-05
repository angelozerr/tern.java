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
package tern.server.protocol.lint;

import tern.server.protocol.TernQuery;

/**
 * Tern lint query used to validate JS files.
 *
 */
public class TernLintQuery extends TernQuery {

	private static final String LINT_TYPE_QUERY = "lint";

	public TernLintQuery() {
		super(LINT_TYPE_QUERY);
	}

}

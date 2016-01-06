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
package tern.angular.protocol.outline;

import tern.server.protocol.TernQuery;

/**
 * Angular Outline Query.
 *
 */
public class AngularOutlineQuery extends TernQuery {

	private static final long serialVersionUID = 1L;

	private static final String OUTLINE_TYPE_QUERY = "angular-outline";

	public AngularOutlineQuery() {
		super(OUTLINE_TYPE_QUERY);
	}

}

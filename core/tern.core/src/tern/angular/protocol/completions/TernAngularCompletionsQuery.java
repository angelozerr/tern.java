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
package tern.angular.protocol.completions;

import tern.angular.AngularType;
import tern.angular.protocol.TernAngularQuery;

public class TernAngularCompletionsQuery extends TernAngularQuery {

	private static final long serialVersionUID = 1L;

	private static final String COMPLETIONS_TYPE_QUERY = "completions";

	public TernAngularCompletionsQuery(AngularType angularType) {
		super(COMPLETIONS_TYPE_QUERY, angularType);
	}

}

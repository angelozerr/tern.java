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
package tern.angular.protocol.type;

import tern.angular.AngularType;
import tern.angular.protocol.TernAngularQuery;

public class TernAngularTypeQuery extends TernAngularQuery {

	private static final long serialVersionUID = 1L;

	private static final String TYPE_QUERY_TYPE = "type";
	
	public TernAngularTypeQuery(AngularType angularType) {
		super(TYPE_QUERY_TYPE, angularType);
	}

}

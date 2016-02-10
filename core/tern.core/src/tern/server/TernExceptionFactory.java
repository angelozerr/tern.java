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
package tern.server;

import tern.TernException;

public class TernExceptionFactory {

	private static final String NO_TYPE_FOUND_AT_THE_GIVEN_POSITION = "No type found at the given position.";

	private TernExceptionFactory() {
	}

	public static TernException create(String message) {
		if (message.indexOf(NO_TYPE_FOUND_AT_THE_GIVEN_POSITION) != - 1) {
			return new TernNoTypeFoundAtPositionException(message);
		}
		// TODO add other ternjs error
		return new TernException(message);
	}
}

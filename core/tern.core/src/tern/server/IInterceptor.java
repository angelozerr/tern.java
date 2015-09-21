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
package tern.server;

import com.eclipsesource.json.JsonObject;

import tern.server.protocol.TernDoc;

public interface IInterceptor {

	void handleRequest(TernDoc request, ITernServer server, String methodName);

	void handleResponse(JsonObject response, ITernServer server,
			String methodName, long ellapsedTime);

	void handleError(Throwable error, ITernServer server, String methodName,
			long ellapsedTime);
}

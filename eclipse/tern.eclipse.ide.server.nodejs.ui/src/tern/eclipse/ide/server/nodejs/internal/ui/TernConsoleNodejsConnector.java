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
package tern.eclipse.ide.server.nodejs.internal.ui;

import tern.eclipse.ide.core.ITernConsoleConnector;
import tern.server.ITernServer;
import tern.server.nodejs.NodejsTernServer;

public class TernConsoleNodejsConnector implements
		ITernConsoleConnector {

	@Override
	public boolean isAdaptFor(ITernServer server) {
		return server instanceof NodejsTernServer;
	}

	@Override
	public void connectToConsole(ITernServer server) {
		NodejsTernServer nodeServer = (NodejsTernServer) server;
		nodeServer.addInterceptor(TernNodejsInterceptor.getInstance());
		nodeServer.addProcessListener(TernNodejsInterceptor.getInstance());
	}

	@Override
	public void disconnectToConsole(ITernServer server) {
		NodejsTernServer nodeServer = (NodejsTernServer) server;
		nodeServer.removeInterceptor(TernNodejsInterceptor.getInstance());
		nodeServer.removeProcessListener(TernNodejsInterceptor.getInstance());
	}

}

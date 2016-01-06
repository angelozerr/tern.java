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
package tern.eclipse.ide.server.nodejs.internal.ui;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.ITernConsoleConnector;
import tern.server.ITernServer;
import tern.server.nodejs.NodejsTernServer;

public class TernConsoleNodejsConnector implements ITernConsoleConnector {

	@Override
	public boolean isAdaptFor(ITernServer server) {
		return server instanceof NodejsTernServer;
	}

	@Override
	public void connectToConsole(ITernServer server, IIDETernProject project) {
		NodejsTernServer nodeServer = (NodejsTernServer) server;
		TernNodejsInterceptor interceptor = getInterceptor(project);
		nodeServer.addInterceptor(interceptor);
		nodeServer.addProcessListener(interceptor);
	}

	@Override
	public void disconnectToConsole(ITernServer server, IIDETernProject project) {
		NodejsTernServer nodeServer = (NodejsTernServer) server;
		TernNodejsInterceptor interceptor = getInterceptor(project);
		nodeServer.removeInterceptor(interceptor);
		nodeServer.removeProcessListener(interceptor);
	}

	public TernNodejsInterceptor getInterceptor(IIDETernProject project) {
		String key = TernNodejsInterceptor.class.getName();
		TernNodejsInterceptor interceptor = project.getData(key);
		if (interceptor == null) {
			interceptor = new TernNodejsInterceptor(project);
			project.setData(key, interceptor);
		}
		return interceptor;
	}
}

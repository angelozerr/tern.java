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
package tern.server.nodejs;

import java.io.File;

import tern.ITernProject;
import tern.TernException;
import tern.server.ITernServer;
import tern.server.LoggingInterceptor;
import tern.server.nodejs.process.NodejsProcessManager;
import tern.server.nodejs.process.PathHelper;
import tern.server.nodejs.process.PrintNodejsProcessListener;

public class NodejsTernServerFactory {

	private NodejsTernServerFactory() {
	}

	public static ITernServer createServer(ITernProject project)
			throws TernException {
		NodejsProcessManager.getInstance().init(
				PathHelper.getNodejsTernBaseDir());

		File nodejsBaseDir = PathHelper.getNodejsBasedir();
		((tern.resources.TernProject)project).add("node_timeout", 5000L);
		NodejsTernServer server = new NodejsTernServer(project, nodejsBaseDir);
		// trace process
		server.addProcessListener(PrintNodejsProcessListener.getInstance());
		server.addInterceptor(LoggingInterceptor.getInstance());
		return server;
	}
}

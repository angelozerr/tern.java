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
package tern.server.rhino;

import tern.ITernProject;
import tern.TernException;
import tern.repository.TernRepository;
import tern.server.ITernServer;
import tern.server.nodejs.process.PathHelper;

public class RhinoTernServerFactory {

	private RhinoTernServerFactory() {
	}

	public static ITernServer createServer(ITernProject project) throws TernException {
		project.setRepository(new TernRepository("ternjs", PathHelper.getTernRepositoryDir()));
		RhinoTernServer server = new RhinoTernServer(project);		
		return server;
	}
}

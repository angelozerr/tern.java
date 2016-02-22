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
package tern.eclipse.ide.server.rhino.internal.core;

import tern.ITernProject;
import tern.eclipse.ide.core.ITernServerFactory;
import tern.server.ITernServer;
import tern.server.rhino.RhinoTernServer;

public class TernRhinoServerFactory implements ITernServerFactory {

	@Override
	public ITernServer create(ITernProject project) throws Exception {
		return new RhinoTernServer(project);
	}

}

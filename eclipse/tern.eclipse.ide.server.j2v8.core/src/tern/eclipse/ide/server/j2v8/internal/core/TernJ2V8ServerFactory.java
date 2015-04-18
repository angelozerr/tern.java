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
package tern.eclipse.ide.server.j2v8.internal.core;

import tern.ITernProject;
import tern.eclipse.ide.core.ITernServerFactory;
import tern.server.ITernServer;
import tern.server.j2v8.J2V8TernServer;

/**
 * Tern server factory implementation with J2V8.
 */
public class TernJ2V8ServerFactory implements ITernServerFactory {

	@Override
	public ITernServer create(ITernProject project) throws Exception {
		J2V8TernServer server = new J2V8TernServer(project);
		return server;
	}
}

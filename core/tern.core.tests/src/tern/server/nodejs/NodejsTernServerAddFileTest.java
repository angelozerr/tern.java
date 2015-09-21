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
package tern.server.nodejs;

import tern.ITernProject;
import tern.TernException;
import tern.server.ITernServer;
import tern.server.protocol.AbstractTernServerAddFileTest;

/**
 * Test with Tern server executed with node.js
 */
public class NodejsTernServerAddFileTest extends AbstractTernServerAddFileTest {

	@Override
	protected ITernServer createServer(ITernProject project)
			throws TernException {
		return NodejsTernServerFactory.createServer(project);
	}

}

package tern.server.nodejs;

import tern.TernException;
import tern.TernProject;
import tern.server.ITernServer;
import tern.server.protocol.AbstractTernServerAddFileWithThreadTest;

/**
 * Test with Tern server executed with node.js
 */
public class NodejsTernServerAddFileWithThreadTest extends
		AbstractTernServerAddFileWithThreadTest {

	@Override
	protected ITernServer createServer(TernProject project)
			throws TernException {
		return NodejsTernServerFactory.createServer(project);
	}

}

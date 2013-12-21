package tern.server.nodejs;

import tern.TernException;
import tern.server.AbstractTernServerAddFileTest;
import tern.server.ITernServer;

/**
 * Test with Tern server executed with node.js
 */
public class NodejsTernServerAddFileTest extends AbstractTernServerAddFileTest {

	@Override
	protected ITernServer createServer() throws TernException {
		return NodejsTernServerFactory.createServer();
	}

}

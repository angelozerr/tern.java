package tern.server.nodejs;

import tern.TernException;
import tern.server.ITernServer;
import tern.server.protocol.AbstractTernServerAddFileTest;

/**
 * Test with Tern server executed with node.js
 */
public class NodejsTernServerAddFileTest extends AbstractTernServerAddFileTest {

	@Override
	protected ITernServer createServer() throws TernException {
		return NodejsTernServerFactory.createServer();
	}

}

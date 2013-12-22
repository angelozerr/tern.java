package tern.server.nodejs;

import tern.TernException;
import tern.server.ITernServer;
import tern.server.protocol.AbstractTernServerCompletionQueryTest;

/**
 * Test with Tern server executed with node.js
 */
public class NodejsTernServerCompletionQueryTest extends AbstractTernServerCompletionQueryTest {

	@Override
	protected ITernServer createServer() throws TernException {
		return NodejsTernServerFactory.createServer();
	}

}

package tern.server.nodejs;

import tern.TernException;
import tern.server.AbstractTernServerCompletionQueryTest;
import tern.server.ITernServer;

/**
 * Test with Tern server executed with node.js
 */
public class NodejsTernServerCompletionQueryTest extends AbstractTernServerCompletionQueryTest {

	@Override
	protected ITernServer createServer() throws TernException {
		return NodejsTernServerFactory.createServer();
	}

}

package tern.server.nodejs;

import tern.TernException;
import tern.TernProject;
import tern.server.ITernServer;
import tern.server.protocol.AbstractTernServerCompletionQueryTest;

/**
 * Test with Tern server executed with node.js
 */
public class NodejsTernServerCompletionQueryTest extends AbstractTernServerCompletionQueryTest {

	@Override
	protected ITernServer createServer(TernProject project ) throws TernException {
		return NodejsTernServerFactory.createServer(project);
	}

}

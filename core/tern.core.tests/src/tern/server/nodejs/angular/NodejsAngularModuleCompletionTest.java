package tern.server.nodejs.angular;

import tern.TernException;
import tern.TernProject;
import tern.server.ITernServer;
import tern.server.nodejs.NodejsTernServerFactory;
import tern.server.protocol.angular.AbstractAngularModuleCompletionTest;

public class NodejsAngularModuleCompletionTest extends
		AbstractAngularModuleCompletionTest {

	@Override
	protected ITernServer createServer(TernProject project)
			throws TernException {
		return NodejsTernServerFactory.createServer(project);
	}
}

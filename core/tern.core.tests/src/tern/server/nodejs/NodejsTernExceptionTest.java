package tern.server.nodejs;

import tern.ITernProject;
import tern.TernException;
import tern.server.AbstractTernExceptionTest;
import tern.server.ITernServer;

public class NodejsTernExceptionTest extends AbstractTernExceptionTest{

	@Override
	protected ITernServer createServer(ITernProject project)
			throws TernException {
		return NodejsTernServerFactory.createServer(project);
	}
}

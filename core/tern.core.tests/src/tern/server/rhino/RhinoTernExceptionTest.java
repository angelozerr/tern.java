package tern.server.rhino;

import tern.ITernProject;
import tern.TernException;
import tern.server.AbstractTernExceptionTest;
import tern.server.ITernServer;

public class RhinoTernExceptionTest extends AbstractTernExceptionTest{

	@Override
	protected ITernServer createServer(ITernProject project)
			throws TernException {
		return RhinoTernServerFactory.createServer(project);
	}
}

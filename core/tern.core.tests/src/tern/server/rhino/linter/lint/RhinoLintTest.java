package tern.server.rhino.linter.lint;

import tern.ITernProject;
import tern.TernException;
import tern.server.ITernServer;
import tern.server.protocol.linter.lint.AbstractTernServerLintTest;
import tern.server.rhino.RhinoTernServerFactory;

public class RhinoLintTest extends AbstractTernServerLintTest {

	@Override
	protected ITernServer createServer(ITernProject project) throws TernException {
		return RhinoTernServerFactory.createServer(project);
	}

}

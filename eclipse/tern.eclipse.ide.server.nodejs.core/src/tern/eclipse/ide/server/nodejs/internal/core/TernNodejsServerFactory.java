package tern.eclipse.ide.server.nodejs.internal.core;

import tern.TernProject;
import tern.eclipse.ide.core.ITernServerFactory;
import tern.server.ITernServer;
import tern.server.nodejs.NodejsTernServer;

public class TernNodejsServerFactory implements ITernServerFactory {

	@Override
	public ITernServer create(TernProject project) throws Exception {
		return new NodejsTernServer(project);
	}

}

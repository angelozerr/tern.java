package tern.eclipse.ide.server.nodejs.internal.core;

import tern.TernProject;
import tern.eclipse.ide.core.ITernServerConfiguration;
import tern.eclipse.ide.core.ITernServerFactory;
import tern.server.ITernServer;
import tern.server.nodejs.LoggingInterceptor;
import tern.server.nodejs.NodejsTernServer;
import tern.server.nodejs.process.PrintNodejsProcessListener;

public class TernNodejsServerFactory implements ITernServerFactory {

	@Override
	public ITernServer create(TernProject project,
			ITernServerConfiguration configuration) throws Exception {
		NodejsTernServer server = new NodejsTernServer(project);
		// TODO : remove that
		server.addInterceptor(new LoggingInterceptor());
		server.addProcessListener(PrintNodejsProcessListener.getInstance());
		return server;
	}

}

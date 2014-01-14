package tern.eclipse.ide.server.nodejs.internal.ui;

import tern.eclipse.ide.core.ITernConsoleConnector;
import tern.server.ITernServer;
import tern.server.nodejs.NodejsTernServer;

public class TernConsoleNodejsConnector implements
		ITernConsoleConnector {

	@Override
	public boolean isAdaptFor(ITernServer server) {
		return server instanceof NodejsTernServer;
	}

	@Override
	public void connectToConsole(ITernServer server) {
		NodejsTernServer nodeServer = (NodejsTernServer) server;
		nodeServer.addInterceptor(TernNodejsInterceptor.getInstance());
		nodeServer.addProcessListener(TernNodejsInterceptor.getInstance());
	}

	@Override
	public void disconnectToConsole(ITernServer server) {
		NodejsTernServer nodeServer = (NodejsTernServer) server;
		nodeServer.removeInterceptor(TernNodejsInterceptor.getInstance());
		nodeServer.removeProcessListener(TernNodejsInterceptor.getInstance());
	}

}

package tern.server.nodejs;

import java.io.File;

import tern.TernException;
import tern.TernProject;
import tern.server.ITernServer;
import tern.server.LoggingInterceptor;
import tern.server.nodejs.process.NodejsProcessManager;
import tern.server.nodejs.process.PathHelper;
import tern.server.nodejs.process.PrintNodejsProcessListener;

public class NodejsTernServerFactory {

	public static ITernServer createServer(TernProject project)
			throws TernException {
		NodejsProcessManager.getInstance().init(
				PathHelper.getNodejsTernBaseDir());

		File nodejsBaseDir = PathHelper.getNodejsBasedir();

		project.put("node_timeout", 5000L);
		NodejsTernServer server = new NodejsTernServer(project, nodejsBaseDir);
		// trace process
		server.addProcessListener(PrintNodejsProcessListener.getInstance());
		server.addInterceptor(LoggingInterceptor.getInstance());
		return server;
	}
}

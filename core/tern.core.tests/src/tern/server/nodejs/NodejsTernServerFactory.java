package tern.server.nodejs;

import java.io.File;

import tern.TernException;
import tern.TernProject;
import tern.server.ITernServer;
import tern.server.nodejs.process.NodejsProcess;
import tern.server.nodejs.process.NodejsProcessAdapter;
import tern.server.nodejs.process.NodejsProcessManager;
import tern.server.nodejs.process.PathHelper;

public class NodejsTernServerFactory {

	public static ITernServer createServer() throws TernException {
		NodejsProcessManager.getInstance().init(
				PathHelper.getNodejsTernBaseDir());

		File nodejsBaseDir = PathHelper.getNodejsBasedir();
		TernProject project = new TernProject(new File("."));

		NodejsTernServer server = new NodejsTernServer(project, nodejsBaseDir);
		server.addProcessListener(new NodejsProcessAdapter() {
			@Override
			public void onData(NodejsProcess server, String line) {
				System.err.println(line);
			}
		});
		return server;
	}
}

package tern.server.nodejs.process;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class NodejsProcessManager {

	private final static NodejsProcessManager INSTANCE = new NodejsProcessManager();

	public static NodejsProcessManager getInstance() {
		return INSTANCE;
	}

	private final List<NodejsProcess> processes;

	private File nodejsTernBaseDir;

	private final NodejsProcessListener listener = new NodejsProcessListener() {

		@Override
		public void onStart(NodejsProcess server) {
			synchronized (NodejsProcessManager.this.processes) {
				NodejsProcessManager.this.processes.add(server);
			}
		}

		@Override
		public void onStop(NodejsProcess server) {
			synchronized (NodejsProcessManager.this.processes) {
				NodejsProcessManager.this.processes.remove(server);
			}
		}

		@Override
		public void onData(NodejsProcess server, String line) {

		}
	};

	public NodejsProcessManager() {
		this.processes = new ArrayList<NodejsProcess>();
	}

	public NodejsProcess create(File projectDir) {
		return create(projectDir, nodejsTernBaseDir);
	}

	public NodejsProcess create(File projectDir, File nodejsTernBaseDir) {
		NodejsProcess process = new NodejsProcess(nodejsTernBaseDir, projectDir);
		process.addProcessListener(listener);
		return process;
	}

	public void init(File nodejsTernBaseDir) {
		this.nodejsTernBaseDir = nodejsTernBaseDir;
	}

	public File getNodejsTernBaseDir() {
		return nodejsTernBaseDir;
	}

	public void dispose() {
		List<NodejsProcess> processes = new ArrayList<NodejsProcess>(
				this.processes);
		for (NodejsProcess server : processes) {
			try {
				server.kill();
			} catch (Throwable e) {
				e.printStackTrace();
			}
		}
	}
}

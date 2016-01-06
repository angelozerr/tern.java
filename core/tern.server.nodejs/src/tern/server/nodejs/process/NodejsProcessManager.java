/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - support for tern.js debugging
 */
package tern.server.nodejs.process;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import tern.TernException;
import tern.server.nodejs.process.internal.NodejsProcess;

/**
 * {@link NodejsProcess} manager.
 * 
 */
public class NodejsProcessManager {

	private final static NodejsProcessManager INSTANCE = new NodejsProcessManager();

	/**
	 * Returns the manager singleton.
	 * 
	 * @return
	 */
	public static NodejsProcessManager getInstance() {
		return INSTANCE;
	}

	/**
	 * List of node.js tern processes created.
	 */
	private final List<INodejsProcess> processes;

	/**
	 * The base dir where node.js Tern server is hosted.
	 */
	private File nodejsTernBaseDir;

	/**
	 * Listener added for each process created.
	 */
	private final INodejsProcessListener listener = new NodejsProcessAdapter() {

		@Override
		public void onStart(INodejsProcess server) {
			synchronized (NodejsProcessManager.this.processes) {
				// here the process is started, add it to the list of processes.
				NodejsProcessManager.this.processes.add(server);
			}
		}

		@Override
		public void onStop(INodejsProcess server) {
			synchronized (NodejsProcessManager.this.processes) {
				// here the process is stopped, remove it to the list of
				// processes.
				NodejsProcessManager.this.processes.remove(server);
			}
		}

	};

	public NodejsProcessManager() {
		this.processes = new ArrayList<INodejsProcess>();
	}

	/**
	 * Create the process with the given tern project base dir where
	 * .tern-project is hosted. In this case the node exe used is the installed
	 * node. The tern server node.js must be initialized before with
	 * {@link NodejsProcessManager#init(File)}.
	 * 
	 * @param projectDir
	 *            project base dir where .tern-project is hosted.
	 * @return an instance of the node tern process.
	 * @throws TernException
	 */
	public INodejsProcess create(File projectDir) throws TernException {
		return create(projectDir, null, nodejsTernBaseDir);
	}

	/**
	 * Create the process with the given tern project base dir where
	 * .tern-project is hosted and the given base dir of node.js exe. The tern
	 * server node.js must be initialized before with
	 * {@link NodejsProcessManager#init(File)}.
	 * 
	 * @param projectDir
	 *            project base dir where .tern-project is hosted.
	 * @param nodejsBaseDir
	 *            the base dir where the node.js exe is hosted.
	 * @return an instance of the node tern process.
	 * @throws TernException
	 */
	public INodejsProcess create(File projectDir, File nodejsBaseDir)
			throws TernException {
		return create(projectDir, nodejsBaseDir, nodejsTernBaseDir);
	}

	/**
	 * Create the process with the given tern project base dir where
	 * .tern-project is hosted and the given base dir of node.js exe.
	 * 
	 * @param projectDir
	 *            project base dir where .tern-project is hosted.
	 * @param nodejsBaseDir
	 *            the base dir where the node.js exe is hosted.
	 * @param nodejsTernBaseDir
	 *            the base dir where the tern node.js server is hosted.
	 * @return an instance of the node tern process.
	 * @throws TernException
	 */
	public INodejsProcess create(File projectDir, File nodejsBaseDir,
			File nodejsTernBaseDir) throws TernException {
		INodejsProcess process = new NodejsProcess(nodejsBaseDir,
				nodejsTernBaseDir, projectDir);
		process.addProcessListener(listener);
		return process;
	}

	/**
	 * Initialize the manager with the base dir where the tern node.js server is
	 * hosted.
	 * 
	 * @param nodejsTernBaseDir
	 */
	public void init(File nodejsTernBaseDir) {
		this.nodejsTernBaseDir = nodejsTernBaseDir;
	}

	/**
	 * Return the base dir where the tern node.js server is hosted.
	 * 
	 * @return
	 */
	public File getNodejsTernBaseDir() {
		return nodejsTernBaseDir;
	}

	/**
	 * Kill all node.js processes created by the manager.
	 */
	public void dispose() {
		synchronized (processes) {
			for (INodejsProcess server : processes) {
				try {
					server.kill();
				} catch (Throwable e) {
					e.printStackTrace();
				}
			}
			processes.clear();
		}
	}

}

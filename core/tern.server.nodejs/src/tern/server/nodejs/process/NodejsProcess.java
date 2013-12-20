/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.server.nodejs.process;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import tern.TernException;

/**
 * node.js process which start tern server with node.js
 */
public class NodejsProcess {

	private final File nodejsBaseDir;
	private final File nodejsTernFile;
	private final File projectDir;
	private Integer port;
	private boolean verbose;
	private Process process;
	private Thread outThread;
	private Thread errThread;

	private final List<NodejsProcessListener> listeners;

	/**
	 * Lock used to wait the start of the server to retrieve port in the getPort
	 * method.
	 */
	private final Object lock = new Object();

	private class StdOut implements Runnable {
		@Override
		public void run() {
			try {

				Integer port = null;

				String line = null;
				InputStream is = process.getInputStream();
				InputStreamReader isr = new InputStreamReader(is);
				BufferedReader br = new BufferedReader(isr);
				try {
					while ((line = br.readLine()) != null) {
						if (port == null) {
							if (line.startsWith("Listening on port ")) {
								port = Integer.parseInt(line.substring(
										"Listening on port ".length(),
										line.length()));
								setPort(port);

								synchronized (lock) {
									lock.notifyAll();
								}

								notifyStartProcess();
							}
						}
						notifyDataProcess(line);
					}
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

				if (process != null) {
					process.waitFor();
				}
				notifyStopProcess();
				kill();
			} catch (InterruptedException e) {
				Thread.currentThread().interrupt();
			}
		}
	};

	private class StdErr implements Runnable {
		@Override
		public void run() {
			String line = null;
			InputStream is = process.getErrorStream();
			InputStreamReader isr = new InputStreamReader(is);
			BufferedReader br = new BufferedReader(isr);
			try {
				while ((line = br.readLine()) != null) {
					notifyErrorProcess(line);
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	NodejsProcess(File nodejsTernBaseDir, File projectDir) {
		this(null, nodejsTernBaseDir, projectDir);
	}

	NodejsProcess(File nodejsBaseDir, File nodejsTernBaseDir, File projectDir) {
		this.nodejsBaseDir = nodejsBaseDir;
		this.nodejsTernFile = getNodejsTernFile(nodejsTernBaseDir);
		this.projectDir = projectDir;
		this.listeners = new ArrayList<NodejsProcessListener>();
	}

	private File getNodejsTernFile(File nodejsTernBaseDir) {
		return new File(nodejsTernBaseDir, "node_modules/tern/bin/tern");
	}

	public void start() throws IOException, InterruptedException {
		if (isStarted()) {
			throw new IOException("Nodejs tern Server is already started.");
		}
		List<String> commands = createCommands();
		ProcessBuilder builder = new ProcessBuilder(commands);
		// builder.redirectErrorStream(true);
		builder.directory(getProjectDir());
		this.process = builder.start();

		outThread = new Thread(new StdOut());
		outThread.setDaemon(true);
		outThread.start();

		errThread = new Thread(new StdErr());
		errThread.setDaemon(true);
		errThread.start();
	}

	protected List<String> createCommands() throws IOException {
		List<String> commands = new LinkedList<String>();
		if (nodejsBaseDir == null) {
			commands.add("node");
		} else {
			commands.add(new File(nodejsBaseDir.getPath(), "node").getPath());
		}
		commands.add(nodejsTernFile.getCanonicalPath());
		Integer port = getPort();
		if (port != null) {
			commands.add("--port");
			commands.add(port.toString());
		}
		if (isVerbose()) {
			commands.add("--verbose");
			commands.add("1");
		}
		return commands;
	}

	public void kill() {
		if (process != null) {
			process.destroy();
			process = null;
		}
		if (outThread != null) {
			outThread.interrupt();
			outThread = null;
		}
		if (errThread != null) {
			errThread.interrupt();
			errThread = null;
		}
	}

	public Integer getPort() {
		return port;
	}

	public int start(long timeout) throws InterruptedException, IOException,
			TernException {
		if (!isStarted()) {
			start();
		}
		synchronized (lock) {
			lock.wait(timeout);
		}
		if (port == null) {
			throw new TernException("Cannot start node process.");
		}
		return getPort();
	}

	public boolean isStarted() {
		return process != null;
	}

	public void setPort(Integer port) {
		this.port = port;
	}

	public void setVerbose(boolean verbose) {
		this.verbose = verbose;
	}

	public boolean isVerbose() {
		return verbose;
	}

	public File getProjectDir() {
		return projectDir;
	}

	public void join() throws InterruptedException {
		if (outThread != null) {
			outThread.join();
		}
	}

	public void addProcessListener(NodejsProcessListener listener) {
		synchronized (listeners) {
			listeners.add(listener);
		}
	}

	public void removeProcessListener(NodejsProcessListener listener) {
		synchronized (listeners) {
			listeners.remove(listener);
		}
	}

	private void notifyDataProcess(String line) {
		synchronized (listeners) {
			for (NodejsProcessListener listener : listeners) {
				listener.onData(this, line);
			}
		}
	}

	private void notifyStartProcess() {
		synchronized (listeners) {
			for (NodejsProcessListener listener : listeners) {
				listener.onStart(this);
			}
		}
	}

	private void notifyStopProcess() {
		synchronized (listeners) {
			for (NodejsProcessListener listener : listeners) {
				listener.onStop(this);
			}
		}
	}

	private void notifyErrorProcess(String line) {
		synchronized (listeners) {
			for (NodejsProcessListener listener : listeners) {
				listener.onError(NodejsProcess.this, line);
			}
		}
	}
}

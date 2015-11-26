/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - support for tern.js debugging
 */
package tern.server.nodejs.process.internal;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.List;

import tern.TernException;
import tern.server.nodejs.process.AbstractNodejsProcess;
import tern.server.nodejs.process.NodejsProcessException;

/**
 * node.js process which starts tern server with node.js
 */
public class NodejsProcess extends AbstractNodejsProcess {

	/**
	 * The node.js tern file.
	 */
	private final File nodejsTernFile;

	/**
	 * node.js process.
	 */
	private Process process;

	/**
	 * StdOut thread.
	 */
	private Thread outThread;

	/**
	 * StdErr thread.
	 */
	private Thread errThread;

	/**
	 * StdOut of the node.js process.
	 */
	private class StdOut implements Runnable {

		@Override
		public void run() {
			try {

				long startTime = System.nanoTime();
				// start the node.js process with tern.
				Integer port = null;
				String line = null;
				InputStream is = process.getInputStream();
				InputStreamReader isr = new InputStreamReader(is);
				BufferedReader br = new BufferedReader(isr);
				try {
					while ((line = br.readLine()) != null) {
						if (port == null) {
							// port was not getted, try to get it.
							if (line.startsWith("Listening on port ")) {
								port = Integer.parseInt(line.substring(
										"Listening on port ".length(),
										line.length()));

								// port is getted, notify that process is
								// started.
								setPort(port);

								synchronized (lock) {
									lock.notifyAll();
								}
								notifyStartProcess(startTime);
							}
						} else {
							// notify data
							notifyDataProcess(line);
						}
					}
				} catch (IOException e) {
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

	/**
	 * StdErr of the node.js process.
	 */
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

	/**
	 * Nodejs process constructor which uses the installed node.js.
	 * 
	 * @param nodejsTernBaseDir
	 *            the node.js tern base dir.
	 * @param projectDir
	 *            the project base dir where .tern-project is hosted.
	 * @throws TernException
	 */
	public NodejsProcess(File nodejsTernBaseDir, File projectDir)
			throws TernException {
		this(null, nodejsTernBaseDir, projectDir);
	}

	/**
	 * Nodejs process constructor.
	 * 
	 * @param nodejsBaseDir
	 *            the node.js base dir.
	 * @param nodejsTernBaseDir
	 *            the node.js tern base dir.
	 * @param projectDir
	 *            the project base dir where .tern-project is hosted.
	 * @throws TernException
	 */
	public NodejsProcess(File nodejsBaseDir, File nodejsTernBaseDir,
			File projectDir) throws TernException {
		super(nodejsBaseDir, projectDir);
		this.nodejsTernFile = getNodejsTernFile(nodejsTernBaseDir);
	}

	/**
	 * Returns the node.js tern file.
	 * 
	 * @param nodejsTernBaseDir
	 *            tern base dir.
	 * @return the node.js tern file.
	 * @throws TernException
	 */
	private File getNodejsTernFile(File nodejsTernBaseDir) throws TernException {
		if (nodejsTernBaseDir == null) {
			throw new TernException(
					"You must initialize the base dir of the tern node.js server.");
		}
		File ternServerFile = new File(nodejsTernBaseDir, "bin/tern");
		if (!ternServerFile.exists()) {
			try {
				throw new TernException("Cannot find tern node.js server at "
						+ ternServerFile.getCanonicalPath());
			} catch (IOException e) {
				throw new TernException("Cannot find tern node.js server at "
						+ ternServerFile.getPath());
			}
		}
		return ternServerFile;
	}

	/**
	 * Create process commands to start tern with node.js
	 * 
	 * @return
	 * @throws IOException
	 */
	private List<String> createCommands() {
		List<String> commands = new LinkedList<String>();
		if (nodejsBaseDir == null) {
			// for osx, path of node.js should be setted?
			if (new File("/usr/local/bin/node").exists()) {
				commands.add("/usr/local/bin/node");
			}
			if (new File("/opt/local/bin/node").exists()) {
				commands.add("/opt/local/bin/node");
			} else {
				commands.add("node");
			}
		} else {
			commands.add(nodejsBaseDir.getPath());
		}
		try {
			commands.add(nodejsTernFile.getCanonicalPath());
		} catch (IOException e) {
			commands.add(nodejsTernFile.getPath());
		}
		commands.addAll(createTernServerArgs());
		return commands;
	}

	/**
	 * Start process.
	 * 
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public void start() throws NodejsProcessException {
		if (isStarted()) {
			notifyErrorProcess("Nodejs tern Server is already started.");
			throw new NodejsProcessException(
					"Nodejs tern Server is already started.");
		}

		try {
			List<String> commands = createCommands();
			ProcessBuilder builder = new ProcessBuilder(commands);
			// builder.redirectErrorStream(true);
			builder.directory(getProjectDir());
			notifyCreateProcess(commands, projectDir);

			this.process = builder.start();

			outThread = new Thread(new StdOut());
			outThread.setDaemon(true);
			outThread.start();

			errThread = new Thread(new StdErr());
			errThread.setDaemon(true);
			errThread.start();

		} catch (Throwable e) {
			notifyErrorProcess(e.getMessage());
			notifyErrorProcess("");
			throw new NodejsProcessException(e);
		}
	}

	/**
	 * Return true id process is started and false otherwise.
	 * 
	 * @return
	 */
	@Override
	public boolean isStarted() {
		return process != null;
	}

	/**
	 * Kill the process.
	 */
	@Override
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

	/**
	 * Joint to the stdout thread;
	 * 
	 * @throws InterruptedException
	 */
	public void join() throws InterruptedException {
		if (outThread != null) {
			outThread.join();
		}
	}

}

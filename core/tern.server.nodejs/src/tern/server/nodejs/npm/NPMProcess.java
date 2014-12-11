package tern.server.nodejs.npm;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import tern.TernException;
import tern.server.ITernModule;
import tern.server.nodejs.process.NodejsProcessException;

public class NPMProcess {

	/**
	 * The node.js base dir.
	 */
	private final String npmPath;

	/**
	 * The project dir where .tern-project is hosted.
	 */
	private final File projectDir;

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

	private boolean hasError;

	/**
	 * Process listeners.
	 */
	private final List<INPMProcessListener> listeners;

	public NPMProcess(String npmPath, File projectDir) throws TernException {
		this.npmPath = npmPath;
		this.projectDir = projectDir;
		this.listeners = new ArrayList<INPMProcessListener>();
		this.hasError = false;
	}

	/**
	 * Start process.
	 * 
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public void install(ITernModule module) throws NodejsProcessException {
		if (isStarted()) {
			notifyErrorProcess("Nodejs tern Server is already started.");
			throw new NodejsProcessException(
					"Nodejs tern Server is already started.");
		}

		try {
			List<String> commands = createCommands(module);
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
	 * Create process commands to start tern with node.js
	 * 
	 * @return
	 * @throws IOException
	 */
	/*protected List<String> createCommands() {
		List<String> commands = new LinkedList<String>();
		if (nodejsBaseDir == null) {
			// for osx, path of node.js should be setted?
			if (new File("/usr/local/bin/node").exists()) {
				commands.add("/usr/local/bin/node");
			}
			if (new File("/opt/local/bin/node").exists()) {
				commands.add("/opt/local/bin/node");
			} else {
				commands.add("npm");
			}
		} else {
			commands.add(nodejsBaseDir.getPath());
		}
		return commands;
	}*/
	
	private List<String> createCommands(ITernModule module) {		
		List<String> cmds = new ArrayList<String>();
		cmds.add(npmPath);
		cmds.add("install");
		cmds.add(new StringBuilder("tern-").append(module.getName()).toString());
		return cmds;
	}

	/**
	 * Return the project dir of the tern repository;
	 * 
	 * @return
	 */
	public File getProjectDir() {
		return projectDir;
	}

	/**
	 * StdOut of the node.js process.
	 */
	private class StdOut implements Runnable {

		@Override
		public void run() {
			try {

				long startTime = System.nanoTime();
				Integer port = null;
				String line = null;
				InputStream is = process.getInputStream();
				InputStreamReader isr = new InputStreamReader(is);
				BufferedReader br = new BufferedReader(isr);
				try {
					while ((line = br.readLine()) != null) {
						/*if (port == null) {
							// port was not getted, try to get it.
							if (line.startsWith("Listening on port ")) {
								port = Integer.parseInt(line.substring(
										"Listening on port ".length(),
										line.length()));

								// port is getted, notify that process is
								// started.
								// setPort(port);

								//synchronized (lock) {
								//	lock.notifyAll();
								//}
								notifyStartProcess(startTime);
							}
						} else {*/
							// notify data
							notifyDataProcess(line);
						//}
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
	 * Return true id process is started and false otherwise.
	 * 
	 * @return
	 */
	public boolean isStarted() {
		return process != null;
	}

	/**
	 * Kill the process.
	 */
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

	public void addProcessListener(INPMProcessListener listener) {
		synchronized (listeners) {
			listeners.add(listener);
		}
	}

	/**
	 * Remove the given process listener.
	 * 
	 * @param listener
	 */
	public void removeProcessListener(INPMProcessListener listener) {
		synchronized (listeners) {
			listeners.remove(listener);
		}
	}

	/**
	 * Notify start process.
	 */
	private void notifyCreateProcess(List<String> commands, File projectDir) {
		synchronized (listeners) {
			for (INPMProcessListener listener : listeners) {
				listener.onCreate(this, commands, projectDir);
			}
		}
	}

	/**
	 * Notify start process.
	 * 
	 * @param startTime
	 *            time when node.js process is started.
	 */
	private void notifyStartProcess(long startTime) {
		// this.elapsedSartTime =
		// NodejsTernHelper.getElapsedTimeInMs(startTime);
		synchronized (listeners) {
			for (INPMProcessListener listener : listeners) {
				listener.onStart(this);
			}
		}
	}

	/**
	 * Notify stop process.
	 */
	private void notifyStopProcess() {
		synchronized (listeners) {
			for (INPMProcessListener listener : listeners) {
				listener.onStop(this);
			}
		}
	}

	/**
	 * Notify data process.
	 * 
	 * @param line
	 */
	private void notifyDataProcess(String line) {
		synchronized (listeners) {
			for (INPMProcessListener listener : listeners) {
				listener.onData(this, line);
			}
		}
	}

	/**
	 * Notify error process.
	 */
	private void notifyErrorProcess(String line) {
		this.hasError = true;
		synchronized (listeners) {
			for (INPMProcessListener listener : listeners) {
				listener.onError(NPMProcess.this, line);
			}
		}
	}
}

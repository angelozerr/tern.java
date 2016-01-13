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
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import tern.TernException;
import tern.server.nodejs.NodejsTernHelper;

/**
 * node.js process which starts tern server with node.js
 */
public abstract class AbstractNodejsProcess implements INodejsProcess {

	/**
	 * The node.js base dir.
	 */
	protected final File nodejsBaseDir;

	/**
	 * The project dir where .tern-project is hosted.
	 */
	protected final File projectDir;

	private INodejsLaunchConfiguration launchConfiguration;

	/**
	 * Port of the node.js server.
	 */
	private Integer port;

	/**
	 * Elapsed time to start node.js process.
	 */
	private long elapsedSartTime = 0;

	/**
	 * Process listeners.
	 */
	protected final List<INodejsProcessListener> listeners;

	/**
	 * Lock used to wait the start of the server to retrieve port in the getPort
	 * method.
	 */
	protected final Object lock = new Object();

	private boolean hasError;

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
	public AbstractNodejsProcess(File nodejsBaseDir, File projectDir) throws TernException {
		this.projectDir = projectDir;
		this.nodejsBaseDir = nodejsBaseDir;
		this.listeners = new ArrayList<INodejsProcessListener>();
		this.hasError = false;
	}

	/**
	 * Start the process and returns the port of the started process.
	 * 
	 * @param timeout
	 *            to wait until the process start to retrieve the port to
	 *            return.
	 * @return
	 * @throws InterruptedException
	 * @throws IOException
	 * @throws TernException
	 */
	public int start(long timeout, int testNumber) throws NodejsProcessException, InterruptedException {
		if (!isStarted()) {
			start();
		}
		waitOnStartNodejs(timeout, testNumber);
		return getPort();
	}

	/**
	 * Wait until node.js process is started.
	 * 
	 * @param timeout
	 *            to wait until the process start to retrieve the port to
	 *            return.
	 * @param testNumber
	 *            number of test to do to wait until timeout ms.
	 * @throws InterruptedException
	 *             throw this exception if node.js process cannot be started.
	 * @throws NodejsProcessException
	 *             throw this exception if node.js process cannot be started.
	 */
	private void waitOnStartNodejs(long timeout, int testNumber) throws InterruptedException, NodejsProcessException {
		if (port == null) {
			// node.js process is not started, loop for test number and wait on
			// timeout.
			if (!hasError) {
				for (int i = 0; i < testNumber; i++) {
					synchronized (lock) {
						// wait until timeout.
						lock.wait(timeout);
						if (port != null || hasError) {
							// here node.js is started, stop teh wait.
							break;
						}
					}
				}
			}
			if (port == null) {
				// here node.js cannot be started.
				throw new NodejsProcessException("Cannot start node process.");
			}
		}
	}

	/**
	 * Return the node.js port and null if not started.
	 * 
	 * @return
	 */
	public Integer getPort() {
		return port;
	}

	/**
	 * Set the port when process is started;
	 * 
	 * @param port
	 */
	protected void setPort(Integer port) {
		this.port = port;
	}

	/**
	 * return the project dir where .tern-project is hosted.
	 * 
	 * @return
	 */
	public File getProjectDir() {
		return projectDir;
	}

	/**
	 * Returns the elapsed time to start node.js process.
	 * 
	 * @return
	 */
	public long getElapsedStartTime() {
		return elapsedSartTime;
	}

	/**
	 * Add the given process listener.
	 * 
	 * @param listener
	 */
	public void addProcessListener(INodejsProcessListener listener) {
		synchronized (listeners) {
			listeners.add(listener);
		}
	}

	/**
	 * Remove the given process listener.
	 * 
	 * @param listener
	 */
	public void removeProcessListener(INodejsProcessListener listener) {
		synchronized (listeners) {
			listeners.remove(listener);
		}
	}

	/**
	 * Notify start process.
	 */
	protected void notifyCreateProcess(List<String> commands, File projectDir) {
		synchronized (listeners) {
			for (INodejsProcessListener listener : listeners) {
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
	protected void notifyStartProcess(long startTime) {
		this.elapsedSartTime = NodejsTernHelper.getElapsedTimeInMs(startTime);
		synchronized (listeners) {
			for (INodejsProcessListener listener : listeners) {
				listener.onStart(this);
			}
		}
	}

	/**
	 * Notify stop process.
	 */
	protected void notifyStopProcess() {
		synchronized (listeners) {
			for (INodejsProcessListener listener : listeners) {
				listener.onStop(this);
			}
		}
	}

	/**
	 * Notify data process.
	 * 
	 * @param line
	 */
	protected void notifyDataProcess(String line) {
		synchronized (listeners) {
			for (INodejsProcessListener listener : listeners) {
				listener.onData(this, line);
			}
		}
	}

	/**
	 * Notify error process.
	 */
	protected void notifyErrorProcess(String line) {
		this.hasError = true;
		synchronized (listeners) {
			for (INodejsProcessListener listener : listeners) {
				listener.onError(AbstractNodejsProcess.this, line);
			}
		}
	}

	protected List<String> createNodejsArgs() throws NodejsProcessException {
		return getLaunchConfiguration().createNodeArgs();
	}

	protected INodejsLaunchConfiguration getLaunchConfiguration() throws NodejsProcessException {
		if (launchConfiguration == null) {
			throw new NodejsProcessException("Launch configuration cannot be null.");
		}
		return launchConfiguration;
	}

	@Override
	public void setLaunchConfiguration(INodejsLaunchConfiguration launchConfiguration) {
		this.launchConfiguration = launchConfiguration;
	}
}

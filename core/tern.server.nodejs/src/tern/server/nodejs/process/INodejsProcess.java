/**
 *  Copyright (c) 2015 Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.server.nodejs.process;

import java.io.File;
import java.io.IOException;

import tern.TernException;

public interface INodejsProcess {

	/**
	 * Start process.
	 * 
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public void start() throws NodejsProcessException;

	/**
	 * Start the process and returns the port of the started process.
	 * 
	 * @param timeout
	 *            to wait until the process start to retrieve the port to
	 *            return.
	 * @return
	 * @throws NodejsProcessException
	 * @throws InterruptedException
	 * @throws IOException
	 * @throws TernException
	 */
	public int start(long timeout, int testNumber)
			throws NodejsProcessException, InterruptedException;

	/**
	 * Return true id process is started and false otherwise.
	 * 
	 * @return
	 */
	public boolean isStarted();

	/**
	 * Kill the process.
	 */
	public void kill();

	/**
	 * Return the node.js port and null if not started.
	 * 
	 * @return
	 */
	public Integer getPort();

	/**
	 * return the project dir where .tern-project is hosted.
	 * 
	 * @return
	 */
	public File getProjectDir();

	/**
	 * Returns the elapsed time to start node.js process.
	 * 
	 * @return
	 */
	public long getElapsedStartTime();

	/**
	 * Joint to the stdout thread;
	 * 
	 * @throws InterruptedException
	 */
	public void join() throws InterruptedException;

	/**
	 * Add the given process listener.
	 * 
	 * @param listener
	 */
	public void addProcessListener(INodejsProcessListener listener);

	/**
	 * Remove the given process listener.
	 * 
	 * @param listener
	 */
	public void removeProcessListener(INodejsProcessListener listener);

	void setLaunchConfiguration(INodejsLaunchConfiguration argsProvider);
}

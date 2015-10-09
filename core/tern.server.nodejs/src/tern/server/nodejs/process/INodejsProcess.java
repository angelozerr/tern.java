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
	 * Set the verbose.
	 * 
	 * @param verbose
	 */
	public void setVerbose(boolean verbose);

	/**
	 * Returns true if tern is verbose and false otherwise.
	 * 
	 * @return
	 */
	public boolean isVerbose();

	/**
	 * Set true if tern server server won't write a .tern-port file and false
	 * otherwise.
	 * 
	 * @param noPortFile
	 */
	public void setNoPortFile(boolean noPortFile);

	/**
	 * return true if tern server server won't write a .tern-port file and false
	 * otherwise.
	 * 
	 * @return
	 */
	public boolean isNoPortFile();

	/**
	 * Set false if the server will shut itself down after five minutes of
	 * inactivity and true otherwise.
	 * 
	 * @param persistent
	 */
	public void setPersistent(boolean persistent);

	/**
	 * Returns false if the server will shut itself down after five minutes of
	 * inactivity and true otherwise.
	 * 
	 * @return
	 */
	public boolean isPersistent();

	/**
	 * Set true if tern plugins can be loaded from the project root and false
	 * otherwise.
	 * 
	 * @see https://github.com/marijnh/tern/pull/394
	 */
	public void setLoadingLocalPlugins(boolean loadingLocalPlugins);

	/**
	 * Returns true if tern plugins can be loaded from the project root and
	 * false otherwise.
	 * 
	 * @return true if tern plugins can be loaded from the project root and
	 *         false otherwise.
	 * @see https://github.com/marijnh/tern/pull/394
	 */
	public boolean isLoadingLocalPlugins();

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

}

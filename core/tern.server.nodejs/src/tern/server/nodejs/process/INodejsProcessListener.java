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

/**
 * Listener for node.js process.
 * 
 * @author azerr
 * 
 */
public interface INodejsProcessListener {

	/**
	 * Callback called when the given node.js process start.
	 * 
	 * @param process
	 */
	void onStart(NodejsProcess process);

	/**
	 * Callback called when the given node.js process send data.
	 * 
	 * @param process
	 * @param line
	 *            the data.
	 */
	void onData(NodejsProcess process, String line);

	/**
	 * Callback called when the given node.js process stop.
	 * 
	 * @param process
	 */
	void onStop(NodejsProcess process);

	/**
	 * Callback called when the given node.js throws error.
	 * 
	 * @param process
	 * @param line
	 *            the error.
	 */
	void onError(NodejsProcess process, String line);

}

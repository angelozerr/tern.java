/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.core;

import tern.server.ITernServer;

/**
 * Connector used to connect tern server to the eclipse console.
 * 
 */
public interface ITernConsoleConnector {

	/**
	 * Returns true if this connector can be applyied to the given tern server
	 * instance and false otherwise.
	 * 
	 * @param ternServer
	 * @return
	 */
	boolean isAdaptFor(ITernServer ternServer);

	/**
	 * Connect the give tern server to the eclipse tern console.
	 * 
	 * @param ternServer
	 */
	void connectToConsole(ITernServer ternServer, IIDETernProject project);

	/**
	 * Disconnect the give tern server to the eclipse tern console.
	 * 
	 * @param ternServer
	 */
	void disconnectToConsole(ITernServer ternServer, IIDETernProject project);

}

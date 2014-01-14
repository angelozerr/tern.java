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
	void connectToConsole(ITernServer ternServer);

	/**
	 * Disconnect the give tern server to the eclipse tern console.
	 * 
	 * @param ternServer
	 */
	void disconnectToConsole(ITernServer ternServer);

}

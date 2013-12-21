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
 * Print the each event of node.js process {@link NodejsProcess} in the
 * {@link System#out} and {@link System#err}.
 */
public class PrintNodejsProcessListener extends NodejsProcessAdapter {

	private static final INodejsProcessListener INSTANCE = new PrintNodejsProcessListener();

	public static INodejsProcessListener getInstance() {
		return INSTANCE;
	}

	@Override
	public void onStart(NodejsProcess server) {
		System.out.println("Server started at " + server.getPort());
	}

	@Override
	public void onData(NodejsProcess server, String line) {
		System.out.println(line);
	}

	@Override
	public void onStop(NodejsProcess server) {
		System.out.println("Server stopped");
	}

	@Override
	public void onError(NodejsProcess process, String line) {
		System.err.println(line);
	}
}

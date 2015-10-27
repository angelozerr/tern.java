/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.nodejs.process;

import java.io.File;
import java.io.IOException;
import java.util.List;

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
	public void onCreate(INodejsProcess process, List<String> commands,
			File projectDir) {
		StringBuilder commandsAsString = new StringBuilder();
		int i = 0;
		for (String cmd : commands) {
			if (i > 0) {
				commandsAsString.append(" ");
			}
			if (i <= 1) {
				commandsAsString.append("\"");
			}
			commandsAsString.append(cmd);
			if (i <= 1) {
				commandsAsString.append("\"");
			}
			i++;
		}
		System.out.println("Nodejs Commnand: " + commandsAsString.toString());
		String path = projectDir.getPath();
		try {
			path = projectDir.getCanonicalPath();
		} catch (IOException e) {
		}
		System.out.println("Project dir: " + path);
	}

	@Override
	public void onStart(INodejsProcess process) {
		System.out.println("Server started at " + process.getPort() + " on "
				+ process.getElapsedStartTime());
	}

	@Override
	public void onData(INodejsProcess process, String line) {
		System.out.println(line);
	}

	@Override
	public void onStop(INodejsProcess process) {
		System.out.println("Server stopped at " + process.getPort());
	}

	@Override
	public void onError(INodejsProcess process, String line) {
		System.err.println(line);
	}
}

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
package tern.eclipse.ide.tools.internal.ui.console;

import org.eclipse.ui.console.ConsolePlugin;
import org.eclipse.ui.console.IConsole;
import org.eclipse.ui.console.IConsoleManager;

import tern.eclipse.ide.ui.console.LineType;

public class TernRepositoryConsoleHelper {

	public static void doAppendLine(final LineType lineType, final String line) {
		TernRepositoryConsole console = TernRepositoryConsole.getConsole();
		showConsole(console);
		console.doAppendLine(lineType, line);
	}

	public static void showConsole(TernRepositoryConsole console) {
		if (console != null) {
			IConsoleManager manager = ConsolePlugin.getDefault()
					.getConsoleManager();
			IConsole[] existing = manager.getConsoles();
			boolean exists = false;
			for (int i = 0; i < existing.length; i++) {
				if (console == existing[i]) {
					exists = true;
				}
			}
			if (!exists) {
				manager.addConsoles(new IConsole[] { console });
			}
			manager.showConsoleView(console);
		}
	}

	public static void closeConsole(TernRepositoryConsole console) {
		IConsoleManager manager = ConsolePlugin.getDefault()
				.getConsoleManager();
		if (console != null) {
			manager.removeConsoles(new IConsole[] { console });
			// ConsolePlugin.getDefault().getConsoleManager()
			// .addConsoleListener(console.new MyLifecycle());
		}
	}

}
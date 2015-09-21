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
package tern.eclipse.ide.server.nodejs.core;

import org.eclipse.core.runtime.Platform;

import tern.OS;
import tern.server.nodejs.process.NPMProcessHelper;
import tern.server.nodejs.process.NodejsProcessHelper;

/**
 * IDE node.js process helper.
 */
public class IDENodejsProcessHelper {

	private static final OS os;

	static {
		if (Platform.getOS().startsWith("win")) {
			os = OS.Windows;
		} else if (Platform.getOS().equals(Platform.OS_MACOSX)) {
			os = OS.MacOS;
		} else {
			os = OS.Linux;
		}
	}

	public static String getNodejsPath() {
		return NodejsProcessHelper.getNodejsPath(os);
	}

	public static String[] getDefaultNodejsPaths() {
		return NodejsProcessHelper.getDefaultNodejsPaths(os);
	}

	public static String getNPMPath() {
		return NPMProcessHelper.getNPMPath(os);
	}

	public static String[] getDefaultNPMPaths() {
		return NPMProcessHelper.getDefaultNPMPaths(os);
	}

	public static OS getOs() {
		return os;
	}
}

/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
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
import java.util.ArrayList;
import java.util.List;

import tern.OS;

/**
 * NPM path helper.
 *
 */
public class NPMProcessHelper {

	private static final String[] WINDOWS_NODE_PATHS = new String[] {
			"C:/Program Files/nodejs/npm.cmd".replace('/', File.separatorChar),
			"C:/Program Files (x86)/nodejs/npm.cmd".replace('/',
					File.separatorChar), "npm.cmd" };

	private static final String[] MACOS_NODE_PATHS = new String[] {
			"/usr/local/bin/npm", "/opt/local/bin/npm", "npm" };

	private static final String[] LINUX_NODE_PATHS = new String[] {
			"/usr/local/bin/npm", "npm" };

	private NPMProcessHelper() {
	}

	public static String getNPMPath(OS os) {
		String path = getDefaultNPMPath(os);
		if (path != null) {
			return path;
		}
		File nodeFile = findNPM(os);
		if (nodeFile != null) {
			return nodeFile.getAbsolutePath();
		}
		return "npm";
	}

	public static String getDefaultNPMPath(OS os) {
		String[] paths = getDefaultNPMPaths(os);
		String path = null;
		for (int i = 0; i < paths.length; i++) {
			path = paths[i];
			if (new File(path).exists()) {
				return path;
			}
		}
		return null;
	}

	public static String[] getDefaultNPMPaths(OS os) {
		switch (os) {
		case Windows:
			return WINDOWS_NODE_PATHS;
		case MacOS:
			return MACOS_NODE_PATHS;
		default:
			return LINUX_NODE_PATHS;
		}
	}

	public static File findNPM(OS os) {
		String nodeFileName = getNodeFileName(os);
		String path = System.getenv("PATH");
		String[] paths = path.split("" + File.pathSeparatorChar, 0);
		List<String> directories = new ArrayList<String>();
		for (String p : paths) {
			directories.add(p);
		}

		// ensure /usr/local/bin is included for OS X
		if (os == OS.MacOS) {
			directories.add("/usr/local/bin");
		}

		// search for Node.js in the PATH directories
		for (String directory : directories) {
			File nodeFile = new File(directory, nodeFileName);

			if (nodeFile.exists()) {
				return nodeFile;
			}
		}

		return null;
	}

	private static String getNodeFileName(OS os) {
		if (os == OS.Windows) {
			return "npm.cmd";
		}
		return "npm";
	}

}

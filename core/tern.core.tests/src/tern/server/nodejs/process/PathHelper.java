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
package tern.server.nodejs.process;

import java.io.File;
import java.io.IOException;

import tern.utils.ZipUtils;

public class PathHelper {

	/**
	 * Returns nodejs base dir switch OS.
	 *
	 * @return
	 */
	public static File getNodejsBasedir() {
		
		/*
		 * String s = "name: " + System.getProperty ("os.name"); s +=
		 * ", version: " + System.getProperty ("os.version"); s += ", arch: " +
		 * System.getProperty ("os.arch"); System.out.println ("OS=" + s);
		 */
		String os = System.getProperty("osgi.os");
		System.out.println("os " + os);
		String arch = System.getProperty("osgi.arch");
		System.out.println("arch " + arch);
		String ws = System.getProperty("osgi.ws");
		System.out.println("ws " + ws);

		if (os == null && arch == null && ws == null) {
			// JUnit are not executed with OSGi, set it for windows.
			os = "win32";
			ws = "win32";
			arch = "x86";
		}
		
		unZipIfNecessary(os,ws,arch);
		
		File file;
		// TODO : manage the patch switch OS.
		// no "bin" subfolder for windows...
		if ("win32".equals(os)) {
			file = new File(
					"../../eclipse/embed/tern.eclipse.ide.server.nodejs.embed." + os
							+ "." + ws + "." + arch + "/node-v0.10.22-" + os
							+ "-" + arch + "/node");

		} else {
			// Linux, mac...
			file = new File(
					"../../eclipse/embed/tern.eclipse.ide.server.nodejs.embed." + os
							+ "." + ws + "." + arch + "/node-v0.10.22-" + os
							+ "-" + arch + "/bin/node");
		}

		System.out.println("file path " + file.getAbsolutePath());
		System.out.println("file path exists ? " + file.exists());
		return file;
	}

	private static void unZipIfNecessary(String os, String ws, String arch) {
		String folderName = "../../eclipse/embed/tern.eclipse.ide.server.nodejs.embed."
				+ os + "." + ws + "." + arch + "/node-v0.10.22-" + os
				+ "-" + arch;
		File file = new File(folderName);
		if (!file.exists()) {
			
			File zipFile = new File(folderName+".zip");
			try {
				ZipUtils.extract(zipFile,zipFile.getParentFile());
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}

	/**
	 * Return tern base dir.
	 *
	 * @return
	 */
	public static File getNodejsTernBaseDir() {

		return new File("../ternjs/node_modules/tern");
	}
}

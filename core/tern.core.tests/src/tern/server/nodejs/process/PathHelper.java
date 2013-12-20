package tern.server.nodejs.process;

import java.io.File;

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

		// TODO : manage the patch switch OS.
		return new File(
				"../../eclipse/tern.eclipse.ide.server.nodejs.embed.win32.win32.x86/nodejs/node-v0.10.22-win32-x86");
	}

	/**
	 * Return tern base dir.
	 * 
	 * @return
	 */
	public static File getNodejsTernBaseDir() {
		return new File("../tern.server.nodejs");
	}
}

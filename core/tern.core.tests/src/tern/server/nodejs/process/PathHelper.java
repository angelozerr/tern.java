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
		String os =System.getProperty ("osgi.os");
		System.out.println("os "+os);
		String arch=System.getProperty ("osgi.arch");
		System.out.println("arch "+arch);
		String ws =System.getProperty ("osgi.ws");
		System.out.println("ws "+ws);
		//System.out.println(System.getProperties());
		
		// TODO : manage the patch switch OS.
		File file= new File(
				"../../eclipse/tern.eclipse.ide.server.nodejs.embed."+os+"."+ws+"."+arch+"/nodejs/node-v0.10.22-"+os+"-"+arch);
		
		System.out.println("file path "+file.getAbsolutePath());
		System.out.println("file path exists ? "+file.exists());
		return file;
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

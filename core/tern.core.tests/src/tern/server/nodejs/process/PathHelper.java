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
		
		/*os = "win32";
		ws = "win32";
		arch = "x86";*/
		
		File file;
		// TODO : manage the patch switch OS.
		//no "bin" subfolder for windows...
		if("win32".equals(os)){
			 file= new File(
						"../../eclipse/tern.eclipse.ide.server.nodejs.embed."+os+"."+ws+"."+arch+"/nodejs/node-v0.10.22-"+os+"-"+arch);
					
		} else {
			 //Linux, mac...
			 file= new File(
						"../../eclipse/tern.eclipse.ide.server.nodejs.embed."+os+"."+ws+"."+arch+"/nodejs/node-v0.10.22-"+os+"-"+arch+"/bin");
		}
		
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

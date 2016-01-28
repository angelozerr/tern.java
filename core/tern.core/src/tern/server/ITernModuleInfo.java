package tern.server;

public interface ITernModuleInfo {

	/**
	 * Return the def or plugin name.
	 * 
	 * @return
	 */
	String getName();
	
	/**
	 * Returns the type of the def or plugin.
	 * 
	 * @return the type of the def or plugin.
	 */
	String getType();
	
	/**
	 * Returns the version of the def or plugin.
	 * 
	 * @return the version of the def or plugin.
	 */
	String getVersion();
	
}

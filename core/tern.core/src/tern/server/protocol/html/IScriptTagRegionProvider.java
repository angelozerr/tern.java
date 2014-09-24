package tern.server.protocol.html;

public interface IScriptTagRegionProvider<T> {

	/**
	 * Returns the list of script tags to use if file is an HTML file and null
	 * otherwise.
	 * 
	 * @param file
	 *            the generic file.
	 * @return the list of script tags to use if file is an HTML file and null
	 *         otherwise.
	 */
	ScriptTagRegion[] getScriptTags(T file);
	
}

package tern;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import tern.server.protocol.TernDoc;
import tern.utils.DOMUtils;
import tern.utils.StringUtils;

/**
 * Tern file manager
 * 
 * @param <T>
 *            the generic file.
 */
public abstract class TernFileManager<T> {

	private static final String SCRIPT_ELT = "script";
	private static final String HTTP_ATTR = "http";
	private static final String SRC_ATTR = "src";

	/**
	 * List of JS files which are already parsed by the tern server.
	 */
	private final List<String> indexedFiles;

	public TernFileManager() {
		this.indexedFiles = new ArrayList<String>();
	}

	/**
	 * Update tern doc files from the scripts node list declared in the given
	 * HTML document domNode.
	 * 
	 * @param domNode
	 * @param domFile
	 * @param doc
	 * @param names
	 * @throws IOException
	 */
	public void updateFiles(Node domNode, T domFile, TernDoc doc, List names)
			throws IOException {

		int localScriptNb = 0;
		// loop for each script elements (how to improve that?)
		Element scriptElt = null;
		String src = null;
		NodeList scripts = domNode.getOwnerDocument().getElementsByTagName(
				SCRIPT_ELT);
		for (int i = 0; i < scripts.getLength(); i++) {
			scriptElt = (Element) scripts.item(i);
			src = scriptElt.getAttribute(SRC_ATTR);
			if (StringUtils.isEmpty(src)) {
				// JS script declared in the HTML document.
				updateFiles(domFile, scriptElt, localScriptNb++, doc, names);

			} else {
				if (src.startsWith(HTTP_ATTR)) {
					// JS script declared in http://
				} else {
					// JS script declared in an external file.
					T relativeFile = getRelativeFile(domFile, src);
					if (relativeFile != null) {
						updateFiles(relativeFile, doc, names);
					}
				}
			}
		}
	}

	public void updateFiles(T file, TernDoc doc, List names) throws IOException {
		String name = getFileName(file);
		if (!isIndexedFile(name)) {
			String text = getFileContent(file);
			addFile(doc, name, text);
		}
		names.add(name);
	}

	public void updateFiles(T domFile, Element scriptElt, int localScriptNb,
			TernDoc doc, List names) {
		String name = getFileName(domFile) + "#" + (localScriptNb);
		if (!isIndexedFile(name)) {
			String text = DOMUtils.getTextNodeAsString(scriptElt);
			addFile(doc, name, text);
		}
		names.add(name);
	}

	protected void addFile(TernDoc doc, String name, String text) {
		doc.addFile(name, text, null);
		addIndexedFile(name);
	}

	protected void addIndexedFile(String name) {
		indexedFiles.add(name);
	}

	protected void removeIndexedFile(String name) {
		indexedFiles.remove(name);
	}

	protected boolean isIndexedFile(String name) {
		return indexedFiles.contains(name);
	}

	public void cleanFiles() {
		indexedFiles.clear();
	}

	public abstract String getFileName(T file);

	public abstract String getFileContent(T file) throws IOException;

	public abstract T getRelativeFile(T file, String path);

}

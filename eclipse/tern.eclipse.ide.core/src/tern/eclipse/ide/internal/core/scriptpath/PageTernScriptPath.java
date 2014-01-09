package tern.eclipse.ide.internal.core.scriptpath;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import tern.eclipse.ide.core.dom.DOMProviderHelper;
import tern.eclipse.ide.core.scriptpath.AbstractTernScriptPath;
import tern.eclipse.ide.core.scriptpath.IPageScriptPath;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath.ScriptPathsType;
import tern.utils.StringUtils;

public class PageTernScriptPath extends AbstractTernScriptPath implements
		IPageScriptPath {

	private static final String SCRIPT_ELT = "script";
	private static final String HTTP_ATTR = "http";
	private static final String SRC_ATTR = "src";

	public PageTernScriptPath(IFile resource) {
		super(resource, ScriptPathsType.PAGE);
	}

	@Override
	public Collection<String> getScriptResources() {
		List<String> resources = new ArrayList<String>();
		Document document = getDocument();
		if (document != null) {
			int localScriptNb = 0;
			// loop for each script elements (how to improve that?)
			Element scriptElt = null;
			String src = null;
			NodeList scripts = document.getElementsByTagName(SCRIPT_ELT);
			for (int i = 0; i < scripts.getLength(); i++) {
				scriptElt = (Element) scripts.item(i);
				src = scriptElt.getAttribute(SRC_ATTR);
				if (StringUtils.isEmpty(src)) {
					// JS script declared in the HTML document.
					// updateFiles(domFile, scriptElt, localScriptNb++, doc,
					// names);
					resources.add("script#" + localScriptNb++);
				} else {
					if (src.startsWith(HTTP_ATTR)) {
						// JS script declared in http://
						resources.add(src);
					} else {
						// JS script declared in an external file.
						// T relativeFile = getRelativeFile(domFile, src);
						// if (relativeFile != null) {
						// updateFiles(relativeFile, doc, names);
						// }
						resources.add(src);
					}
				}
			}
		}
		return resources;
	}

	@Override
	public Document getDocument() {
		return DOMProviderHelper.getProvider().getDocument(
				(IFile) getResource());
	}

}

/**
 *  Copyright (c) 2013-20A4 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.core.scriptpath;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import tern.TernFileManager;
import tern.eclipse.ide.core.dom.DOMProviderHelper;
import tern.eclipse.ide.core.scriptpath.IScriptResource;
import tern.server.protocol.TernDoc;
import tern.utils.StringUtils;

/**
 * HTML/JSP page script path. This script path implementation gives the
 * capability to select an HTML/JSP file with "Add File" of the Tern
 * "Script Path" property page project and retrieve list of JS files declared in
 * the DOM "script" elements.
 * 
 */
public class DOMElementsScriptPath extends AbstractTernScriptPath {

	private static final String SCRIPT_ELT = "script";
	private static final String HTTP_ATTR = "http";
	private static final String SRC_ATTR = "src";

	public DOMElementsScriptPath(IFile resource) {
		super(resource, ScriptPathsType.FILE);
	}

	@Override
	public Collection<IScriptResource> getScriptResources() {
		List<IScriptResource> resources = new ArrayList<IScriptResource>();
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
					resources.add(new DOMContentScriptResource(
							(IFile) getResource(), localScriptNb++));
				} else {
					if (src.startsWith(HTTP_ATTR)) {
						// JS script declared in http://
						resources.add(new DOMAbsoluteURLScriptResource(src));
					} else {
						// JS script declared in an external file.
						// T relativeFile = getRelativeFile(domFile, src);
						// if (relativeFile != null) {
						// updateFiles(relativeFile, doc, names);
						// }
						resources.add(new DOMRelativeURLScriptResource(
								(IFile) getResource(), src));
					}
				}
			}
		}
		return resources;
	}

	@Override
	public void updateFiles(TernFileManager ternFileManager, TernDoc doc,
			List names) throws IOException {
		Node element = getDocument();
		// Update TernDoc#addFile
		ternFileManager.updateFiles(element, getResource(), doc, names);

	}

	public Document getDocument() {
		return DOMProviderHelper.getProvider().getDocument(
				(IFile) getResource());
	}

}

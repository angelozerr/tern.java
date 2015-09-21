/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 */
package tern.scriptpath.impl.dom;

import java.util.ArrayList;
import java.util.List;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import tern.ITernFile;
import tern.ITernProject;
import tern.internal.resources.InternalTernResourcesManager;
import tern.scriptpath.ITernScriptResource;
import tern.scriptpath.impl.AbstractTernFileScriptPath;
import tern.utils.StringUtils;

/**
 * HTML/JSP page script path. This script path implementation gives the
 * capability to select an HTML/JSP file with "Add File" in the Tern
 * "Script Path" property page project and retrieve list of JS files declared in
 * the DOM "script" elements.
 * 
 */
public class DOMElementsScriptPath extends AbstractTernFileScriptPath {

	private static final String SCRIPT_ELT = "script"; //$NON-NLS-1$
	private static final String HTTP_ATTR = "http"; //$NON-NLS-1$
	private static final String SRC_ATTR = "src"; //$NON-NLS-1$
	
	public DOMElementsScriptPath(ITernProject project, ITernFile file, String external) {
		super(project, file, external);
	}

	@Override
	public List<ITernScriptResource> getScriptResources() {
		List<ITernScriptResource> resources = new ArrayList<ITernScriptResource>();
		Document document = getDocument();
		if (document != null) {
			// loop for each script elements (how to improve that?)
			int localScriptNb = 0;
			Element scriptElt = null;
			String src = null;
			NodeList scripts = getScriptNodes(document);
			for (int i = 0; i < scripts.getLength(); i++) {
				scriptElt = (Element) scripts.item(i);
				src = scriptElt.getAttribute(SRC_ATTR);
				ITernScriptResource resource;
				if (StringUtils.isEmpty(src)) {
					// JS script declared in the HTML document.
					// updateFiles(domFile, scriptElt, localScriptNb++, doc,
					// names);
					resource = createDOMContentScriptResource(localScriptNb++);
				} else {
					if (src.startsWith(HTTP_ATTR)) {
						// JS script declared in http://
						resource = new DOMAbsoluteURLScriptResource(src);
					} else {
						// JS script declared in an external file.
						resource = createDOMRelativeURLScriptResource(src);
					}
				}
				if (resource != null) {
					resources.add(resource);
				}
			}
		}
		return resources;
	}
	
	protected NodeList getScriptNodes(Document document) {
		return document.getElementsByTagName(SCRIPT_ELT);
	}

	protected ITernScriptResource createDOMAbsoluteURLScriptResource(String src) {
		return new DOMAbsoluteURLScriptResource(src);
	}
	
	protected ITernScriptResource createDOMRelativeURLScriptResource(String relativePath) {
		return new DOMRelativeURLScriptResource(getFile(), relativePath);
	}
	
	protected ITernScriptResource createDOMContentScriptResource(int localScriptNb) {
		return new DOMContentScriptResource(getFile(), localScriptNb);
	}

	protected Document getDocument() {
		return InternalTernResourcesManager.getInstance().getDocument(getFile());
	}

}

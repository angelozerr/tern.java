/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.scriptpath.impl.dom;

import tern.ITernFile;
import tern.scriptpath.ITernScriptResource;

/**
 * Javascript declared in a script/@src element inside HTML/JSP where script/@src
 * defines a relative url to a script file. Ex :
 * 
 * <pre>
 * 	<script src="/scripts/example.js" ></script>
 * </pre>
 */
public class DOMRelativeURLScriptResource implements ITernScriptResource {

	private final ITernFile relativeFile;
	private final String src;

	public DOMRelativeURLScriptResource(ITernFile domFile, String src) {
		this.relativeFile = domFile.getRelativeFile(src);
		this.src = src;
	}

	@Override
	public ITernFile getFile() {
		return relativeFile;
	}

	@Override
	public String getLabel() {
		return src;
	}

}

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
 * defines an absolute url. Ex :
 * 
 * <pre>
 * 	<script src="http://www.example.com/example.js" ></script>
 * </pre>
 */
public class DOMAbsoluteURLScriptResource implements ITernScriptResource {
	
	private final String url;

	public DOMAbsoluteURLScriptResource(String url) {
		this.url = url;
	}

	@Override
	public ITernFile getFile() {
		return null;
	}

	@Override
	public String getLabel() {
		return url;
	}

}

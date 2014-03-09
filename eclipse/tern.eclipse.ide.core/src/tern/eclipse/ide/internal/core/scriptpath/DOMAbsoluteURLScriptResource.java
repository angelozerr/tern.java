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
package tern.eclipse.ide.internal.core.scriptpath;

import org.eclipse.core.resources.IFile;

import tern.eclipse.ide.core.scriptpath.IScriptResource;

/**
 * Javascript declared in a script/@src element inside HTML/JSP where script/@src
 * defines an absolute url. Ex :
 * 
 * <pre>
 * 	<script src="http://www.example.com/example.js" ></script>
 * </pre>
 */
public class DOMAbsoluteURLScriptResource implements IScriptResource {
	private final String url;

	public DOMAbsoluteURLScriptResource(String url) {
		this.url = url;
	}

	@Override
	public IFile getFile() {
		return null;
	}

	@Override
	public String getLabel() {
		return url;
	}

}

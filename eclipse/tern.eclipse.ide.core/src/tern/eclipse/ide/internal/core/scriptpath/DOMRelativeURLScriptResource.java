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
import org.eclipse.core.runtime.Path;

import tern.eclipse.ide.core.scriptpath.IScriptResource;

/**
 * Javascript declared in a script/@src element inside HTML/JSP where script/@src
 * defines a relative url to a script file. Ex :
 * 
 * <pre>
 * 	<script src="/scripts/example.js" ></script>
 * </pre>
 */
public class DOMRelativeURLScriptResource implements IScriptResource {

	private final IFile domFile;
	private final String src;

	public DOMRelativeURLScriptResource(IFile domFile, String src) {
		this.domFile = domFile;
		this.src = src;
	}

	@Override
	public IFile getFile() {
		return domFile.getParent().getFile(new Path(src));
	}

	@Override
	public String getLabel() {
		return src;
	}

}

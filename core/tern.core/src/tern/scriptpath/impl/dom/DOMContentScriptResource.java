/**
 *  Copyright (c) 2013-2014 Angelo ZERR and Genuitec LLC.
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

import tern.ITernFile;
import tern.scriptpath.ITernScriptResource;

/**
 * Javascript declared in a script element inside HTML/JSP where script is
 * declared in the content of the script element. Ex:
 * 
 * <pre>
 * 	<script>
 * 		var arr = [];
 * </script>
 * </pre>
 */
public class DOMContentScriptResource implements ITernScriptResource {

	private final ITernFile domFile;
	private final int indexScript;

	public DOMContentScriptResource(ITernFile domFile, int indexScript) {
		this.domFile = domFile;
		this.indexScript = indexScript;
	}

	@Override
	public ITernFile getFile() {
		return domFile;
	}

	@Override
	public String getLabel() {
		return new StringBuilder("script#").append(indexScript).toString(); //$NON-NLS-1$
	}

}

/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 */
package tern.server.protocol.html;

import tern.ITernFile;

public interface IScriptTagRegionProvider {

	/**
	 * Returns the list of script tags to use if file is an HTML file and null
	 * otherwise.
	 * 
	 * @param file
	 *            the generic file.
	 * @return the list of script tags to use if file is an HTML file and null
	 *         otherwise.
	 */
	ScriptTagRegion[] getScriptTags(ITernFile file);
	
}

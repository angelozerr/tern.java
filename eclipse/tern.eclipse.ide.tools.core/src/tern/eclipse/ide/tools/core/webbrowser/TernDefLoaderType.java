/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.tools.core.webbrowser;

/**
 * JSON Type definition are json file. To load JSON, there is 3 means :
 * 
 * <ul>
 * <li>load JSON with Ajax</li>
 * <li>embed JSON in the HTML page of the editor.</li>
 * <li>embed JSON in a JS file.</li>
 * </ul>
 */
public enum TernDefLoaderType {

	LoadDefWithAjax, EmbedDefInHTML, EmbedDefInJS
}

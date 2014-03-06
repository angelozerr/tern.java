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
package tern.eclipse.ide.core.utils;

import org.eclipse.core.resources.IResource;

public class FileUtils {

	/**
	 * Extension file
	 */
	public static final String JS_EXTENSION = "js";
	public static final String HTM_EXTENSION = "htm";
	public static final String HTML_EXTENSION = "html";
	public static final String JSP_EXTENSION = "jsp";
	public static final String PHP_EXTENSION = "php";

	public static boolean isJSFile(IResource resource) {
		return JS_EXTENSION.equals(resource.getFileExtension());
	}

	public static boolean isHTMLFile(IResource resource) {
		return HTM_EXTENSION.equals(resource.getFileExtension())
				|| HTML_EXTENSION.equals(resource.getFileExtension());
	}

	public static boolean isJSPFile(IResource resource) {
		return JSP_EXTENSION.equals(resource.getFileExtension());
	}

	public static boolean isPHPFile(IResource resource) {
		return PHP_EXTENSION.equals(resource.getFileExtension());
	}
}

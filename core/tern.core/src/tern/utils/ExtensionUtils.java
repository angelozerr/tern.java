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
package tern.utils;

import java.util.Arrays;
import java.util.List;

@SuppressWarnings("nls")
public class ExtensionUtils {

	/**
	 * Extension file
	 */
	public static final String JS_EXTENSION = "js";
	public static final String HTM_EXTENSION = "htm";
	public static final String HTML_EXTENSION = "html";
	public static final String JSP_EXTENSION = "jsp";
	public static final String PHP_EXTENSION = "php";
	public static final String JSF_EXTENSION = "jsf";
	public static final String JSON_EXTENSION = "json";

	public static final String TERN_SUFFIX = "tern-";

	public static final List<String> HTML_EXTENSIONS = Arrays
			.asList(new String[] { HTM_EXTENSION, HTML_EXTENSION,
					JSP_EXTENSION, PHP_EXTENSION, JSF_EXTENSION });

	private ExtensionUtils() {
	}

	public static String getFileExtension(String fileName) {
		int index = fileName.lastIndexOf('.');
		if (index == -1)
			return null;
		if (index == fileName.length() - 1)
			return ""; //$NON-NLS-1$
		return fileName.substring(index + 1);
	}

}

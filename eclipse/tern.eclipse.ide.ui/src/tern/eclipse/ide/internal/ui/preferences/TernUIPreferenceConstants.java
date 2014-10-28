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
package tern.eclipse.ide.internal.ui.preferences;

import tern.server.TernDef;

/**
 * Tern UI preferences constants.
 * 
 */
public class TernUIPreferenceConstants {

	/**
	 * Content Assist preferences constants.
	 */
	public static final String CONTENT_ASSIST_USE_PROJECT_SETTINGS = "contentassist-use-project-settings";//$NON-NLS-1$
	public static final String GENERATE_ANONYMOUS_FUNCTION_CONTENT_ASSIST = "generate-anonymous-function-contentassist";//$NON-NLS-1$
	public static final String EXPAND_FUNCTION_CONTENT_ASSIST = "expand-function-contentassist";//$NON-NLS-1$

	/**
	 * Default tern plugins + JSON type definitions
	 */
	public static final String TERN_DEFS_DEFAULT = new StringBuilder(
			TernDef.ecma5.name()).append(",").append(TernDef.browser.name())
			.toString();
	public static final String TERN_PLUGINS_DEFAULT = "";
	public static final String TERN_PLUGINS = "tern-plugins";
	public static final String TERN_DEFS = "tern-defs";
}

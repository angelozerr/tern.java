/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - support for tern.js debugging
 */
package tern.eclipse.ide.server.nodejs.internal.ui;

import java.util.MissingResourceException;
import java.util.ResourceBundle;

import org.eclipse.osgi.util.NLS;

/**
 * Tern Nodejs UI messages.
 * 
 */
public final class TernNodejsUIMessages extends NLS {

	private static final String BUNDLE_NAME = "tern.eclipse.ide.server.nodejs.internal.ui.TernNodejsUIMessages"; //$NON-NLS-1$

	private static ResourceBundle fResourceBundle;

	// Preferences
	public static String TernNodejsPreferencesPage_desc;

	public static String TernNodejsPreferencesPage_debugger_err_not_installed;
	public static String TernNodejsPreferencesPage_debugger_err_not_selected;
	public static String TernNodejsPreferencesPage_debugger_label;
	public static String TernNodejsPreferencesPage_debugger_none;
	public static String TernNodejsPreferencesPage_debugger_not_installed;
	public static String TernNodejsPreferencesPage_debugger_wiki_link;
	
	public static String TernNodejsPreferencesPage_ternRepository_label;
	
	public static String TernNodejsPreferencesPage_nodeJSRemoteAccess;
	public static String TernNodejsPreferencesPage_nodeJSRemotePort;
	
	public static String TernNodejsPreferencesPage_nodeJSDirectAccess;
	public static String TernNodejsPreferencesPage_nodeJSTimeout;
	public static String TernNodejsPreferencesPage_nodeJSTestNumber;
	public static String TernNodejsPreferencesPage_nodeJSPersistent;
	public static String TernNodejsPreferencesPage_nodeJSInstall;
	public static String TernNodejsPreferencesPage_nodeJSInstall_emptyValue;
	public static String TernNodejsPreferencesPage_nativeNodeJSPath;
	public static String TernNodejsPreferencesPage_nodeJSPath;

	private TernNodejsUIMessages() {
	}

	public static ResourceBundle getResourceBundle() {
		try {
			if (fResourceBundle == null)
				fResourceBundle = ResourceBundle.getBundle(BUNDLE_NAME);
		} catch (MissingResourceException x) {
			fResourceBundle = null;
		}
		return fResourceBundle;
	}

	static {
		NLS.initializeMessages(BUNDLE_NAME, TernNodejsUIMessages.class);
	}
}

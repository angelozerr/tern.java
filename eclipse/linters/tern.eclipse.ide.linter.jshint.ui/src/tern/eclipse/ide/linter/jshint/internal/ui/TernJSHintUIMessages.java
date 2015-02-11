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
package tern.eclipse.ide.linter.jshint.internal.ui;

import java.util.MissingResourceException;
import java.util.ResourceBundle;

import org.eclipse.osgi.util.NLS;

/**
 * Tern Nodejs UI messages.
 * 
 */
public final class TernJSHintUIMessages extends NLS {

	private static final String BUNDLE_NAME = "tern.eclipse.ide.server.nodejs.internal.ui.TernNodejsUIMessages"; //$NON-NLS-1$

	private static ResourceBundle fResourceBundle;

	// Preferences
	public static String TernNodejsPreferencesPage_desc;
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

	private TernJSHintUIMessages() {
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
		NLS.initializeMessages(BUNDLE_NAME, TernJSHintUIMessages.class);
	}
}

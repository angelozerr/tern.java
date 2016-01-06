/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.core;

import java.util.MissingResourceException;
import java.util.ResourceBundle;

import org.eclipse.osgi.util.NLS;

/**
 * Tern Core messages.
 * 
 */
public final class TernCoreMessages extends NLS {

	private static final String BUNDLE_NAME = "tern.eclipse.ide.internal.core.TernCoreMessages"; //$NON-NLS-1$

	private static ResourceBundle fResourceBundle;

	public static String RefreshTernProjectJob_name;
	public static String RefreshTernProjectJob_taskName;

	private TernCoreMessages() {
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
		NLS.initializeMessages(BUNDLE_NAME, TernCoreMessages.class);
	}
}

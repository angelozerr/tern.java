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
package tern.eclipse.ide.internal.core.preferences;

import org.eclipse.core.runtime.preferences.DefaultScope;
import org.eclipse.core.runtime.preferences.IEclipsePreferences;

import tern.eclipse.ide.core.TernCoreConstants;
import tern.eclipse.ide.core.TernCorePlugin;

public class TernCorePreferenceConstants {

	/**
	 * Initializes the given preference store with the default values.
	 * 
	 * @param store
	 *            the preference store to be initialized
	 */
	public static void initializeDefaultValues() {
		IEclipsePreferences node = new DefaultScope()
				.getNode(TernCorePlugin.PLUGIN_ID);
		// By default Tern with Node.js is used.
		node.put(TernCoreConstants.TERN_SERVER_TYPE,
				"tern.eclipse.ide.server.nodejs");
		// trace server on console
		node.putBoolean(TernCoreConstants.TRACE_ON_CONSOLE, false);
	}

	// Don't instantiate
	private TernCorePreferenceConstants() {
	}
}

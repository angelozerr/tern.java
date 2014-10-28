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

import org.eclipse.core.runtime.preferences.AbstractPreferenceInitializer;
import org.eclipse.core.runtime.preferences.DefaultScope;
import org.eclipse.core.runtime.preferences.IEclipsePreferences;

import tern.eclipse.ide.ui.TernUIPlugin;

/**
 * Tern UI preferences initializer.
 *
 */
public class TernUIPreferenceInitializer extends AbstractPreferenceInitializer {

	@Override
	public void initializeDefaultPreferences() {
		IEclipsePreferences node = new DefaultScope()
				.getNode(TernUIPlugin.PLUGIN_ID);
		node.putBoolean(
				TernUIPreferenceConstants.GENERATE_ANONYMOUS_FUNCTION_CONTENT_ASSIST,
				true);
		node.putBoolean(
				TernUIPreferenceConstants.EXPAND_FUNCTION_CONTENT_ASSIST, true);
		node.put(TernUIPreferenceConstants.TERN_DEFS,
				TernUIPreferenceConstants.TERN_DEFS_DEFAULT);
		node.put(TernUIPreferenceConstants.TERN_PLUGINS,
				TernUIPreferenceConstants.TERN_PLUGINS_DEFAULT);
	}

}
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

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.Preferences;

import tern.eclipse.ide.core.ITernServerType;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.preferences.PreferencesSupport;
import tern.eclipse.ide.core.preferences.TernCorePreferenceConstants;
import tern.utils.StringUtils;

public class TernCorePreferencesSupport {

	private static final String NODES_QUALIFIER = TernCorePlugin.PLUGIN_ID;
	private static final Preferences store = TernCorePlugin.getDefault()
			.getPluginPreferences();
	private PreferencesSupport preferencesSupport;

	private TernCorePreferencesSupport() {
		preferencesSupport = new PreferencesSupport(TernCorePlugin.PLUGIN_ID,
				store);
	}

	private static TernCorePreferencesSupport instance = null;

	public static TernCorePreferencesSupport getInstance() {
		if (instance == null) {
			instance = new TernCorePreferencesSupport();
		}
		return instance;
	}

	public ITernServerType getServerType() {
		String id = preferencesSupport
				.getWorkspacePreferencesValue(TernCorePreferenceConstants.TERN_SERVER_TYPE);
		return TernCorePlugin.getTernServerTypeManager().findTernServerType(id);
	}

	/**
	 * Returns true if JSON request/response can be traced inside Eclipse
	 * console and false otherwise.
	 * 
	 * @param project
	 * @return true if JSON request/response can be traced inside Eclipse
	 *         console and false otherwise.
	 */
	public boolean isTraceOnConsole(IProject project) {
		String result = preferencesSupport.getPreferencesValue(
				TernCorePreferenceConstants.TRACE_ON_CONSOLE, null, project);
		return StringUtils.asBoolean(result, false);
	}

	/**
	 * Returns true if tern plugins can be loaded from the project root and
	 * false otherwise.
	 * 
	 * @param project
	 * @return true if tern plugins can be loaded from the project root and
	 *         false otherwise.
	 * @see https://github.com/marijnh/tern/commit/154
	 *      b0587a64eea193d124005e03d80065ac310e2
	 */
	public boolean isLoadingLocalPlugins(IProject project) {
		String result = preferencesSupport.getPreferencesValue(
				TernCorePreferenceConstants.LOADING_LOCAL_PLUGINS, null,
				project);
		return StringUtils.asBoolean(result, false);
	}

	/**
	 * Return false if Tern requests, like autocompletion should not be allowed
	 * to run asynchronously and timeout.
	 * 
	 * @param project
	 * @return true if asynchronous requests should not be allowed.
	 */
	public boolean isDisableAsynchronousReques(IProject project) {
		String result = preferencesSupport.getPreferencesValue(
				TernCorePreferenceConstants.DISABLE_ASYNC_REQUESTS, null,
				project);
		return StringUtils.asBoolean(result, false);
	}

	/**
	 * Returns the used tern repository name for the given project.
	 * 
	 * @param project
	 * @return the used tern repository name for the given project.
	 */
	public String getUsedTernRepositoryName(IProject project) {
		return preferencesSupport
				.getPreferencesValue(
						TernCorePreferenceConstants.USED_REPOSITORY_NAME, null,
						project);

	}

	/**
	 * Returns true if tern builder (used for validation) must be executed and
	 * false otherwise.
	 * 
	 * @param project
	 * @return true if tern builder (used for validation) must be executed and
	 *         false otherwise.
	 */
	public boolean isAvailableTernBuilder(IProject project) {
		String result = preferencesSupport.getPreferencesValue(
				TernCorePreferenceConstants.AVAILABLE_TERN_BUILDER, null,
				project);
		return StringUtils.asBoolean(result, false);
	}

}

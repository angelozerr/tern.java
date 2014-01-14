package tern.eclipse.ide.internal.core.preferences;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.Preferences;

import tern.eclipse.ide.core.ITernServerType;
import tern.eclipse.ide.core.TernCoreConstants;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.preferences.PreferencesSupport;
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
				.getWorkspacePreferencesValue(TernCoreConstants.TERN_SERVER_TYPE);
		return TernCorePlugin.getTernServerTypeManager().findTernServerType(id);
	}

	public boolean isTraceOnConsole(IProject project) {
		String result = preferencesSupport.getPreferencesValue(
				TernCoreConstants.TRACE_ON_CONSOLE, null, project);
		return StringUtils.asBoolean(result, false);
	}

}

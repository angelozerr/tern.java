package tern.eclipse.ide.server.nodejs.internal.core.preferences;

import org.eclipse.core.runtime.Preferences;

import tern.eclipse.ide.core.ITernServerType;
import tern.eclipse.ide.core.TernCoreConstants;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.preferences.PreferencesSupport;
import tern.eclipse.ide.server.nodejs.core.INodejsInstall;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCoreConstants;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCorePlugin;

public class TernNodejsCorePreferencesSupport {

	private static final String NODES_QUALIFIER = TernNodejsCorePlugin.PLUGIN_ID;
	private static final Preferences store = TernNodejsCorePlugin.getDefault()
			.getPluginPreferences();
	private PreferencesSupport preferencesSupport;

	private TernNodejsCorePreferencesSupport() {
		preferencesSupport = new PreferencesSupport(
				TernNodejsCorePlugin.PLUGIN_ID, store);
	}

	private static TernNodejsCorePreferencesSupport instance = null;

	public static TernNodejsCorePreferencesSupport getInstance() {
		if (instance == null) {
			instance = new TernNodejsCorePreferencesSupport();
		}
		return instance;
	}

	public INodejsInstall getNodejsInstall() {
		String id = preferencesSupport
				.getWorkspacePreferencesValue(TernNodejsCoreConstants.NODEJS_INSTALL);
		return TernNodejsCorePlugin.getNodejsInstallManager()
				.findNodejsInstall(id);
	}

}

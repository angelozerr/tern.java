package tern.eclipse.ide.server.nodejs.internal.core.preferences;

import java.io.File;

import org.eclipse.core.runtime.Preferences;

import tern.eclipse.ide.core.preferences.PreferencesSupport;
import tern.eclipse.ide.server.nodejs.core.INodejsInstall;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCoreConstants;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCorePlugin;
import tern.server.nodejs.NodejsTernHelper;
import tern.server.nodejs.process.NodejsProcessHelper;
import tern.utils.StringUtils;

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

	public long getNodejsTimeout() {
		String timeout = preferencesSupport
				.getWorkspacePreferencesValue(TernNodejsCoreConstants.NODEJS_TIMEOUT);
		try {
			return Long.parseLong(timeout);
		} catch (Throwable e) {
			return NodejsTernHelper.DEFAULT_TIMEOUT;
		}
	}

	public File getInstallPath() {
		INodejsInstall install = TernNodejsCorePreferencesSupport.getInstance()
				.getNodejsInstall();
		if (install != null) {
			if (install.isNative()) {
				String path = preferencesSupport
						.getWorkspacePreferencesValue(TernNodejsCoreConstants.NODEJS_PATH);
				if (!StringUtils.isEmpty(path)) {
					return new File(path);
				}
			} else {
				return install.getPath();
			}
		}
		return new File("node");
	}

}

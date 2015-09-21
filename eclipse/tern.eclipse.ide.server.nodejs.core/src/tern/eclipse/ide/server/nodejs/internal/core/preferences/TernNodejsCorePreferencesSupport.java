/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.server.nodejs.internal.core.preferences;

import java.io.File;

import org.eclipse.core.runtime.Preferences;

import tern.eclipse.ide.core.preferences.PreferencesSupport;
import tern.eclipse.ide.server.nodejs.core.INodejsInstall;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCoreConstants;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCorePlugin;
import tern.server.nodejs.NodejsTernHelper;
import tern.server.nodejs.process.NodejsProcess;
import tern.server.nodejs.process.NodejsProcessHelper;
import tern.utils.StringUtils;

/**
 * Support for tern core node.js preferences.
 * 
 */
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

	/**
	 * Returns the node install from the workspace preferences.
	 * 
	 * @return
	 */
	public INodejsInstall getNodejsInstall() {
		String id = preferencesSupport
				.getWorkspacePreferencesValue(TernNodejsCoreConstants.NODEJS_INSTALL);
		return TernNodejsCorePlugin.getNodejsInstallManager()
				.findNodejsInstall(id);
	}

	/**
	 * returns the node.js install path.
	 * 
	 * @return
	 */
	public File getInstallPath() {
		INodejsInstall install = getNodejsInstall();
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

	/**
	 * Returns the timeout to use when node.js starts to retrieve the node.js
	 * port in {@link NodejsProcess#start(long, int)}
	 * 
	 * @return
	 */
	public long getNodejsTimeout() {
		String timeout = preferencesSupport
				.getWorkspacePreferencesValue(TernNodejsCoreConstants.NODEJS_TIMEOUT);
		try {
			return Long.parseLong(timeout);
		} catch (Throwable e) {
			return NodejsTernHelper.DEFAULT_TIMEOUT;
		}
	}

	/**
	 * Returns the test number to use when node.js starts to retrieve the
	 * node.js port in {@link NodejsProcess#start(long, int)}
	 * 
	 * @return
	 */
	public int getNodejsTestNumber() {
		String timeout = preferencesSupport
				.getWorkspacePreferencesValue(TernNodejsCoreConstants.NODEJS_TEST_NUMBER);
		try {
			return Integer.parseInt(timeout);
		} catch (Throwable e) {
			return NodejsTernHelper.DEFAULT_TEST_NUMBER;
		}
	}

	/**
	 * Return false if the server will shut itself down after five minutes of
	 * inactivity and true otherwise.
	 * 
	 * @return false if the server will shut itself down after five minutes of
	 *         inactivity and true otherwise.
	 */
	public boolean isNodejsPersistent() {
		String persistent = preferencesSupport
				.getWorkspacePreferencesValue(TernNodejsCoreConstants.NODEJS_PERSISTENT);
		try {
			return Boolean.parseBoolean(persistent);
		} catch (Throwable e) {
			return NodejsTernHelper.DEFAULT_PERSISTENT;
		}
	}

	/**
	 * Returns true if node.js server is a remote node.js server (don't start an
	 * internal node.js process) and false otherwise.
	 * 
	 * @return true if node.js server is a remote node.js server (don't start an
	 *         internal node.js process) and false otherwise.
	 */
	public boolean isNodejsRemoteAccess() {
		String persistent = preferencesSupport
				.getWorkspacePreferencesValue(TernNodejsCoreConstants.NODEJS_REMOTE_ACCESS);
		try {
			return Boolean.parseBoolean(persistent);
		} catch (Throwable e) {
			return NodejsTernHelper.DEFAULT_REMOTE_ACCESS;
		}
	}

	/**
	 * Returns the node.js port of the remote node.js server.
	 * 
	 * @return the node.js port of the remote node.js server.
	 */
	public int getNodejsRemotePort() {
		String timeout = preferencesSupport
				.getWorkspacePreferencesValue(TernNodejsCoreConstants.NODEJS_REMOTE_PORT);
		try {
			return Integer.parseInt(timeout);
		} catch (Throwable e) {
			return NodejsTernHelper.DEFAULT_REMOTE_PORT;
		}
	}

}

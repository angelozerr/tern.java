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
package tern.eclipse.ide.server.nodejs.internal.core;

import java.io.File;

import tern.ITernProject;
import tern.eclipse.ide.core.ITernServerFactory;
import tern.eclipse.ide.server.nodejs.internal.core.preferences.TernNodejsCorePreferencesSupport;
import tern.server.ITernServer;
import tern.server.nodejs.NodejsTernServer;

/**
 * Tern server factory implementation with node.js terns server.
 */
public class TernNodejsServerFactory implements ITernServerFactory {

	@Override
	public ITernServer create(ITernProject project) throws Exception {
		File installPath = getInstallPath();
		File ternFile = project.getRepository().getTernBaseDir();
		NodejsTernServer server = isRemoteAccess() ? new NodejsTernServer(
				project, getRemotePort()) : new NodejsTernServer(project,
				installPath, ternFile);
		server.setTimeout(getTimeout());
		server.setTestNumber(getTestNumber());
		server.setPersistent(isPersistent());
		return server;
	}

	// -------------------- Properties for remote access

	private boolean isRemoteAccess() {
		return TernNodejsCorePreferencesSupport.getInstance()
				.isNodejsRemoteAccess();
	}

	private int getRemotePort() {
		return TernNodejsCorePreferencesSupport.getInstance()
				.getNodejsRemotePort();
	}

	// -------------------- Properties for direct access

	private File getInstallPath() {
		return TernNodejsCorePreferencesSupport.getInstance().getInstallPath();
	}

	private long getTimeout() {
		return TernNodejsCorePreferencesSupport.getInstance()
				.getNodejsTimeout();
	}

	private int getTestNumber() {
		return TernNodejsCorePreferencesSupport.getInstance()
				.getNodejsTestNumber();
	}

	private boolean isPersistent() {
		return TernNodejsCorePreferencesSupport.getInstance()
				.isNodejsPersistent();
	}

}

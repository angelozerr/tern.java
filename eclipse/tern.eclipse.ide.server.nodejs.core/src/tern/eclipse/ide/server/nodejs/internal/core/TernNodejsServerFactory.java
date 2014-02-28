package tern.eclipse.ide.server.nodejs.internal.core;

import java.io.File;

import tern.TernProject;
import tern.eclipse.ide.core.ITernServerFactory;
import tern.eclipse.ide.server.nodejs.core.INodejsInstall;
import tern.eclipse.ide.server.nodejs.internal.core.preferences.TernNodejsCorePreferencesSupport;
import tern.server.ITernServer;
import tern.server.nodejs.NodejsTernHelper;
import tern.server.nodejs.NodejsTernServer;

public class TernNodejsServerFactory implements ITernServerFactory {

	@Override
	public ITernServer create(TernProject project) throws Exception {
		File installPath = getInstallPath();
		NodejsTernHelper.setTimeout(project, getTimeout());
		NodejsTernServer server = new NodejsTernServer(project, installPath);
		return server;
	}

	private File getInstallPath() {
		return TernNodejsCorePreferencesSupport.getInstance().getInstallPath();		
	}

	private long getTimeout() {
		return TernNodejsCorePreferencesSupport.getInstance()
				.getNodejsTimeout();
	}

}

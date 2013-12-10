package tern.eclipse.ide.server.nodejs.internal.core;

import java.io.File;

import tern.TernProject;
import tern.eclipse.ide.core.ITernServerFactory;
import tern.eclipse.ide.server.nodejs.core.INodejsInstall;
import tern.eclipse.ide.server.nodejs.internal.core.preferences.TernNodejsCorePreferencesSupport;
import tern.server.ITernServer;
import tern.server.nodejs.LoggingInterceptor;
import tern.server.nodejs.NodejsTernServer;
import tern.server.nodejs.process.PrintNodejsProcessListener;

public class TernNodejsServerFactory implements ITernServerFactory {

	@Override
	public ITernServer create(TernProject project) throws Exception {
		File installPath = getInstallPath();
		NodejsTernServer server = new NodejsTernServer(project, installPath);
		// TODO : remove that
		server.addInterceptor(new LoggingInterceptor());
		server.addProcessListener(PrintNodejsProcessListener.getInstance());
		return server;
	}

	private File getInstallPath() {
		INodejsInstall install = TernNodejsCorePreferencesSupport.getInstance()
				.getNodejsInstall();
		if (install != null) {
			return install.getPath();
		}
		return null;
	}

}

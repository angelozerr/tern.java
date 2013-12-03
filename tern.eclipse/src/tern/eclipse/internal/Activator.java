package tern.eclipse.internal;

import java.io.File;

import org.eclipse.core.runtime.FileLocator;
import org.eclipse.core.runtime.Platform;
import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

import tern.server.nodejs.process.NodejsProcessManager;

public class Activator implements BundleActivator {

	private static BundleContext context;

	static BundleContext getContext() {
		return context;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.osgi.framework.BundleActivator#start(org.osgi.framework.BundleContext
	 * )
	 */
	public void start(BundleContext bundleContext) throws Exception {
		Activator.context = bundleContext;
		File nodejsTernBaseDir = FileLocator.getBundleFile(Platform
				.getBundle(tern.server.nodejs.Activator.PLUGIN_ID));
		NodejsProcessManager.getInstance().init(nodejsTernBaseDir);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.osgi.framework.BundleActivator#stop(org.osgi.framework.BundleContext)
	 */
	public void stop(BundleContext bundleContext) throws Exception {
		Activator.context = null;
		NodejsProcessManager.getInstance().dispose();
	}

}

package tern.server.nodejs;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

import tern.server.nodejs.process.NodejsProcessManager;

public class Activator implements BundleActivator {

	public static final String PLUGIN_ID = "tern.server.nodejs";
	
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

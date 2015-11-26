package tern.websocket.provider.internal;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

import tern.server.WebSocketContainerProvider;

public class Activator implements BundleActivator {

	private static BundleContext context;

	static BundleContext getContext() {
		return context;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.osgi.framework.BundleActivator#start(org.osgi.framework.
	 * BundleContext)
	 */
	public void start(BundleContext bundleContext) throws Exception {
		Activator.context = bundleContext;
		WebSocketContainerProvider.setProvider(new MyJettyClientContainerProvider());
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.osgi.framework.BundleActivator#stop(org.osgi.framework.BundleContext)
	 */
	public void stop(BundleContext bundleContext) throws Exception {
		WebSocketContainerProvider.setProvider(null);
		Activator.context = null;
	}

}

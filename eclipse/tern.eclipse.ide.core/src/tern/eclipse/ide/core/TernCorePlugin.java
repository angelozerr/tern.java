/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.core;

import java.io.File;

import org.eclipse.core.runtime.FileLocator;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.Plugin;
import org.osgi.framework.BundleContext;

import tern.eclipse.ide.internal.core.TernServerTypeManager;
import tern.metadata.TernFacetMetadataManager;
import tern.server.nodejs.process.NodejsProcessManager;

/**
 * The activator class controls the plug-in life cycle
 */

public class TernCorePlugin extends Plugin {

	public static final String PLUGIN_ID = "tern.eclipse.ide.core"; //$NON-NLS-1$

	// The shared instance.
	private static TernCorePlugin plugin;

	/**
	 * The constructor.
	 */
	public TernCorePlugin() {
		super();
		plugin = this;
	}

	@Override
	public void start(BundleContext context) throws Exception {
		super.start(context);

		// Initialize the NodeJs tern base dir usefull if (if tern.eclipse is
		// not started).
		File ternCoreBaseDir = FileLocator.getBundleFile(Platform
				.getBundle(tern.Activator.PLUGIN_ID));
		NodejsProcessManager.getInstance().init(ternCoreBaseDir);
		TernFacetMetadataManager.getInstance().init(ternCoreBaseDir);
	}

	@Override
	public void stop(BundleContext context) throws Exception {
		plugin = null;
		super.stop(context);
		NodejsProcessManager.getInstance().dispose();
		TernServerTypeManager.getManager().destroy();
	}

	/**
	 * Returns the shared instance
	 * 
	 * @return the shared instance
	 */
	public static TernCorePlugin getDefault() {
		return plugin;
	}

	/**
	 * Returns the instance of the tern server type manager.
	 * 
	 * @return the instance of the tern server type manager.
	 */
	public static ITernServerTypeManager getTernServerTypeManager() {
		return TernServerTypeManager.getManager();
	}

}

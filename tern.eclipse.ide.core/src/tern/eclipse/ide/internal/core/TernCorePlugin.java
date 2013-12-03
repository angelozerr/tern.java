/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.eclipse.ide.internal.core;

import java.io.File;

import org.eclipse.core.runtime.FileLocator;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.Plugin;
import org.osgi.framework.BundleContext;

import tern.server.nodejs.process.NodejsProcessManager;

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
		
		// Initialize the NodeJs tern base dir usefull if (if tern.eclipse is not started).
		File nodejsTernBaseDir = FileLocator.getBundleFile(Platform
				.getBundle(tern.server.nodejs.Activator.PLUGIN_ID));
		NodejsProcessManager.getInstance().init(nodejsTernBaseDir);
		
	}
}

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
package tern.eclipse.ide.linter.jscs.internal.core;

import org.eclipse.core.runtime.Plugin;
import org.osgi.framework.BundleContext;

/**
 * JSCS core plugin.
 *
 */
public class TernJSCSCorePlugin extends Plugin {

	public static final String PLUGIN_ID = "tern.eclipse.ide.linter.jscs.core"; //$NON-NLS-1$

	// The shared instance.
	private static TernJSCSCorePlugin plugin;

	/**
	 * The constructor.
	 */
	public TernJSCSCorePlugin() {
		super();
		plugin = this;
	}

	@Override
	public void start(BundleContext context) throws Exception {
		plugin = this;
		super.start(context);
	}

	@Override
	public void stop(BundleContext context) throws Exception {
		plugin = null;
		super.stop(context);
	}

	/**
	 * Returns the shared instance
	 * 
	 * @return the shared instance
	 */
	public static TernJSCSCorePlugin getDefault() {
		return plugin;
	}

}

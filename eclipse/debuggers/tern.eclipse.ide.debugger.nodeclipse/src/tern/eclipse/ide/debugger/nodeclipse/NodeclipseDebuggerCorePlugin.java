/**
 *  Copyright (c) 2015 Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.eclipse.ide.debugger.nodeclipse;

import org.eclipse.core.runtime.Plugin;
import org.osgi.framework.BundleContext;

public class NodeclipseDebuggerCorePlugin extends Plugin {

	public static final String PLUGIN_ID = "tern.eclipse.ide.debugger.nodeclipse"; //$NON-NLS-1$

	// The shared instance.
	private static NodeclipseDebuggerCorePlugin plugin;

	/**
	 * The constructor.
	 */
	public NodeclipseDebuggerCorePlugin() {
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
	public static NodeclipseDebuggerCorePlugin getDefault() {
		return plugin;
	}

}

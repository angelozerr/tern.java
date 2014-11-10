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
package tern.eclipse.ide.tools.internal.core;

import java.io.IOException;

import org.eclipse.core.runtime.FileLocator;
import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

import tern.eclipse.ide.tools.core.webbrowser.EditorType;

public class TernToolsCorePlugin implements BundleActivator {

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
		TernToolsCorePlugin.context = bundleContext;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.osgi.framework.BundleActivator#stop(org.osgi.framework.BundleContext)
	 */
	public void stop(BundleContext bundleContext) throws Exception {
		TernToolsCorePlugin.context = null;
	}

	public static String getEditorURL(EditorType type, String path)
			throws IOException {
		if (context == null) {
			throw new IOException("Cannot resolve the path=" + path
					+ ". This constructor must be used only on OSGi context");
		}
		return FileLocator.toFileURL(
				context.getBundle().getEntry(
						"resources/" + type.name() + "/" + path))
				.toExternalForm();
	}

}

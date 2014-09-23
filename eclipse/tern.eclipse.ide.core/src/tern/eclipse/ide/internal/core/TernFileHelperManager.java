/**
 *  Copyright (c) 2013-2014 Liferay, Inc.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Gregory Amerson <gregory.amerson@liferay.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.core;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtensionRegistry;
import org.eclipse.core.runtime.Platform;

import tern.eclipse.ide.core.ITernFileHelper;
import tern.eclipse.ide.core.ITernFileHelperManager;
import tern.eclipse.ide.core.TernCorePlugin;

/**
 * Manager of tern file helpers loaded by the extension point "ternFileHelpers"
 *
 */
public class TernFileHelperManager implements ITernFileHelperManager
{

	private static final String EXTENSION_TERN_FILE_HELPERS = "ternFileHelpers";

	private static final TernFileHelperManager INSTANCE = new TernFileHelperManager();

	// cached copy of all tern file helpers
	private List<ITernFileHelper> ternFileHelpers;

	public static TernFileHelperManager getManager() {
		return INSTANCE;
	}

	public TernFileHelperManager() {
	}

	@Override
	public ITernFileHelper[] getTernFileHelpers() {
		if (ternFileHelpers == null)
			loadTernFileHelpers();

		ITernFileHelper[] fh = new ITernFileHelper[ternFileHelpers.size()];
		ternFileHelpers.toArray(fh);
		return fh;
	}

	/**
	 * Load the tern file helpers
	 */
	private synchronized void loadTernFileHelpers() {
		if (ternFileHelpers != null)
			return;

		Trace.trace(Trace.EXTENSION_POINT,
				"->- Loading .ternFileHelpers extension point ->-");

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		IConfigurationElement[] cf = registry.getConfigurationElementsFor(
				TernCorePlugin.PLUGIN_ID, EXTENSION_TERN_FILE_HELPERS);
		List<ITernFileHelper> list = new ArrayList<ITernFileHelper>(cf.length);
		addTernFileHelpers(cf, list);
		ternFileHelpers = list;

		Trace.trace(Trace.EXTENSION_POINT,
				"-<- Done loading .ternFileHelpers extension point -<-");
	}

	/**
	 * Load the tern file helpers
	 */
	private synchronized void addTernFileHelpers(IConfigurationElement[] cf,
			List<ITernFileHelper> list) {
		for (IConfigurationElement ce : cf) {
			try {
				list.add(new TernFileHelper(ce));
			} catch (Throwable t) {
				Trace.trace(
						Trace.SEVERE, "  Could not load file helper", t);
			}
		}
	}

}

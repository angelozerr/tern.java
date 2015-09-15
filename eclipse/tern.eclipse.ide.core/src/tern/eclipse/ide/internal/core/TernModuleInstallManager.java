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
package tern.eclipse.ide.internal.core;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtensionDelta;
import org.eclipse.core.runtime.IExtensionRegistry;
import org.eclipse.core.runtime.IRegistryChangeEvent;
import org.eclipse.core.runtime.IRegistryChangeListener;
import org.eclipse.core.runtime.Platform;

import tern.eclipse.ide.core.TernCorePlugin;

public class TernModuleInstallManager implements IRegistryChangeListener {

	private static final String EXTENSION_TERN_MODULE_INSTALLS = "ternModuleInstalls";

	private static final TernModuleInstallManager INSTANCE = new TernModuleInstallManager();

	// cached copy of all ternModule install
	private List<TernModuleInstall> ternModuleInstalls;

	private boolean registryListenerIntialized;

	public static TernModuleInstallManager getManager() {
		return INSTANCE;
	}

	public TernModuleInstallManager() {
		this.registryListenerIntialized = false;
	}

	@Override
	public void registryChanged(final IRegistryChangeEvent event) {
		IExtensionDelta[] deltas = event.getExtensionDeltas(TernCorePlugin.PLUGIN_ID, EXTENSION_TERN_MODULE_INSTALLS);
		if (deltas != null) {
			for (IExtensionDelta delta : deltas)
				handleTernModuleInstallDelta(delta);
		}
	}

	/**
	 * Returns an array of all known ternModule installs.
	 * <p>
	 * A new array is returned on each call, so clients may store or modify the
	 * result.
	 * </p>
	 * 
	 * @return the array of ternModule installs {@link TernModuleInstall}
	 */
	public TernModuleInstall[] getTernModuleInstalls() {
		if (ternModuleInstalls == null)
			loadTernModuleInstalls();

		TernModuleInstall[] st = new TernModuleInstall[ternModuleInstalls.size()];
		ternModuleInstalls.toArray(st);
		return st;
	}

	/**
	 * Load the ternModule installs.
	 */
	private synchronized void loadTernModuleInstalls() {
		if (ternModuleInstalls != null)
			return;

		Trace.trace(Trace.EXTENSION_POINT, "->- Loading .ternModuleInstalls extension point ->-");

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		IConfigurationElement[] cf = registry.getConfigurationElementsFor(TernCorePlugin.PLUGIN_ID,
				EXTENSION_TERN_MODULE_INSTALLS);
		List<TernModuleInstall> list = new ArrayList<TernModuleInstall>(cf.length);
		addTernModuleInstalls(cf, list);
		addRegistryListenerIfNeeded();
		ternModuleInstalls = list;

		Trace.trace(Trace.EXTENSION_POINT, "-<- Done loading .ternModuleInstalls extension point -<-");
	}

	/**
	 * Load the ternModule installs.
	 */
	private synchronized void addTernModuleInstalls(IConfigurationElement[] cf, List<TernModuleInstall> list) {
		for (IConfigurationElement ce : cf) {
			try {
				list.add(new TernModuleInstall(ce));
				Trace.trace(Trace.EXTENSION_POINT, "  Loaded ternModuleInstall: " + ce.getAttribute("id"));
			} catch (Throwable t) {
				Trace.trace(Trace.SEVERE, "  Could not load ternModuleInstall: " + ce.getAttribute("id"), t);
			}
		}
	}

	protected void handleTernModuleInstallDelta(IExtensionDelta delta) {
		if (ternModuleInstalls == null) // not loaded yet
			return;

		IConfigurationElement[] cf = delta.getExtension().getConfigurationElements();

		List<TernModuleInstall> list = new ArrayList<TernModuleInstall>(ternModuleInstalls);
		if (delta.getKind() == IExtensionDelta.ADDED) {
			addTernModuleInstalls(cf, list);
		} else {
			int size = list.size();
			TernModuleInstall[] st = new TernModuleInstall[size];
			list.toArray(st);
			int size2 = cf.length;

			for (int i = 0; i < size; i++) {
				for (int j = 0; j < size2; j++) {
					if (st[i].getId().equals(cf[j].getAttribute("id"))) {
						st[i].dispose();
						list.remove(st[i]);
					}
				}
			}
		}
		ternModuleInstalls = list;
	}

	private void addRegistryListenerIfNeeded() {
		if (registryListenerIntialized)
			return;

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		registry.addRegistryChangeListener(this, TernCorePlugin.PLUGIN_ID);
		registryListenerIntialized = true;
	}

	public void initialize() {

	}

	public void destroy() {
		Platform.getExtensionRegistry().removeRegistryChangeListener(this);
	}
}

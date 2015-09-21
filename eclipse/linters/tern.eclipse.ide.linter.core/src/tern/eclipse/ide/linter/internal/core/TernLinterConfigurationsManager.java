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
package tern.eclipse.ide.linter.internal.core;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtensionDelta;
import org.eclipse.core.runtime.IExtensionRegistry;
import org.eclipse.core.runtime.IRegistryChangeEvent;
import org.eclipse.core.runtime.IRegistryChangeListener;
import org.eclipse.core.runtime.Platform;

import tern.eclipse.ide.linter.core.ITernLinterConfig;
import tern.eclipse.ide.linter.core.ITernLinterConfigFactory;
import tern.eclipse.ide.linter.core.ITernLinterConfigurationsManager;
import tern.eclipse.ide.linter.core.TernLinterCorePlugin;

/**
 * Tern linter configuration manager.
 * 
 */
public class TernLinterConfigurationsManager implements
		IRegistryChangeListener, ITernLinterConfigurationsManager {

	private static final String EXTENSION_TERN_LINTER_CONFIGURATIONS = "ternLinterConfigurations";

	private static final TernLinterConfigurationsManager INSTANCE = new TernLinterConfigurationsManager();

	private Map<String, TernLinterConfiguration> ternLinterConfigurations;

	private boolean registryListenerIntialized;

	public static TernLinterConfigurationsManager getManager() {
		return INSTANCE;
	}

	private TernLinterConfigurationsManager() {
		this.registryListenerIntialized = false;
	}

	@Override
	public void registryChanged(final IRegistryChangeEvent event) {
		IExtensionDelta[] deltas = event.getExtensionDeltas(
				TernLinterCorePlugin.PLUGIN_ID,
				EXTENSION_TERN_LINTER_CONFIGURATIONS);
		if (deltas != null) {
			for (IExtensionDelta delta : deltas)
				handleTernLinterConfigurationDelta(delta);
		}
	}

	/**
	 * Load the tern linter types.
	 */
	private synchronized void loadTernLinterConfigurations() {
		if (ternLinterConfigurations != null)
			return;

		Trace.trace(Trace.EXTENSION_POINT,
				"->- Loading .ternLinterConfigurations extension point ->-");

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		IConfigurationElement[] cf = registry.getConfigurationElementsFor(
				TernLinterCorePlugin.PLUGIN_ID,
				EXTENSION_TERN_LINTER_CONFIGURATIONS);
		Map<String, TernLinterConfiguration> map = new HashMap<String, TernLinterConfiguration>(
				cf.length);
		addTernLinterConfigurations(cf, map);
		addRegistryListenerIfNeeded();
		ternLinterConfigurations = map;

		Trace.trace(Trace.EXTENSION_POINT,
				"-<- Done loading .ternLinterConfigurations extension point -<-");
	}

	/**
	 * Load the tern linter configurations.
	 */
	private synchronized void addTernLinterConfigurations(
			IConfigurationElement[] cf, Map<String, TernLinterConfiguration> map) {
		for (IConfigurationElement ce : cf) {
			try {
				String linterId = ce.getAttribute("id");
				String filename = ce.getAttribute("filename");
				ITernLinterConfigFactory factory = (ITernLinterConfigFactory) ce
						.createExecutableExtension("factory");
				TernLinterConfiguration configuration = new TernLinterConfiguration(
						factory, filename);
				map.put(linterId, configuration);
				Trace.trace(
						Trace.EXTENSION_POINT,
						"  Loaded console connectors: "
								+ ce.getAttribute("class"));
			} catch (Throwable t) {
				Trace.trace(
						Trace.SEVERE,
						"  Could not load console connectors: "
								+ ce.getAttribute("class"), t);
			}
		}
	}

	protected void handleTernLinterConfigurationDelta(IExtensionDelta delta) {
		if (ternLinterConfigurations == null) // not loaded yet
			return;

		IConfigurationElement[] cf = delta.getExtension()
				.getConfigurationElements();

		Map<String, TernLinterConfiguration> map = new HashMap<String, TernLinterConfiguration>(
				ternLinterConfigurations);
		if (delta.getKind() == IExtensionDelta.ADDED) {
			addTernLinterConfigurations(cf, map);
		} else {
			/*
			 * int size = list.size(); ITernConsoleConfiguration[] st = new
			 * ITernConsoleConfiguration[size]; list.toArray(st); int size2 =
			 * cf.length;
			 * 
			 * for (int i = 0; i < size; i++) { for (int j = 0; j < size2; j++)
			 * { if (st[i].getId().equals(cf[j].getAttribute("id"))) {
			 * st[i].dispose(); list.remove(st[i]); } } }
			 */
		}
		ternLinterConfigurations = map;
	}

	private void addRegistryListenerIfNeeded() {
		if (registryListenerIntialized)
			return;

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		registry.addRegistryChangeListener(this, TernLinterCorePlugin.PLUGIN_ID);
		registryListenerIntialized = true;
	}

	public void initialize() {

	}

	public void destroy() {
		if (ternLinterConfigurations == null) // not loaded yet
			return;
		ternLinterConfigurations.clear();
		ternLinterConfigurations = null;
		Platform.getExtensionRegistry().removeRegistryChangeListener(this);
	}

	@Override
	public ITernLinterConfig createLinterConfig(String linterId)
			throws IOException {
		loadTernLinterConfigurations();
		TernLinterConfiguration configuration = ternLinterConfigurations
				.get(linterId);
		return configuration.create();
	}

	@Override
	public String getFilename(String linterId) {
		loadTernLinterConfigurations();
		TernLinterConfiguration configuration = ternLinterConfigurations
				.get(linterId);
		return configuration.getFilename();
	}
}

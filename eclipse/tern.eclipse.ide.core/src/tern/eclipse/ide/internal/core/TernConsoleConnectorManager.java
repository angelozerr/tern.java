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

import tern.eclipse.ide.core.ITernConsoleConnector;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.server.ITernServer;

/**
 * Tern console connector manager.
 * 
 */
public class TernConsoleConnectorManager implements IRegistryChangeListener {

	private static final String EXTENSION_TERN_CONSOLE_CONNECTORS = "ternConsoleConnectors";

	private static final TernConsoleConnectorManager INSTANCE = new TernConsoleConnectorManager();

	private List<ITernConsoleConnector> ternConsoleConnectors;

	private boolean registryListenerIntialized;

	public static TernConsoleConnectorManager getManager() {
		return INSTANCE;
	}

	public TernConsoleConnectorManager() {
		this.registryListenerIntialized = false;
	}

	@Override
	public void registryChanged(final IRegistryChangeEvent event) {
		IExtensionDelta[] deltas = event.getExtensionDeltas(
				TernCorePlugin.PLUGIN_ID, EXTENSION_TERN_CONSOLE_CONNECTORS);
		if (deltas != null) {
			for (IExtensionDelta delta : deltas)
				handleTernServerConfigurationDelta(delta);
		}
	}

	public ITernConsoleConnector[] getTernServerConfigurations() {
		if (ternConsoleConnectors == null)
			loadTernServerConfigurations();

		ITernConsoleConnector[] st = new ITernConsoleConnector[ternConsoleConnectors
				.size()];
		ternConsoleConnectors.toArray(st);
		return st;
	}

	/**
	 * Load the tern server types.
	 */
	private synchronized void loadTernServerConfigurations() {
		if (ternConsoleConnectors != null)
			return;

		Trace.trace(Trace.EXTENSION_POINT,
				"->- Loading .ternConsoleConnectors extension point ->-");

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		IConfigurationElement[] cf = registry.getConfigurationElementsFor(
				TernCorePlugin.PLUGIN_ID, EXTENSION_TERN_CONSOLE_CONNECTORS);
		List<ITernConsoleConnector> list = new ArrayList<ITernConsoleConnector>(
				cf.length);
		addTernServerConfigurations(cf, list);
		addRegistryListenerIfNeeded();
		ternConsoleConnectors = list;

		Trace.trace(Trace.EXTENSION_POINT,
				"-<- Done loading .ternConsoleConnectors extension point -<-");
	}

	/**
	 * Load the tern server types.
	 */
	private synchronized void addTernServerConfigurations(
			IConfigurationElement[] cf, List<ITernConsoleConnector> list) {
		for (IConfigurationElement ce : cf) {
			try {
				list.add((ITernConsoleConnector) ce
						.createExecutableExtension("class"));
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

	protected void handleTernServerConfigurationDelta(IExtensionDelta delta) {
		if (ternConsoleConnectors == null) // not loaded yet
			return;

		IConfigurationElement[] cf = delta.getExtension()
				.getConfigurationElements();

		List<ITernConsoleConnector> list = new ArrayList<ITernConsoleConnector>(
				ternConsoleConnectors);
		if (delta.getKind() == IExtensionDelta.ADDED) {
			addTernServerConfigurations(cf, list);
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
		ternConsoleConnectors = list;
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
		if (ternConsoleConnectors == null) // not loaded yet
			return;
		ternConsoleConnectors.clear();
		ternConsoleConnectors = null;
		Platform.getExtensionRegistry().removeRegistryChangeListener(this);
	}

	/**
	 * Rturns the tern console connector to use for the given tern server.
	 * 
	 * @param server
	 * @return
	 */
	public ITernConsoleConnector getConnector(ITernServer server) {
		ITernConsoleConnector[] connectors = getTernServerConfigurations();
		for (ITernConsoleConnector connector : connectors) {
			if (connector.isAdaptFor(server)) {
				return connector;
			}
		}
		return null;
	}

}

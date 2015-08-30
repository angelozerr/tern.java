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
package tern.eclipse.ide.internal.core;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtensionDelta;
import org.eclipse.core.runtime.IExtensionRegistry;
import org.eclipse.core.runtime.IRegistryChangeEvent;
import org.eclipse.core.runtime.IRegistryChangeListener;
import org.eclipse.core.runtime.Platform;

import tern.ITernFile;
import tern.TernResourcesManager;
import tern.eclipse.ide.core.ITernFileConfiguration;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.server.protocol.html.IScriptTagRegionProvider;
import tern.server.protocol.html.ScriptTagRegion;

/**
 * Tern file configuration manager.
 * 
 */
public class TernFileConfigurationManager implements IRegistryChangeListener, IScriptTagRegionProvider {

	private static final String EXTENSION_TERN_FILE_CONFIGURATIONS = "ternFileConfigurations";

	private static final TernFileConfigurationManager INSTANCE = new TernFileConfigurationManager();

	private List<ITernFileConfiguration> ternFileConfigurations;

	private boolean registryListenerIntialized;

	public static TernFileConfigurationManager getManager() {
		return INSTANCE;
	}

	private TernFileConfigurationManager() {
		this.registryListenerIntialized = false;
	}

	@Override
	public void registryChanged(final IRegistryChangeEvent event) {
		IExtensionDelta[] deltas = event.getExtensionDeltas(
				TernCorePlugin.PLUGIN_ID, EXTENSION_TERN_FILE_CONFIGURATIONS);
		if (deltas != null) {
			for (IExtensionDelta delta : deltas)
				handleTernServerConfigurationDelta(delta);
		}
	}

	public ITernFileConfiguration[] getTernFileConfigurations() {
		if (ternFileConfigurations == null)
			loadTernServerConfigurations();

		ITernFileConfiguration[] st = new ITernFileConfiguration[ternFileConfigurations
				.size()];
		ternFileConfigurations.toArray(st);
		return st;
	}

	/**
	 * Load the tern server types.
	 */
	private synchronized void loadTernServerConfigurations() {
		if (ternFileConfigurations != null)
			return;

		Trace.trace(Trace.EXTENSION_POINT,
				"->- Loading .ternFileConfigurations extension point ->-");

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		IConfigurationElement[] cf = registry.getConfigurationElementsFor(
				TernCorePlugin.PLUGIN_ID, EXTENSION_TERN_FILE_CONFIGURATIONS);
		List<ITernFileConfiguration> list = new ArrayList<ITernFileConfiguration>(
				cf.length);
		addTernServerConfigurations(cf, list);
		addRegistryListenerIfNeeded();
		ternFileConfigurations = list;

		Trace.trace(Trace.EXTENSION_POINT,
				"-<- Done loading .ternFileConfigurations extension point -<-");
	}

	/**
	 * Load the tern server types.
	 */
	private synchronized void addTernServerConfigurations(
			IConfigurationElement[] cf, List<ITernFileConfiguration> list) {
		for (IConfigurationElement ce : cf) {
			try {
				list.add((ITernFileConfiguration) ce
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
		if (ternFileConfigurations == null) // not loaded yet
			return;

		IConfigurationElement[] cf = delta.getExtension()
				.getConfigurationElements();

		List<ITernFileConfiguration> list = new ArrayList<ITernFileConfiguration>(
				ternFileConfigurations);
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
		ternFileConfigurations = list;
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
		if (ternFileConfigurations == null) // not loaded yet
			return;
		ternFileConfigurations.clear();
		ternFileConfigurations = null;
		Platform.getExtensionRegistry().removeRegistryChangeListener(this);
	}

	/**
	 * Returns the list of script tags to use for the given HTML file and null
	 * otherwise.
	 * 
	 * @param file
	 *            the eclipse file.
	 * @return the list of script tags to use for the given HTML file and null
	 *         otherwise.
	 */
	public ScriptTagRegion[] getScriptTags(ITernFile file) {
		if (!TernResourcesManager.isHTMLFile(file)) {
			return null;
		}
		ScriptTagRegion[] tags = null;
		ITernFileConfiguration[] configurations = getTernFileConfigurations();
		for (ITernFileConfiguration configuration : configurations) {
			tags = configuration.getScriptTags(file);
			if (tags != null) {
				return tags;
			}
		}
		return ScriptTagRegion.DEFAULT_SCRIPT_TAGS;
	}
}

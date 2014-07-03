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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtensionDelta;
import org.eclipse.core.runtime.IExtensionRegistry;
import org.eclipse.core.runtime.IRegistryChangeEvent;
import org.eclipse.core.runtime.IRegistryChangeListener;
import org.eclipse.core.runtime.Platform;

import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.TernNature;
import tern.server.ITernModule;
import tern.utils.TernModuleHelper;

import com.eclipsesource.json.JsonObject;

/**
 * Manager of tern nature adapters loaded by the extension point
 * "ternNatureAdapters"
 *
 */
public class TernNatureAdaptersManager implements IRegistryChangeListener {

	private static final String EXTENSION_TERN_NATURE_ADAPTERS = "ternNatureAdapters";

	private static final TernNatureAdaptersManager INSTANCE = new TernNatureAdaptersManager();

	// cached copy of all tern nature adapaters
	private Map<String, List<String>> ternNatureAdapters;

	private boolean registryListenerIntialized;

	public static TernNatureAdaptersManager getManager() {
		return INSTANCE;
	}

	public TernNatureAdaptersManager() {
		this.registryListenerIntialized = false;
	}

	@Override
	public void registryChanged(final IRegistryChangeEvent event) {
		IExtensionDelta[] deltas = event.getExtensionDeltas(
				TernCorePlugin.PLUGIN_ID, EXTENSION_TERN_NATURE_ADAPTERS);
		if (deltas != null) {
			for (IExtensionDelta delta : deltas)
				handleTernNatureAdapterDelta(delta);
		}
	}

	/**
	 * Load the tern server types.
	 */
	private synchronized void loadTernNatureAdapters() {
		if (ternNatureAdapters != null)
			return;

		Trace.trace(Trace.EXTENSION_POINT,
				"->- Loading .ternNatureAdapters extension point ->-");

		IExtensionRegistry registry = Platform.getExtensionRegistry();
		IConfigurationElement[] cf = registry.getConfigurationElementsFor(
				TernCorePlugin.PLUGIN_ID, EXTENSION_TERN_NATURE_ADAPTERS);
		Map<String, List<String>> map = new HashMap<String, List<String>>(
				cf.length);
		addTernNatureAdapters(cf, map);
		addRegistryListenerIfNeeded();
		ternNatureAdapters = map;

		Trace.trace(Trace.EXTENSION_POINT,
				"-<- Done loading .ternNatureAdapters extension point -<-");
	}

	/**
	 * Load the tern project describers.
	 */
	private synchronized void addTernNatureAdapters(IConfigurationElement[] cf,
			Map<String, List<String>> map) {
		for (IConfigurationElement ce : cf) {
			try {
				map.put(ce.getAttribute("id"), getDefaultModules(ce));
				Trace.trace(Trace.EXTENSION_POINT,
						"  Loaded project describer: " + ce.getAttribute("id"));
			} catch (Throwable t) {
				Trace.trace(
						Trace.SEVERE,
						"  Could not load project describers: "
								+ ce.getAttribute("id"), t);
			}
		}
	}

	private List<String> getDefaultModules(IConfigurationElement ce) {
		List<String> defaultModules = new ArrayList<String>();
		for (IConfigurationElement dmce : ce.getChildren("defaultModules")) {
			for (IConfigurationElement mce : dmce.getChildren("module")) {
				String module = mce.getAttribute("name");
				if (module != null && !module.trim().isEmpty()) {
					defaultModules.add(module.trim());
				}
			}
		}
		return defaultModules;
	}

	protected void handleTernNatureAdapterDelta(IExtensionDelta delta) {
		if (ternNatureAdapters == null) // not loaded yet
			return;

		IConfigurationElement[] cf = delta.getExtension()
				.getConfigurationElements();

		Map<String, List<String>> map = new HashMap<String, List<String>>(
				ternNatureAdapters);
		if (delta.getKind() == IExtensionDelta.ADDED) {
			addTernNatureAdapters(cf, map);
		} else {
		}
		ternNatureAdapters = map;
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
		if (ternNatureAdapters == null) // not loaded yet
			return;
		Platform.getExtensionRegistry().removeRegistryChangeListener(this);
	}

	/**
	 * Returns true if the given project has tern nature and false otherwise.
	 * 
	 * @param project
	 * @return
	 */
	public boolean hasTernNature(IProject project) {
		if (project.isAccessible()) {
			try {
				// test if project has tern nature
				if (project.hasNature(TernNature.ID))
					return true;

				// use tern nature adapaters
				Map<String, List<String>> ternNatureAdapters = getTernNatureAdapters();
				for (String adaptToNature : ternNatureAdapters.keySet()) {
					if (project.hasNature(adaptToNature)) {
						return true;
					}
				}
			} catch (CoreException e) {
				Trace.trace(Trace.SEVERE, "Error tern nature", e);
			}
		}
		return false;
	}

	private Map<String, List<String>> getTernNatureAdapters() {
		if (ternNatureAdapters == null) {
			loadTernNatureAdapters();
		}
		return ternNatureAdapters;
	}

	/**
	 * Add default modules for the given tern project.
	 * 
	 * @param project tern project
	 * @throws CoreException
	 */
	public void addDefaultModules(IDETernProject project) throws CoreException {
		Map<String, List<String>> ternNatureAdapters = getTernNatureAdapters();
		for (String natureId : ternNatureAdapters.keySet()) {
			if (project.getProject().hasNature(natureId)) {
				List<String> defaultModules = ternNatureAdapters.get(natureId);
				for (String defaultModule : defaultModules) {
					ITernModule module = TernCorePlugin
							.getTernServerTypeManager().findTernModule(
									defaultModule);
					if (module != null) {
						JsonObject options = null;
						TernModuleHelper.update(module, options, project);
					}
				}
			}
		}
	}

}

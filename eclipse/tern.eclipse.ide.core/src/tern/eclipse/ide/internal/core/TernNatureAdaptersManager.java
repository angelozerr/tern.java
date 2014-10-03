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
import java.util.Collection;
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

import tern.eclipse.ide.core.ITernNatureCapability;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.TernNature;
import tern.metadata.TernModuleMetadata;
import tern.server.ITernModule;
import tern.utils.StringUtils;
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
	private Map<ITernNatureCapability, List<DefaultModule>> ternNatureAdapters;

	private boolean registryListenerIntialized;

	private static class DefaultModule {

		private final String name;
		private final boolean withDependencies;
		private final JsonObject options;

		public DefaultModule(String name, boolean withDependencies,
				JsonObject options) {
			this.name = name;
			this.withDependencies = withDependencies;
			this.options = options;
		}

		public String getName() {
			return name;
		}

		public boolean isWithDependencies() {
			return withDependencies;
		}

		public JsonObject getOptions() {
			return options;
		}
	}

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
		Map<ITernNatureCapability, List<DefaultModule>> map = new HashMap<ITernNatureCapability, List<DefaultModule>>(
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
			Map<ITernNatureCapability, List<DefaultModule>> map) {
		for (IConfigurationElement ce : cf) {
			String id = ce.getAttribute("id");
			String className = ce.getAttribute("class");
			try {
				if (!StringUtils.isEmpty(className)) {
					map.put((ITernNatureCapability)ce.createExecutableExtension("class"), getDefaultModules(ce));
				}
				else if (!StringUtils.isEmpty(id)) {
					map.put(new DefaultTernNatureAdapter(id), getDefaultModules(ce));
				}
				Trace.trace(Trace.EXTENSION_POINT,
						"  Loaded project describer: " + id != null ? id : className != null ? className : "");
			} catch (Throwable t) {
				Trace.trace(
						Trace.SEVERE,
						"  Could not load project describers: "
								+ id != null ? id : className != null ? className : "", t);
			}
		}
	}

	private List<DefaultModule> getDefaultModules(IConfigurationElement ce) {
		List<DefaultModule> defaultModules = new ArrayList<DefaultModule>();
		for (IConfigurationElement dmce : ce.getChildren("defaultModules")) {
			for (IConfigurationElement mce : dmce.getChildren("module")) {
				String module = mce.getAttribute("name");
				if (module != null && !module.trim().isEmpty()) {
					String name = module.trim();
					boolean withDependencies = StringUtils.asBoolean(
							mce.getAttribute("withDependencies"), false);
					JsonObject options = getOptions(mce.getAttribute("options"));
					defaultModules.add(new DefaultModule(name,
							withDependencies, options));
				}
			}
		}
		return defaultModules;
	}

	private JsonObject getOptions(String options) {
		if (!StringUtils.isEmpty(options)) {
			try {
				return JsonObject.readFrom(options);
			} catch (Throwable e) {

			}
		}
		return null;
	}

	protected void handleTernNatureAdapterDelta(IExtensionDelta delta) {
		if (ternNatureAdapters == null) // not loaded yet
			return;

		IConfigurationElement[] cf = delta.getExtension()
				.getConfigurationElements();

		Map<ITernNatureCapability, List<DefaultModule>> map = new HashMap<ITernNatureCapability, List<DefaultModule>>(
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
				Map<ITernNatureCapability, List<DefaultModule>> ternNatureAdapters = getTernNatureAdapters();
				for (ITernNatureCapability natureAdapter : ternNatureAdapters.keySet()) {
					if (natureAdapter.hasTernNature(project)) {
						return true;
					}
				}
			} catch (CoreException e) {
				Trace.trace(Trace.SEVERE, "Error tern nature", e);
			}
		}
		return false;
	}

	private Map<ITernNatureCapability, List<DefaultModule>> getTernNatureAdapters() {
		if (ternNatureAdapters == null) {
			loadTernNatureAdapters();
		}
		return ternNatureAdapters;
	}

	/**
	 * Add default modules for the given tern project.
	 *
	 * @param project
	 *            tern project
	 * @throws CoreException
	 */
	public void addDefaultModules(IDETernProject project) throws CoreException {
		Map<ITernNatureCapability, List<DefaultModule>> ternNatureAdapters = getTernNatureAdapters();
		for (ITernNatureCapability natureAdapter : ternNatureAdapters.keySet()) {
			if (natureAdapter.hasTernNature(project.getProject())) {
				List<DefaultModule> defaultModules = ternNatureAdapters.get(natureAdapter);
				for (DefaultModule defaultModule : defaultModules) {
					ITernModule module = TernCorePlugin
							.getTernServerTypeManager().findTernModule(
									defaultModule.getName());
					if (module != null) {
						// add the module with the options
						JsonObject options = defaultModule.getOptions();
						TernModuleHelper.update(module, options, project);
						if (defaultModule.isWithDependencies()) {
							// add modules dependencies
							TernModuleMetadata metadata = module.getMetadata();
							if (metadata != null) {
								Collection<String> dependencies = metadata
										.getDependencies();
								for (String dependency : dependencies) {
									ITernModule dependencyModule = TernCorePlugin
											.getTernServerTypeManager()
											.findTernModule(dependency);
									if (dependencyModule != null) {
										TernModuleHelper.update(
												dependencyModule, null,
												project);
									}
								}
							}
						}
					}
				}
			}
		}
	}

}

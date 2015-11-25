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
import org.eclipse.core.runtime.preferences.DefaultScope;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;

import tern.eclipse.ide.core.DefaultTernModule;
import tern.eclipse.ide.core.IDefaultTernModulesProvider;
import tern.eclipse.ide.core.ITernNatureCapability;
import tern.eclipse.ide.core.ITernRepositoryManager;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.preferences.TernCorePreferenceConstants;
import tern.eclipse.ide.internal.core.resources.IDETernProject;
import tern.metadata.TernModuleMetadata;
import tern.resources.TernProject;
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
	private Map<ITernNatureCapability, List<DefaultTernModule>> ternNatureAdapters;

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
		Map<ITernNatureCapability, List<DefaultTernModule>> map = new HashMap<ITernNatureCapability, List<DefaultTernModule>>(
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
			Map<ITernNatureCapability, List<DefaultTernModule>> map) {
		for (IConfigurationElement ce : cf) {
			String id = ce.getAttribute("id");
			String className = ce.getAttribute("class");
			try {
				if (!StringUtils.isEmpty(className)) {
					map.put((ITernNatureCapability) ce
							.createExecutableExtension("class"),
							getDefaultModules(ce));
				} else if (!StringUtils.isEmpty(id)) {
					map.put(new DefaultTernNatureAdapter(id),
							getDefaultModules(ce));
				}
				Trace.trace(Trace.EXTENSION_POINT,
						"  Loaded project describer: " + id != null ? id
								: className != null ? className : "");
			} catch (Throwable t) {
				Trace.trace(
						Trace.SEVERE,
						"  Could not load project describers: " + id != null ? id
								: className != null ? className : "", t);
			}
		}
	}

	private List<DefaultTernModule> getDefaultModules(IConfigurationElement ce) {
		List<DefaultTernModule> defaultModules = new ArrayList<DefaultTernModule>();
		for (IConfigurationElement dmce : ce.getChildren("defaultModules")) {
			for (IConfigurationElement mce : dmce.getChildren("module")) {
				String module = mce.getAttribute("name");
				if (module != null && !module.trim().isEmpty()) {
					String name = module.trim();
					boolean withDependencies = StringUtils.asBoolean(
							mce.getAttribute("withDependencies"), false);
					JsonObject options = getOptions(mce.getAttribute("options"));
					defaultModules.add(new DefaultTernModule(name,
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

		Map<ITernNatureCapability, List<DefaultTernModule>> map = new HashMap<ITernNatureCapability, List<DefaultTernModule>>(
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
				// test if project has a .tern-project file
				if (project.getFile(TernProject.TERN_PROJECT_FILE).exists())
					return true;

				// use tern nature adapaters
				Map<ITernNatureCapability, List<DefaultTernModule>> ternNatureAdapters = getTernNatureAdapters();
				for (ITernNatureCapability natureAdapter : ternNatureAdapters
						.keySet()) {
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

	private Map<ITernNatureCapability, List<DefaultTernModule>> getTernNatureAdapters() {
		if (ternNatureAdapters == null) {
			loadTernNatureAdapters();
		}
		return ternNatureAdapters;
	}

	/**
	 * Add default modules for the given tern project.
	 *
	 * @param ternProject
	 *            tern project
	 * @throws CoreException
	 */
	public void addDefaultModules(IDETernProject ternProject)
			throws CoreException {
		if (ternProject.hasModules()) {
			// tern project is not empty, don't add default modules
			return;
		}

		List<ITernModule> contributedModules = new ArrayList<ITernModule>();
		Map<ITernModule, JsonObject> moduleOptions = new HashMap<ITernModule, JsonObject>();

		// add default module from preferences
		ITernModule moduleFromPreferences = null;
		ITernModule[] modulesFromPreferences = getModulesFromPreferences(ternProject);
		for (int i = 0; i < modulesFromPreferences.length; i++) {
			moduleFromPreferences = modulesFromPreferences[i];
			if (!contributedModules.contains(moduleFromPreferences)) {
				contributedModules.add(moduleFromPreferences);
			}
		}

		// Add default module from extension point.
		ITernRepositoryManager repositoryManager = TernCorePlugin
				.getTernRepositoryManager();
		Map<ITernNatureCapability, List<DefaultTernModule>> ternNatureAdapters = getTernNatureAdapters();
		for (ITernNatureCapability natureAdapter : ternNatureAdapters.keySet()) {
			if (natureAdapter.hasTernNature(ternProject.getProject())) {
				Collection<DefaultTernModule> defaultModules = ternNatureAdapters
						.get(natureAdapter);
				// collect static default modules
				for (DefaultTernModule defaultModule : defaultModules) {
					collectionDefaultModule(defaultModule, ternProject,
							contributedModules, moduleOptions,
							repositoryManager);
				}
				// collect dynamic default modules
				if (natureAdapter instanceof IDefaultTernModulesProvider) {
					defaultModules = ((IDefaultTernModulesProvider) natureAdapter)
							.getTernModules(ternProject.getProject());
					if (defaultModules != null) {
						for (DefaultTernModule defaultModule : defaultModules) {
							collectionDefaultModule(defaultModule, ternProject,
									contributedModules, moduleOptions,
									repositoryManager);
						}
					}
				}
			}
		}

		// sort modules
		TernModuleHelper.sort(contributedModules);

		// loop for collected sorted modules
		JsonObject options = null;
		for (ITernModule module : contributedModules) {
			options = moduleOptions.get(module);
			TernModuleHelper.update(module, options, ternProject);
		}

	}

	private void collectionDefaultModule(DefaultTernModule defaultModule,
			IDETernProject ternProject, List<ITernModule> contributedModules,
			Map<ITernModule, JsonObject> moduleOptions,
			ITernRepositoryManager repositoryManager) {
		ITernModule module = repositoryManager.findTernModule(
				defaultModule.getName(), ternProject);
		if (module != null) {
			if (!contributedModules.contains(module)) {
				contributedModules.add(module);
				if (defaultModule.getOptions() != null) {
					moduleOptions.put(module, defaultModule.getOptions());
				}
			}
			if (defaultModule.isWithDependencies()) {
				// add modules dependencies
				TernModuleMetadata metadata = module.getMetadata();
				if (metadata != null) {
					Collection<String> dependencies = metadata
							.getDependencies(module.getVersion());
					for (String dependency : dependencies) {
						ITernModule dependencyModule = repositoryManager
								.findTernModule(dependency, ternProject);
						if (dependencyModule != null) {
							if (!contributedModules.contains(dependencyModule)) {
								contributedModules.add(dependencyModule);
							}
						}
					}
				}
			}
		}
	}

	private ITernModule[] getModulesFromPreferences(IDETernProject ternProject) {
		IScopeContext[] lookupOrder = new IScopeContext[] {
				InstanceScope.INSTANCE, DefaultScope.INSTANCE };
		String moduleNames = Platform.getPreferencesService().getString(
				TernCorePlugin.getDefault().getBundle().getSymbolicName(),
				TernCorePreferenceConstants.DEFAULT_TERN_MODULES,
				TernCorePreferenceConstants.DEFAULT_TERN_MODULES_VALUE,
				lookupOrder);
		return TernCorePlugin.getTernRepositoryManager().getTernModules(
				moduleNames, ternProject);
	}

}

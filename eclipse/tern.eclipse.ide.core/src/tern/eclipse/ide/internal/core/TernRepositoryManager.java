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

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.preferences.InstanceScope;

import tern.TernException;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.ITernRepositoryManager;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.preferences.TernCorePreferenceConstants;
import tern.eclipse.ide.internal.core.preferences.TernCorePreferencesSupport;
import tern.eclipse.ide.internal.core.resources.IDETernProject;
import tern.repository.ITernRepository;
import tern.repository.TernRepository;
import tern.server.ITernModule;
import tern.server.ITernPlugin;
import tern.utils.StringUtils;
import tern.utils.TernModuleHelper;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

/**
 * Manager of tern repository.
 *
 */
public class TernRepositoryManager implements ITernRepositoryManager {

	private static final TernRepositoryManager INSTANCE = new TernRepositoryManager();
	private static TernRepository DEFAULT_REPOSITORY;

	public static TernRepositoryManager getManager() {
		return INSTANCE;
	}

	private final Map<String, ITernRepository> repositories;

	public TernRepositoryManager() {
		this.repositories = new HashMap<String, ITernRepository>();
	}

	@Override
	public Collection<ITernRepository> getRepositories() {
		loadRepositoriesIfNeeded();
		return repositories.values();
	}

	/**
	 * Load tern repositories if needed.
	 */
	private void loadRepositoriesIfNeeded() {
		if (repositories.size() == 0) {
			loadRepositories();
		}
	}

	/**
	 * Load tern repositories.
	 */
	private synchronized void loadRepositories() {
		if (repositories.size() > 0) {
			// already loaded.
			return;
		}
		repositories.clear();
		// default repositories
		loadDefaultRepositories();
		// custom repositories
		loadCustomRepositories();
		// install external modules
		installExternalModules();
	}

	/**
	 * Deploy module contributions declared with extension point
	 * "tern.eclipse.ide.core.ternModuleContributions" in each tern
	 * repositories.
	 */
	private void installExternalModules() {
		TernModuleInstall[] modules = TernModuleInstallManager.getManager().getTernModuleInstalls();
		for (TernModuleInstall module : modules) {
			Collection<ITernRepository> reps = repositories.values();
			for (ITernRepository repository : reps) {
				try {
					repository.install(module.getSrc());
				} catch (Throwable e) {
					Trace.trace(Trace.SEVERE, "Cannot install module" + module.getName(), e);
				}
			}
		}
	}

	/**
	 * Load default tern repositories.
	 */
	private void loadDefaultRepositories() {
		addRepository(getDefaultRepository(), repositories);
	}

	/**
	 * Load custom tern repositories.
	 */
	private void loadCustomRepositories() {
		String values = new InstanceScope().getNode(TernCorePlugin.getDefault().getBundle().getSymbolicName())
				.get(TernCorePreferenceConstants.REPOSITORIES, null);
		if (!StringUtils.isEmpty(values)) {
			String[] s = values.split(REPOSITORY_SEPARATOR);
			String name = null;
			File ternFile = null;
			for (int i = 0; i < s.length / 2; i++) {
				name = s[i];
				ternFile = new File(s[i + 1]);
				addRepository(new TernRepository(name, ternFile), repositories);
			}
		}
	}

	private TernRepository getDefaultRepository() {
		if (DEFAULT_REPOSITORY != null) {
			return DEFAULT_REPOSITORY;
		}
		try {
			DEFAULT_REPOSITORY = createDefaultRepository();
		} catch (Throwable e) {
			Trace.trace(Trace.SEVERE, "Cannot load the default tern repository.", e);
		}
		return DEFAULT_REPOSITORY;
	}

	private synchronized TernRepository createDefaultRepository() throws TernException, IOException {
		if (DEFAULT_REPOSITORY != null) {
			return DEFAULT_REPOSITORY;
		}
		return new TernRepository(DEFAULT_REPOSITORY_NAME, TernCorePlugin.getTernBaseDir(), true);
	}

	private void addRepository(TernRepository repository, Map<String, ITernRepository> repositories) {
		if (repository != null) {
			repositories.put(repository.getName(), repository);
		}
	}

	@Override
	public ITernRepository getRepository(String name) {
		loadRepositoriesIfNeeded();
		return repositories.get(name);
	}

	private ITernRepository getRepository(IIDETernProject ternProject) {
		return getRepository(ternProject != null ? ternProject.getProject() : null);
	}

	@Override
	public ITernRepository getRepository(IProject project) {
		loadRepositoriesIfNeeded();
		String name = TernCorePreferencesSupport.getInstance().getUsedTernRepositoryName(project);
		if (!StringUtils.isEmpty(name)) {
			ITernRepository repository = getRepository(name);
			if (repository != null) {
				return repository;
			}
		}
		return getDefaultRepository();
	}

	@Override
	public void setRepositories(Collection<ITernRepository> repositories) {
		StringBuilder value = new StringBuilder();
		for (ITernRepository repository : repositories) {
			if (!repository.isDefault()) {
				if (value.length() > 0) {
					value.append(REPOSITORY_SEPARATOR);
				}
				value.append(repository.getName());
				value.append(REPOSITORY_SEPARATOR);
				value.append(repository.getTernBaseDirAsString());
			}
		}
		new InstanceScope().getNode(TernCorePlugin.getDefault().getBundle().getSymbolicName())
				.put(TernCorePreferenceConstants.REPOSITORIES, value.toString());
		loadRepositories();
	}

	@Override
	public List<ITernModule> getCheckedModules(IIDETernProject ternProject, List<ITernModule> allModules) {
		List<ITernModule> checkedModules = new ArrayList<ITernModule>();
		// Tern Plugins
		JsonValue options = null;
		JsonObject plugins = ternProject.getPlugins();
		for (String name : plugins.names()) {
			options = plugins.get(name);
			ITernModule plugin = findTernModule(name.toString(), ternProject);
			updateCheckedModule(plugin, options, allModules, checkedModules);
		}

		// JSON Type Definitions
		JsonArray defs = ternProject.getLibs();
		for (JsonValue name : defs) {
			ITernModule def = findTernModule(name.asString(), ternProject);
			updateCheckedModule(def, null, allModules, checkedModules);
		}
		return checkedModules;
	}

	@Override
	public List<ITernModule> getCheckedModules(String[] moduleNames, List<ITernModule> allModules,
			List<ITernModule> groupedModules) {
		List<ITernModule> checkedModules = new ArrayList<ITernModule>();
		for (String name : moduleNames) {
			ITernModule module = findTernModule(name, allModules);
			updateCheckedModule(module, null, groupedModules, checkedModules);
		}
		return checkedModules;
	}

	/**
	 * Update the checked modules with the given module.
	 * 
	 * @param module
	 * @param options
	 * @param allModules
	 * @param checkedModules
	 */
	private void updateCheckedModule(ITernModule module, JsonValue options, List<ITernModule> allModules,
			List<ITernModule> checkedModules) {
		if (module != null) {
			if (!TernModuleHelper.isConfigurableModule(module)) {
				addModule(module, checkedModules);
			} else {
				try {
					addModule(TernModuleHelper.findConfigurable(module, options, allModules), checkedModules);
				} catch (TernException e) {
					Trace.trace(Trace.SEVERE, "Error while finding configurable module.", e);
				}
			}
		}
	}

	private void addModule(ITernModule module, List<ITernModule> checkedModules) {
		if (!checkedModules.contains(module)) {
			checkedModules.add(module);
		}
	}

	@Override
	public ITernModule findTernModule(String name, IIDETernProject ternProject) {
		ITernRepository repository = getRepository(ternProject);
		ITernModule m = repository.getModule(name);
		if (m != null) {
			return m;
		}
		if (ternProject != null) {
			List<ITernModule> projectModules = ternProject.getProjectModules();
			return findTernModule(name, projectModules);
		}
		return null;
	}

	private ITernModule findTernModule(String name, List<ITernModule> projectModules) {
		if (projectModules != null) {
			for (ITernModule module : projectModules) {
				if (module.getName().equals(name)) {
					return module;
				}
			}
		}
		return null;
	}

	@Override
	public ITernModule[] getTernModules(String moduleNames, IDETernProject ternProject) {
		ITernModule module = null;
		List<ITernModule> modules = new ArrayList<ITernModule>();
		String[] names = moduleNames.split(",");
		for (int i = 0; i < names.length; i++) {
			module = findTernModule(names[i], ternProject);
			if (module != null) {
				addModule(module, modules);
			}
		}
		return modules.toArray(ITernPlugin.EMPTY_MODULE);
	}

}

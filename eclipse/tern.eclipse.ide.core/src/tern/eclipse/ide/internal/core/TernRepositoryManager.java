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
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceChangeEvent;
import org.eclipse.core.resources.IResourceChangeListener;
import org.eclipse.core.resources.IResourceDelta;
import org.eclipse.core.resources.IResourceDeltaVisitor;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.preferences.InstanceScope;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

import tern.TernException;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.IIDETernRepository;
import tern.eclipse.ide.core.ITernRepositoryManager;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.preferences.TernCorePreferenceConstants;
import tern.eclipse.ide.internal.core.preferences.TernCorePreferencesSupport;
import tern.eclipse.ide.internal.core.resources.IDETernProject;
import tern.server.ITernModule;
import tern.server.ITernPlugin;
import tern.utils.StringUtils;
import tern.utils.TernModuleHelper;

/**
 * Manager of tern repository.
 *
 */
public class TernRepositoryManager implements ITernRepositoryManager, IResourceChangeListener, IResourceDeltaVisitor {

	private static final TernRepositoryManager INSTANCE = new TernRepositoryManager();
	private static IIDETernRepository DEFAULT_REPOSITORY;

	public static TernRepositoryManager getManager() {
		return INSTANCE;
	}

	private final Map<String, IIDETernRepository> repositories;

	public TernRepositoryManager() {
		this.repositories = new HashMap<String, IIDETernRepository>();
	}

	public void initialize() {
		ResourcesPlugin.getWorkspace().addResourceChangeListener(this);
	}

	public void dispose() {
		ResourcesPlugin.getWorkspace().removeResourceChangeListener(this);
	}

	@Override
	public Collection<IIDETernRepository> getRepositories() {
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
			Collection<IIDETernRepository> reps = repositories.values();
			for (IIDETernRepository repository : reps) {
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
			File baseDir = null;
			for (int i = 0; i < s.length / 2; i++) {
				name = s[i];
				baseDir = new File(s[i + 1]);
				addRepository(createRepository(name, baseDir), repositories);
			}
		}
	}

	@Override
	public IIDETernRepository createRepository(String name, File baseDir) {
		return createRepository(name, baseDir, false);
	}

	private IIDETernRepository createRepository(String name, File baseDir, boolean isDefault) {
		return new IDETernRepository(name, baseDir, isDefault);
	}

	@Override
	public IIDETernRepository getDefaultRepository() {
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

	private synchronized IIDETernRepository createDefaultRepository() throws TernException, IOException {
		if (DEFAULT_REPOSITORY != null) {
			return DEFAULT_REPOSITORY;
		}
		return createRepository(DEFAULT_REPOSITORY_NAME, TernCorePlugin.getTernRepositoryBaseDir(), true);
	}

	private void addRepository(IIDETernRepository repository, Map<String, IIDETernRepository> repositories) {
		if (repository != null) {
			repositories.put(repository.getName(), repository);
		}
	}

	@Override
	public IIDETernRepository getRepository(String name) {
		loadRepositoriesIfNeeded();
		return repositories.get(name);
	}

	private IIDETernRepository getRepository(IIDETernProject ternProject) {
		return getRepository(ternProject != null ? ternProject.getProject() : null);
	}

	@Override
	public IIDETernRepository getRepository(IProject project) {
		loadRepositoriesIfNeeded();
		String name = TernCorePreferencesSupport.getInstance().getUsedTernRepositoryName(project);
		if (!StringUtils.isEmpty(name)) {
			IIDETernRepository repository = getRepository(name);
			if (repository != null) {
				return repository;
			}
		}
		return getDefaultRepository();
	}

	@Override
	public void setRepositories(Collection<IIDETernRepository> repositories) {
		StringBuilder value = new StringBuilder();
		for (IIDETernRepository repository : repositories) {
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
		IIDETernRepository repository = getRepository(ternProject);
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

	@Override
	public void resourceChanged(IResourceChangeEvent event) {
		try {
			IResource resource = event.getResource();
			switch (event.getType()) {
			case IResourceChangeEvent.PRE_DELETE:
				// called when project is deleted.
			case IResourceChangeEvent.PRE_CLOSE:
				// called when project is closed.
				if (resource != null && resource.getType() == IResource.PROJECT) {
					IProject project = (IProject) resource;
					disconnectProject(project);
				}
				break;
			case IResourceChangeEvent.POST_CHANGE:
				IResourceDelta delta = event.getDelta();
				if (delta != null) {
					delta.accept(this);
				}
				break;
			}
		} catch (Throwable e) {
			Trace.trace(Trace.SEVERE, "Error while tern repository synchronization", e);
		}
	}

	private void connectProject(IProject project) {
		for (IIDETernRepository repository : repositories.values()) {
			if (project.getLocation().equals(repository.getLocation())) {
				((IDETernRepository) repository).setProject(project);
			}
		}
	}

	private void disconnectProject(IProject project) {
		for (IIDETernRepository repository : repositories.values()) {
			if (project.equals(repository.getProject())) {
				((IDETernRepository) repository).setProject(null);
			}
		}
	}

	@Override
	public boolean visit(IResourceDelta delta) throws CoreException {
		IResource resource = delta.getResource();
		if (resource == null) {
			return false;
		}
		switch (resource.getType()) {
		case IResource.ROOT:
			return true;
		case IResource.PROJECT:
			IProject project = (IProject) resource;
			if (project.isOpen()
					&& (delta.getKind() == IResourceDelta.CHANGED || delta.getKind() == IResourceDelta.ADDED)
					&& (delta.getFlags() & IResourceDelta.OPEN) != 0) {
				connectProject(project);
			}
			return false;
		}

		return false;
	}

}

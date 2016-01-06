/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.core;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import tern.EcmaVersion;
import tern.TernException;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.IWorkingCopy;
import tern.eclipse.ide.core.IWorkingCopyListener;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.metadata.TernModuleMetadata;
import tern.repository.ITernRepository;
import tern.server.ITernModule;
import tern.server.TernDef;
import tern.server.TernPlugin;
import tern.utils.TernModuleHelper;

/**
 * Working copy implementation.
 */
public class WorkingCopy implements IWorkingCopy {

	private final IIDETernProject project;
	private final List<IWorkingCopyListener> listeners;
	private final List<Object> callers;
	private List<ITernModule> checkedModules;
	private List<ITernModule> workingCopyModules;
	private EcmaVersion ecmaVersion;
	private List<ITernModule> filteredModules;

	public WorkingCopy(IIDETernProject project) {
		this.project = project;
		this.callers = new ArrayList<Object>();
		this.listeners = new ArrayList<IWorkingCopyListener>();
	}

	public void initialize() throws TernException {
		clear();
		// Get local and global tern modules
		List<ITernModule> allModules = project.getAllModules();
		// Group by type
		workingCopyModules = TernModuleHelper.groupByType(allModules);
		// Filtered modules
		filteredModules = new ArrayList<ITernModule>();
		for (ITernModule module : workingCopyModules) {
			if (!(isIgnoreModule(module, TernDef.ecma5.getType())
					|| isIgnoreModule(module, TernPlugin.es_modules.getType())
					|| isIgnoreModule(module, TernPlugin.doc_comment.getType()))) {
				filteredModules.add(module);
			}
		}
		// checked modules
		List<ITernModule> checkedModules = new WorkingCopyModuleList(this,
				TernCorePlugin.getTernRepositoryManager().getCheckedModules(project, workingCopyModules));
		this.setCheckedModules(checkedModules);
		setEcmaVersion(project.getEcmaVersion());
	}
	
	private boolean isIgnoreModule(ITernModule module, String type) {
		return type.equals(module.getType());
	}

	public List<ITernModule> getCheckedModules() {
		return checkedModules;
	}

	private void setCheckedModules(List<ITernModule> checkedModules) {
		this.checkedModules = checkedModules;
	}

	@Override
	public void call(Object caller) {
		if (!callers.contains(caller)) {
			callers.add(caller);
		}
	}

	@Override
	public boolean isDirty() {
		return callers.size() == 0;
	}

	@Override
	public void commit(Object caller) throws IOException {
		removeCaller(caller);
		if (isDirty()) {
			try {
				// save tern project with updated tern modules
				ITernRepository repository = project.getRepository();
				// clear Plugin + JSON Type Definition
				project.clearPlugins();
				project.clearLibs();
				// Add Plugin + JSON Type Definition
				Collection<String> requiredDependencies = null;
				ITernModule dependencyModule = null;
				List<ITernModule> sortedModules = new ArrayList<ITernModule>();
				for (ITernModule module : this.getCheckedModules()) {
					TernModuleMetadata metadata = module.getMetadata();
					if (metadata != null) {
						// add required dependencies (ex : if ecma6 is checked,
						// ecma5 must
						// be added too).
						requiredDependencies = metadata.getRequiredDependencies(module.getVersion());
						for (String dependency : requiredDependencies) {
							dependencyModule = repository.getModule(dependency);
							if (dependencyModule != null && !sortedModules.contains(dependencyModule)) {
								sortedModules.add(dependencyModule);
							}
						}
					}
					if (module != null && !sortedModules.contains(module)) {
						sortedModules.add(module);
					}

				}
				TernModuleHelper.sort(sortedModules);
				for (ITernModule m : sortedModules) {
					TernModuleHelper.update(m, project);
				}
				if (ecmaVersion != null) {
					project.setEcmaVersion(ecmaVersion);
				}
				project.save();

			} finally {
				clear();
			}
		}
	}

	@Override
	public void clear() {
		this.callers.clear();
		this.listeners.clear();
		if (checkedModules != null) {
			checkedModules.clear();
		}
	}

	private void removeCaller(Object caller) {
		callers.remove(caller);
	}

	public boolean hasCheckedTernModule(String moduleName) {
		for (ITernModule checkedModule : checkedModules) {
			if (moduleName.equals(checkedModule.getName())) {
				return true;
			}
		}
		return false;
	}

	public ITernModule getTernModule(String moduleName) throws TernException {
		for (ITernModule module : workingCopyModules) {
			if (moduleName.equals(module.getName())) {
				return module;
			}
		}
		return null;
	}

	public void addWorkingCopyListener(IWorkingCopyListener listener) {
		synchronized (listener) {
			if (!listeners.contains(listener)) {
				listeners.add(listener);
			}
		}
	}

	public void removeWorkingCopyListener(IWorkingCopyListener listener) {
		synchronized (listener) {
			listeners.remove(listener);
		}
	}

	void fireSelectionModules(ITernModule module, boolean selected) {
		synchronized (listeners) {
			for (IWorkingCopyListener listener : listeners) {
				listener.moduleSelectionChanged(module, selected);
			}
		}
	}

	public List<ITernModule> getAllModules() {
		return workingCopyModules;
	}

	@Override
	public List<ITernModule> getFilteredModules() {
		return filteredModules;
	}

	@Override
	public IIDETernProject getProject() {
		return project;
	}

	@Override
	public void setEcmaVersion(EcmaVersion ecmaVersion) {
		this.ecmaVersion = ecmaVersion;
	}

	@Override
	public EcmaVersion getEcmaVersion() {
		return ecmaVersion;
	}
}

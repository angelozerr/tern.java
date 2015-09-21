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
package tern.metadata;

import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import tern.server.ITernModule;

/**
 * {@link Comparator} to sort modules by dependencies.
 * 
 * This sort is important when a tern plugin B which depends an other plugin A
 * must be loaded after A. For instance aui1.5.x which depends on yui3 must be
 * loaded after the yui3 tern plugin.
 *
 */
public class ModuleDependenciesComparator implements Comparator<ITernModule> {

	private final Map<ITernModule, Integer> modulesMap;

	public ModuleDependenciesComparator(List<ITernModule> modules, TernModuleMetadataManager manager) {
		modulesMap = new HashMap<ITernModule, Integer>();
		for (ITernModule module : modules) {
			updateRelevant(module, modules, modulesMap, manager);
		}
		Collections.sort(modules, this);
	}

	/**
	 * Returns the relevant of the given module computed with dependencies
	 * modules.
	 * 
	 * @param module
	 * @param modules
	 * @param modulesMap
	 * @param manager 
	 * @return the relevant of the given module computed with dependencies
	 *         modules.
	 */
	private int updateRelevant(ITernModule module, List<ITernModule> modules,
			Map<ITernModule, Integer> modulesMap, TernModuleMetadataManager manager) {
		if (modulesMap.containsKey(module)) {
			// relevant already computed, return it.
			return modulesMap.get(module);
		}
		// Compute relevant by using dependencies
		int relevant = 1;
		TernModuleMetadata metadata = manager != null ? manager.getMetadata(module.getType()) : module.getMetadata();
		if (metadata != null) {
			Collection<String> dependencies = metadata.getDependencies(module
					.getVersion());
			if (dependencies != null) {
				for (String dependency : dependencies) {
					ITernModule dependencyModule = getModule(dependency,
							modules);
					if (dependencyModule != null) {
						relevant += updateRelevant(dependencyModule, modules,
								modulesMap, manager);
					}
				}
			}
		}
		modulesMap.put(module, relevant);
		return relevant;
	}

	private ITernModule getModule(String name, List<ITernModule> modules) {
		for (ITernModule module : modules) {
			if (module.getName().equals(name)) {
				return module;
			}
		}
		return null;
	}

	@Override
	public int compare(ITernModule mod1, ITernModule mod2) {
		Integer relevant1 = modulesMap.get(mod1);
		Integer relevant2 = modulesMap.get(mod2);
		if (relevant1 != null && relevant2 != null) {
			return relevant1 - relevant2;
		}
		return 0;
	}

}

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
import java.util.Comparator;

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

	private static final ModuleDependenciesComparator INSTANCE = new ModuleDependenciesComparator();

	public static Comparator<ITernModule> getInstance() {
		return INSTANCE;
	}

	@Override
	public int compare(ITernModule mod1, ITernModule mod2) {
		TernModuleMetadata metadata1 = mod1.getMetadata();
		if (metadata1 == null) {
			return 0;
		}
		Collection<String> dependencies = metadata1.getDependencies(mod1
				.getVersion());
		if (dependencies == null) {
			return 0;
		}
		return dependencies.contains(mod2.getName()) ? 1000 : 500;
	}

}

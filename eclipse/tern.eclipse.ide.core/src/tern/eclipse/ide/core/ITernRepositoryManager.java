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
package tern.eclipse.ide.core;

import java.io.File;
import java.util.Collection;
import java.util.List;

import org.eclipse.core.resources.IProject;

import tern.eclipse.ide.internal.core.resources.IDETernProject;
import tern.repository.TernRepository;
import tern.server.ITernModule;

/**
 * Tern repository manager.
 *
 */
public interface ITernRepositoryManager {

	public static final String DEFAULT_REPOSITORY_NAME = "default";

	public static final String REPOSITORY_SEPARATOR = ";";

	// -------------------- Repository methods

	/**
	 * Returns list of tern repository.
	 * 
	 * @return list of tern repository.
	 */
	Collection<IIDETernRepository> getRepositories();

	/**
	 * Returns the default repository.
	 * 
	 * @return the default repository.
	 */
	IIDETernRepository getDefaultRepository();
	
	/**
	 * Returns the repository by name and null otherwise.
	 * 
	 * @param name
	 *            repository name
	 * @return the repository by name and null otherwise.
	 */
	IIDETernRepository getRepository(String name);

	/**
	 * Returns the repository used by the given project and null otherwise.
	 * 
	 * @param project
	 * @return the repository used by the given project and null otherwise.
	 */
	IIDETernRepository getRepository(IProject project);

	/**
	 * Register list of repostories.
	 * 
	 * @param repositories
	 */
	void setRepositories(Collection<IIDETernRepository> repositories);

	// -------------------- Modules methods

	List<ITernModule> getCheckedModules(IIDETernProject ternProject,
			List<ITernModule> allModules);

	List<ITernModule> getCheckedModules(String[] moduleNames,
			List<ITernModule> allModules, List<ITernModule> groupedModules);

	/**
	 * Returns the tern module (plugin or def) with the given name. Tern modules
	 * comes from :
	 * 
	 * <ul>
	 * <li>the tern repository {@link IIDETernRepository} linked to the given
	 * project.</li>
	 * <li>local modules hosted inside the root project</li>
	 * </ul>
	 * 
	 * @param name
	 *            of the module.
	 * @param project
	 *            tern project
	 * @return the tern module with the given name.
	 */
	ITernModule findTernModule(String name, IIDETernProject project);

	/**
	 * Returns list of known modules from the given string where module are
	 * separated with ','. Tern modules comes from :
	 * 
	 * <ul>
	 * <li>the tern repository {@link IIDETernRepository} linked to the given
	 * project.</li>
	 * <li>local modules hosted inside the root project</li>
	 * </ul>
	 * 
	 * @param moduleNames
	 *            modules names.
	 * @return list of known modules from the given string where module are
	 *         separated with ','.
	 */
	ITernModule[] getTernModules(String moduleNames, IDETernProject ternProject);

	IIDETernRepository createRepository(String name, File file);

}

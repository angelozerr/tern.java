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

import java.io.File;
import java.io.IOException;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.preferences.InstanceScope;

import tern.ITernRepository;
import tern.TernException;
import tern.TernRepository;
import tern.eclipse.ide.core.ITernRepositoryManager;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.preferences.TernCorePreferenceConstants;
import tern.eclipse.ide.internal.core.preferences.TernCorePreferencesSupport;
import tern.utils.StringUtils;

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
	private void loadRepositories() {
		synchronized (repositories) {
			repositories.clear();
			// default repositories
			loadDefaultRepositories();
			// custom repositories
			loadCustomRepositories();
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
		String values = new InstanceScope().getNode(
				TernCorePlugin.getDefault().getBundle().getSymbolicName()).get(
				TernCorePreferenceConstants.REPOSITORIES, null);
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
			Trace.trace(Trace.SEVERE,
					"Cannot load the default tern repository.", e);
		}
		return DEFAULT_REPOSITORY;
	}

	private synchronized TernRepository createDefaultRepository()
			throws TernException, IOException {
		if (DEFAULT_REPOSITORY != null) {
			return DEFAULT_REPOSITORY;
		}
		return new TernRepository(DEFAULT_REPOSITORY_NAME,
				TernCorePlugin.getTernBaseDir(), true);
	}

	private void addRepository(TernRepository repository,
			Map<String, ITernRepository> repositories) {
		if (repository != null) {
			repositories.put(repository.getName(), repository);
		}
	}

	@Override
	public ITernRepository getRepository(String name) {
		loadRepositoriesIfNeeded();
		return repositories.get(name);
	}

	@Override
	public ITernRepository getRepository(IProject project) {
		loadRepositoriesIfNeeded();
		String name = TernCorePreferencesSupport.getInstance()
				.getUsedTernRepositoryName(project);
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
		new InstanceScope().getNode(
				TernCorePlugin.getDefault().getBundle().getSymbolicName()).put(
				TernCorePreferenceConstants.REPOSITORIES, value.toString());
		loadRepositories();
	}
}

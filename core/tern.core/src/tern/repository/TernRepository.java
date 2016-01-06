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
package tern.repository;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import tern.TernException;
import tern.metadata.TernModuleMetadata;
import tern.metadata.TernModuleMetadataManager;
import tern.server.ITernModule;
import tern.server.ITernPlugin;
import tern.server.ModuleType;
import tern.utils.ExtensionUtils;
import tern.utils.IOUtils;
import tern.utils.TernModuleHelper;
import tern.utils.ZipUtils;

/**
 * Tern repository implementation.
 *
 */
public class TernRepository implements ITernRepository {

	private static final String DEFS_FOLDER = "defs";
	private static final String PLUGIN_FOLDER = "plugin";

	private static final List<String> IGNORE_PLUGINS = Arrays
			.asList(new String[] { "commonjs", "modules", "node_resolve" });

	private final String name;
	private File baseDir;
	private File nodeModulesDir;
	private File ternBaseDir;
	private final boolean defaultRepository;
	private Map<String, ITernModule> modules;
	private Map<String, ITernModule> modulesByOrigin;
	private ITernPlugin[] linters;
	private final TernModuleMetadataManager metadataManager;

	public TernRepository(String name, File baseDir) {
		this(name, baseDir, false);
	}

	public TernRepository(String name, File baseDir, boolean defaultRepository) {
		this.name = name;
		this.setBaseDir(baseDir);
		this.defaultRepository = defaultRepository;
		this.metadataManager = new TernModuleMetadataManager(this);
	}

	@Override
	public String getName() {
		return name;
	}

	@Override
	public ITernModule[] getModules() throws TernException {
		intializeIfNeeded();
		return modules.values().toArray(ITernModule.EMPTY_MODULE);
	}

	@Override
	public ITernModule getModule(String name) {
		try {
			intializeIfNeeded();
			return modules.get(name);
		} catch (TernException e) {
			return null;
		}
	}

	@Override
	public ITernModule getModuleByOrigin(String origin) {
		try {
			intializeIfNeeded();
			return modulesByOrigin.get(origin);
		} catch (TernException e) {
			return null;
		}
	}

	private void intializeIfNeeded() throws TernException {
		if (modules == null) {
			Map<String, ITernModule> modules = new HashMap<String, ITernModule>();
			Map<String, ITernModule> modulesByOrigin = new HashMap<String, ITernModule>();
			loadModules(modules, modulesByOrigin);
			this.modules = modules;
			this.modulesByOrigin = modulesByOrigin;
			linters = searchLinters(modules.values());
		}
	}

	private ITernPlugin[] searchLinters(Collection<ITernModule> values) {
		Collection<ITernPlugin> linters = new ArrayList<ITernPlugin>();
		for (ITernModule module : values) {
			if (module.getModuleType() == ModuleType.Plugin && ((ITernPlugin) module).isLinter()) {
				linters.add((ITernPlugin) module);
			}
		}
		return linters.toArray(ITernPlugin.EMPTY_PLUGIN);
	}

	private void loadModules(Map<String, ITernModule> modules, Map<String, ITernModule> modulesByOrigin)
			throws TernException {
		// defs
		loadModules(modules, modulesByOrigin, new File(getTernBaseDir(), DEFS_FOLDER), null);
		// plugin
		loadModules(modules, modulesByOrigin, new File(getTernBaseDir(), PLUGIN_FOLDER), IGNORE_PLUGINS);
		// node_modules
		loadModules(modules, modulesByOrigin, getNodeModulesDir(), null);
	}

	private void loadModules(Map<String, ITernModule> modules, Map<String, ITernModule> modulesByOrigin, File baseDir,
			List<String> ignoreModules) throws TernException {
		if (baseDir.exists()) {
			File[] files = baseDir.listFiles();
			File file = null;
			ITernModule module = null;
			for (int i = 0; i < files.length; i++) {
				file = files[i];
				module = TernModuleHelper.createModule(file, this, null);
				if (module != null && !isIgnoreModule(module, ignoreModules)) {
					modules.put(module.getName(), module);
					modulesByOrigin.put(module.getOrigin(), module);
				}
			}
		}
	}

	private boolean isIgnoreModule(ITernModule module, List<String> ignoreModules) {
		if (ignoreModules == null) {
			return false;
		}
		return ignoreModules.contains(module.getName());
	}

	@Override
	public void refresh() {
		this.modules = null;
	}
	
	@Override
	public File getBaseDir() {
		return baseDir;
	}
	
	@Override
	public void setBaseDir(File baseDir) {
		this.baseDir = baseDir;
		this.nodeModulesDir = new File(baseDir, "node_modules");
		this.ternBaseDir = new File(nodeModulesDir, "tern");
	}
	
	@Override
	public File getNodeModulesDir() {
		return nodeModulesDir;
	}
	
	@Override
	public File getTernBaseDir() {
		return ternBaseDir;
	}

	@Override
	public String getTernBaseDirAsString() {
		return TernModuleHelper.getPath(getTernBaseDir());
	}

	@Override
	public boolean isDefault() {
		return defaultRepository;
	}

	@Override
	public File getFile(ITernModule module) {
		// check if module is inside tern/defs or tern/plugin
		String fileName = TernModuleHelper.getFileName(module);
		File moduleFile = null;
		switch (module.getModuleType()) {
		case Plugin:
		case Configurable:
			moduleFile = new File(ternBaseDir,
					new StringBuilder(PLUGIN_FOLDER).append('/').append(fileName).toString());
			break;
		case Def:
			moduleFile = new File(ternBaseDir, new StringBuilder(DEFS_FOLDER).append('/').append(fileName).toString());
			break;
		}
		if (moduleFile.exists()) {
			return moduleFile;
		}
		moduleFile = new File(getNodeModulesDir(), new StringBuilder(ExtensionUtils.TERN_SUFFIX)
				.append(module.getName()).append('/').append(fileName).toString());
		if (moduleFile.exists()) {
			return moduleFile;
		}
		return null;
	}

	@Override
	public ITernPlugin[] getLinters() {
		try {
			intializeIfNeeded();
		} catch (TernException e) {
			e.printStackTrace();
			return ITernPlugin.EMPTY_PLUGIN;
		}
		return linters;
	}

	@Override
	public void install(File moduleFile) throws IOException, TernException {
		if (!moduleFile.exists()) {
			throw new TernException(
					"Cannot install module file <" + TernModuleHelper.getPath(moduleFile) + ">. It doesn't exist.");
		}
		File baseDir = getNodeModulesDir();
		if (!baseDir.exists()) {
			throw new TernException("Cannot install module file <" + TernModuleHelper.getPath(moduleFile)
					+ ">. Tern repository <" + TernModuleHelper.getPath(baseDir) + "> doesn't exists.");
		}
		if (ZipUtils.isZipFile(moduleFile) || ZipUtils.isJarFile(moduleFile)) {
			// Zip or JAR file, unzip it to the tern repository.
			ZipUtils.extract(moduleFile, baseDir);
		} else if (moduleFile.isDirectory()) {
			// Folder, copy this folder to the tern repository
			IOUtils.copy(moduleFile, new File(baseDir, moduleFile.getName()), false);
		} else {
			throw new TernException("Cannot install module file <" + TernModuleHelper.getPath(moduleFile)
					+ ">. It must be a folder or a zip/jar file.");
		}

	}

	@Override
	public TernModuleMetadata getDefaultMetadata(String moduleName) {
		return metadataManager.getMetadata(moduleName);
	}
}

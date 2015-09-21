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
package tern.utils;

import static tern.utils.ExtensionUtils.JSON_EXTENSION;
import static tern.utils.ExtensionUtils.JS_EXTENSION;
import static tern.utils.ExtensionUtils.TERN_SUFFIX;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

import tern.ITernProject;
import tern.TernException;
import tern.metadata.ModuleDependenciesComparator;
import tern.metadata.TernModuleMetadata;
import tern.metadata.TernModuleMetadataManager;
import tern.repository.ITernRepository;
import tern.server.BasicTernDef;
import tern.server.BasicTernPlugin;
import tern.server.ITernDef;
import tern.server.ITernModule;
import tern.server.ITernModuleConfigurable;
import tern.server.ITernPlugin;
import tern.server.ModuleType;
import tern.server.TernModuleConfigurable;
import tern.server.TernModuleInfo;

/**
 * Helper for {@link ITernModule}.
 *
 */
public class TernModuleHelper {

	/**
	 * Group the given list tern modules by {@link ITernModule#getType()}.
	 * 
	 * @param modules
	 * @param groupedModules
	 */
	public static List<ITernModule> groupByType(List<ITernModule> modules) {
		List<ITernModule> groupedModules = new ArrayList<ITernModule>();
		Map<String, TernModuleConfigurable> wrappers = null;
		for (ITernModule module : modules) {
			if (!isConfigurableModule(module)) {
				// module is not configurable, add it
				groupedModules.add(module);
			} else {
				// module is configurable (version can be customized, or
				// options), wrap it with TernModuleConfigurable
				if (wrappers == null) {
					wrappers = new HashMap<String, TernModuleConfigurable>();
				}
				TernModuleConfigurable wrapper = wrappers.get(module.getType());
				if (wrapper == null) {
					wrapper = new TernModuleConfigurable(module);
					wrappers.put(module.getType(), wrapper);
					groupedModules.add(wrapper);
				} else {
					wrapper.addModule(module);
				}
			}
		}
		return groupedModules;
	}

	/**
	 * Returns true if the given module can be configured and false otherwise.
	 * 
	 * @param module
	 * @return true if the given module can be configured and false otherwise.
	 */
	public static boolean isConfigurableModule(ITernModule module) {
		TernModuleMetadata metadata = module.getMetadata();
		return !StringUtils.isEmpty(module.getVersion())
				|| (metadata != null && (metadata.hasOptions() || metadata.isLinter()));
	}

	/**
	 * Update the given list of {@link ITernDef} or {@link ITernPlugin} by using
	 * the given module.
	 * 
	 * @param module
	 * @param defs
	 *            to update.
	 * @param plugins
	 *            to update.
	 */
	public static void update(List<ITernDef> defs, List<ITernPlugin> plugins, ITernModule module) {
		update(defs, plugins, null, module);
	}

	/**
	 * Update the given list of {@link ITernDef} or {@link ITernPlugin} by using
	 * the given module.
	 * 
	 * @param module
	 * @param defs
	 *            to update.
	 * @param plugins
	 *            to update.
	 */
	private static void update(List<ITernDef> defs, List<ITernPlugin> plugins, JsonValue options, ITernModule module) {
		switch (module.getModuleType()) {
		case Def:
			defs.add((ITernDef) module);
			break;
		case Plugin:
			plugins.add((ITernPlugin) module);
			break;
		case Configurable:
			ITernModule wrappedModule = ((ITernModuleConfigurable) module).getWrappedModule();
			JsonValue wrappedOptions = ((ITernModuleConfigurable) module).getOptions();
			update(defs, plugins, wrappedOptions, wrappedModule);
			break;
		}
	}

	/**
	 * Update the given tern project by using the given module.
	 * 
	 * @param module
	 * @param ternProject
	 */
	public static void update(ITernModule module, ITernProject ternProject) {
		update(module, null, ternProject);
	}

	/**
	 * Update the given tern project by using the given module.
	 * 
	 * @param module
	 * @param ternProject
	 */
	public static void update(ITernModule module, JsonValue options, ITernProject ternProject) {
		switch (module.getModuleType()) {
		case Def:
			ternProject.addLib((ITernDef) module);
			break;
		case Plugin:
			ternProject.addPlugin((ITernPlugin) module, options);
			break;
		case Configurable:
			ITernModule wrappedModule = ((ITernModuleConfigurable) module).getWrappedModule();
			JsonValue wrappedOptions = ((ITernModuleConfigurable) module).getOptions();
			update(wrappedModule, wrappedOptions, ternProject);
			break;
		}
	}

	/**
	 * Retrieve {@link ITernModuleConfigurable} for the given module inside the
	 * list of modules.
	 * 
	 * @param module
	 * @param options
	 * @param allModules
	 * @return
	 * @throws TernException
	 */
	public static ITernModuleConfigurable findConfigurable(ITernModule module, JsonValue options,
			List<ITernModule> allModules) throws TernException {
		String version = module.getVersion();
		ITernModuleConfigurable c;
		for (ITernModule f : allModules) {
			if (f.getModuleType() == ModuleType.Configurable && f.getType().equals(module.getType())) {
				c = ((ITernModuleConfigurable) f);
				if (!StringUtils.isEmpty(version)) {
					c.setVersion(version);
				}
				if (options != null) {
					if (options.isObject()) {
						// set a copy of the options.
						c.setOptions(new JsonObject((JsonObject) options));
					} else if (options.isNull()) {
						c.setOptions(options);
					}
				}
				return (ITernModuleConfigurable) f;
			}
		}
		return null;
	}

	/**
	 * Returns true if the given module has options and false otherwise.
	 * 
	 * @param module
	 * @return true if the given module has options and false otherwise.
	 */
	public static boolean hasOptions(ITernModule module) {
		if (module == null || module.getMetadata() == null) {
			return false;
		}
		return module.getMetadata().hasOptions();
	}

	public static ITernModule createModule(File file, ITernRepository repository, ITernRepository defaultRepository) {
		String filename = file.getName();
		if (file.isDirectory()) {
			if (filename.startsWith(TERN_SUFFIX)) {
				// the folder follows the syntax tern-{name} where name is the
				// tern plugin name.
				TernModuleInfo info = new TernModuleInfo(filename.substring(TERN_SUFFIX.length(), filename.length()));
				// try to get local or repository metadata.
				TernModuleMetadata metadata = getMetadata(info.getType(), file, repository, defaultRepository);
				if (metadata != null && metadata.isDef()) {
					return new BasicTernDef(info, metadata);
				}
				return new BasicTernPlugin(info, metadata);
			}
		} else if (file.isFile()) {
			// the module is (local file), try and guess the module type (*.json
			// or *.js)
			return createModule(filename, repository, defaultRepository);
		}
		return null;
	}

	/**
	 * Create tern module from the given file name and null if it's not a tern
	 * module.
	 * 
	 * @param filename
	 * @return tern module from the given file name and null if it's not a tern
	 *         module.
	 */
	public static ITernModule createModule(String filename, ITernRepository repository,
			ITernRepository defaultRepository) {
		int index = filename.lastIndexOf('.');
		if (index == -1) {
			// the file has none file extension, it's not a tern plugin.
			return null;
		}
		String fileExtension = filename.substring(index + 1, filename.length());
		filename = filename.substring(0, index);
		if (fileExtension.equals(JSON_EXTENSION)) {
			// the file is JSON file, it's a tern JSON Type Definition
			TernModuleInfo info = new TernModuleInfo(filename);
			TernModuleMetadata metadata = getMetadata(info.getType(), null, repository, defaultRepository);
			return new BasicTernDef(info, metadata);
		} else if (fileExtension.equals(JS_EXTENSION)) {
			// the file is JavaScript file, it's a tern plugin
			TernModuleInfo info = new TernModuleInfo(filename);
			TernModuleMetadata metadata = getMetadata(info.getType(), null, repository, defaultRepository);
			return new BasicTernPlugin(info, metadata);
		}
		// it's not a tern module
		return null;
	}

	/**
	 * Retrieve module metadata from the given module type and null otherwise.
	 * 
	 * @param moduleName
	 * @param moduleDir
	 *            search file metadata/${moduleName}.metadata.json
	 * @param repository
	 *            otherwise search in the repository of the module
	 * @param defaultRepository
	 *            otherwise search in the default repository.
	 * @return module metadata from the given module type and null otherwise.
	 */
	private static TernModuleMetadata getMetadata(String moduleName, File moduleDir, ITernRepository repository,
			ITernRepository defaultRepository) {
		TernModuleMetadata metadata = null;
		if (moduleDir != null && moduleDir.isDirectory()) {
			try {
				metadata = TernModuleMetadataManager.loadMetadata(moduleDir, moduleName);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		if (metadata == null && repository != null) {
			metadata = repository.getDefaultMetadata(moduleName);
		}
		if (metadata == null && defaultRepository != null) {
			metadata = defaultRepository.getDefaultMetadata(moduleName);
		}
		return metadata;
	}

	/**
	 * Returns the file path as string.
	 * 
	 * @param file
	 * @return the file path as string.
	 */
	public static String getPath(File file) {
		try {
			return file.getCanonicalPath();
		} catch (IOException e) {
			return file.getPath();
		}
	}

	/**
	 * Returns the file name of the given tern module.
	 * 
	 * @param module
	 * @return the file name of the given tern module.
	 */
	public static String getFileName(ITernModule module) {
		switch (module.getModuleType()) {
		case Def:
			return new StringBuilder(module.getName()).append('.').append(JSON_EXTENSION).toString();
		default:
			return new StringBuilder(module.getName()).append('.').append(JS_EXTENSION).toString();
		}
	}

	/**
	 * Sort the given list of modules by dependencies.
	 * 
	 * @param modules
	 */
	public static void sort(List<ITernModule> modules) {
		sort(modules, null);
	}
	
	public static void sort(List<ITernModule> modules, TernModuleMetadataManager manager) {
		new ModuleDependenciesComparator(modules, manager);
	}

	/**
	 * Format list modules as string.
	 * 
	 * @return format list modules as string.
	 */
	public static String getModulesAsString(ITernModule... modules) {
		StringBuilder s = new StringBuilder();
		for (int i = 0; i < modules.length; i++) {
			if (i > 0) {
				s.append(",");
			}
			s.append(modules[i].getName());
		}
		return s.toString();
	}

	/**
	 * Returns the label of the given module.
	 * 
	 * @param module
	 * @return the label of the given module.
	 */
	public static String getLabel(ITernModule module) {
		try {
			TernModuleMetadata metadata = module.getMetadata();
			if (metadata != null && !StringUtils.isEmpty(metadata.getLabel())) {
				return metadata.getLabel();
			}
		} catch (Exception e) {
			// Exception can be thrown if TernPlugin enum is used.
		}
		return module.getName();
	}

	
}

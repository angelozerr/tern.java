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
package tern.server;

import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

import tern.TernException;
import tern.metadata.TernModuleMetadata;
import tern.utils.StringUtils;

/**
 * Wrapper for {@link ITernModule} used to configure {@link ITernModule} :
 * 
 * <ul>
 * <li>version of the module</li>
 * <li>options of the module if it's a plugin</li>
 * </ul>
 *
 */
public class TernModuleConfigurable implements ITernModuleConfigurable {

	private ITernModule wrappedModule;
	private final Map<String, ITernModule> modules;
	private JsonValue options;

	public TernModuleConfigurable(ITernModule module) {
		this.modules = new LinkedHashMap<String, ITernModule>();
		this.wrappedModule = module;
		addModule(module);
	}

	@Override
	public String getName() {
		return wrappedModule.getName();
	}

	@Override
	public String getOrigin() {
		return wrappedModule.getOrigin();
	}

	@Override
	public String getType() {
		return wrappedModule.getType();
	}

	@Override
	public String getVersion() {
		return wrappedModule.getVersion();
	}

	@Override
	public ModuleType getModuleType() {
		return ModuleType.Configurable;
	}

	public void addModule(ITernModule module) {
		if (!StringUtils.isEmpty(module.getVersion())) {
			this.modules.put(module.getVersion(), module);
		}
	}

	@Override
	public ITernModule getWrappedModule() {
		return wrappedModule;
	}

	@Override
	public ITernModule setVersion(String version) throws TernException {
		ITernModule module = modules.get(version);
		if (module == null) {
			throw new TernException("Unsupported version " + version + " for type " + getType());
		}
		wrappedModule = module;
		return module;
	}

	@Override
	public Set<String> getAvailableVersions() {
		return modules.keySet();
	}

	@Override
	public TernModuleMetadata getMetadata() {
		return wrappedModule.getMetadata();
	}

	@Override
	public JsonObject getOptionsObject() {
		return options != null && options.isObject() ? (JsonObject) options : null;
	}

	
	@Override
	public JsonValue getOptions() {
		return options;
	}
	
	@Override
	public void setOptions(JsonValue options) {
		this.options = options;
	}

	@Override
	public ITernModule getModule(String name) {
		for (ITernModule module : modules.values()) {
			if (name.equals(module.getName())) {
				return module;
			}
		}
		return null;
	}

	@Override
	public Collection<ITernModule> getModules() {
		return modules.values();
	}

	@Override
	public boolean hasVersion() {
		return !modules.isEmpty();
	}

	@Override
	public String toString() {
		return getType();
	}

}

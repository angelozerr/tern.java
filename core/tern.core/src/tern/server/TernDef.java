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
package tern.server;

import tern.metadata.TernModuleMetadata;
import tern.metadata.TernModuleMetadataManager;

public enum TernDef implements ITernDef {

	browser("tern/defs/browser.json"), chai("tern/defs/chai.json"), ecma5(
			"tern/defs/ecma5.json"), jquery("tern/defs/jquery.json"), underscore(
			"tern/defs/underscore.json");

	private final String name;
	private final String type;
	private final String version;
	private final String path;
	private TernModuleMetadata metadata;

	private TernDef(String path) {
		this(null, null, null, path);
	}

	private TernDef(String name, String type, String version, String path) {
		this.name = name != null ? name : name();
		this.type = type != null ? type : name();
		this.version = version;
		this.path = path;
		this.metadata = null;
	}

	@Override
	public String getName() {
		return name != null ? name : name();
	}

	@Override
	public String getType() {
		return type;
	}

	@Override
	public String getVersion() {
		return version;
	}

	@Override
	public String getPath() {
		return path;
	}

	@Override
	public ModuleType getModuleType() {
		return ModuleType.Def;
	}

	public static ITernDef getTernDef(String name) {
		TernDef[] defs = values();
		TernDef def = null;
		for (int i = 0; i < defs.length; i++) {
			def = defs[i];
			if (def.getName().equals(name)) {
				return def;
			}
		}
		return null;
	}

	/**
	 * Returns the tern metadata and null otherwise.
	 * 
	 * @return the tern metadata and null otherwise.
	 */
	public TernModuleMetadata getMetadata() {
		if (metadata == null) {
			metadata = TernModuleMetadataManager.getInstance().getMetadata(
					getType());
		}
		return metadata;
	}

}

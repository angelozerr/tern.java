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

/**
 * Abstract class for basic tern moduleµ.
 * 
 * @author azerr
 *
 */
public abstract class AbstractBasicTernModule implements ITernModule {

	private final String name;
	private final String type;
	private final String version;
	private final ModuleType moduleType;
	private TernModuleMetadata metadata;

	public AbstractBasicTernModule(String name, ModuleType moduleType) {
		this.name = name;
		this.moduleType = moduleType;
		int index = getVersionIndex(name);
		if (index != -1) {
			this.type = name.substring(0, index);
			this.version = name.substring(index + 1, name.length());
		} else {
			this.type = name;
			this.version = null;
		}
	}

	private int getVersionIndex(String name) {
		int index = name.lastIndexOf("_");
		if (index != -1) {
			if (index < name.length()
					&& Character.isDigit(name.charAt(index + 1))) {
				return index;
			}
		}
		return -1;
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
	public String getName() {
		return name;
	}

	@Override
	public String getPath() {
		return null;
	}

	@Override
	public ModuleType getModuleType() {
		return moduleType;
	}

	@Override
	public TernModuleMetadata getMetadata() {
		if (metadata == null) {
			metadata = TernModuleMetadataManager.getInstance().getMetadata(
					getType());
		}
		return metadata;
	}
}

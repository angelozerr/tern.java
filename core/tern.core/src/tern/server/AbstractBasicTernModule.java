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
import tern.utils.StringUtils;

/**
 * Abstract class for basic tern moduleµ.
 * 
 */
public abstract class AbstractBasicTernModule extends TernModuleInfo implements
		ITernModule {

	private final ModuleType moduleType;
	private TernModuleMetadata metadata;

	public AbstractBasicTernModule(String name, ModuleType moduleType) {
		super(name);
		this.moduleType = moduleType;
	}

	public AbstractBasicTernModule(TernModuleInfo info, ModuleType moduleType) {
		super(info);
		this.moduleType = moduleType;
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

	@Override
	public String toString() {
		return getName();
	}

	@Override
	public String getOrigin() {
		String origin = null;
		TernModuleMetadata metadata = getMetadata();
		if (metadata != null) {
			origin = metadata.getOrigin();
		}
		return !StringUtils.isEmpty(origin) ? origin : getName();
	}
}

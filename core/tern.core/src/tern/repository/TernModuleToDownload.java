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
package tern.repository;

import tern.metadata.TernModuleMetadata;
import tern.server.AbstractBasicTernModule;
import tern.server.ModuleType;

import com.eclipsesource.json.JsonObject;

public class TernModuleToDownload extends AbstractBasicTernModule {

	private TernModuleMetadata metadata;

	public TernModuleToDownload(String name, JsonObject module) {
		super(name, getModuleType(module));
		this.metadata = new TernModuleMetadata(module, null);
	}

	private static ModuleType getModuleType(JsonObject module) {
		// TODO : retrieve module type
		return ModuleType.Plugin;
	}

	@Override
	public TernModuleMetadata getMetadata() {
		return metadata;
	}
}

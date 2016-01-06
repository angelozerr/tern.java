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
package tern.server;

import tern.metadata.TernModuleMetadata;

public enum TernDef implements ITernDef {

	browser("browser"),
	
	chai("chai"), 
	ecma5("ecma5"), 
	ecma6("ecma6"), 
	
	jquery("jquery"), 
	underscore("underscore"),
	titanium("titanium.json");

	private final String name;
	private final String type;
	private final String version;

	private TernDef(String name) {
		TernModuleInfo info = new TernModuleInfo(name);
		this.name = info.getName();
		this.type = info.getType();
		this.version = info.getVersion();
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
	public ModuleType getModuleType() {
		return ModuleType.Def;
	}

	@Override
	public String getOrigin() {
		return getName();
	}

	@Override
	public TernModuleMetadata getMetadata() {
		throw new UnsupportedOperationException();
	}

}

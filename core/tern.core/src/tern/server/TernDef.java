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

public enum TernDef implements ITernDef {

	browser("tern/defs/browser.json"), chai("tern/defs/chai.json"), ecma5(
			"tern/defs/ecma5.json"), jquery("tern/defs/jquery.json"), underscore(
			"tern/defs/underscore.json"), ;

	private final String path;

	private TernDef(String path) {
		this.path = path;
	}

	@Override
	public String getPath() {
		return path;
	}

	@Override
	public String getName() {
		return name();
	}

	@Override
	public boolean isPlugin() {
		return false;
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

}

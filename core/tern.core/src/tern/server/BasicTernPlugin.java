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

/**
 * Basic tern plugin.
 *
 */
public class BasicTernPlugin extends AbstractBasicTernModule implements
		ITernPlugin {

	private final String type;
	private final String version;

	public BasicTernPlugin(String name) {
		super(name, ModuleType.Plugin);
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

}

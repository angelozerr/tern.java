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
 * Tern module information.
 *
 */
public class TernModuleInfo {

	private final String name;
	private final String type;
	private final String version;

	public TernModuleInfo(String name) {
		int index = getVersionIndex(name);
		this.name = name;
		if (index != -1) {
			type = name.substring(0, index);
			version = name.substring(index, name.length());
		} else {
			type = name;
			version = null;
		}
	}

	public TernModuleInfo(TernModuleInfo info) {
		this.name = info.getName();
		this.type = info.getType();
		this.version = info.getVersion();
	}

	private static int getVersionIndex(String name) {
		char[] chars = name.toCharArray();
		for (int i = 0; i < chars.length; i++) {
			if (Character.isDigit(chars[i])) {
				return i;
			}
		}
		return -1;
	}

	/**
	 * Returns the name of the module.
	 * 
	 * @return the name of the module.
	 */
	public String getName() {
		return name;
	}

	/**
	 * Returns the type of the module.
	 * 
	 * @return the type of the module.
	 */
	public String getType() {
		return type;
	}

	/**
	 * Returns the version of the module.
	 * 
	 * @return the version of the module.
	 */
	public String getVersion() {
		return version;
	}
}

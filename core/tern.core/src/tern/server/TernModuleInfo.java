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

/**
 * Tern module information.
 *
 */
public class TernModuleInfo implements ITernModuleInfo {

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

	@Override
	public String getName() {
		return name;
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
	public boolean equals(Object o) {
		if ((o instanceof ITernModuleInfo)) {
			ITernModuleInfo module = (ITernModuleInfo) o;
			return (equals(name, module.getName()) && equals(type, module.getType())
					&& equals(version, module.getVersion()));
		}
		return false;
	}

	private boolean equals(Object o1, Object o2) {
		if (o1 == null) {
			return (o2 == null);
		}
		return o1.equals(o2);
	}
}

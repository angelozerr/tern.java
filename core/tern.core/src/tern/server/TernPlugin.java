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

public enum TernPlugin implements ITernPlugin {

	aui("tern/plugin/aui"), angular("tern/plugin/angular"), component(
			"tern/plugin/component"), cordovajs("tern/plugin/cordovajs"), doc_comment(
			"tern/plugin/doc_comment"), grunt("tern/plugin/grunt"), liferay(
			"tern/plugin/liferay"), lint("tern/plugin/lint"), node(
			"tern/plugin/node"), meteor("tern/plugin/meteor"), requirejs(
			"tern/plugin/requirejs"), yui("tern/plugin/yui");

	private final String path;

	private TernPlugin(String path) {
		this.path = path;
	}

	public String getPath() {
		return path;
	}

	public String getName() {
		return name();
	}

	public static ITernPlugin getTernPlugin(String name) {
		TernPlugin[] plugins = values();
		TernPlugin plugin = null;
		for (int i = 0; i < plugins.length; i++) {
			plugin = plugins[i];
			if (plugin.getName().equals(name)) {
				return plugin;
			}
		}
		return null;
	}
}

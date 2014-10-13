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

public enum TernPlugin implements ITernPlugin {

	aui("tern/plugin/aui"), angular("tern/plugin/angular"), chrome_apps(
			"chrome-apps", "chrome-apps", null, null), component(
			"tern/plugin/component"), ckeditor_4_4_1("ckeditor", "4.4.1"), closure(
			""), cordovajs("tern/plugin/cordovajs"), doc_comment(
			"tern/plugin/doc_comment"), dojotoolkit_1_6("dojotoolkit", "1.6"), dojotoolkit_1_8(
			"dojotoolkit", "1.8"), dojotoolkit_1_9("dojotoolkit", "1.9"), extjs_4_2_1(
			"extjs", "4.2.1"), extjs_5_0_0("extjs", "5.0.0"), gas(
			"tern/plugin/gas"), gmaps_3_16("gmaps", "3.16"), gmaps_3_17(
			"gmaps", "3.17"), grunt("tern/plugin/grunt"), liferay(
			"tern/plugin/liferay"), lint("tern/plugin/lint"), node_express(
			"node-express", "node-express", null, null), node_mongodb_native(
			"node-mongodb-native", "node-mongodb-native", null, null), node_mongoose(
			"node-mongoose", "node-mongoose", null, null), node(
			"tern/plugin/node"), meteor("tern/plugin/meteor"), qooxdoo_4_1(
			"qooxdoo", "4.1"), requirejs("tern/plugin/requirejs"), yui(
			"tern/plugin/yui");

	private final String name;
	private final String type;
	private final String version;
	private final String path;
	private TernModuleMetadata metadata;

	private TernPlugin(String path) {
		this(null, null, null, path);
	}

	private TernPlugin(String type, String version) {
		this(new StringBuilder(type).append("_").append(version).toString(),
				type, version, new StringBuilder("tern/plugin/").append(type)
						.append("_").append(version).toString());
	}

	private TernPlugin(String name, String type, String version, String path) {
		this.name = name != null ? name : name();
		this.type = type != null ? type : name();
		this.path = path;
		this.version = version;
		this.metadata = null;
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
	public String getPath() {
		return path;
	}

	@Override
	public ModuleType getModuleType() {
		return ModuleType.Plugin;
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

	@Override
	public TernModuleMetadata getMetadata() {
		if (metadata == null) {
			metadata = TernModuleMetadataManager.getInstance().getMetadata(
					getType());
		}
		return metadata;
	}
}

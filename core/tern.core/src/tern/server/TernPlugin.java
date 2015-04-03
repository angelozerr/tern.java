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

import java.util.ArrayList;
import java.util.Collection;

import tern.metadata.TernModuleMetadata;
import tern.metadata.TernModuleMetadataManager;

/**
 * Tern plugin.
 *
 */
public enum TernPlugin implements ITernPlugin {

	aui15("aui", "1.5.x"),
	aui2("aui", "2.0.x"), 
	angular("tern/plugin/angular"), 
	chrome_apps("chrome-apps", "chrome-apps", null, null), 
	component("tern/plugin/component"), 
	ckeditor_4_4_1("ckeditor", "4.4.1", true), 
	closure(""),
	cordovajs("tern/plugin/cordovajs"), 
	doc_comment("tern/plugin/doc_comment"), 
	dojotoolkit_1_6("dojotoolkit", "1.6", true), 
	dojotoolkit_1_8("dojotoolkit", "1.8", true), 
	dojotoolkit_1_9("dojotoolkit", "1.9", true), 
	extjs_4_2_1("extjs", "4.2.1", true), 
	extjs_5_0_0("extjs", "5.0.0", true), 
	guess_types("guess-types", "guess-types", null, null), 
	gmaps_3_16("gmaps", "3.16", true), 
	gmaps_3_17("gmaps", "3.17", true), 
	grunt("tern/plugin/grunt"),
	gulp("tern/plugin/gulp"),
	gas("tern/plugin/gas"), 
	liferay("tern/plugin/liferay"), 
	node_express("node-express", "node-express", null, null), 
	node_mongodb_native("node-mongodb-native", "node-mongodb-native", null, null), 
	node_mongoose("node-mongoose", "node-mongoose", null, null), 
	node("tern/plugin/node"), 
	tabris("tern-tabris"), 
	meteor("tern/plugin/meteor"), 
	qooxdoo_4_1("qooxdoo", "4.1", true), 
	requirejs("tern/plugin/requirejs"), 
	yui3("yui", "3"),

	// tern linter
	lint(null, null, null, null, true),
	eslint(null, null, null, null, true),
	jshint(null, null, null, null, true),
	jscs(null, null, null, null, true);

	private static final ITernPlugin[] linters = createLinters();
	
	private static ITernPlugin[] createLinters() {
		Collection<ITernPlugin> linters = new ArrayList<ITernPlugin>();
		TernPlugin[] plugins = values();
		for (TernPlugin plugin : plugins) {
			if (plugin.isLinter()) {
				linters.add(plugin);
			}
		}
		return linters.toArray(ITernPlugin.EMPTY_PLUGIN);
	}
	
	private final String name;
	private final String type;
	private final String version;
	private final String path;
	private final boolean linter;
	private TernModuleMetadata metadata;

	
	private TernPlugin(String path) {
		this(null, null, null, path);
	}

	private TernPlugin(String type, String version) {
		this(type, version, false);
	}

	private TernPlugin(String type, String version, boolean oldName) {
		this(new StringBuilder(type).append(oldName ? "_" : "").append(version)
				.toString(), type, version, new StringBuilder("tern/plugin/")
				.append(type).append("_").append(version).toString());
	}

	private TernPlugin(String name, String type, String version, String path) {
		this(name, type, version, path, false);
	}
	

	private TernPlugin(String name, String type, String version, String path, boolean linter) {
		this.name = name != null ? name : name();
		this.type = type != null ? type : name();
		this.path = path;
		this.version = version;
		this.linter = linter;
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

	public static ITernPlugin[] getLinters() {
		return linters;
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
	public boolean isLinter() {
		return linter;
	}
}

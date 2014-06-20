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

	aui("tern/plugin/aui"), angular("tern/plugin/angular"), component(
			"tern/plugin/component"), ckeditor_4_4_1("ckeditor_4.4.1",
			"ckeditor", "4.4.1", "tern/plugin/ckeditor_4.4.1"), cordovajs(
			"tern/plugin/cordovajs"), doc_comment("tern/plugin/doc_comment"), dojotoolkit_1_6(
			"dojotoolkit_1.6", "dojotoolkit", "1.6",
			"tern/plugin/dojotoolkit_1.6"), dojotoolkit_1_8("dojotoolkit_1.8",
			"dojotoolkit", "1.8", "tern/plugin/dojotoolkit_1.8"), dojotoolkit_1_9(
			"dojotoolkit_1.9", "dojotoolkit", "1.9",
			"tern/plugin/dojotoolkit_1.9"), extjs_4_2_1("extjs_4.2.1", "extjs",
			"4.2.1", "tern/plugin/extjs_4.2.1"), extjs_5_0_0("extjs_5.0.0",
			"extjs", "5.0.0", "tern/plugin/extjs_5.0.0"), gmaps_3_16(
			"gmaps_3.16", "gmaps", "3.16", "tern/plugin/gmaps_3.16"), gmaps_3_17(
			"gmaps_3.17", "gmaps", "3.17", "tern/plugin/gmaps_3.17"), grunt(
			"tern/plugin/grunt"), liferay("tern/plugin/liferay"), lint(
			"tern/plugin/lint"), node("tern/plugin/node"), meteor(
			"tern/plugin/meteor"), requirejs("tern/plugin/requirejs"), yui(
			"tern/plugin/yui");

	private final String name;
	private final String type;
	private final String version;
	private final String path;
	private TernModuleMetadata metadata;

	private TernPlugin(String path) {
		this(null, null, null, path);
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

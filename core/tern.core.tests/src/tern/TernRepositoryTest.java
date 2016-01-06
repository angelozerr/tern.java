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
package tern;

import java.io.File;

import org.junit.Assert;
import org.junit.Test;

import tern.repository.TernRepository;
import tern.server.ITernModule;
import tern.server.nodejs.process.PathHelper;

public class TernRepositoryTest {

	@Test
	public void defaultRepository() throws TernException {
		File ternBaseDir = PathHelper.getTernRepositoryDir();
		TernRepository repository = new TernRepository("default", ternBaseDir);
		ITernModule[] modules = repository.getModules();
		for (int i = 0; i < modules.length; i++) {
			System.err.println(modules[i].getName());
		}
		assertHasModule(repository, "browser");
		assertHasModule(repository, "chai");
		assertHasModule(repository, "ecma5");
		assertHasModule(repository, "jquery");
		assertHasModule(repository, "underscore");
		assertHasModule(repository, "angular");
		assertHasModule(repository, "ckeditor4.4.x", "ckeditor", "4.4.x");
		assertHasModule(repository, "dojotoolkit1.6", "dojotoolkit", "1.6");
		assertHasModule(repository, "dojotoolkit1.8", "dojotoolkit", "1.8");
		assertHasModule(repository, "dojotoolkit1.9", "dojotoolkit", "1.9");
		assertHasModule(repository, "extjs4.2.1", "extjs", "4.2.1");
		assertHasModule(repository, "extjs5.0.0", "extjs", "5.0.0");
		assertHasModule(repository, "gmaps3.exp", "gmaps", "3.exp");
		assertHasModule(repository, "gmaps3.frozen", "gmaps", "3.frozen");
		assertHasModule(repository, "gmaps3.ref", "gmaps", "3.ref");
		assertHasModule(repository, "grunt");
		assertHasModule(repository, "meteor");
		assertHasModule(repository, "node");
		assertHasModule(repository, "qooxdoo4.1", "qooxdoo", "4.1");
		assertHasModule(repository, "chrome-apps");
		assertHasModule(repository, "closure");
		assertHasModule(repository, "cordovajs");
		assertHasModule(repository, "gas");
		assertHasModule(repository, "jasmine");
		assertHasModule(repository, "liferay");
		assertHasModule(repository, "lint");
		assertHasModule(repository, "eslint");
		assertHasModule(repository, "jshint");
		assertHasModule(repository, "jscs");
		assertHasModule(repository, "node-express");
		assertHasModule(repository, "node-mongodb-native");
		assertHasModule(repository, "node-mongoose");
		assertHasModule(repository, "phaser");
		assertHasModule(repository, "tabris");
		assertHasModule(repository, "yui3", "yui", "3");
		assertHasModule(repository, "aui2.0.x", "aui", "2.0.x");
	}

	private void assertHasModule(TernRepository repository, String name)
			throws TernException {
		assertHasModule(repository, name, null, null);
	}

	private void assertHasModule(TernRepository repository, String name,
			String type, String version) throws TernException {
		boolean hasModule = hasModule(repository, name, type, version);
		Assert.assertTrue("Cannot find module '" + name + "'", hasModule);
	}

	private boolean hasModule(TernRepository repository, String name,
			String type, String version) throws TernException {
		ITernModule[] modules = repository.getModules();
		ITernModule module = null;
		for (int i = 0; i < modules.length; i++) {
			module = modules[i];
			if (name.equals(module.getName())) {
				if (!(type == null || type.equals(module.getType()))) {
					return false;
				}
				if (!(version == null || version.equals(module.getVersion()))) {
					return false;
				}
				return true;
			}
		}
		return false;
	}
}

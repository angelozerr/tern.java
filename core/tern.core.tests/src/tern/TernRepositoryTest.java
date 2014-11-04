package tern;

import java.io.File;

import org.junit.Assert;
import org.junit.Test;

import tern.server.ITernModule;
import tern.server.nodejs.process.PathHelper;

public class TernRepositoryTest {

	@Test
	public void defaultRepository() throws TernException {
		File ternFile = PathHelper.getNodejsTernBaseDir();
		TernRepository repository = new TernRepository("default", ternFile);
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
		assertHasModule(repository, "ckeditor_4.4.1", "ckeditor", "4.4.1");
		assertHasModule(repository, "component");
		assertHasModule(repository, "dojotoolkit_1.6", "dojotoolkit", "1.6");
		assertHasModule(repository, "dojotoolkit_1.8", "dojotoolkit", "1.8");
		assertHasModule(repository, "dojotoolkit_1.9", "dojotoolkit", "1.9");
		assertHasModule(repository, "extjs_4.2.1", "extjs", "4.2.1");
		assertHasModule(repository, "extjs_5.0.0", "extjs", "5.0.0");
		assertHasModule(repository, "gmaps_3.16", "gmaps", "3.16");
		assertHasModule(repository, "gmaps_3.17", "gmaps", "3.17");
		assertHasModule(repository, "grunt");
		assertHasModule(repository, "meteor");
		assertHasModule(repository, "node");
		assertHasModule(repository, "qooxdoo_4.1", "qooxdoo", "4.1");
		assertHasModule(repository, "chrome-apps");
		assertHasModule(repository, "closure");
		assertHasModule(repository, "cordovajs");
		assertHasModule(repository, "gas");
		assertHasModule(repository, "liferay");
		assertHasModule(repository, "lint");
		assertHasModule(repository, "node-express");
		assertHasModule(repository, "node-mongodb-native");
		assertHasModule(repository, "node-mongoose");
		//assertHasModule(repository, "yui_3", "yui", "3");
		//assertHasModule(repository, "aui_2.0.x", "aui", "2.0.x");
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

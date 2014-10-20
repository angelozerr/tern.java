/**
 *  Copyright (c) 2013-2014 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 */
package tern.resources;

import java.io.File;
import java.io.IOException;

import org.junit.Assert;
import org.junit.Test;

import tern.server.TernDef;
import tern.server.TernPlugin;

import com.eclipsesource.json.JsonObject;

public class TernProjectTest {

	@Test
	public void addLibs() {
		TernProject project = new TernProject(null);
		project.addLib(TernDef.browser);
		Assert.assertTrue(project.isDirty());
		project.setDirty(false);
		project.addLib(TernDef.browser);
		Assert.assertFalse(project.isDirty());
		Assert.assertEquals("{\"libs\":[\"browser\"]}", project.toString());
	}

	@Test
	public void loadAndAddLibs() throws IOException {
		// Save project
		File projectDir = new File(".");
		TernProject project1 = new TernProject(projectDir);
		project1.addLib(TernDef.ecma5);
		project1.save();

		// Load project
		TernProject project = new TernProject(projectDir);
		project.load();
		
		project.addLib(TernDef.browser);
		Assert.assertTrue(project.isDirty());
		project.setDirty(false);
		project.addLib(TernDef.browser);
		Assert.assertFalse(project.isDirty());
		Assert.assertEquals("{\"libs\":[\"ecma5\",\"browser\"]}", project.toString());
	}
	
	@Test
	public void addPlugins() {
		TernProject project = new TernProject(null);

		project.addPlugin(TernPlugin.angular);
		Assert.assertTrue(project.isDirty());

		project.setDirty(false);
		project.addPlugin(TernPlugin.angular);
		Assert.assertFalse(project.isDirty());
		Assert.assertEquals("{\"plugins\":{\"angular\":{}}}",
				project.toString());

		project.setDirty(false);
		project.addPlugin(TernPlugin.aui);
		Assert.assertTrue(project.isDirty());

		project.setDirty(false);
		project.addPlugin(TernPlugin.aui, new JsonObject());
		Assert.assertFalse(project.isDirty());
	}

	@Test
	public void loadAndAddPlugins() throws IOException {
		// Save project
		File projectDir = new File(".");
		TernProject project1 = new TernProject(projectDir);
		project1.addPlugin(TernPlugin.cordovajs);
		project1.save();

		// Load project
		TernProject project = new TernProject(projectDir);
		project.load();

		project.addPlugin(TernPlugin.angular);
		Assert.assertTrue(project.isDirty());

		project.setDirty(false);
		project.addPlugin(TernPlugin.angular);
		Assert.assertFalse(project.isDirty());
		Assert.assertEquals("{\"plugins\":{\"cordovajs\":{},\"angular\":{}}}",
				project.toString());

		project.setDirty(false);
		project.addPlugin(TernPlugin.aui);
		Assert.assertTrue(project.isDirty());

		project.setDirty(false);
		project.addPlugin(TernPlugin.aui, new JsonObject());
		Assert.assertFalse(project.isDirty());
	}
}

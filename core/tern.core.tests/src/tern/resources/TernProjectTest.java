/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
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

public class TernProjectTest {

	@Test
	public void addLibs() throws IOException {
		File projectDir = new File(".");
		TernProject project = new TernProject(projectDir);

		// add new lib, project should be dirty
		project.addLib(TernDef.browser);
		Assert.assertTrue(project.isDirty());
		Assert.assertEquals("{\"libs\":[\"browser\"]}", project.toString());

		// save the project, project should be NOT dirty
		project.save();
		Assert.assertFalse(project.isDirty());

		// add existing lib, project should be NOT dirty
		project.addLib(TernDef.browser);
		Assert.assertFalse(project.isDirty());

		Assert.assertEquals("{\"libs\":[\"browser\"]}", project.toString());

		// add new lib, project should be dirty
		project.addLib(TernDef.ecma5);
		Assert.assertTrue(project.isDirty());
		Assert.assertEquals("{\"libs\":[\"browser\",\"ecma5\"]}",
				project.toString());
	}

	@Test
	public void loadAndAddLibs() throws IOException {
		// Create a new project and save it
		File projectDir = new File(".");
		TernProject project1 = new TernProject(projectDir);

		// add new lib, project should be dirty
		project1.addLib(TernDef.ecma5);
		Assert.assertTrue(project1.isDirty());
		Assert.assertEquals("{\"libs\":[\"ecma5\"]}", project1.toString());

		// save the project, project should be NOT dirty
		project1.save();
		Assert.assertFalse(project1.isDirty());

		// Load project
		TernProject project = new TernProject(projectDir);
		project.load();
		// project was loaded, project should be NOT dirty
		Assert.assertFalse(project.isDirty());

		// add new lib, project should be dirty
		project.addLib(TernDef.browser);
		Assert.assertTrue(project.isDirty());

		// add existing lib, project should be dirty while it is not saved.
		project.addLib(TernDef.browser);
		Assert.assertTrue(project.isDirty());

		Assert.assertEquals("{\"libs\":[\"ecma5\",\"browser\"]}",
				project.toString());
	}

	@Test
	public void addPlugins() throws IOException {
		File projectDir = new File(".");
		TernProject project = new TernProject(projectDir);

		// add new plugin, project should be dirty
		project.addPlugin(TernPlugin.node);
		Assert.assertTrue(project.isDirty());
		Assert.assertEquals("{\"plugins\":{\"node\":{}}}", project.toString());

		// save the project, project should be NOT dirty
		project.save();
		Assert.assertFalse(project.isDirty());

		// add existing plugin, project should be NOT dirty
		project.addPlugin(TernPlugin.node);
		Assert.assertFalse(project.isDirty());

		Assert.assertEquals("{\"plugins\":{\"node\":{}}}", project.toString());

		// add new plugin, project should be dirty
		project.addPlugin(TernPlugin.aui2);
		Assert.assertTrue(project.isDirty());
		Assert.assertEquals("{\"plugins\":{\"node\":{},\"aui2.0.x\":{}}}",
				project.toString());
	}

	@Test
	public void loadAndAddPlugins() throws IOException {
		// Create a new project and save it
		File projectDir = new File(".");
		TernProject project1 = new TernProject(projectDir);

		// add new plugin, project should be dirty
		project1.addPlugin(TernPlugin.node);
		Assert.assertTrue(project1.isDirty());
		Assert.assertEquals("{\"plugins\":{\"node\":{}}}", project1.toString());

		// save the project, project should be NOT dirty
		project1.save();
		Assert.assertFalse(project1.isDirty());

		// Load project
		TernProject project = new TernProject(projectDir);
		project.load();
		// project was loaded, project should be NOT dirty
		Assert.assertFalse(project.isDirty());

		// add new plugin, project should be dirty
		project.addPlugin(TernPlugin.aui2);
		Assert.assertTrue(project.isDirty());

		// add existing plugin, project should be dirty while it is not saved.
		project.addPlugin(TernPlugin.aui2);
		Assert.assertTrue(project.isDirty());

		Assert.assertEquals("{\"plugins\":{\"node\":{},\"aui2.0.x\":{}}}",
				project.toString());
	}
}

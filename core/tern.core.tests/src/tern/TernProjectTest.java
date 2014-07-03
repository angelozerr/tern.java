package tern;

import org.junit.Assert;
import org.junit.Test;

import com.eclipsesource.json.JsonObject;

import tern.server.TernDef;
import tern.server.TernPlugin;

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
}

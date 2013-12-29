package tern.angular;

import java.util.Collection;

import org.junit.Test;

import tern.angular.modules.AngularModulesManager;
import tern.angular.modules.Module;

public class AngulaModulesManagerTest {

	@Test
	public void testName() throws Exception {
		Collection<Module> modules = AngularModulesManager.getInstance().getModules();
		for (Module module : modules) {
			System.err.println(module);
		}
	}
}

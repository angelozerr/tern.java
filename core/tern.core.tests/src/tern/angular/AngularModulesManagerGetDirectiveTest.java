package tern.angular;

import org.junit.Assert;
import org.junit.Test;

import tern.angular.modules.AngularModulesManager;
import tern.angular.modules.Directive;
import tern.angular.modules.DirectiveParameter;

public class AngularModulesManagerGetDirectiveTest {

	@Test
	public void testNgPluralize() throws Exception {
		Directive directive = AngularModulesManager.getInstance().getDirective(
				null, "ngPluralize", null);
		Assert.assertNotNull(directive);
		Assert.assertTrue(directive.hasParameters());
		DirectiveParameter parameter = directive.getParameter("count");
		Assert.assertNotNull(parameter);
	}
}

/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
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

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
package tern.angular;

import org.junit.Assert;
import org.junit.Test;

import tern.angular.modules.AngularModulesManager;
import tern.angular.modules.IDirectiveSyntax;
import tern.angular.modules.Restriction;

public class AngularModulesManagerCollectDirectivesTest {

	@Test
	public void testNg() throws Exception {

		MapDirectiveCollector collector = new MapDirectiveCollector();
		AngularModulesManager.getInstance().collectDirectives(null, null, "ng",
				null, null, null, collector);
		Assert.assertTrue(collector.getNames().contains("ngApp"));
		Assert.assertTrue(collector.getNames().contains("ngBind"));
	}

	@Test
	public void testNgA() throws Exception {

		MapDirectiveCollector collector = new MapDirectiveCollector();
		AngularModulesManager.getInstance().collectDirectives(null, null,
				"ngA", null, null, null, collector);
		Assert.assertTrue(collector.getNames().contains("ngApp"));
		Assert.assertFalse(collector.getNames().contains("ngBind"));
	}

	@Test
	public void testNgApp() throws Exception {

		MapDirectiveCollector collector = new MapDirectiveCollector();
		AngularModulesManager.getInstance().collectDirectives(null, null,
				"ngApp", null, null, null, collector);
		Assert.assertTrue(collector.getNames().contains("ngApp"));
		Assert.assertFalse(collector.getNames().contains("ngBind"));
	}

	@Test
	public void testNgApp1() throws Exception {

		MapDirectiveCollector collector = new MapDirectiveCollector();
		AngularModulesManager.getInstance().collectDirectives(null, null,
				"ngApp1", null, null, null, collector);
		Assert.assertEquals(0, collector.getNames().size());
	}

	@Test
	public void testTagsInput() throws Exception {

		MapDirectiveCollector collector = new MapDirectiveCollector();
		AngularModulesManager.getInstance().collectDirectives(null, "input",
				"ng", null, null, null, collector);
		Assert.assertTrue(collector.getNames().contains("ngApp"));
		Assert.assertTrue(collector.getNames().contains("ngModel"));
	}

	@Test
	public void testTagsDiv() throws Exception {

		MapDirectiveCollector collector = new MapDirectiveCollector();
		AngularModulesManager.getInstance().collectDirectives(null, "div",
				"ng", null, null, null, collector);
		Assert.assertTrue(collector.getNames().contains("ngApp"));
		Assert.assertFalse(collector.getNames().contains("ngModel"));
	}

	@Test
	public void testRestriction() throws Exception {

		MapDirectiveCollector collector = new MapDirectiveCollector();
		AngularModulesManager.getInstance().collectDirectives(null, null, "ng",
				null, null, Restriction.C, collector);
		// ngBind => restrict=AC
		Assert.assertTrue(collector.getNames().contains("ngBind"));
		Assert.assertFalse(collector.getNames().contains("ngModel"));
	}

	@Test
	public void testSyntax() throws Exception {

		IDirectiveSyntax syntax = new MockDirectiveSyntax();

		MapDirectiveCollector collector = new MapDirectiveCollector();
		AngularModulesManager.getInstance().collectDirectives(null, null, "ng",
				syntax, null, null, collector);
		Assert.assertFalse(collector.getNames().contains("ngBind"));
		Assert.assertTrue(collector.getNames().contains("ng-bind"));

	}
}

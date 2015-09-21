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
package tern.server.protocol.angular;

import org.junit.Assert;
import org.junit.Test;

import tern.TernException;
import tern.angular.AngularType;
import tern.angular.protocol.completions.TernAngularCompletionItem;
import tern.angular.protocol.completions.TernAngularCompletionsQuery;
import tern.server.protocol.TernDoc;

/**
 * Tests with tern angular controller completion.
 * 
 */
public abstract class AbstractAngularFilterCompletionTest extends
		AbstractTernServerAngularTest {

	@Test
	public void completionWithModuleControllersAndBadModule()
			throws TernException {
		TernDoc doc = createDocForCompletionModuleFilters(null);
		MockTernAngularCompletionCollector collector = new MockTernAngularCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 0);
	}

	@Test
	public void completionWithModuleControllersAndFilter() throws TernException {
		TernDoc doc = createDocForCompletionModuleFilters("phonecatFilters");
		MockTernAngularCompletionCollector collector = new MockTernAngularCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 1);
		TernAngularCompletionItem item = collector.get("checkmark");
		Assert.assertNotNull(item);
		Assert.assertEquals("phonecatFilters", item.getModule());
		Assert.assertEquals("checkmark", item.getName());
		//Assert.assertEquals("fn($scope: $scope, Phone: Resource.prototype)",
		//		item.getType());
		//Assert.assertEquals("myfile.js", item.getOrigin());
	}

	private TernDoc createDocForCompletionModuleFilters(String module) {
		String name = "myfile.js";

		String text = "angular.module('phonecatFilters', []).filter('checkmark', function() {";
		text += "\n  return function(input) {";
		text += "\n    return input ? '\u2713' : '\u2718';";
		text += "\n  };";
		text += "\n});";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null,  null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.filter);
		query.getScope().setModule(module);
		query.addFile("myfile.js");
		query.setExpression("c");

		doc.setQuery(query);
		return doc;
	}

}

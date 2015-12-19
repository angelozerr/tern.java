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
public abstract class Issue39 extends AbstractTernServerAngularTest {

	@Test
	public void issue39() throws TernException {
		TernDoc doc = createDoc("DiagApp");
		MockTernAngularCompletionCollector collector = new MockTernAngularCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 1);
		TernAngularCompletionItem item = collector.get("DiagCtrl");
		Assert.assertNotNull(item);
		Assert.assertEquals("DiagApp", item.getModule());
		Assert.assertEquals("DiagCtrl", item.getName());
		Assert.assertEquals(
				"fn($scope: $scope, $location: service.$location, $timeout: fn(fn: fn(), delay?: number, invokeApply?: bool) -> Promise, $anchorScroll: fn())",
				item.getType());
		Assert.assertEquals("myfile.js", item.getOrigin());
	}

	private TernDoc createDoc(String module) {
		String name = "myfile.js";

		String text = "var diagModule	= angular.module('DiagModule', []);";
		text += "\ndiagModule.controller('DiagCtrl', ['$scope', '$location', '$timeout', '$anchorScroll',";
		text += "\nfunction($scope, $location, $timeout, $anchorScroll) {";
		text += "\n}]);";
		text += "\nvar diagapp	= angular.module('DiagApp', ['DiagModule']);";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null,  null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.controller);
		query.getScope().setModule(module);
		query.setExpression("");

		doc.setQuery(query);
		return doc;
	}
}

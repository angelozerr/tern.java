/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
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
public abstract class AbstractAngularDirectiveCompletionTest extends
		AbstractTernServerAngularTest {

	@Test
	public void completionWithDirectiveWithController() throws TernException {
		TernDoc doc = createDocForCompletionDirectiveWithController("demoModule");
		MockTernAngularCompletionCollector collector = new MockTernAngularCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 1);
		TernAngularCompletionItem item = collector.get("phoneRowDirective");
		Assert.assertNotNull(item);
		Assert.assertEquals("demoModule", item.getModule());
		Assert.assertEquals("phoneRowDirective", item.getName());
	}

	private TernDoc createDocForCompletionDirectiveWithController(String module) {
		String name = "myfile.js";

		String text = "angular.module('demoModule').directive('phoneRowDirective', function() {";
		text += "\nreturn {";
		text += "\ncontroller : 'MyController'";
		text += "\n});";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null,  null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.directive);
		query.getScope().setModule(module);
		query.addFile("myfile.js");
		query.setExpression("");

		doc.setQuery(query);
		return doc;
	}

	@Test
	public void completionWithDirective() throws TernException {
		TernDoc doc = createDocForCompletionDirective("demoModule");
		MockTernAngularCompletionCollector collector = new MockTernAngularCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 1);
		TernAngularCompletionItem item = collector.get("phoneRowDirective");
		Assert.assertNotNull(item);
		Assert.assertEquals("demoModule", item.getModule());
		Assert.assertEquals("phoneRowDirective", item.getName());
	}

	private TernDoc createDocForCompletionDirective(String module) {
		String name = "myfile.js";

		String text = "angular.module('demoModule').directive('phoneRowDirective', function() {";
		text += "\nreturn {";
		text += "\ncontroller : function($scope, $element) {";
		text += "\n}";
		text += "\n});";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null,  null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.directive);
		query.getScope().setModule(module);
		query.addFile("myfile.js");
		query.setExpression("");

		doc.setQuery(query);
		return doc;
	}

	@Test
	public void completionWithDirectiveFnInArray() throws TernException {
		TernDoc doc = createDocForCompletionDirectiveFnInArray("ui.bootstrap.collapse");
		MockTernAngularCompletionCollector collector = new MockTernAngularCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 1);
		TernAngularCompletionItem item = collector.get("collapse");
		Assert.assertNotNull(item);
		Assert.assertEquals("ui.bootstrap.collapse", item.getModule());
		Assert.assertEquals("collapse", item.getName());
	}

	private TernDoc createDocForCompletionDirectiveFnInArray(String module) {
		String name = "myfile.js";

		String text = "angular.module('ui.bootstrap.collapse')";
		text += "\n.directive('collapse', ['$transition', function ($transition, $timeout) {";
		text += "\n}];";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null,  null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.directive);
		query.getScope().setModule(module);
		query.addFile("myfile.js");
		query.setExpression("");

		doc.setQuery(query);
		return doc;
	}

}

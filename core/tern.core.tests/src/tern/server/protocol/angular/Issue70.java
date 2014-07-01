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
import tern.angular.protocol.completions.TernAngularCompletionsQuery;
import tern.server.protocol.MockTernCompletionCollector;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.TernCompletionItem;

/**
 * Tests with tern angular model completion.
 * 
 */
public abstract class Issue70 extends AbstractTernServerAngularTest {

	@Test
	public void noCompletionWithTodosAndControllerAs() throws TernException {
		TernDoc doc = createDocForNoCompletionWithTodosAndControllerAs();
		MockTernCompletionCollector collector = new MockTernCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 0);
	}

	private TernDoc createDocForNoCompletionWithTodosAndControllerAs() {
		String name = "myfile.js";
		String text = "function TodoCtrl($scope) {" + "$scope.todos = ["
				+ "{text:'learn angular', done:true},"
				+ "{text:'build an angular app', done:false}];" + "}";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.model);
		query.getScope().getControllers().add("TodoCtrl as t");
		query.addFile("myfile.js");
		query.setExpression("to");

		doc.setQuery(query);
		return doc;
	}

	@Test
	public void completionWithTodosAndControllerAs() throws TernException {
		TernDoc doc = createDocForCompletionWithTodosAndControllerAs();
		MockTernCompletionCollector collector = new MockTernCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 1);
		TernCompletionItem item = collector.get("todos");
		Assert.assertNotNull(item);
	}

	private TernDoc createDocForCompletionWithTodosAndControllerAs() {
		String name = "myfile.js";
		String text = "function TodoCtrl($scope) {" + "$scope.todos = ["
				+ "{text:'learn angular', done:true},"
				+ "{text:'build an angular app', done:false}];" + "}";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.model);
		query.getScope().getControllers().add("TodoCtrl as t");
		query.addFile("myfile.js");
		query.setExpression("t.to");

		doc.setQuery(query);
		return doc;
	}

	@Test
	public void completionWithAs() throws TernException {
		TernDoc doc = createDocForCompletionWithAs();
		MockTernCompletionCollector collector = new MockTernCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 1);
		TernCompletionItem item = collector.get("t");
		Assert.assertNotNull(item);
	}

	private TernDoc createDocForCompletionWithAs() {
		String name = "myfile.js";
		String text = "function TodoCtrl($scope) {" + "$scope.todos = ["
				+ "{text:'learn angular', done:true},"
				+ "{text:'build an angular app', done:false}];" + "}";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.model);
		query.getScope().getControllers().add("TodoCtrl as t");
		query.addFile("myfile.js");
		query.setExpression("");

		doc.setQuery(query);
		return doc;
	}
}

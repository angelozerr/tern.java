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
package tern.server.protocol.angular;

import org.junit.Assert;
import org.junit.Test;

import tern.TernException;
import tern.angular.AngularType;
import tern.angular.protocol.completions.TernAngularCompletionsQuery;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.MockTernCompletionCollector;
import tern.server.protocol.completions.TernCompletionItem;

/**
 * Tests with tern angular module completion.
 * 
 */
public abstract class Issue24 extends AbstractTernServerAngularTest {

	@Test
	public void completionFunctionNoScope() throws TernException {

		// Add module
		TernDoc doc = createDocForAddModule();
		MockTernCompletionCollector collector = new MockTernCompletionCollector();
		server.request(doc, collector);
		// module exists
		TernCompletionItem item = collector.get("store");
		Assert.assertNotNull(item);
		Assert.assertTrue(collector.getCompletions().size() == 1);

		// Remove module
		doc = createDocForRemoveModule();
		collector = new MockTernCompletionCollector();
		server.request(doc, collector);
		// module doesn't exists
		item = collector.get("store");
		Assert.assertNull(item);
		Assert.assertTrue(collector.getCompletions().size() == 0);

		// Add module
		doc = createDocForAddModule();
		collector = new MockTernCompletionCollector();
		server.request(doc, collector);
		// module exists
		item = collector.get("store");
		Assert.assertNotNull(item);
		Assert.assertTrue(collector.getCompletions().size() == 1);

	}

	private TernDoc createDocForAddModule() {
		TernDoc doc = addModule();

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.module);
		query.setExpression("store");

		doc.setQuery(query);
		return doc;
	}

	public TernDoc addModule() {
		String name = "myfile.js";
		String text = "var app = angular.module('store',[]);";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null, null);
		return doc;
	}

	private TernDoc createDocForRemoveModule() {
		TernDoc doc = removeModule();

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.module);
		query.setExpression("store");

		doc.setQuery(query);
		return doc;
	}

	public TernDoc removeModule() {
		String name = "myfile.js";
		String text = "";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null, null);
		return doc;
	}
}

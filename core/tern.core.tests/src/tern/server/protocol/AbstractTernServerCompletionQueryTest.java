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
package tern.server.protocol;

import org.junit.Assert;
import org.junit.Test;

import tern.TernException;
import tern.server.AbstractTernServerTest;
import tern.server.protocol.completions.MockTernCompletionCollector;
import tern.server.protocol.completions.TernCompletionItem;
import tern.server.protocol.completions.TernCompletionsQuery;

/**
 * Tests with tern completion.
 * 
 */
public abstract class AbstractTernServerCompletionQueryTest extends
		AbstractTernServerTest {

	@Test
	public void completionWithMissingEnd() throws TernException {

		TernDoc doc = createTernDocWithMissingEnd();
		MockTernCompletionCollector collector = new MockTernCompletionCollector();
		try {
			server.request(doc, collector);
			Assert.assertTrue(false);
		} catch (TernException e) {
			Assert.assertEquals("TernError: missing .query.end field",
					e.getMessage());
		}
	}

	private TernDoc createTernDocWithMissingEnd() {
		String name = "myfile.js";
		String text = "var arr = [];arr.";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null, null);

		TernCompletionsQuery query = new TernCompletionsQuery(name, null);
		doc.setQuery(query);
		return doc;
	}

	@Test
	public void completionWithStringResult() throws TernException {
		TernDoc doc = createTernDocWithStringResult();
		MockTernCompletionCollector collector = new MockTernCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() > 0);
		TernCompletionItem item = collector.get("concat");
		Assert.assertNotNull(item);
		Assert.assertNull(item.getType());
	}

	private TernDoc createTernDocWithStringResult() {
		String name = "myfile.js";
		String text = "var arr = [];arr.";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null, null);

		TernCompletionsQuery query = new TernCompletionsQuery(name, 17);
		doc.setQuery(query);

		return doc;
	}

	@Test
	public void completionWithComplexResult() throws TernException {
		TernDoc doc = createTernDocWithComplexResult();
		MockTernCompletionCollector collector = new MockTernCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() > 0);
		TernCompletionItem item = collector.get("concat");
		Assert.assertNotNull(item);
		Assert.assertEquals("fn(other: [?])", item.getType());
	}

	private TernDoc createTernDocWithComplexResult() {
		String name = "myfile.js";
		String text = "var arr = [];arr.";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null, null);

		TernCompletionsQuery query = new TernCompletionsQuery(name, 17);
		query.setTypes(true);
		doc.setQuery(query);
		return doc;
	}

}

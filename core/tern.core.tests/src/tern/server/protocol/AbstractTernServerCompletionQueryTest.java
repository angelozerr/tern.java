package tern.server.protocol;

import org.junit.Assert;
import org.junit.Test;

import tern.TernException;
import tern.server.AbstractTernServerTest;
import tern.server.protocol.TernDoc;
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
		MapTernCompletionCollector collector = new MapTernCompletionCollector();
		try {
			server.request(doc, collector);
			Assert.assertTrue(false);
		} catch (Exception e) {
			Assert.assertTrue(e.getMessage(), true);
		}

	}

	private TernDoc createTernDocWithMissingEnd() {
		String name = "myfile.js";
		String text = "var arr = [];arr.";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null);

		TernCompletionsQuery query = new TernCompletionsQuery(name, null);
		doc.setQuery(query);
		return doc;
	}

	@Test
	public void completionWithStringResult() throws TernException {
		TernDoc doc = createTernDocWithStringResult();
		MapTernCompletionCollector collector = new MapTernCompletionCollector();
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
		doc.addFile(name, text, null);

		TernCompletionsQuery query = new TernCompletionsQuery(name, 17);
		doc.setQuery(query);

		return doc;
	}

	@Test
	public void completionWithComplexResult() throws TernException {
		TernDoc doc = createTernDocWithComplexResult();
		MapTernCompletionCollector collector = new MapTernCompletionCollector();
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
		doc.addFile(name, text, null);

		TernCompletionsQuery query = new TernCompletionsQuery(name, 17);
		query.setTypes(true);
		doc.setQuery(query);
		return doc;
	}

}

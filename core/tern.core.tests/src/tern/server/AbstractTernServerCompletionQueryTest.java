package tern.server;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;

import tern.TernException;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.ITernCompletionCollector;
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
		ITernCompletionCollector collector = new ITernCompletionCollector() {

			@Override
			public void addProposal(String name, String type, String origin,
					Object doc, int pos) {

			}
		};
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

		final List<String> completions = new ArrayList<String>();

		TernDoc doc = createTernDocWithStringResult();
		ITernCompletionCollector collector = new ITernCompletionCollector() {

			@Override
			public void addProposal(String name, String type, String origin,
					Object doc, int pos) {
				completions.add(name);
			}
		};
		server.request(doc, collector);
		Assert.assertTrue(completions.size() > 0);
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

		final List<String> completions = new ArrayList<String>();

		TernDoc doc = createTernDocWithComplexResult();
		ITernCompletionCollector collector = new ITernCompletionCollector() {

			@Override
			public void addProposal(String name, String type, String origin,
					Object doc, int pos) {
				completions.add(name);
			}
		};
		server.request(doc, collector);
		Assert.assertTrue(completions.size() > 0);
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

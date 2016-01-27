package tern.server;

import org.junit.Assert;
import org.junit.Test;

import tern.TernException;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.MockTernCompletionCollector;
import tern.server.protocol.definition.TernDefinitionQuery;

public abstract class AbstractTernExceptionTest extends AbstractTernServerTest{

	@Test
	public void noTypeFounAtPosition() throws TernException {

		TernDoc doc = createTernDocWithMissingEnd();
		MockTernCompletionCollector collector = new MockTernCompletionCollector();
		try {
			server.request(doc, collector);
			Assert.assertTrue(false);
		} catch (TernNoTypeFoundAtPositionException e) {
			Assert.assertTrue(true);
		}
	}

	private TernDoc createTernDocWithMissingEnd() {
		String name = "myfile.js";
		String text = "var arr = [];arr.";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null, null);

		TernDefinitionQuery query = new TernDefinitionQuery(name, 1);
		doc.setQuery(query);
		return doc;
	}

}

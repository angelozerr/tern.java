package tern.server;

import org.junit.Test;

import tern.TernException;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.ITernCompletionCollector;

public abstract class AbstractTernServerCompletionQueryTest extends
		AbstractTernServerTest {

	/**
	 * Simple test which starts the Tern server with Node.js
	 * 
	 * @throws TernException
	 */
	@Test
	public void startServerServer() throws TernException {

		TernDoc doc = createTernDoc();
		DefaultResponseHandler response = new DefaultResponseHandler(true);

		
		ITernCompletionCollector collector = new ITernCompletionCollector() {

			@Override
			public void addProposal(String name, String type, String origin,
					Object doc, int pos) {

			}
		};
		server.request(doc, collector);

		Object data = response.getData();
	}

	private TernDoc createTernDoc() {
		String name = "myfile.js";
		String text = "var arr = [];";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null);
		return doc;
	}
}

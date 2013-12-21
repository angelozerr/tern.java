package tern.server;

import org.junit.Test;

import tern.TernException;
import tern.server.protocol.TernDoc;

public abstract class AbstractTernServerAddFileTest extends
		AbstractTernServerTest {

	/**
	 * Simple test which starts the Tern server with Node.js
	 * 
	 * @throws TernException
	 */
	@Test
	public void addFile() throws TernException {

		TernDoc doc = createTernDoc();
		DefaultResponseHandler response = new DefaultResponseHandler(true);
		server.request(doc, response);

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

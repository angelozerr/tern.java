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
package tern.server.protocol;

import org.junit.Test;

import tern.TernException;
import tern.server.AbstractTernServerTest;
import tern.server.DefaultResponseHandler;

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
		doc.addFile(name, text, null, null);
		return doc;
	}
}

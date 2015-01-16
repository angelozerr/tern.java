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
package tern.server.protocol.guesstypes;

import java.util.Collection;

import org.junit.Assert;
import org.junit.Test;

import tern.ITernProject;
import tern.TernException;
import tern.server.AbstractTernServerTest;
import tern.server.TernDef;
import tern.server.TernPlugin;
import tern.server.protocol.TernDoc;

public abstract class AbstractTernServerGuessTypesTest extends
		AbstractTernServerTest {

	@Override
	protected ITernProject createProject() {
		ITernProject project = super.createProject();
		project.addPlugin(TernPlugin.guess_types);
		project.addLib(TernDef.ecma5);
		project.addLib(TernDef.browser);
		return project;
	}

	@Test
	public void guessTypes() throws TernException {
		TernDoc doc = createDoc();
		MockTernGuessTypesCollector collector = new MockTernGuessTypesCollector();
		server.request(doc, collector);

		int argsSize = collector.keySet().size();
		Assert.assertEquals(2, argsSize);

		// first arg is string type
		Collection<String> names = collector.get(0);
		Assert.assertNotNull(names);
		Assert.assertArrayEquals(new String[] { "name", "s", "y" },
				names.toArray());

		// second arg has none suggestion
		names = collector.get(1);
		Assert.assertNull(names);

		// three arg is bool type
		names = collector.get(2);
		Assert.assertNotNull(names);
		Assert.assertArrayEquals(new String[] { "true", "false", "closed", "b" },
				names.toArray());
	}

	private TernDoc createDoc() {
		String name = "myfile.js";
		String text = "document. //addEventListener(type, listener, capture)\n" + 
					   "var s = '', y = '', z = 10;\n" + 
					   "var f = function(e) {\n" +
					   "\n" + 
					   "}\n" +     
						"var g = function() {\n" + 
						"\n" + 
						"}\n" + 
						"var b = true";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null, null);

		TernGuessTypesQuery query = new TernGuessTypesQuery(name, 9,
				"addEventListener");
		query.setFile(name);
		doc.setQuery(query);

		return doc;
	}
}

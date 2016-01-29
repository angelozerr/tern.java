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
package tern.server.protocol.linter.lint;

import org.junit.Assert;
import org.junit.Test;

import tern.ITernProject;
import tern.TernException;
import tern.server.AbstractTernServerTest;
import tern.server.TernDef;
import tern.server.TernPlugin;
import tern.server.protocol.TernDoc;
import tern.server.protocol.lint.TernLintQuery;

public abstract class AbstractTernServerLintTest extends AbstractTernServerTest {

	@Override
	protected ITernProject createProject() {
		ITernProject project = super.createProject();
		project.addPlugin(TernPlugin.lint);
		project.addLib(TernDef.browser);
		return project;
	}

	@Test
	public void lint() throws TernException {
		TernDoc doc = createDoc();
		MockTernLintCollector messages = new MockTernLintCollector();
		server.request(doc, messages);
		// {"messages":[{"message":"Unknown property
		// 'getElem'","from":9,"to":16,"severity":"warning","file":"myfile.js"}]}

		Assert.assertEquals(1, messages.size());
		MockLintMessage message = messages.get(0);
		Assert.assertEquals("[lint]: Unknown property 'getElem'", message.message);
		Assert.assertNotNull(message.start);
		Assert.assertEquals(9L, message.start.longValue());
		Assert.assertNotNull(message.end);
		Assert.assertEquals(16L, message.end.longValue());
		Assert.assertEquals("warning", message.severity);
		Assert.assertEquals("myfile.js", message.file);
	}

	private TernDoc createDoc() throws TernException {
		String name = "myfile.js";
		String text = "document.getElem";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null, null);

		TernLintQuery query = TernLintQuery.create(TernPlugin.lint, false);
		query.setFile(name);
		doc.setQuery(query);

		return doc;
	}
}

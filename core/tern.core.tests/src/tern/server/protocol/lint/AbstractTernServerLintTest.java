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
package tern.server.protocol.lint;

import org.junit.Test;

import tern.ITernProject;
import tern.TernException;
import tern.server.AbstractTernServerTest;
import tern.server.TernDef;
import tern.server.TernPlugin;
import tern.server.protocol.TernDoc;

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
		ITernLintCollector collector = new MockTernLintCollector();
		server.request(doc, collector);

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

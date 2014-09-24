package tern.server.protocol.lint;

import org.junit.Test;

import tern.TernException;
import tern.TernProject;
import tern.server.AbstractTernServerTest;
import tern.server.TernDef;
import tern.server.TernPlugin;
import tern.server.protocol.MockTernLintCollector;
import tern.server.protocol.TernDoc;

public abstract class AbstractTernServerLintTest extends AbstractTernServerTest {

	@Override
	protected TernProject createProject() {
		TernProject project = super.createProject();
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

	private TernDoc createDoc() {
		String name = "myfile.js";
		String text = "document.getElem";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null, null);

		TernLintQuery query = new TernLintQuery();
		query.setFile(name);
		doc.setQuery(query);

		return doc;
	}
}

package tern.server.protocol.angular;

import org.junit.Assert;
import org.junit.Test;

import tern.TernException;
import tern.angular.AngularType;
import tern.angular.protocol.completions.TernAngularCompletionsQuery;
import tern.server.protocol.MapTernCompletionCollector;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.TernCompletionItem;

/**
 * Tests with tern angular module completion.
 * 
 */
public abstract class AbstractAngularModuleCompletionTest extends
		AbstractTernServerAngularTest {

	@Test
	public void noCompletionWithModule() throws TernException {
		TernDoc doc = createDocForNoCompletionModule();
		MapTernCompletionCollector collector = new MapTernCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 0);
	}

	private TernDoc createDocForNoCompletionModule() {
		String name = "myfile.js";
		String text = "angular.module('phonecatApp');"
				+ "angular.module('phonecatAnimations');";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.module);
		query.addFile("myfile.js");
		query.setExpression("m");
		
		doc.setQuery(query);
		return doc;
	}

	@Test
	public void completionWithModule() throws TernException {
		TernDoc doc = createDocForCompletionModule();
		MapTernCompletionCollector collector = new MapTernCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 2);
		TernCompletionItem item = collector.get("phonecatApp");
		Assert.assertNotNull(item);
		Assert.assertEquals("phonecatApp", item.getName());
		Assert.assertEquals("Module", item.getType());
		Assert.assertEquals("myfile.js", item.getOrigin());
	}

	private TernDoc createDocForCompletionModule() {
		String name = "myfile.js";
		String text = "angular.module('phonecatApp');"
				+ "angular.module('phonecatAnimations');";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.module);
		query.addFile("myfile.js");
		query.setExpression("");
		
		doc.setQuery(query);
		return doc;
	}

	@Test
	public void completionWithModuleStartsWith() throws TernException {
		TernDoc doc = createDocForCompletionModuleStartsWith();
		MapTernCompletionCollector collector = new MapTernCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 1);
		TernCompletionItem item = collector.get("phonecatAnimations");
		Assert.assertNotNull(item);
		Assert.assertEquals("phonecatAnimations", item.getName());
		Assert.assertEquals("Module", item.getType());
		Assert.assertEquals("myfile.js", item.getOrigin());
	}

	private TernDoc createDocForCompletionModuleStartsWith() {
		String name = "myfile.js";
		String text = "angular.module('phonecatApp');"
				+ "angular.module('phonecatAnimations');";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null);

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.module);
		query.setExpression("phonecatAn");
		query.addFile("myfile.js");
		
		doc.setQuery(query);
		return doc;
	}

	@Test
	public void completionWithModuleCheckFiles() throws TernException {
		server.addFile("myfile.js", "angular.module('phonecatAnimations');");
		server.addFile("myfile2.js", "angular.module('phonecatApp');");

		TernDoc doc = createDocForCompletionModuleCheckFiles();
		MapTernCompletionCollector collector = new MapTernCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 1);
		TernCompletionItem item = collector.get("phonecatAnimations");
		Assert.assertNotNull(item);
		Assert.assertEquals("phonecatAnimations", item.getName());
		Assert.assertEquals("Module", item.getType());
		Assert.assertEquals("myfile.js", item.getOrigin());
	}

	private TernDoc createDocForCompletionModuleCheckFiles() {
		TernDoc doc = new TernDoc();
		
		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.module);
		query.addFile("myfile.js");
		query.setExpression("");
		
		doc.setQuery(query);
		return doc;
	}
}

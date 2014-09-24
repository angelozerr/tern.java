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
package tern.server.protocol.angular;

import org.junit.Assert;
import org.junit.Test;

import tern.TernException;
import tern.angular.AngularType;
import tern.angular.protocol.definition.TernAngularDefinitionQuery;
import tern.server.protocol.MockTernDefinitionCollector;
import tern.server.protocol.TernDoc;

/**
 * Tests with tern angular module definition.
 * 
 */
public abstract class AbstractAngularModuleDefinitionTest extends
		AbstractTernServerAngularTest {

	@Test
	public void noDefinitionWithModule() throws TernException {
		TernDoc doc = createDocForNoDefinitionModule();
		MockTernDefinitionCollector collector = new MockTernDefinitionCollector();
		server.request(doc, collector);

		Assert.assertNull(collector.getFile());
	}

	private TernDoc createDocForNoDefinitionModule() {
		String name = "myfile.js";
		String text = "angular.module('phonecatApp');"
				+ "angular.module('phonecatAnimations');";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null,  null);

		TernAngularDefinitionQuery query = new TernAngularDefinitionQuery(
				AngularType.module);
		query.addFile("myfile.js");
		query.setExpression("m");

		doc.setQuery(query);
		return doc;
	}

	@Test
	public void definitionWithModule() throws TernException {
		TernDoc doc = createDocForDefinitionModule();
		MockTernDefinitionCollector collector = new MockTernDefinitionCollector();
		server.request(doc, collector);

		Assert.assertNotNull(collector.getFile());
		Assert.assertEquals("myfile.js", collector.getFile());
	}

	private TernDoc createDocForDefinitionModule() {
		String name = "myfile.js";
		String text = "angular.module('phonecatApp');"
				+ "angular.module('phonecatAnimations');";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null,  null);

		TernAngularDefinitionQuery query = new TernAngularDefinitionQuery(
				AngularType.module);
		query.addFile("myfile.js");
		query.setExpression("phonecatApp");

		doc.setQuery(query);
		return doc;
	}

	@Test
	public void definitionWithModuleCheckFiles() throws TernException {
		server.addFile("myfile.js", "angular.module('phonecatAnimations');");
		server.addFile("myfile2.js", "angular.module('phonecatAnimations');");

		TernDoc doc = createDocForDefinitionModuleCheckFiles();
		MockTernDefinitionCollector collector = new MockTernDefinitionCollector();
		server.request(doc, collector);

		Assert.assertNotNull(collector.getFile());
		Assert.assertEquals("myfile.js", collector.getFile());
	}

	private TernDoc createDocForDefinitionModuleCheckFiles() {
		TernDoc doc = new TernDoc();

		TernAngularDefinitionQuery query = new TernAngularDefinitionQuery(
				AngularType.module);
		query.addFile("myfile.js");
		query.setExpression("phonecatAnimations");

		doc.setQuery(query);
		return doc;
	}
}

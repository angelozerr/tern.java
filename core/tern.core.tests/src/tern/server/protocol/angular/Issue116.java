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
import tern.angular.protocol.completions.TernAngularCompletionsQuery;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.MockTernCompletionCollector;
import tern.server.protocol.completions.TernCompletionItem;

/**
 * Tests with tern angular model completion.
 * 
 */
public abstract class Issue116 extends AbstractTernServerAngularTest {

	@Test
	public void completionFunctionNoScope() throws TernException {
		TernDoc doc = createDocForFunctionNoScope();
		MockTernCompletionCollector collector = new MockTernCompletionCollector();
		server.request(doc, collector);

		Assert.assertTrue(collector.getCompletions().size() == 2);
		TernCompletionItem product = collector.get("product");
		Assert.assertNotNull(product);
		Assert.assertEquals("gem", product.getType());
		TernCompletionItem products = collector.get("products");
		Assert.assertNotNull(products);
		Assert.assertEquals("[gem]", products.getType());
	}

	private TernDoc createDocForFunctionNoScope() {
		TernDoc doc = createFile();

		TernAngularCompletionsQuery query = new TernAngularCompletionsQuery(
				AngularType.model);
		// module is named with the var id.
		query.getScope().setModule("#id");
		query.getScope().getControllers().add("StoreController");
		query.addFile("myfile.js");
		query.setExpression("product");

		doc.setQuery(query);
		return doc;
	}

	public TernDoc createFile() {
		String name = "myfile.js";
		String text = "var id ='store';\n"
				+ "var app = angular.module(id,[ ]);\n"
				+ "app.controller('StoreController', function(){\n"
				+ "this.product = gem;\n"
				+ "this.products = gems;\n"
				+ "});\n"
				+ "var gem = {\n"
				+ "name: 'Dodecahedron',price: 2.95,description: '. . .'};\n"
				+ "var gems = [gem];";

		TernDoc doc = new TernDoc();
		doc.addFile(name, text, null,  null);
		return doc;
	}
}

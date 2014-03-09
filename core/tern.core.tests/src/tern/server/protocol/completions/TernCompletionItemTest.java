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
package tern.server.protocol.completions;

import org.junit.Assert;
import org.junit.Test;

public class TernCompletionItemTest {

	@Test
	public void on() throws Exception {
		TernCompletionItem completion = new TernCompletionItem(
				"on",
				"fn(events: string, selector?: string, data?: ?, handler: fn(+jQuery.Event)) -> jQuery.fn",
				"jquery");
		Assert.assertEquals("on", completion.getName());
		Assert.assertTrue(completion.isFunction());
		Assert.assertFalse(completion.isArray());
		Assert.assertEquals("jQuery.fn", completion.getJsType());
		Assert.assertEquals("jquery", completion.getOrigin());
		Assert.assertNotNull(completion.getParameters());
		Assert.assertEquals(4, completion.getParameters().size());

		Parameter parameter = null;
		for (int i = 0; i < completion.getParameters().size(); i++) {
			parameter = completion.getParameters().get(i);
			switch (i) {
			case 0:
				Assert.assertEquals("events", parameter.getName());
				Assert.assertTrue(parameter.isRequired());
				Assert.assertEquals("string", parameter.getType());
				break;
			case 1:
				Assert.assertEquals("selector", parameter.getName());
				Assert.assertFalse(parameter.isRequired());
				Assert.assertEquals("string", parameter.getType());
				break;
			case 2:
				Assert.assertEquals("data", parameter.getName());
				Assert.assertFalse(parameter.isRequired());
				Assert.assertEquals("?", parameter.getType());
				break;
			case 3:
				Assert.assertEquals("handler", parameter.getName());
				Assert.assertTrue(parameter.isRequired());
				Assert.assertEquals("fn(+jQuery.Event)", parameter.getType());
				break;
			}
		}

		String[] allTypes = completion.expand();
		Assert.assertNotNull(allTypes);
		Assert.assertEquals(3, allTypes.length);
		Assert.assertEquals(
				"fn(events: string, handler: fn(+jQuery.Event)) -> jQuery.fn",
				allTypes[0]);
		Assert.assertEquals(
				"fn(events: string, selector?: string, handler: fn(+jQuery.Event)) -> jQuery.fn",
				allTypes[1]);
		Assert.assertEquals(
				"fn(events: string, data?: ?, handler: fn(+jQuery.Event)) -> jQuery.fn",
				allTypes[2]);
	}

	@Test
	public void addBack() throws Exception {
		TernCompletionItem completion = new TernCompletionItem("addBack",
				"fn(selector?: string) -> jQuery.fn", "jquery");
		Assert.assertEquals("addBack", completion.getName());
		Assert.assertTrue(completion.isFunction());
		Assert.assertFalse(completion.isArray());
		Assert.assertEquals("jQuery.fn", completion.getJsType());
		Assert.assertEquals("jquery", completion.getOrigin());
		Assert.assertNotNull(completion.getParameters());
		Assert.assertEquals(1, completion.getParameters().size());

		Parameter parameter = null;
		for (int i = 0; i < completion.getParameters().size(); i++) {
			parameter = completion.getParameters().get(i);
			switch (i) {
			case 0:
				Assert.assertEquals("selector", parameter.getName());
				Assert.assertFalse(parameter.isRequired());
				Assert.assertEquals("string", parameter.getType());
				break;
			}
		}

		String[] allTypes = completion.expand();
		Assert.assertNotNull(allTypes);
		Assert.assertEquals(1, allTypes.length);
		Assert.assertEquals("fn() -> jQuery.fn", allTypes[0]);
	}

	@Test
	public void jQuery() throws Exception {
		TernCompletionItem completion = new TernCompletionItem("jQuery",
				"fn(selector: string, context?: frameElement) -> jQuery.fn",
				"jquery");
		Assert.assertEquals("jQuery", completion.getName());
		Assert.assertTrue(completion.isFunction());
		Assert.assertFalse(completion.isArray());
		Assert.assertEquals("jQuery.fn", completion.getJsType());
		Assert.assertEquals("jquery", completion.getOrigin());
		Assert.assertNotNull(completion.getParameters());
		Assert.assertEquals(2, completion.getParameters().size());

		Parameter parameter = null;
		for (int i = 0; i < completion.getParameters().size(); i++) {
			parameter = completion.getParameters().get(i);
			switch (i) {
			case 0:
				Assert.assertEquals("selector", parameter.getName());
				Assert.assertTrue(parameter.isRequired());
				Assert.assertEquals("string", parameter.getType());
				break;
			case 1:
				Assert.assertEquals("context", parameter.getName());
				Assert.assertFalse(parameter.isRequired());
				Assert.assertEquals("frameElement", parameter.getType());
				break;
			}
		}

		String[] allTypes = completion.expand();
		Assert.assertNotNull(allTypes);
		Assert.assertEquals(1, allTypes.length);
		Assert.assertEquals("fn(selector: string) -> jQuery.fn", allTypes[0]);
	}

	@Test
	public void animate() throws Exception {
		TernCompletionItem completion = new TernCompletionItem(
				"animate",
				"fn(properties: ?, duration?: number, easing?: string, complete?: fn()) -> jQuery.fn",
				"jquery");
		Assert.assertEquals("animate", completion.getName());
		Assert.assertTrue(completion.isFunction());
		Assert.assertFalse(completion.isArray());
		Assert.assertEquals("jQuery.fn", completion.getJsType());
		Assert.assertEquals("jquery", completion.getOrigin());
		Assert.assertNotNull(completion.getParameters());
		Assert.assertEquals(4, completion.getParameters().size());

		Parameter parameter = null;
		for (int i = 0; i < completion.getParameters().size(); i++) {
			parameter = completion.getParameters().get(i);
			switch (i) {
			case 0:
				Assert.assertEquals("properties", parameter.getName());
				Assert.assertTrue(parameter.isRequired());
				Assert.assertEquals("?", parameter.getType());
				break;
			case 1:
				Assert.assertEquals("duration", parameter.getName());
				Assert.assertFalse(parameter.isRequired());
				Assert.assertEquals("number", parameter.getType());
				break;
			case 2:
				Assert.assertEquals("easing", parameter.getName());
				Assert.assertFalse(parameter.isRequired());
				Assert.assertEquals("string", parameter.getType());
				break;
			case 3:
				Assert.assertEquals("complete", parameter.getName());
				Assert.assertFalse(parameter.isRequired());
				Assert.assertEquals("fn()", parameter.getType());
				break;
			}
		}

		String[] allTypes = completion.expand();
		Assert.assertNotNull(allTypes);
		Assert.assertEquals(7, allTypes.length);
		Assert.assertEquals("fn(properties: ?) -> jQuery.fn", allTypes[0]);
		Assert.assertEquals(
				"fn(properties: ?, duration?: number) -> jQuery.fn",
				allTypes[1]);
		Assert.assertEquals("fn(properties: ?, easing?: string) -> jQuery.fn",
				allTypes[2]);
		Assert.assertEquals("fn(properties: ?, complete?: fn()) -> jQuery.fn",
				allTypes[3]);
		Assert.assertEquals(
				"fn(properties: ?, duration?: number, easing?: string) -> jQuery.fn",
				allTypes[4]);
		Assert.assertEquals(
				"fn(properties: ?, duration?: number, complete?: fn()) -> jQuery.fn",
				allTypes[5]);
		Assert.assertEquals(
				"fn(properties: ?, easing?: string, complete?: fn()) -> jQuery.fn",
				allTypes[6]);
	}

}

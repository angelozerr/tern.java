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
package tern.server.protocol.completions;

import org.junit.Assert;
import org.junit.Test;

public class TernCompletionItemTest {

	@Test
	public void on() throws Exception {
		TernCompletionItem completion = new TernCompletionItem(
				new TernCompletionProposalRec(
						"on",
						"fn(events: string, selector?: string, data?: ?, handler: fn(+jQuery.Event)) -> jQuery.fn",
						"a doc", "an url", "jquery"));
		Assert.assertEquals("on", completion.getName());
		Assert.assertTrue(completion.isFunction());
		Assert.assertFalse(completion.isArray());
		Assert.assertEquals("jQuery.fn", completion.getJsType());
		Assert.assertEquals("a doc", completion.getDoc());
		Assert.assertEquals("an url", completion.getURL());
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
		TernCompletionItem completion = new TernCompletionItem(
				new TernCompletionProposalRec("addBack",
						"fn(selector?: string) -> jQuery.fn", "a doc",
						"an url", "jquery"));
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
		TernCompletionItem completion = new TernCompletionItem(
				new TernCompletionProposalRec(
						"jQuery",
						"fn(selector: string, context?: frameElement) -> jQuery.fn",
						"a doc", "an url", "jquery"));
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
				new TernCompletionProposalRec(
						"animate",
						"fn(properties: ?, duration?: number, easing?: string, complete?: fn()) -> jQuery.fn",
						"a doc", "an url", "jquery"));
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

	@Test
	public void uppercase() throws Exception {
		TernCompletionItem completion = new TernCompletionItem(
				new TernCompletionProposalRec("uppercase",
						"fn(string) -> string", "a doc", "an url", "angular"));
		Assert.assertEquals("uppercase", completion.getName());
		Assert.assertTrue(completion.isFunction());
		Assert.assertFalse(completion.isArray());
		Assert.assertEquals("string", completion.getJsType());
		Assert.assertEquals("angular", completion.getOrigin());
		Assert.assertNotNull(completion.getParameters());
		Assert.assertEquals(1, completion.getParameters().size());

		Parameter parameter = null;
		for (int i = 0; i < completion.getParameters().size(); i++) {
			parameter = completion.getParameters().get(i);
			switch (i) {
			case 0:
				Assert.assertEquals("string", parameter.getName());
				Assert.assertTrue(parameter.isRequired());
				Assert.assertNull(parameter.getType());
				break;
			}
		}

		String[] allTypes = completion.expand();
		Assert.assertNotNull(allTypes);
		Assert.assertEquals(0, allTypes.length);
	}

	@Test
	public void map() throws Exception {
		TernCompletionItem completion = new TernCompletionItem(
				new TernCompletionProposalRec(
						"map",
						"fn(f: fn(elt: ?, i: number) -> ?, context?: ?) -> [!0.!ret]",
						"a doc", "an url", "ecma5"));
		Assert.assertEquals("map", completion.getName());
		Assert.assertTrue(completion.isFunction());
		Assert.assertFalse(completion.isArray());
		Assert.assertEquals("[!0.!ret]", completion.getJsType());
		Assert.assertEquals("ecma5", completion.getOrigin());
		Assert.assertNotNull(completion.getParameters());
		Assert.assertEquals(2, completion.getParameters().size());

		Parameter parameter = null;
		for (int i = 0; i < completion.getParameters().size(); i++) {
			parameter = completion.getParameters().get(i);
			switch (i) {
			case 0:
				Assert.assertEquals("f", parameter.getName());
				Assert.assertTrue(parameter.isRequired());
				Assert.assertEquals("fn(elt:?,i:number)->?",
						parameter.getType());
				break;
			case 1:
				Assert.assertEquals("context", parameter.getName());
				Assert.assertFalse(parameter.isRequired());
				Assert.assertEquals("?", parameter.getType());
				break;
			}
		}

		String[] allTypes = completion.expand();
		Assert.assertNotNull(allTypes);
		Assert.assertEquals(1, allTypes.length);
		Assert.assertEquals("fn(f: fn(elt:?,i:number)->?) -> [!0.!ret]",
				allTypes[0]);

	}

	@Test
	public void mix() throws Exception {
		TernCompletionItem completion = new TernCompletionItem(
				new TernCompletionProposalRec(
						"mix",
						"fn(receiver: fn(), supplier: fn(), overwrite?: bool, whitelist?: [string], mode?: number, merge?: bool) -> fn()",
						"a doc", "an url", "yui"));
		Assert.assertEquals("mix", completion.getName());
		Assert.assertTrue(completion.isFunction());
		Assert.assertFalse(completion.isArray());
		Assert.assertEquals("fn()", completion.getJsType());
		Assert.assertEquals("yui", completion.getOrigin());
		Assert.assertNotNull(completion.getParameters());
		Assert.assertEquals(6, completion.getParameters().size());

		Parameter parameter = null;
		for (int i = 0; i < completion.getParameters().size(); i++) {
			parameter = completion.getParameters().get(i);
			switch (i) {
			case 0:
				Assert.assertEquals("receiver", parameter.getName());
				Assert.assertTrue(parameter.isRequired());
				Assert.assertEquals("fn()", parameter.getType());
				break;
			case 1:
				Assert.assertEquals("supplier", parameter.getName());
				Assert.assertTrue(parameter.isRequired());
				Assert.assertEquals("fn()", parameter.getType());
				break;
			case 2:
				Assert.assertEquals("overwrite", parameter.getName());
				Assert.assertFalse(parameter.isRequired());
				Assert.assertEquals("bool", parameter.getType());
				break;
			case 3:
				Assert.assertEquals("whitelist", parameter.getName());
				Assert.assertFalse(parameter.isRequired());
				Assert.assertEquals("[string]", parameter.getType());
				break;
			case 4:
				Assert.assertEquals("mode", parameter.getName());
				Assert.assertFalse(parameter.isRequired());
				Assert.assertEquals("number", parameter.getType());
				break;
			case 5:
				Assert.assertEquals("merge", parameter.getName());
				Assert.assertFalse(parameter.isRequired());
				Assert.assertEquals("bool", parameter.getType());
				break;

			}
		}

		String[] allTypes = completion.expand();
		Assert.assertNotNull(allTypes);
		Assert.assertEquals(13, allTypes.length);
		Assert.assertEquals("fn(receiver: fn(), supplier: fn()) -> fn()",
				allTypes[0]);
		Assert.assertEquals(
				"fn(receiver: fn(), supplier: fn(), overwrite?: bool) -> fn()",
				allTypes[1]);
		Assert.assertEquals(
				"fn(receiver: fn(), supplier: fn(), whitelist?: [string]) -> fn()",
				allTypes[2]);
		Assert.assertEquals(
				"fn(receiver: fn(), supplier: fn(), mode?: number) -> fn()",
				allTypes[3]);
		Assert.assertEquals(
				"fn(receiver: fn(), supplier: fn(), merge?: bool) -> fn()",
				allTypes[4]);
		Assert.assertEquals(
				"fn(receiver: fn(), supplier: fn(), overwrite?: bool, whitelist?: [string]) -> fn()",
				allTypes[5]);
		Assert.assertEquals(
				"fn(receiver: fn(), supplier: fn(), overwrite?: bool, mode?: number) -> fn()",
				allTypes[6]);
		Assert.assertEquals(
				"fn(receiver: fn(), supplier: fn(), overwrite?: bool, merge?: bool) -> fn()",
				allTypes[7]);
		Assert.assertEquals(
				"fn(receiver: fn(), supplier: fn(), whitelist?: [string], mode?: number) -> fn()",
				allTypes[8]);
		Assert.assertEquals(
				"fn(receiver: fn(), supplier: fn(), whitelist?: [string], merge?: bool) -> fn()",
				allTypes[9]);
		Assert.assertEquals(
				"fn(receiver: fn(), supplier: fn(), mode?: number, merge?: bool) -> fn()",
				allTypes[10]);
		Assert.assertEquals(
				"fn(receiver: fn(), supplier: fn(), overwrite?: bool, whitelist?: [string], mode?: number) -> fn()",
				allTypes[11]);
		Assert.assertEquals(
				"fn(receiver: fn(), supplier: fn(), whitelist?: [string], mode?: number, merge?: bool) -> fn()",
				allTypes[12]);
	}
}

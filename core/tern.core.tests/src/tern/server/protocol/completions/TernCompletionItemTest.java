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

		String[] allTypes = completion.getAllTypes();
		Assert.assertNotNull(allTypes);
		Assert.assertEquals(2, allTypes.length);
		Assert.assertEquals(
				"fn(events: string, selector?: string, handler: fn(+jQuery.Event)) -> jQuery.fn",
				allTypes[0]);
		Assert.assertEquals(
				"fn(events: string, data?: ?, handler: fn(+jQuery.Event)) -> jQuery.fn",
				allTypes[1]);
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

		String[] allTypes = completion.getAllTypes();
		Assert.assertNotNull(allTypes);
		Assert.assertEquals(1, allTypes.length);
		Assert.assertEquals("fn() -> jQuery.fn", allTypes[0]);
	}
}

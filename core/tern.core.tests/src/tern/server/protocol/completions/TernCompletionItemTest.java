package tern.server.protocol.completions;

import java.util.Iterator;

import org.junit.Assert;
import org.junit.Test;

public class TernCompletionItemTest {

	@Test
	public void testName() throws Exception {
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
		
		for (int i = 0; i < completion.getParameters().size(); i++) {
			
		}
	}
}

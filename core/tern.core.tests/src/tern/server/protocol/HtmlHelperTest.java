package tern.server.protocol;

import org.junit.Assert;
import org.junit.Test;

public class HtmlHelperTest {

	@Test
	public void replaceWhitespace() {

		String[] tags = new String[] {"script"};
		String html = HtmlHelper
				.extractJS("<html>\nvar a = '';<script>var a = [];</script>  <script>var b = [];</script></html>", tags);
		Assert.assertEquals("      \n                   var a = [];                   var b = [];                ",
				html);

	}

	@Test
	public void alternateTags() {

		String[] tags = new String[] {"script", "aui:script"};
		String html = HtmlHelper
				 .extractJS("<html>\nvar a = '';<script>var a = [];</script>  <aui:script>var b = [];</aui:script></html>", tags);
		Assert.assertEquals("      \n                   var a = [];                       var b = [];                    ",
				html);

	}
}

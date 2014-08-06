package tern.server.protocol;

import org.junit.Assert;
import org.junit.Test;

public class HtmlHelperTest {

	@Test
	public void replaceWhitespace() {

		String html = HtmlHelper
				 .extractJS("<html>\nvar a = '';<script>var a = [];</script>  <script>var b = [];</script></html>");
		Assert.assertEquals("      \n                   var a = [];                   var b = [];                ",
				html);

	}
}

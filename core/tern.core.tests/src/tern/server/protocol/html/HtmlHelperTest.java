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
package tern.server.protocol.html;

import org.junit.Assert;
import org.junit.Test;

import tern.server.protocol.html.HtmlHelper;

public class HtmlHelperTest {

	private static final ScriptTagRegion AUI_SCRIPT_TAG = new ScriptTagRegion("aui:script");

	@Test
	public void extractJSFromScriptElement() {

		String html = HtmlHelper
				.extractJS("<html>\nvar a = '';<script>var a = [];</script>  <script>var b = [];</script></html>");
		Assert.assertEquals(
				"      \n                   var a = [];                   var b = [];                ",
				html);

	}

	@Test
	public void extractJSFromAUIScriptElement() {

		String html = HtmlHelper
				.extractJS("<html>\nvar a = '';<aui:script>var a = [];</aui:script>  <aui:script>var b = [];</aui:script></html>", AUI_SCRIPT_TAG);
		Assert.assertEquals(
				"      \n                       var a = [];                           var b = [];                    ",
				html);

	}
	
	@Test
	public void extractJSFromAUIScriptAndScriptElement() {
		String html = HtmlHelper
				.extractJS(
						"<html>\nvar a = '';<script>var a = [];</script>  <aui:script>var b = [];</aui:script></html>",
						ScriptTagRegion.SCRIPT_TAG, AUI_SCRIPT_TAG);
		Assert.assertEquals(
				"      \n                   var a = [];                       var b = [];                    ",
				html);

	}
}

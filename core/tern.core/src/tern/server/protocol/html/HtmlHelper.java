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

/**
 * HTML helper used to extract JS content from HTML file content.
 *
 */
public class HtmlHelper {

	/**
	 * Extract JS content from the given HTML content. The HTML elements are
	 * replaced with space and JS content is kept. The JS content is declared
	 * inside script elements.
	 * 
	 * @param html
	 *            the HTML content which contains JS content.
	 * @return the result of the extract of JS content from the given HTML
	 *         content. The HTML elements are replaced with space and JS content
	 *         is kept.
	 */
	public static String extractJS(String html) {
		return extractJS(html, ScriptTagRegion.SCRIPT_TAG);
	}

	/**
	 * Extract JS content from the given HTML content. The HTML elements are
	 * replaced with space and JS content is kept. JS content is declared inside
	 * the given tags elements.
	 * 
	 * @param html
	 *            the HTML content which contains JS content.
	 * @param tagRegions
	 *            list of HTML tags which contains JS content.
	 * @return the result of the extract of JS content from the given HTML
	 *         content. The HTML elements are replaced with space and JS content
	 *         is kept.
	 */
	public static String extractJS(String html, ScriptTagRegion... tagRegions) {
		IState state = createState(tagRegions);
		StringBuilder s = new StringBuilder();
		char[] chars = html.toCharArray();
		for (int i = 0; i < chars.length; i++) {
			char c = chars[i];
			switch (c) {
			case '\n':
			case '\r':
			case '\t':
			case ' ':
				s.append(c);
				break;
			default:
				// try to search region
				Region matchedRegion = state.update(c);
				if (matchedRegion == null) {
					// none matched region
					if (state.isNextRegionToFindType(RegionType.END_SCRIPT)) {
						// the next region to find is end script (ex :
						// </script>)
						// we are inside script element content, add JS
						// character inside the buffer.
						s.append(c);
					} else {
						// here we are not inside script content, add a space.
						s.append(' ');
					}
				} else {
					// a region is found
					if (matchedRegion.getType().equals(RegionType.END_SCRIPT)) {
						// the matched region is end script (ex : </script>)
						// replace last characters of the buffer (</script>)
						// with spaces.
						int length = matchedRegion.getLength();
						s = s.replace(i - length, i, matchedRegion.getSpaces());
						// reset the state.
						state.reset();
					}
					s.append(' ');
				}
			}
		}

		return s.toString();
	}

	/**
	 * Returns a state instance from the given tags.
	 * 
	 * @param tagRegions
	 *            list of HTML tags which contains JS content.
	 * @return a state instance from the given tags.
	 */
	private static IState createState(ScriptTagRegion[] tagRegions) {
		if (tagRegions.length == 1) {
			return new State(tagRegions[0]);
		}
		return new MultiState(tagRegions);
	}

}

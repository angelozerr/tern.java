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
package tern.angular.modules;

import java.util.ArrayList;
import java.util.List;

/**
 * Directive helper.
 * 
 */
public class DirectiveHelper {

	public static final String ANY_TAG = "any";

	public static final List<String> STARTS_WITH;
	public static final List<Character> DELIMITERS;

	static {
		STARTS_WITH = new ArrayList<String>();
		STARTS_WITH.add("");
		STARTS_WITH.add("x-");
		STARTS_WITH.add("data-");

		DELIMITERS = new ArrayList<Character>();
		DELIMITERS.add(':'); // colon delimiter
		DELIMITERS.add('-'); // minus delimiter
		DELIMITERS.add('_'); // underscore delimiter
	}

	/**
	 * 
	 * Angular normalizes an element's tag and attribute name to determine which
	 * elements match which directives. We typically refer to directives by
	 * their case-sensitive camelCase normalized name (e.g. ngModel). However,
	 * since HTML is case-insensitive, we refer to directives in the DOM by
	 * lower-case forms, typically using dash-delimited attributes on DOM
	 * elements (e.g. ng-model).
	 * 
	 * The normalization process is as follows:
	 * 
	 * <ol>
	 * <li>Strip x- and data- from the front of the element/attributes.</li>
	 * <li>Convert the :, -, or _-delimited name to camelCase.</li>
	 * </ol>
	 * 
	 * See http://docs.angularjs.org/guide/directive
	 * 
	 * @return
	 */
	public static String normalize(String name) {
		if (name == null) {
			return null;
		}

		// 1) Strip x- and data- from the front of the element/attributes
		int startIndex = 0;
		char[] chs = name.toCharArray();
		int length = chs.length;
		if (length >= 2) {
			if (chs[0] == 'x' && chs[1] == '-') {
				// starts with x-
				startIndex = 2;
			} else {
				if (length >= 5) {
					// starts with data-
					if (chs[0] == 'd' && chs[1] == 'a' && chs[2] == 't'
							&& chs[3] == 'a' && chs[4] == '-') {
						startIndex = 5;
					}
				}
			}
		}

		// 2) Convert the :, -, or _-delimited name to camelCase.
		StringBuilder normalizedName = new StringBuilder();
		boolean delimiterFound = false;
		char c = 0;
		for (int i = startIndex; i < chs.length; i++) {
			c = chs[i];
			if (delimiterFound) {
				normalizedName.append(Character.toUpperCase(c));
				delimiterFound = false;
			} else {
				if (DELIMITERS.contains(c)) {
					delimiterFound = true;
				} else {
					normalizedName.append(c);
				}
			}
		}
		return normalizedName.toString();
	}

	public static List<String> getDirectiveNames(String name) {
		List<String> tokensName = buildTokensName(name);
		List<String> names = new ArrayList<String>();
		// ex ngBind
		int index = 0;
		names.add(name);
		StringBuilder s = null;
		for (Character delimiter : DirectiveHelper.DELIMITERS) {
			for (String startsWith : DirectiveHelper.STARTS_WITH) {
				s = new StringBuilder(startsWith);
				for (int i = 0; i < tokensName.size(); i++) {
					if (i > 0) {
						s.append(delimiter);
					}
					s.append(tokensName.get(i));
				}
				names.add(s.toString());
			}
		}
		return names;
	}

	private static List<String> buildTokensName(String name) {
		char[] chars = name.toCharArray();
		List<String> tokens = new ArrayList<String>();
		StringBuilder current = new StringBuilder();
		char c = 0;
		for (int i = 0; i < chars.length; i++) {
			c = chars[i];
			if (!Character.isUpperCase(c)) {
				current.append(c);
			} else {
				tokens.add(current.toString());
				current.setLength(0);
				current.append(Character.toLowerCase(c));
			}
		}
		if (current.length() > 0) {
			tokens.add(current.toString());
		}
		return tokens;
	}

	public static boolean isSupport(IDirectiveSyntax syntax, int i) {
		if (syntax == null) {
			return true;
		}
		switch (i) {
		case 0:
			return syntax.isUseOriginalName();
		case 1:
			return syntax.isColonDelimiter() && syntax.isStartsWithNothing();
		case 2:
			return syntax.isColonDelimiter() && syntax.isStartsWithX();
		case 3:
			return syntax.isColonDelimiter() && syntax.isStartsWithData();
		case 4:
			return syntax.isMinusDelimiter() && syntax.isStartsWithNothing();
		case 5:
			return syntax.isMinusDelimiter() && syntax.isStartsWithX();
		case 6:
			return syntax.isMinusDelimiter() && syntax.isStartsWithData();
		case 7:
			return syntax.isUnderscoreDelimiter()
					&& syntax.isStartsWithNothing();
		case 8:
			return syntax.isUnderscoreDelimiter() && syntax.isStartsWithX();
		case 9:
			return syntax.isUnderscoreDelimiter() && syntax.isStartsWithData();

		}
		return false;
	}
}

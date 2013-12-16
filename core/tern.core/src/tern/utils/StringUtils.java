/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.utils;

/**
 * String utilities.
 * 
 */
public class StringUtils {

	public static boolean isEmpty(String str) {
		return str == null || str.length() == 0;
	}

	public static String normalizeSpace(String s) {
		if (s == null) {
			return null;
		}
		int len = s.length();
		if (len < 1) {
			return "";
		}
		int st = 0;
		int off = 0; /* avoid getfield opcode */
		char[] val = s.toCharArray(); /* avoid getfield opcode */
		int count = s.length();

		boolean parse = true;
		char c;
		while (parse) {
			c = val[off + st];
			parse = isParse(len, st, c);
			if (parse) {
				st++;
			}
		}
		parse = true;
		while ((st < len) && (val[off + len - 1] <= ' ')) {
			c = val[off + len - 1];
			parse = isParse(len, st, c);
			if (parse) {
				len--;
			}
		}
		return ((st > 0) || (len < count)) ? s.substring(st, len) : s;
	}

	private static boolean isParse(int len, int st, char c) {
		return (st < len) && (c == ' ' || c == '\r' || c == '\n' || c == '\t');
	}

}

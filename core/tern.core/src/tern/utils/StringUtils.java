/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.utils;

/**
 * 
 * Utilities for {@link String}.
 * 
 */
public class StringUtils {

	private final static int[] EMPTY_REGIONS = new int[0];
	
	public static final String UTF_8 = "UTF-8";
	
	public static final String TRUE = "true";
	public static final String FALSE = "false";
	public static final String YES = "yes";
	public static final String NO = "no";

	public static final String[] EMPTY_ARRAY = new String[0];

	public static boolean isEmpty(String str) {
		return str == null || str.length() == 0;
	}

	public static boolean hasLength(CharSequence str) {
		return str != null && str.length() > 0;
	}

	public static boolean hasLength(String str) {
		return hasLength(((CharSequence) (str)));
	}

	public static boolean hasText(CharSequence str) {
		if (!hasLength(str))
			return false;
		int strLen = str.length();
		for (int i = 0; i < strLen; i++)
			if (!Character.isWhitespace(str.charAt(i)))
				return true;

		return false;
	}

	public static boolean hasText(String str) {
		return hasText(((CharSequence) (str)));
	}

	public static boolean isQuoted(String string) {
		if (string == null || string.length() < 2)
			return false;
		int lastIndex = string.length() - 1;
		char firstChar = string.charAt(0);
		char lastChar = string.charAt(lastIndex);
		return firstChar == '\'' && lastChar == '\'' || firstChar == '"'
				&& lastChar == '"';
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

	public static boolean asBoolean(String value) {
		return asBoolean(value, false);
	}

	public static boolean asBoolean(String value, boolean defaultValue) {
		if (value == null)
			return defaultValue;
		value = value.trim();
		if (defaultValue)
			return !(FALSE.equals(value.toLowerCase()) || NO.equals(value
					.toLowerCase()));
		return TRUE.equals(value.toLowerCase())
				|| YES.equals(value.toLowerCase());
	}

	// ----------- copied from JDT https://github.com/eclipse/eclipse.jdt.core/blob/master/org.eclipse.jdt.core/search/org/eclipse/jdt/internal/core/search/StringOperation.java
	
	/**
	 * Answers all the regions in a given name matching a given <i>pattern</i>
	 * pattern (e.g. "H*M??").
	 * </p><p>
	 * Each of these regions is made of its starting index and its length in the given
	 * name. They are all concatenated in a single array of <code>int</code>
	 * which therefore always has an even length.
	 * </p><p>
	 * Note that each region is disjointed from the following one.<br>
	 * E.g. if the regions are <code>{ start1, length1, start2, length2 }</code>,
	 * then <code>start1+length1</code> will always be smaller than
	 * <code>start2</code>.
	 * </p><p>
	 * <pre>
	 * Examples:
	 * <ol>
	 * <li>  pattern = "N???Po*Ex?eption"
	 *  name = NullPointerException
	 *  result:  { 0, 1, 4, 2, 11, 2, 14, 6 }</li>
	 * <li>  pattern = "Ha*M*ent*"
	 *  name = "HashMapEntry"
	 *  result:  { 0, 2, 4, 1, 7, 3 }</li>
	 * </ol></pre>
	 *</p>
	 * @see CharOperation#match(char[], char[], boolean) for more details on the
	 * 	pattern match behavior
	 *
	 * @param pattern the given pattern
	 * @param patternStart the given pattern start
	 * @param patternEnd the given pattern end
	 * @param name the given name
	 * @param nameStart the given name start
	 * @param nameEnd the given name end
	 * @param isCaseSensitive flag to know if the matching should be case sensitive
	 * @return an array of <code>int</code> having two slots per returned
	 * 	regions (first one is the starting index of the region and the second
	 * 	one the length of the region).<br>
	 * 	Note that it may be <code>null</code> if the given name does not match
	 * 	the pattern
	 * @since 3.5
	 */
	public static final int[] getPatternMatchingRegions(
		String pattern,
		int patternStart,
		int patternEnd,
		String name,
		int nameStart,
		int nameEnd,
		boolean isCaseSensitive) {

		/* !!!!!!!!!! WARNING !!!!!!!!!!
		 * The algorithm used in this method has been fully inspired from
		 * CharOperation#match(char[], int, int, char[], int, int, boolean).
		 *
		 * So, if any change needs to be applied in the algorithm, do NOT forget
		 * to backport it in the CharOperation method!
		 */

		if (name == null) return null; // null name cannot match
		if (pattern == null) {
			// null pattern cannot match any region
			// see bug https://bugs.eclipse.org/bugs/show_bug.cgi?id=264816
			return EMPTY_REGIONS;
		}
		int iPattern = patternStart;
		int iName = nameStart;

		// init segments parts
		if (patternEnd < 0)
			patternEnd = pattern.length();
		if (nameEnd < 0)
			nameEnd = name.length();
		int questions = 0;
		int parts = 0;
		char previous = 0;
		for (int i=patternStart; i<patternEnd; i++) {
			char ch = pattern.charAt(i);
			switch (ch) {
				case '?':
					questions++;
					break;
				case '*':
					break;
				default:
					switch (previous) {
						case 0 :
						case '?':
						case '*':
							parts++;
							break;
					}
			}
			previous = ch;
		}
		if (parts == 0) {
			if (questions <= (nameEnd - nameStart)) return EMPTY_REGIONS;
			return null;
		}
		int[] segments = new int[parts*2];

		/* check first segment */
		int count = 0;
		int start = iName;
		char patternChar = 0;
		previous = 0;
		while ((iPattern < patternEnd)
			&& (patternChar = pattern.charAt(iPattern)) != '*') {
			if (iName == nameEnd)
				return null;
			if (patternChar == '?') {
				switch (previous) {
					case 0:
					case '?':
						break;
					default:
						segments[count++] = start;
						segments[count++] = iPattern-start;
						break;
				}
			} else {
				if (isCaseSensitive) {
					if (patternChar != name.charAt(iName)) {
						return null;
					}
				} else if (toLowerCase(patternChar) != toLowerCase(name.charAt(iName))) {
					return null;
				}
				switch (previous) {
					case 0:
					case '?':
						start = iPattern;
						break;
				}
			}
			iName++;
			iPattern++;
			previous = patternChar;
		}
		/* check sequence of star+segment */
		int segmentStart;
		if (patternChar == '*') {
			if (iPattern > 0 && previous != '?') {
				segments[count++] = start;
				segments[count++] = iName-start;
				start = iName;
			}
			segmentStart = ++iPattern; // skip star
		} else {
			if (iName == nameEnd) {
				if (count == (parts*2)) return segments;
				int end = patternEnd;
				if (previous == '?') { // last char was a '?' => purge all trailing '?'
					while (pattern.charAt(--end-1) == '?') {
						if (end == start) {
							return new int[] { patternStart, patternEnd-patternStart };
						}
					}
				}
				return new int[] { start, end-start };
			}
			return null;
		}
		int prefixStart = iName;
		int previousCount = count;
		previous = patternChar;
		char previousSegment = patternChar;
		checkSegment : while (iName < nameEnd) {
			if (iPattern == patternEnd) {
				iPattern = segmentStart; // mismatch - restart current segment
				iName = ++prefixStart;
				previous = previousSegment;
				continue checkSegment;
			}
			/* segment is ending */
			if ((patternChar = pattern.charAt(iPattern)) == '*') {
				segmentStart = ++iPattern; // skip star
				if (segmentStart == patternEnd) {
					if (count < (parts*2)) {
						segments[count++] = start;
						segments[count++] = iName-start;
					}
					return segments;
				}
				switch (previous) {
					case '*':
					case '?':
						break;
					default:
						segments[count++] = start;
						segments[count++] = iName-start;
						break;
				}
				prefixStart = iName;
				start = prefixStart;
				previous = patternChar;
				previousSegment = patternChar;
				continue checkSegment;
			}
			/* check current name character */
			previousCount = count;
			if (patternChar == '?') {
				switch (previous) {
					case '*':
					case '?':
						break;
					default:
						segments[count++] = start;
						segments[count++] = iName-start;
						break;
				}
			} else {
				boolean mismatch;
				if (isCaseSensitive) {
					mismatch = name.charAt(iName) != patternChar;
				} else {
					mismatch = toLowerCase(name.charAt(iName)) != toLowerCase(patternChar);
				}
				if (mismatch) {
					iPattern = segmentStart; // mismatch - restart current segment
					iName = ++prefixStart;
					start = prefixStart;
					count = previousCount;
					previous = previousSegment;
					continue checkSegment;
				}
				switch (previous) {
					case '?':
						start = iName;
						break;
				}
			}
			iName++;
			iPattern++;
			previous = patternChar;
		}

		if ((segmentStart == patternEnd)
			|| (iName == nameEnd && iPattern == patternEnd)
			|| (iPattern == patternEnd - 1 && pattern.charAt(iPattern) == '*')) {
			if (count < (parts*2)) {
				segments[count++] = start;
				segments[count++] = iName-start;
			}
			return segments;
		}
		return null;
	}

	private static char toLowerCase(char c) {
		return Character.toLowerCase(c);
	}
}

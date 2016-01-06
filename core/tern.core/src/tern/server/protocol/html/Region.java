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
package tern.server.protocol.html;

public class Region {

	private final char[] pattern;
	private final RegionType type;
	private final String spaces;

	Region(String pattern, RegionType type) {
		this.pattern = pattern.toCharArray();
		this.type = type;
		this.spaces = createSpaces();
	}

	private String createSpaces() {
		StringBuilder spaces = new StringBuilder();
		int length = getLength();
		for (int i = 0; i < length; i++) {
			spaces.append(' ');
		}
		return spaces.toString();
	}

	public MatchResult match(char c, int index) {
		if (index < pattern.length) {
			if (c == pattern[index]) {
				return index == pattern.length - 1 ? MatchResult.MATCHED
						: MatchResult.MATCHING;
			}
		}

		return MatchResult.NO_MATCHING;
	}

	public RegionType getType() {
		return type;
	}

	public int getLength() {
		return pattern.length - 1;
	}

	public String getSpaces() {
		return spaces;
	}
}

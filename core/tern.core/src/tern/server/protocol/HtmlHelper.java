package tern.server.protocol;

import java.util.ArrayList;
import java.util.List;

public class HtmlHelper {

	private enum Result {
		MATCHING, NO_MATCHING, MATCHED
	}

	private enum RegionType {
		OPEN_START_SCRIPT, CLOSE_START_SCRIPT, END_SCRIPT
	}

	private static class TagRegion {
		private final Region openStart;
		private final Region closeStart;
		private final Region end;

		TagRegion(String tag) {
			this.openStart = new Region("<" + tag);
			this.closeStart = new Region(">");
			this.end = new Region("</" + tag + ">");
		}
	}

	private static class Region {

		private final char[] pattern;

		private Region(String pattern) {
			this.pattern = pattern.toCharArray();
		}

		public Result search(char c, int index) {
			if (index < pattern.length) {
				if (c == pattern[index]) {
					return index == pattern.length - 1 ? Result.MATCHED
							: Result.MATCHING;
				}
			}

			return Result.NO_MATCHING;
		}

		int length() {
			return this.pattern.length;
		}
	}

	protected static class State {

		private final TagRegion tagRegion;
		private int index = 0;
		private Region region;//= Region.OPEN_START_SCRIPT;

		protected State(TagRegion tagRegion) {
			this.tagRegion = tagRegion;
			region = tagRegion.openStart;
		}

		public Region add(char c) {
			Result result = region.search(c, index);
			switch (result) {
			case MATCHING:
				index++;
				break;
			case NO_MATCHING:
				index = 0;
				break;
			case MATCHED:
				index = 0;
				switch (getRegionType(region)) {
				case OPEN_START_SCRIPT:
					region = tagRegion.closeStart;
					return tagRegion.openStart;
				case CLOSE_START_SCRIPT:
					region = tagRegion.end;
					return tagRegion.closeStart;
				case END_SCRIPT:
					region = tagRegion.openStart;
					return tagRegion.end;
				}
				break;
			}
			return null;
		}



		public Region getRegion() {
			return region;
		}

	}

	public static String extractJS(String html, String[] tags) {
		//multiple passes
		List<String> passes = new ArrayList<String>();
		for (String tag : tags) {
			State state = new State(new TagRegion(tag));
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
					Region matchedRegion = state.add(c);
					if (matchedRegion == null) {
						if (state.getRegion().equals(state.tagRegion.end)) {
							s.append(c);
						} else {
							s.append(' ');
						}
					} else {
						if (matchedRegion.equals(state.tagRegion.end)) {
							s = s.replace(i - matchedRegion.length()+1, i, pad(matchedRegion.length()-1));
						}
						s.append(' ');
					}
				}
			}

			passes.add(s.toString());
		}

		return merge(passes);
	}

	private static RegionType getRegionType(Region region) {
		RegionType retval = null;

		final String pattern = new String(region.pattern);

		if (pattern.contains("</")) {
			retval = RegionType.END_SCRIPT;
		}
		else if (pattern.contains(">")) {
			retval = RegionType.CLOSE_START_SCRIPT;
		}
		else if (pattern.contains("<")) {
			retval = RegionType.OPEN_START_SCRIPT;
		}

		return retval;
	}


	private static String pad(int length) {
		StringBuilder sb = new StringBuilder();

		for (int i = 0; i < length; i++) {
			sb.append(" ");
		}

		return sb.toString();
	}

	private static String merge(List<String> passes) {
		int size = -1;
		for (String pass : passes) {
			size = Math.max(size, pass.length());
		}

		char[] merged = new char[size];

		for (int i = 0; i < merged.length; i++) {
			for (String pass: passes) {
				merged[i] = (char) Math.max(merged[i], pass.toCharArray()[i]);
			}
		}

		return new String(merged);
	}

}

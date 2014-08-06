package tern.server.protocol;

public class HtmlHelper {

	private enum Result {
		MATCHING, NO_MATCHING, MATCHED
	}

	private enum Region {

		OPEN_START_SCRIPT("<script"), CLOSE_START_SCRIPT(">"), END_SCRIPT(
				"</script>");

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
	}

	protected static class State {

		private int index = 0;
		private Region region = Region.OPEN_START_SCRIPT;

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
				switch (region) {
				case OPEN_START_SCRIPT:
					region = Region.CLOSE_START_SCRIPT;
					return Region.OPEN_START_SCRIPT;
				case CLOSE_START_SCRIPT:
					region = Region.END_SCRIPT;
					return Region.CLOSE_START_SCRIPT;
				case END_SCRIPT:
					region = Region.OPEN_START_SCRIPT;
					return Region.END_SCRIPT;
				}
				break;
			}
			return null;
		}

		public Region getRegion() {
			return region;
		}

	}

	public static String extractJS(String html) {
		State state = new State();
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
					if (state.getRegion().equals(Region.END_SCRIPT)) {
						s.append(c);
					} else {
						s.append(' ');
					}
				} else {
					if (matchedRegion.equals(Region.END_SCRIPT)) {
						s = s.replace(i - 8, i, "        ");
					}
					s.append(' ');
				}
			}
		}

		return s.toString();
	}

}

package tern.server.protocol.completions;

import tern.utils.StringUtils;

public class TernCompletionItem {

	private final String text;
	private final String firstParam;
	private final boolean function;

	public TernCompletionItem(String name, String type, String origin) {
		StringBuilder firstParam = null;
		StringBuilder currentParam = null;
		boolean typeParsing = false;
		this.function = type.startsWith("fn(");
		StringBuilder text = new StringBuilder(name);
		if (function) {
			text.append("(");
			int bracket = 0;
			String afterStartFn = type.substring(2, type.length());
			int i = 0;
			for (i = 0; i < afterStartFn.length(); i++) {
				char c = afterStartFn.charAt(i);
				switch (c) {
				case '(':
					bracket++;
					break;
				case ')':
					bracket--;
					break;
				default:
					if (bracket == 1) {
						if (typeParsing) {
							if (c == ',')
								typeParsing = false;
						} else {
							if (currentParam == null) {
								if (c != ' ' && c != '?') {
									currentParam = new StringBuilder();
									currentParam.append(c);
								}
							} else {
								if (c == ':') {
									typeParsing = true;
									if (firstParam == null) {
										firstParam = new StringBuilder(
												currentParam);
									} else {
										text.append(", ");
									}
									text.append(currentParam.toString());
									currentParam = null;
								} else {
									if (c != ' ' && c != '?') {
										currentParam.append(c);
									}
								}
							}
						}
					}
				}
				if (bracket == 0)
					break;
			}
			text.append(")");
		}
		if (!StringUtils.isEmpty(origin)) {
			text.append(" - ");
			text.append(origin);
		}
		this.text = text.toString();
		this.firstParam = firstParam != null ? firstParam.toString() : null;
	}

	public String getText() {
		return text;
	}

	public String getFirstParam() {
		return firstParam;
	}

	public boolean isFunction() {
		return function;
	}
}

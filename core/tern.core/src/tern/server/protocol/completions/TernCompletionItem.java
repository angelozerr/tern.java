package tern.server.protocol.completions;

import tern.utils.StringUtils;

public class TernCompletionItem {

	private final String name;
	private final String type;
	private final String origin;

	private final String signature;
	private final String firstParam;
	private final boolean function;

	public TernCompletionItem(String name, String type, String origin) {
		this.name = name;
		this.type = type;
		this.origin = origin;
		StringBuilder firstParam = null;
		StringBuilder currentParam = null;
		boolean typeParsing = false;
		this.function = type.startsWith("fn(");
		StringBuilder signature = new StringBuilder(name);
		if (function) {
			signature.append("(");
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
										signature.append(", ");
									}
									signature.append(currentParam.toString());
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
			signature.append(")");
		}
		this.signature = signature.toString();
		this.firstParam = firstParam != null ? firstParam.toString() : null;
	}

	public String getText() {
		if (StringUtils.isEmpty(origin)) {
			return signature;
		}
		StringBuilder text = new StringBuilder(signature);
		if (!StringUtils.isEmpty(origin)) {
			text.append(" - ");
			text.append(origin);
		}
		return text.toString();
	}

	public String getFirstParam() {
		return firstParam;
	}

	public boolean isFunction() {
		return function;
	}

	public String getName() {
		return name;
	}

	public String getOrigin() {
		return origin;
	}

	public String getSignature() {
		return signature;
	}
}

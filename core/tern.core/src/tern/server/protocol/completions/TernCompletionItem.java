/**
 *  Copyright (c) 2013-20A4 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.protocol.completions;

import java.util.ArrayList;
import java.util.List;

import tern.utils.StringUtils;

/**
 * Tern completion item.
 * 
 */
public class TernCompletionItem {

	private final String name;
	private final String type;
	private final String origin;

	private final String signature;
	private final boolean function;
	private boolean array;
	private String jsType;
	private List<Parameter> parameters;
	private String[] allTypes;

	public TernCompletionItem(String name, String type, String origin) {
		this.name = name;
		this.type = type;
		this.origin = origin;
		this.parameters = null;
		StringBuilder currentParamName = null;
		boolean currentParamRequired = true;
		StringBuilder currentParamType = null;
		StringBuilder signature = new StringBuilder(name);
		this.jsType = type;
		if (!StringUtils.isEmpty(type)) {
			this.function = type.startsWith("fn(");
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
						if (currentParamType != null)
							currentParamType.append(c);
						break;
					case ')':
						bracket--;
						if (bracket >= 1 && currentParamType != null)
							currentParamType.append(c);
						break;
					default:
						if (bracket >= 1) {
							if (currentParamType != null) {
								if (c == ',') {
									parameters
											.add(new Parameter(
													currentParamName.toString(),
													currentParamRequired,
													currentParamType != null ? currentParamType
															.toString() : null));
									currentParamName = null;
									currentParamRequired = true;
									currentParamType = null;
								} else if (c != ' ') {
									currentParamType.append(c);
								}
							} else {
								if (currentParamName == null) {
									if (c != ' ' && c != '?') {
										currentParamName = new StringBuilder();
										currentParamName.append(c);
									}
								} else {
									if (c == ':') {
										if (parameters == null) {
											parameters = new ArrayList<Parameter>();
										} else {
											signature.append(", ");
										}
										signature.append(currentParamName
												.toString());
										currentParamType = new StringBuilder();
									} else {
										if (c == '?') {
											currentParamRequired = false;
										} else if (c != ' ') {
											currentParamName.append(c);
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
				StringBuilder s = null;
				for (int j = i + 1; j < afterStartFn.length(); j++) {
					char c = afterStartFn.charAt(j);
					if (s != null) {
						s.append(c);
					} else {
						if (c == '>') {
							s = new StringBuilder();
						}
					}
				}
				jsType = s != null ? s.toString().trim() : null;
			} else {
				this.array = type.indexOf("[") != -1;
			}
		} else {
			this.function = false;
			this.array = false;
		}

		if (currentParamName != null) {
			parameters.add(new Parameter(currentParamName.toString(),
					currentParamRequired,
					currentParamType != null ? currentParamType.toString()
							: null));
			currentParamName = null;
			currentParamRequired = true;
			currentParamType = null;
		}

		this.signature = signature.toString();
	}

	public String[] getAllTypes() {
		if (allTypes == null) {
			if (parameters == null) {
				allTypes = StringUtils.EMPTY_ARRAY;
			} else {
				if (parameters.size() == 1 && !parameters.get(0).isRequired()) {
					// ex : fn(selector?: string) -> jQuery.fn
					StringBuilder newType = new StringBuilder("fn()");
					if (jsType != null) {
						newType.append(" -> ");
						newType.append(jsType);
					}
					allTypes = new String[1];
					allTypes[0] = newType.toString();
				} else {
					// ex: fn(events: string, selector?: string, data?: ?,
					// handler: fn(+jQuery.Event)) -> jQuery.fn
					List<Parameter> optionalParameters = null;
					for (Parameter parameter : parameters) {
						if (!parameter.isRequired()) {
							if (optionalParameters == null) {
								optionalParameters = new ArrayList<Parameter>();
							}
							optionalParameters.add(parameter);
						}
					}

					if (optionalParameters == null) {
						allTypes = StringUtils.EMPTY_ARRAY;
					} else {
						List<String> types = new ArrayList<String>();
						StringBuilder newType = null;
						for (Parameter optional : optionalParameters) {
							newType = new StringBuilder("fn(");
							for (Parameter parameter : parameters) {
								if (parameter.isRequired()
										|| optional.equals(parameter)) {
									if (newType.length() > 3) {
										newType.append(", ");
									}
									newType.append(parameter.getName());
									if (!parameter.isRequired()) {
										newType.append("?");
									}
									if (parameter.getType() != null) {
										newType.append(": ");
										newType.append(parameter.getType());
									}
								}
							}
							newType.append(")");
							if (jsType != null) {
								newType.append(" -> ");
								newType.append(jsType);
							}
							types.add(newType.toString());
						}
						allTypes = types.toArray(StringUtils.EMPTY_ARRAY);
					}
				}
			}
		}
		return allTypes;
	}

	public String getText() {
		if (StringUtils.isEmpty(origin) && StringUtils.isEmpty(jsType)) {
			return signature;
		}
		StringBuilder text = new StringBuilder(signature);

		if (!StringUtils.isEmpty(jsType)) {
			text.append(" : ");
			text.append(jsType);
		}
		if (!StringUtils.isEmpty(origin)) {
			text.append(" - ");
			text.append(origin);
		}
		return text.toString();
	}

	public List<Parameter> getParameters() {
		return parameters;
	}

	public boolean isFunction() {
		return function;
	}

	public boolean isArray() {
		return array;
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

	public String getType() {
		return type;
	}

	public String getJsType() {
		return jsType;
	}

}

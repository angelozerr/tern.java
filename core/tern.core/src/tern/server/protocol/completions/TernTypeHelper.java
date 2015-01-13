/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
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
 * Helper for tern type.
 *
 */
public class TernTypeHelper {

	public static final String STRING_TYPE = "string";
	public static final String NUMBER_TYPE = "number";
	public static final String BOOL_TYPE = "bool";

	private static final String FUNCTION_REF = "fn";
	private static final String FUNCTION_START = "fn(";
	private static final String FUNCTION_ARRAY_START = "[fn(";

	/**
	 * Returns true if the given type is fn() and false otherwise.
	 * 
	 * @param type
	 *            the tern type
	 * @return true if the given type is fn() and false otherwise.
	 */
	public static boolean isFunction(String type) {
		return !StringUtils.isEmpty(type)
				&& (type.startsWith(FUNCTION_START) || type
						.startsWith(FUNCTION_ARRAY_START));
	}

	/**
	 * Return the function information of the given function name and type.
	 * 
	 * @param name
	 *            function name
	 * @param type
	 *            function type
	 * @return the function information of the given function name and type.
	 */
	public static FunctionInfo parseFunction(String name, String type) {
		type = type.startsWith("[") ? type.substring(1, type.length()) : type;
		StringBuilder signature = name != null ? new StringBuilder(name) : null;
		List<Parameter> parameters = null;
		StringBuilder currentParamName = null;
		boolean currentParamRequired = true;
		StringBuilder currentParamType = null;

		if (signature != null) {
			signature.append("(");
		}
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
							if (bracket < 2) {
								parameters
										.add(new Parameter(
												currentParamName.toString(),
												currentParamRequired,
												currentParamType != null ? currentParamType
														.toString() : null));
								currentParamName = null;
								currentParamRequired = true;
								currentParamType = null;
							} else {
								currentParamType.append(c);
							}
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
									if (signature != null) {
										signature.append(", ");
									}
								}
								if (signature != null) {
									signature.append(currentParamName
											.toString());
								}
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
		if (currentParamName != null) {
			if (parameters == null) {
				parameters = new ArrayList<Parameter>();
			}
			parameters.add(new Parameter(currentParamName.toString(),
					currentParamRequired,
					currentParamType != null ? currentParamType.toString()
							: null));
			currentParamName = null;
			currentParamRequired = true;
			currentParamType = null;
		}
		if (signature != null) {
			signature.append(")");
		}
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
		String returnType = s != null ? s.toString().trim() : null;
		return new FunctionInfo(parameters,
				signature != null ? signature.toString() : null, returnType);
	}

	/**
	 * Returns true if the given type is "string" type and false otherwise.
	 * 
	 * @param type
	 * @return true if the given type is "string" type and false otherwise.
	 */
	public static boolean isStringType(String type) {
		return STRING_TYPE.equals(type);
	}

	/**
	 * Returns true if the given type is "number" type and false otherwise.
	 * 
	 * @param type
	 * @return true if the given type is "number" type and false otherwise.
	 */
	public static boolean isNumberType(String type) {
		return NUMBER_TYPE.equals(type);
	}

	/**
	 * Returns true if the given type is "bool" type and false otherwise.
	 * 
	 * @param type
	 * @return true if the given type is "bool" type and false otherwise.
	 */
	public static boolean isBoolType(String type) {
		return BOOL_TYPE.equals(type);
	}

	/**
	 * Returns true if the given type is "fn" type and false otherwise.
	 * 
	 * @param type
	 * @return true if the given type is "fn" type and false otherwise.
	 */
	public static boolean isFunctionRefType(String type) {
		return FUNCTION_REF.equals(type);
	}
}

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
package tern.angular.protocol;

public class Controller {

	private final String name;
	private final String as;

	public Controller(String name, String as) {
		this.name = name;
		this.as = as;
	}

	public String getName() {
		return name;
	}

	public String getAs() {
		return as;
	}

	public static Controller createController(String expression) {
		String name = expression;
		String as = null;
		int index = expression.indexOf(" as");
		if (index != -1) {
			name = expression.substring(0, index);
			as = expression.substring(index + 3, expression.length()).trim();
		}
		return new Controller(name, as);
	}

	public static String getName(String expression) {
		String name = expression;
		int index = expression.indexOf(" as");
		if (index != -1) {
			name = expression.substring(0, index);
		}
		return name;
	}
}

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
package tern.angular.modules;

/**
 * Directive value.
 * 
 */
public enum DirectiveValue {

	required, optional, none;

	public static DirectiveValue get(String value) {
		for (DirectiveValue directiveValue : values()) {
			if (directiveValue.name().equalsIgnoreCase(value)) {
				return directiveValue;
			}
		}
		return none;
	}
}

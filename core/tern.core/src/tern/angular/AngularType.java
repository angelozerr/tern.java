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
package tern.angular;

import tern.utils.StringUtils;

/**
 * Angular type.
 * 
 */
public enum AngularType {

	module, controller, decorator, directive, directives, factory, filter, model, provider, repeat_expression, service, unknown;

	/**
	 * Returns the angular type from the given value otherwise returns
	 * {@link AngularType#unknown}
	 * 
	 * @param value
	 * @return
	 */
	public static AngularType get(String value) {
		if (StringUtils.isEmpty(value)) {
			return unknown;
		}
		AngularType type = unknown;
		for (int i = 0; i < values().length; i++) {
			type = values()[i];
			if (type.name().equalsIgnoreCase(value)) {
				return type;
			}
		}
		return type;
	}

}

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
package tern.server.protocol.type;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.type.ITernTypeCollector;

/**
 * {@link ITernTypeCollector} implementation used to validate the existing of
 * type.
 * 
 */
public class ValidationTernTypeCollector implements ITernTypeCollector {

	private boolean exists;

	@Override
	public void setType(String type, boolean guess, String name,
			String exprName, String doc, String url, String origin,
			Object item, IJSONObjectHelper objectHelper) {
		exists = name != null;
	}

	/**
	 * Returns true if the type exists and false otherwise.
	 * 
	 * @return true if the type exists and false otherwise.
	 */
	public boolean isExists() {
		return exists;
	}

}

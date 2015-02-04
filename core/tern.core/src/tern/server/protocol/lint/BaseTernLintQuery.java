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
package tern.server.protocol.lint;

import tern.server.protocol.JsonHelper;
import tern.server.protocol.TernQuery;

/**
 * Base class for query of any tern plugin.
 */
public class BaseTernLintQuery extends TernQuery {

	private static final String GROUP_BY_FILES_NAME = "groupByFiles";

	protected BaseTernLintQuery(String type, String fullType) {
		super(fullType != null ? fullType : type);
		if (fullType != null) {
			setGroupByFiles(true);
		}
	}

	public void setGroupByFiles(boolean groupByFiles) {
		super.set(GROUP_BY_FILES_NAME, groupByFiles);
	}

	public boolean isGroupByFiles() {
		return JsonHelper.getBoolean(this, GROUP_BY_FILES_NAME, false);
	}

}

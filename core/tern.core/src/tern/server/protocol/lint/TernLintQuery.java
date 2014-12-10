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
 * Tern lint query used to validate JS files.
 *
 * @see https://github.com/angelozerr/tern-lint
 */
public class TernLintQuery extends TernQuery {

	private static final String LINT_TYPE_QUERY = "lint";
	private static final String LINT_FULL_TYPE_QUERY = "lint-full";

	private static final String GROUP_BY_FILES_NAME = "groupByFiles";

	public TernLintQuery(boolean full) {
		super(full ? LINT_FULL_TYPE_QUERY : LINT_TYPE_QUERY);
		setGroupByFiles(true);
	}

	public TernLintQuery() {
		super(LINT_TYPE_QUERY);
	}

	public void setGroupByFiles(boolean groupByFiles) {
		super.set(GROUP_BY_FILES_NAME, groupByFiles);
	}

	public boolean isGroupByFiles() {
		return JsonHelper.getBoolean(this, GROUP_BY_FILES_NAME, false);
	}

}

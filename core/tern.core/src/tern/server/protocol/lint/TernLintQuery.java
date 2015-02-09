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

import tern.TernException;
import tern.server.ITernPlugin;
import tern.server.protocol.JsonHelper;
import tern.server.protocol.TernQuery;

/**
 * Tern lint query used to validate JS files.
 *
 * @see https://github.com/angelozerr/tern-lint
 */
public class TernLintQuery extends TernQuery {

	private static final String FULL_EXTENSION = "-full";
	private static final String GROUP_BY_FILES_NAME = "groupByFiles";

	private TernLintQuery(String type, boolean full) {
		super(full ? new StringBuilder(type).append(FULL_EXTENSION).toString()
				: type);
		if (full) {
			setGroupByFiles(true);
		}
	}

	public static TernLintQuery create(ITernPlugin plugin, boolean full)
			throws TernException {
		if (!plugin.isLinter()) {
			throw new TernException(plugin.getName() + " is not a linter");
		}
		return new TernLintQuery(plugin.getName(), full);
	}

	public void setGroupByFiles(boolean groupByFiles) {
		super.set(GROUP_BY_FILES_NAME, groupByFiles);
	}

	public boolean isGroupByFiles() {
		return JsonHelper.getBoolean(this, GROUP_BY_FILES_NAME, false);
	}

}

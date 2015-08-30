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
import tern.utils.TernModuleHelper;

/**
 * Tern lint query used to validate JS files.
 *
 * @see https://github.com/angelozerr/tern-lint
 * @see https://github.com/angelozerr/tern-jshint
 * @see https://github.com/angelozerr/tern-eslint
 * @see https://github.com/angelozerr/tern-jscs
 */
public class TernLintQuery extends TernQuery {

	private static final long serialVersionUID = 1L;
	
	private static final String FULL_EXTENSION = "-full";
	private static final String GROUP_BY_FILES_NAME = "groupByFiles";
	private static final String LINE_NUMBER_NAME = "lineNumber";
	private final ITernPlugin linter;
	private boolean useLinterAsSuffix;

	private TernLintQuery(String type, ITernPlugin linter, boolean full) {
		super(full ? new StringBuilder(type).append(FULL_EXTENSION).toString()
				: type);
		if (full) {
			setGroupByFiles(true);
		}
		this.linter = linter;
	}

	public static TernLintQuery create(ITernPlugin plugin, boolean full)
			throws TernException {
		if (!plugin.isLinter()) {
			throw new TernException(plugin.getName() + " is not a linter");
		}
		TernLintQuery query = new TernLintQuery(plugin.getName(), plugin, full);
		query.setUseLinterAsSuffix(true);
		return query;
	}

	public void setGroupByFiles(boolean groupByFiles) {
		super.set(GROUP_BY_FILES_NAME, groupByFiles);
	}

	public boolean isGroupByFiles() {
		return JsonHelper.getBoolean(this, GROUP_BY_FILES_NAME, false);
	}

	public void setLineNumber(boolean lineNumber) {
		super.set(LINE_NUMBER_NAME, lineNumber);
	}

	public boolean isLineNumber() {
		return JsonHelper.getBoolean(this, LINE_NUMBER_NAME, false);
	}

	/**
	 * Set true if the message returned by the linter must add the linter name
	 * as suffix and false otherwise.
	 * 
	 * @param useLinterAsSuffix
	 */
	public void setUseLinterAsSuffix(boolean useLinterAsSuffix) {
		this.useLinterAsSuffix = useLinterAsSuffix;
	}

	/**
	 * Returns true if the message returned by the linter must add the linter
	 * name as suffix and false otherwise.
	 * 
	 * @return true if the message returned by the linter must add the linter
	 *         name as suffix and false otherwise.
	 */
	public boolean isUseLinterAsSuffix() {
		return useLinterAsSuffix;
	}

	/**
	 * Format the given message by using Linter name as suffix.
	 * 
	 * @param message
	 * @return the given message by using Linter name as suffix.
	 */
	public String formatMessage(String message) {
		if (useLinterAsSuffix) {
			return new StringBuilder("[")
					.append(TernModuleHelper.getLabel(linter)).append("]")
					.append(": ").append(message).toString();
		}
		return message;
	}

}

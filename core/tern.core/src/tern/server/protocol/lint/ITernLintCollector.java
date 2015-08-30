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

import tern.server.protocol.ITernResultsCollector;

/**
 * Tern lint collector API.
 *
 */
public interface ITernLintCollector extends ITernResultsCollector {

	/**
	 * This method is call when lint start for the given file before calling the
	 * first {@link ITernLintCollector}
	 * {@link #addMessage(String, Long, Long, String, String)}.
	 * 
	 * @param file
	 */
	void startLint(String file);

	/**
	 * Add message.
	 * 
	 * @param message
	 *            the description of the message.
	 * @param start
	 *            offset.
	 * @param end
	 *            offset.
	 * @param lineNumber
	 *            the line number and null if the linter cannot support this
	 *            feature.
	 * @param severity
	 *            the severity of the message.
	 * @param file
	 *            the owner file name.
	 */
	void addMessage(String message, Long start, Long end, Long lineNumber,
			String severity, String file);

	/**
	 * This method is call when lint end for the given file after calling the
	 * last {@link ITernLintCollector}
	 * {@link #addMessage(String, Long, Long, String, String)}.
	 * 
	 * @param file
	 */
	void endLint(String file);

}

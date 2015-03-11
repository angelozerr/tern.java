/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - collectors API and code refactoring
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
	 * @param start
	 * @param end
	 * @param severity
	 * @param file
	 */
	void addMessage(String message, Long start, Long end, String severity,
			String file);

	/**
	 * This method is call when lint end for the given file after calling the
	 * last {@link ITernLintCollector}
	 * {@link #addMessage(String, Long, Long, String, String)}.
	 * 
	 * @param file
	 */
	void endLint(String file);

}

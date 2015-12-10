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

import tern.server.protocol.IJSONObjectHelper;
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
	 * @param messageId
	 *            the id of the message and null if the linter cannot support
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
	 * @param messageObject
	 *            JSON object of message.
	 * @param helper
	 *            the JSON Object helper to visit the given JSON message object.            
	 */
	void addMessage(String messageId, String message, Long start, Long end, Long lineNumber, String severity,
			String file, Object messageObject, IJSONObjectHelper helper);

	/**
	 * This method is call when lint end for the given file after calling the
	 * last {@link ITernLintCollector}
	 * {@link #addMessage(String, Long, Long, String, String)}.
	 * 
	 * @param file
	 */
	void endLint(String file);

}

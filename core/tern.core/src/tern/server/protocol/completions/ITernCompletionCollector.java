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
package tern.server.protocol.completions;

import tern.server.ITernServer;

/**
 * Collector to collect result of completion.
 *
 */
public interface ITernCompletionCollector {

	/**
	 * Collect an item completion.
	 * 
	 * @param name
	 *            of the completion item.
	 * @param type
	 *            of the completion item.
	 * @param doc
	 *            of the completion item.
	 * @param url
	 *            of the completion item.
	 * @param origin
	 *            of the completion item.
	 * @param start
	 * @param end
	 *            of the cursor.
	 * @param completion
	 *            object of completion item (ex : JsonObject)
	 * @param ternServer
	 *            the tern server.
	 */
	void addProposal(String name, String type, String doc, String url,
			String origin, int start, int end, Object completion,
			ITernServer ternServer);
}

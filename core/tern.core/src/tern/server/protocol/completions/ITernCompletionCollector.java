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

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultsCollector;

/**
 * Collector to collect result of completion.
 * 
 */
public interface ITernCompletionCollector extends ITernResultsCollector {

	/**
	 * Collect an item completion.
	 * 
	 * @param proposal
	 *            object containing all required information about the proposal
	 * @param completion
	 *            object of completion item (ex : JsonObject)
	 * @param ternServer
	 *            the tern server.
	 */
	void addProposal(TernCompletionProposalRec proposal, Object completion,
			IJSONObjectHelper jsonManager);

}

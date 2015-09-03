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
package tern.server.protocol.guesstypes;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultsCollector;
import tern.server.protocol.completions.TernCompletionProposalRec;

public interface ITernGuessTypesCollector extends ITernResultsCollector {

	void addProposal(int arg, TernCompletionProposalRec proposal, Object completion, IJSONObjectHelper jsonManager);
}

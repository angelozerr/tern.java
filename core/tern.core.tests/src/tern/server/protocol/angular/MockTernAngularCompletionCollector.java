/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.server.protocol.angular;

import java.util.Collection;
import java.util.HashMap;

import tern.angular.protocol.completions.AngularCompletionProposalRec;
import tern.angular.protocol.completions.TernAngularCompletionItem;
import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.completions.TernCompletionProposalRec;

public class MockTernAngularCompletionCollector extends
		HashMap<String, TernAngularCompletionItem> implements
		ITernCompletionCollector {

	public MockTernAngularCompletionCollector() {

	}

	@Override
	public void addProposal(TernCompletionProposalRec proposal,
			Object completion, IJSONObjectHelper jsonObjectHelper) {
		super.put(proposal.name, new TernAngularCompletionItem(
				new AngularCompletionProposalRec(proposal, -1),
				jsonObjectHelper.getText(completion, "module"),
				jsonObjectHelper.getText(completion, "controller")));
	}

	public Collection<TernAngularCompletionItem> getCompletions() {
		return super.values();
	}

}

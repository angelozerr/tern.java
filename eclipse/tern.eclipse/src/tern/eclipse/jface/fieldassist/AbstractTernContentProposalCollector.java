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
package tern.eclipse.jface.fieldassist;

import org.eclipse.jface.fieldassist.IContentProposal;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.completions.TernCompletionProposalRec;

public abstract class AbstractTernContentProposalCollector implements
		ITernCompletionCollector {

	@Override
	public void addProposal(TernCompletionProposalRec proposal,
			Object completion, IJSONObjectHelper jsonObjectHelper) {
		addProposal(new TernContentProposal(proposal));
	}

	protected abstract void addProposal(IContentProposal proposal);

}

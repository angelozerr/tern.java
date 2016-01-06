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

import java.util.ArrayList;
import java.util.List;

import org.eclipse.jface.fieldassist.IContentProposal;
import org.eclipse.jface.fieldassist.IContentProposalProvider;

import tern.TernException;
import tern.server.ITernServer;
import tern.server.protocol.TernDoc;

public abstract class AbstractTernContentProposalProvider implements
		IContentProposalProvider {

	private static final IContentProposal[] EMPTY = new IContentProposal[0];

	@Override
	public IContentProposal[] getProposals(String contents, int position) {
		ITernServer server = getServer();
		TernDoc doc = createDoc();
		try {
			List<IContentProposal> proposals = new ArrayList<IContentProposal>();
			server.request(doc, new TernContentProposalCollector(proposals));
			return proposals.toArray(EMPTY);
		} catch (TernException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return EMPTY;
	}

	protected abstract ITernServer getServer();

	protected abstract TernDoc createDoc();

}

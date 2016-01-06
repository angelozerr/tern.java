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

import tern.doc.IJSDocument;
import tern.doc.JSDocumentHelper;
import tern.server.ITernServer;
import tern.server.protocol.TernDoc;

public class TernContentProposalProvider extends
		AbstractTernContentProposalProvider {

	private final IJSDocument doc;

	public TernContentProposalProvider(IJSDocument doc) {
		this.doc = doc;
	}

	@Override
	public IContentProposal[] getProposals(String contents, int position) {
		IContentProposal[] proposals = super.getProposals(contents, position);
		doc.setChanged(false);
		return proposals;
	}

	@Override
	protected ITernServer getServer() {
		return doc.getServer();
	}

	@Override
	protected TernDoc createDoc() {
		return JSDocumentHelper.createDoc(doc);
	}

}

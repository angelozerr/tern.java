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

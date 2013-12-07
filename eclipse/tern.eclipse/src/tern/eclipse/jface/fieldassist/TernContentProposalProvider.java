package tern.eclipse.jface.fieldassist;

import tern.doc.IJSDocument;
import tern.server.ITernServer;
import tern.server.protocol.TernDoc;
import tern.server.protocol.TernDocHelper;

public class TernContentProposalProvider extends
		AbstractTernContentProposalProvider {

	private final IJSDocument doc;

	public TernContentProposalProvider(IJSDocument doc) {
		this.doc = doc;
	}

	@Override
	protected ITernServer getServer() {
		return doc.getServer();
	}

	@Override
	protected TernDoc createDoc() {
		return TernDocHelper.createDoc(doc);
	}

}

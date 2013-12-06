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

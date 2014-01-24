package tern.eclipse.jface.fieldassist;

import org.eclipse.jface.fieldassist.IContentProposal;

import tern.server.ITernServer;
import tern.server.protocol.completions.ITernCompletionCollector;

public abstract class AbstractTernContentProposalCollector implements
		ITernCompletionCollector {

	@Override
	public void addProposal(String name, String type, String origin,
			Object doc, int pos, Object completion, ITernServer ternServer) {
		addProposal(new TernContentProposal(name, type, origin,
				doc != null ? doc.toString() : null, pos));
	}

	protected abstract void addProposal(IContentProposal proposal);

}

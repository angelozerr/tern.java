package tern.eclipse.jface.fieldassist;

import org.eclipse.jface.fieldassist.IContentProposal;

import tern.server.protocol.completions.ITernCompletionCollector;

public abstract class AbstractTernContentProposalCollector implements
		ITernCompletionCollector {

	@Override
	public void addProposal(String name, String type, Object doc, int pos) {
		addProposal(new TernContentProposal(name, type,
				doc != null ? doc.toString() : null, pos));
	}

	protected abstract void addProposal(IContentProposal proposal);

}

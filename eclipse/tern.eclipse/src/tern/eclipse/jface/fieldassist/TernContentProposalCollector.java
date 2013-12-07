package tern.eclipse.jface.fieldassist;

import java.util.List;

import org.eclipse.jface.fieldassist.IContentProposal;

public class TernContentProposalCollector extends
		AbstractTernContentProposalCollector {

	private final List<IContentProposal> proposals;

	public TernContentProposalCollector(List<IContentProposal> proposals) {
		this.proposals = proposals;
	}

	@Override
	protected void addProposal(IContentProposal proposal) {
		proposals.add(proposal);
	}
}

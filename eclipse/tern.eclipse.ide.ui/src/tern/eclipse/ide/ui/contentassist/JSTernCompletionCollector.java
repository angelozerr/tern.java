package tern.eclipse.ide.ui.contentassist;

import java.util.List;

import org.eclipse.jface.text.contentassist.ICompletionProposal;

import tern.server.ITernServer;
import tern.server.protocol.completions.ITernCompletionCollector;

/**
 * Tern collector which creates {@link JSTernCompletionProposal}.
 * 
 */
public class JSTernCompletionCollector implements ITernCompletionCollector {

	private final List<ICompletionProposal> proposals;
	private final int startOffset;

	public JSTernCompletionCollector(List<ICompletionProposal> proposals,
			int startOffset) {
		this.proposals = proposals;
		this.startOffset = startOffset;
	}

	@Override
	public void addProposal(String name, String type, String origin,
			Object doc, int pos, Object completion, ITernServer ternServer) {
		JSTernCompletionProposal proposal = new JSTernCompletionProposal(name,
				type, origin, doc, pos, startOffset);
		proposals.add(proposal);

		if (proposal.getAllTypes() != null) {
			for (int i = 0; i < proposal.getAllTypes().length; i++) {
				proposals.add(new JSTernCompletionProposal(name, proposal
						.getAllTypes()[i], origin, doc, pos, startOffset));
			}
		}

	}
}

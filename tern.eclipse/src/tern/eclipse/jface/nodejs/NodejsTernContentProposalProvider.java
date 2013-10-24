package tern.eclipse.jface.nodejs;

import java.util.List;

import org.eclipse.jface.fieldassist.IContentProposal;

import tern.doc.IJSDocument;
import tern.eclipse.jface.AbstractTernContentProposalProvider;

public class NodejsTernContentProposalProvider extends
		AbstractTernContentProposalProvider {

	public NodejsTernContentProposalProvider(IJSDocument document) {
		super(document);
	}

	@Override
	protected void populateCompletions(Object data,
			List<IContentProposal> proposals) {

	}

}

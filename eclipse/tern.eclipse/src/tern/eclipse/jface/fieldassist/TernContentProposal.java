package tern.eclipse.jface.fieldassist;

import org.eclipse.jface.fieldassist.IContentProposal;

import tern.server.protocol.completions.TernCompletionItem;

public class TernContentProposal extends TernCompletionItem implements
		IContentProposal {

	private final String content;
	private final String description;

	public TernContentProposal(String name, String type, String origin,
			String doc, int pos) {
		super(name, type, origin);
		this.content = getSignature().substring(pos, getSignature().length());
		this.description = doc;
		
	}

	@Override
	public String getContent() {
		return content;
	}

	@Override
	public int getCursorPosition() {
		return 0;
	}

	@Override
	public String getDescription() {
		return description;
	}

	@Override
	public String getLabel() {
		return getText();
	}

}

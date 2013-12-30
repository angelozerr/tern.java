package tern.eclipse.jface.contentassist;

import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.jface.text.contentassist.IContextInformation;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Point;

import tern.eclipse.jface.TernImagesRegistry;
import tern.server.protocol.completions.TernCompletionItem;

public class TernCompletionProposal extends TernCompletionItem implements
		ICompletionProposal {

	private String fDisplayString;
	private String fReplacementString;
	private int fReplacementOffset;
	private int fReplacementLength;
	private int fCursorPosition;
	private Image fImage;
	private IContextInformation fContextInformation;
	private String fAdditionalProposalInfo;

	public TernCompletionProposal(String name, String type, String origin,
			Object doc, int pos, int startOffset) {
		this(name, type, origin, doc, pos, startOffset, null, null);
	}

	public TernCompletionProposal(String name, String type, String origin,
			Object doc, int pos, int startOffset, String replacementString,
			Image image) {
		super(name, type, origin);

		String text = replacementString != null ? replacementString : super
				.getSignature();
		this.fReplacementString = text;
		this.fReplacementOffset = startOffset - pos;
		this.fReplacementLength = pos;
		this.fCursorPosition = text.length();

		this.fImage = image != null ? image : TernImagesRegistry.getImage(this);
		this.fDisplayString = super.getText();
		this.fContextInformation = null;
		this.fAdditionalProposalInfo = doc != null ? doc.toString() : null;

	}

	public void apply(IDocument document) {
		try {
			document.replace(this.fReplacementOffset, this.fReplacementLength,
					this.fReplacementString);
		} catch (BadLocationException localBadLocationException) {
		}
	}

	public Point getSelection(IDocument document) {
		return new Point(this.fReplacementOffset + this.fCursorPosition, 0);
	}

	public IContextInformation getContextInformation() {
		return this.fContextInformation;
	}

	public Image getImage() {
		return this.fImage;
	}

	public String getDisplayString() {
		if (this.fDisplayString != null)
			return this.fDisplayString;
		return this.fReplacementString;
	}

	public String getAdditionalProposalInfo() {
		return this.fAdditionalProposalInfo;
	}
}

package tern.eclipse.jface.contentassist;

import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.jface.text.contentassist.IContextInformation;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Point;

import tern.server.protocol.TernCompletionItem;

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

	public TernCompletionProposal(String name, String type, Object doc,
			int pos, int startOffset) {
		super(name, type);

		String text = super.getText();
		this.fReplacementString = text;
		this.fReplacementOffset = startOffset - pos;
		this.fReplacementLength = pos;
		this.fCursorPosition = text.length();

		this.fImage = null;
		this.fDisplayString = text;
		this.fContextInformation = null;
		this.fAdditionalProposalInfo = doc != null ? doc.toString() : null;

	}

	//
	// public TernCompletionProposal(String replacementString,
	// int replacementOffset, int replacementLength, int cursorPosition) {
	// this(replacementString, replacementOffset, replacementLength,
	// cursorPosition, null, null, null, null);
	// }
	//
	// public TernCompletionProposal(String replacementString,
	// int replacementOffset, int replacementLength, int cursorPosition,
	// Image image, String displayString,
	// IContextInformation contextInformation,
	// String additionalProposalInfo) {
	// Assert.isNotNull(replacementString);
	// Assert.isTrue(replacementOffset >= 0);
	// Assert.isTrue(replacementLength >= 0);
	// Assert.isTrue(cursorPosition >= 0);
	//
	// this.fReplacementString = replacementString;
	// this.fReplacementOffset = replacementOffset;
	// this.fReplacementLength = replacementLength;
	// this.fCursorPosition = cursorPosition;
	// this.fImage = image;
	// this.fDisplayString = displayString;
	// this.fContextInformation = contextInformation;
	// this.fAdditionalProposalInfo = additionalProposalInfo;
	// }

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

	private static class Item {
		private final String text;
		private final String firstParam;

		public Item(String text, String firstParam) {
			this.text = text;
			this.firstParam = firstParam;
		}
	}

	Item parse(String text, String type) {
		StringBuilder firstParam = null;
		StringBuilder currentParam = null;
		boolean typeParsing = false;
		if (type.startsWith("fn(")) {
			text += '(';
			int bracket = 0;
			String afterStartFn = type.substring(2, type.length());
			int i = 0;
			for (i = 0; i < afterStartFn.length(); i++) {
				char c = afterStartFn.charAt(i);
				switch (c) {
				case '(':
					bracket++;
					break;
				case ')':
					bracket--;
					break;
				default:
					if (bracket == 1) {
						if (typeParsing) {
							if (c == ',')
								typeParsing = false;
						} else {
							if (currentParam == null) {
								if (c != ' ' && c != '?') {
									currentParam = new StringBuilder(c);
								}
							} else {
								if (c == ':') {
									typeParsing = true;
									if (firstParam == null) {
										firstParam = new StringBuilder(
												currentParam);
									} else {
										text += ", ";
									}
									text += currentParam;
									currentParam = null;
								} else {
									if (c != ' ' && c != '?') {
										currentParam.append(c);
									}
								}
							}
						}
					}
				}
				if (bracket == 0)
					break;
			}
			text += ')';
		}
		return new Item(text, firstParam != null ? firstParam.toString() : null);

	}
}

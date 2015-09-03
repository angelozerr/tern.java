/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.jface.contentassist;

import java.util.List;

import org.eclipse.jface.internal.text.html.BrowserInformationControl;
import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.DocumentEvent;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IInformationControlCreator;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.ITextViewerExtension5;
import org.eclipse.jface.text.contentassist.CompletionProposal;
import org.eclipse.jface.text.contentassist.ContextInformation;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.jface.text.contentassist.ICompletionProposalExtension;
import org.eclipse.jface.text.contentassist.ICompletionProposalExtension2;
import org.eclipse.jface.text.contentassist.ICompletionProposalExtension3;
import org.eclipse.jface.text.contentassist.IContextInformation;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.widgets.Shell;

import tern.eclipse.jface.images.TernImagesRegistry;
import tern.eclipse.jface.text.HoverControlCreator;
import tern.eclipse.jface.text.PresenterControlCreator;
import tern.server.protocol.completions.Parameter;
import tern.server.protocol.completions.TernCompletionItem;
import tern.server.protocol.completions.TernCompletionProposalRec;

public class TernCompletionProposal extends TernCompletionItem implements
		ICompletionProposal, ICompletionProposalExtension,
		ICompletionProposalExtension2, ICompletionProposalExtension3
/* , IRelevanceCompletionProposal */{

	private String fDisplayString;
	private String fReplacementString;
	private int fReplacementOffset;
	private int fReplacementLength;
	private int fCursorPosition;
	private Image fImage;
	private IContextInformation fContextInformation;
	private boolean fContextInformationComputed;
	private String fAdditionalProposalInfo;
	private boolean fUpdateLengthOnValidate;
	private String fAlternateMatch;
	private char[] fTriggers;
	private IInformationControlCreator ternControlCreator;

	public TernCompletionProposal(TernCompletionProposalRec proposal) {
		super(proposal);

		String text = super.getSignature();
		this.fReplacementString = text;
		this.fReplacementOffset = proposal.start;
		this.fReplacementLength = proposal.end - proposal.start;
		this.fCursorPosition = text.length();

		this.fDisplayString = super.getText();
		this.fAdditionalProposalInfo = proposal.doc != null ? proposal.doc.toString() : null;

	}

	/**
	 * Create context information for function parameters.
	 * 
	 * @return
	 */
	private synchronized IContextInformation createContextInformation() {
		List<Parameter> parameters = getParameters();
		if (parameters != null) {
			StringBuilder info = new StringBuilder();
			for (int i = 0; i < parameters.size(); i++) {
				Parameter parameter = parameters.get(i);
				if (i > 0) {
					info.append(", ");
				}
				info.append(parameter.getName());
				if (!parameter.isRequired()) {
					info.append("?");
				}
				info.append(": ");
				info.append(parameter.getType());
			}
			return new ContextInformation("", info.toString());
		}
		return null;
	}

	protected Image getDefaultImage() {
		return TernImagesRegistry.getImage(this, false);
	}

	// public void apply(IDocument document) {
	// try {
	// document.replace(this.fReplacementOffset, this.fReplacementLength,
	// this.fReplacementString);
	// } catch (BadLocationException localBadLocationException) {
	// }
	// }

	public void apply(IDocument document) {
		CompletionProposal proposal = new CompletionProposal(
				getReplacementString(), getReplacementOffset(),
				getReplacementLength(), getCursorPosition(), getImage(),
				getDisplayString(), getContextInformation(),
				getAdditionalProposalInfo());
		proposal.apply(document);
	}

	private int getCursorPosition() {
		return fCursorPosition;
	}

	protected int getReplacementLength() {
		return fReplacementLength;
	}

	protected int getReplacementOffset() {
		return fReplacementOffset;
	}

	protected String getReplacementString() {
		return fReplacementString;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.eclipse.jface.text.contentassist.ICompletionProposalExtension#apply
	 * (org.eclipse.jface.text.IDocument, char, int)
	 */
	public void apply(IDocument document, char trigger, int offset) {
		CompletionProposal proposal = new CompletionProposal(
				getReplacementString(), getReplacementOffset(),
				getReplacementLength(), getCursorPosition(), getImage(),
				getDisplayString(), getContextInformation(),
				getAdditionalProposalInfo());
		// we currently don't do anything special for which character
		// selected the proposal, and where the cursor offset is
		// but we might in the future...
		proposal.apply(document);
		// we want to ContextInformationPresenter.updatePresentation() here
	}

	public void apply(ITextViewer viewer, char trigger, int stateMask,
			int offset) {
		IDocument document = viewer.getDocument();
		// CMVC 252634 to compensate for "invisible" initial region
		int caretOffset = viewer.getTextWidget().getCaretOffset();
		if (viewer instanceof ITextViewerExtension5) {
			ITextViewerExtension5 extension = (ITextViewerExtension5) viewer;
			caretOffset = extension.widgetOffset2ModelOffset(caretOffset);
		} else {
			caretOffset = viewer.getTextWidget().getCaretOffset()
					+ viewer.getVisibleRegion().getOffset();
		}

		if (caretOffset == getReplacementOffset()) {
			apply(document);
		} else {
			// replace the text without affecting the caret Position as this
			// causes the cursor to move on its own
			try {
				int endOffsetOfChanges = getReplacementString().length()
						+ getReplacementOffset();
				// Insert the portion of the new text that comes after the
				// current caret position
				if (endOffsetOfChanges >= caretOffset) {
					int postCaretReplacementLength = getReplacementOffset()
							+ getReplacementLength() - caretOffset;
					int preCaretReplacementLength = getReplacementString()
							.length() - (endOffsetOfChanges - caretOffset);
					if (postCaretReplacementLength < 0) {
						/*
						 * if (Debug.displayWarnings) { System.out.println(
						 * "** postCaretReplacementLength was negative: " +
						 * postCaretReplacementLength); //$NON-NLS-1$ }
						 */
						// This is just a quick fix while I figure out what
						// replacement length is supposed to be
						// in each case, otherwise we'll get negative
						// replacment length sometimes
						postCaretReplacementLength = 0;
					}
					document.replace(
							caretOffset,
							postCaretReplacementLength,
							getReplacementString().substring(
									preCaretReplacementLength));
				}
				// Insert the portion of the new text that comes before the
				// current caret position
				// Done second since offsets would change for the post text
				// otherwise
				// Outright insertions are handled here
				if (caretOffset > getReplacementOffset()) {
					int preCaretTextLength = caretOffset
							- getReplacementOffset();
					document.replace(getReplacementOffset(),
							preCaretTextLength, getReplacementString()
									.substring(0, preCaretTextLength));
				}
			} catch (BadLocationException x) {
				apply(document);
			} catch (StringIndexOutOfBoundsException e) {
				apply(document);
			}
		}
	}

	public Point getSelection(IDocument document) {
		CompletionProposal proposal = new CompletionProposal(
				getReplacementString(), getReplacementOffset(),
				getReplacementLength(), getCursorPosition(), getImage(),
				getDisplayString(), getContextInformation(),
				getAdditionalProposalInfo());
		return proposal.getSelection(document);

		// return new Point(this.fReplacementOffset + this.fCursorPosition, 0);
	}

	@Override
	public Image getImage() {
		if (this.fImage == null) {
			this.fImage = getDefaultImage();
		}
		return this.fImage;
	}

	public void setImage(Image fImage) {
		this.fImage = fImage;
	}

	@Override
	public String getDisplayString() {
		if (this.fDisplayString != null)
			return this.fDisplayString;
		return this.fReplacementString;
	}

	@Override
	public String getAdditionalProposalInfo() {
		return this.fAdditionalProposalInfo;
	}

	@Override
	public IContextInformation getContextInformation() {
		if (!fContextInformationComputed) {
			fContextInformation = createContextInformation();
			fContextInformationComputed = true;
		}
		return fContextInformation;
	}

	public void setContextInformation(IContextInformation contextInfo) {
		fContextInformation = contextInfo;
	}

	@Override
	public int getContextInformationPosition() {
		// https://bugs.eclipse.org/bugs/show_bug.cgi?id=110355
		// return getCursorPosition();
		if (getContextInformation() == null)
			return getReplacementOffset() - 1;
		return getReplacementOffset() + getCursorPosition();
	}

	public void setCursorPosition(int pos) {
		fCursorPosition = pos;
	}

	public void setDisplayString(String newDisplayString) {
		fDisplayString = newDisplayString;
	}

	public void setReplacementLength(int newReplacementLength) {
		fReplacementLength = newReplacementLength;
	}

	// public Point getSelection(IDocument document) {
	// // return fProposal.getSelection(document);
	// CompletionProposal proposal = new
	// CompletionProposal(getReplacementString(), getReplacementOffset(),
	// getReplacementLength(), getCursorPosition(), getImage(),
	// getDisplayString(), getContextInformation(),
	// getAdditionalProposalInfo());
	// return proposal.getSelection(document);
	// }

	@Override
	public char[] getTriggerCharacters() {
		return fTriggers;
	}

	public void setTriggerCharacters(char[] triggers) {
		fTriggers = triggers;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.eclipse.jface.text.contentassist.ICompletionProposalExtension#isValidFor
	 * (org.eclipse.jface.text.IDocument, int)
	 */
	public boolean isValidFor(IDocument document, int offset) {
		return validate(document, offset, null);
	}

	/**
	 * @see org.eclipse.jface.text.contentassist.ICompletionProposalExtension2#selected(org.eclipse.jface.text.ITextViewer,
	 *      boolean)
	 */
	public void selected(ITextViewer viewer, boolean smartToggle) {
	}

	// code is borrowed from JavaCompletionProposal
	protected boolean startsWith(IDocument document, int offset, String word) {

		int wordLength = word == null ? 0 : word.length();
		if (offset > fReplacementOffset + wordLength)
			return false;

		try {
			int length = offset - fReplacementOffset;
			String start = document.get(fReplacementOffset, length);

			return (word != null && word.substring(0, length).equalsIgnoreCase(
					start))
					|| (fAlternateMatch != null
							&& length <= fAlternateMatch.length() && fAlternateMatch
							.substring(0, length).equalsIgnoreCase(start));
		} catch (BadLocationException x) {
		}

		return false;
	}

	/**
	 * @see org.eclipse.jface.text.contentassist.ICompletionProposalExtension2#unselected(org.eclipse.jface.text.ITextViewer)
	 */
	public void unselected(ITextViewer viewer) {
	}

	/**
	 * borrowed from JavaCompletionProposal
	 * 
	 * @see org.eclipse.jface.text.contentassist.ICompletionProposalExtension2#validate(org.eclipse.jface.text.IDocument,
	 *      int, org.eclipse.jface.text.DocumentEvent)
	 */
	public boolean validate(IDocument document, int offset, DocumentEvent event) {
		if (offset < fReplacementOffset)
			return false;
		boolean validated = startsWith(document, offset, fReplacementString);

		if (fUpdateLengthOnValidate && event != null) {
			fReplacementLength += event.fText.length() - event.fLength; // adjust
																		// the
																		// replacement
																		// length
																		// by
																		// the
																		// event's
																		// text
																		// replacement
		}
		return validated;
	}

	/**
	 * @param replacementOffset
	 *            The fReplacementOffset to set.
	 */
	public void setReplacementOffset(int replacementOffset) {
		fReplacementOffset = replacementOffset;
	}

	/**
	 * @param replacementString
	 *            The fReplacementString to set.
	 */
	public void setReplacementString(String replacementString) {
		fReplacementString = replacementString;
	}

	@Override
	public IInformationControlCreator getInformationControlCreator() {
		Shell shell = getActiveWorkbenchShell();
		if (shell == null || !BrowserInformationControl.isAvailable(shell))
			return null;

		if (ternControlCreator == null) {
			PresenterControlCreator presenterControlCreator = new PresenterControlCreator();
			ternControlCreator = new HoverControlCreator(
					presenterControlCreator, true);
		}
		return ternControlCreator;
	}

	protected Shell getActiveWorkbenchShell() {
		return null;
	}

	@Override
	public int getPrefixCompletionStart(IDocument document, int completionOffset) {
		return fReplacementOffset;
	}

	@Override
	public CharSequence getPrefixCompletionText(IDocument document,
			int completionOffset) {
		return null;
	}

}

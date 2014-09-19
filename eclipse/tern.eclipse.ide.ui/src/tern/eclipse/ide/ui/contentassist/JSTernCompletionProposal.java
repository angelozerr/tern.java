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
package tern.eclipse.ide.ui.contentassist;

import java.util.List;

import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.Region;
import org.eclipse.jface.text.link.ILinkedModeListener;
import org.eclipse.jface.text.link.LinkedModeModel;
import org.eclipse.jface.text.link.LinkedModeUI;
import org.eclipse.jface.text.link.LinkedModeUI.ExitFlags;
import org.eclipse.jface.text.link.LinkedModeUI.IExitPolicy;
import org.eclipse.jface.text.link.LinkedPosition;
import org.eclipse.jface.text.link.LinkedPositionGroup;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.VerifyEvent;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.texteditor.link.EditorLinkedModeUI;
import org.eclipse.wst.sse.ui.internal.contentassist.IRelevanceCompletionProposal;

import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.utils.HTMLTernPrinter;
import tern.eclipse.jface.contentassist.TernCompletionProposal;
import tern.server.protocol.completions.Parameter;

public class JSTernCompletionProposal extends TernCompletionProposal 
		implements IRelevanceCompletionProposal {

	private static final String COMMA = ",";

	private IRegion fSelectedRegion; // initialized by apply()
	private int[] fArgumentOffsets;
	private int[] fArgumentLengths;
	private ITextViewer fTextViewer;
	private boolean fReplacementStringComputed;
	private int fRelevance;

	private boolean fToggleEating;


	public JSTernCompletionProposal(String name, String type, String doc,
			String url, String origin, int pos, int startOffset) {
		this(name, type, doc, url, origin, pos, startOffset, 10000);
	}

	public JSTernCompletionProposal(String name, String type, String doc,
			String url, String origin, int pos, int startOffset, int relevance) {
		super(name, type, doc, url, origin, pos, startOffset);
		this.fRelevance = relevance;
	}

	@Override
	protected Image getDefaultImage() {
		return TernUIPlugin.getTernDescriptorManager().getImage(this);
	}

	public void apply(ITextViewer viewer, char trigger, int stateMask,
			int offset) {

		IDocument document = viewer.getDocument();
		if (fTextViewer == null)
			fTextViewer = viewer;

		// don't eat if not in preferences, XOR with modifier key 1 (Ctrl)
		// but: if there is a selection, replace it!
		Point selection = viewer.getSelectedRange();
		fToggleEating = (stateMask & SWT.MOD1) != 0;
		int newLength = selection.x + selection.y - getReplacementOffset();
		if ((insertCompletion() ^ fToggleEating) && newLength >= 0)
			setReplacementLength(newLength);

		apply(document, trigger, offset);
		fToggleEating = false;
	}

	private boolean insertCompletion() {
		return true;
	}

	@Override
	public void apply(IDocument document, char trigger, int offset) {
		super.apply(document, trigger, offset);
		int baseOffset = getReplacementOffset();
		String replacement = getReplacementString();

		if (fArgumentOffsets != null && getTextViewer() != null) {
			try {
				LinkedModeModel model = new LinkedModeModel();
				for (int i = 0; i != fArgumentOffsets.length; i++) {
					LinkedPositionGroup group = new LinkedPositionGroup();
					group.addPosition(new LinkedPosition(document, baseOffset
							+ fArgumentOffsets[i], fArgumentLengths[i],
							LinkedPositionGroup.NO_STOP));
					model.addGroup(group);
				}

				model.forceInstall();
				/*
				 * JavaEditor editor = getJavaEditor(); if (editor != null) {
				 * model.addLinkingListener(new EditorHighlightingSynchronizer(
				 * editor)); }
				 */

				LinkedModeUI ui = new EditorLinkedModeUI(model, getTextViewer());
				ui.setExitPosition(getTextViewer(),
						baseOffset + replacement.length(), 0, Integer.MAX_VALUE);
				ui.setExitPolicy(new ExitPolicy(')', document));
				ui.setDoContextInfo(true);
				ui.setCyclingMode(LinkedModeUI.CYCLE_WHEN_NO_PARENT);
				ui.enter();

				fSelectedRegion = ui.getSelectedRegion();

			} catch (BadLocationException e) {
				// JavaScriptPlugin.log(e);
				// openErrorDialog(e);
			}
		} else {
			fSelectedRegion = new Region(baseOffset + replacement.length(), 0);
		}
	}

	@Override
	public Point getSelection(IDocument document) {
		if (fSelectedRegion == null)
			return new Point(getReplacementOffset(), 0);

		return new Point(fSelectedRegion.getOffset(),
				fSelectedRegion.getLength());
	}

	public ITextViewer getTextViewer() {
		return fTextViewer;
	}

	/**
	 * Gets the replacement string.
	 * 
	 * @return Returns a String
	 */
	@Override
	public final String getReplacementString() {
		if (!fReplacementStringComputed)
			setReplacementString(computeReplacementString());
		return super.getReplacementString();
	}

	/**
	 * Sets the replacement string.
	 * 
	 * @param replacementString
	 *            The replacement string to set
	 */
	public final void setReplacementString(String replacementString) {
		fReplacementStringComputed = true;
		super.setReplacementString(replacementString);
	}

	protected String computeReplacementString() {

		List<Parameter> parameters = super.getParameters();
		if (parameters == null) {
			return super.getReplacementString();
		}

		int count = parameters.size();
		fArgumentOffsets = new int[count];
		fArgumentLengths = new int[count];
		StringBuilder buffer = new StringBuilder(
				String.valueOf(super.getName()));
		buffer.append("(");
		setCursorPosition(buffer.length());

		String paramName = null;
		for (int i = 0; i != count; i++) {
			if (i != 0) {
				// if (prefs.beforeComma)
				// buffer.append(SPACE);
				buffer.append(COMMA);
				// if (prefs.afterComma)
				// buffer.append(SPACE);
			}

			paramName = parameters.get(i).getName();
			fArgumentOffsets[i] = buffer.length();
			buffer.append(paramName);
			fArgumentLengths[i] = paramName.length();
		}

		buffer.append(")");

		/*
		 * if (!hasParameters() || !hasArgumentList()) return
		 * super.computeReplacementString();
		 * 
		 * char[][] parameterNames = fProposal.findParameterNames(null); int
		 * count = parameterNames.length; fArgumentOffsets = new int[count];
		 * fArgumentLengths = new int[count]; StringBuilder buffer = new
		 * StringBuilder(String.valueOf(fProposal .getName()));
		 * 
		 * FormatterPrefs prefs = getFormatterPrefs(); if
		 * (prefs.beforeOpeningParen) buffer.append(SPACE);
		 * buffer.append(LPAREN);
		 * 
		 * setCursorPosition(buffer.length());
		 * 
		 * if (prefs.afterOpeningParen) buffer.append(SPACE);
		 * 
		 * for (int i = 0; i != count; i++) { if (i != 0) { if
		 * (prefs.beforeComma) buffer.append(SPACE); buffer.append(COMMA); if
		 * (prefs.afterComma) buffer.append(SPACE); }
		 * 
		 * fArgumentOffsets[i] = buffer.length();
		 * buffer.append(parameterNames[i]); fArgumentLengths[i] =
		 * parameterNames[i].length; }
		 * 
		 * if (prefs.beforeClosingParen) buffer.append(SPACE);
		 * 
		 * buffer.append(RPAREN);
		 * 
		 * return buffer.toString();
		 */
		return buffer.toString();
	}

	@Override
	public String getAdditionalProposalInfo() {
		return HTMLTernPrinter.getAdditionalProposalInfo(this, null);
	}

	protected static final class ExitPolicy implements IExitPolicy {

		final char fExitCharacter;
		private final IDocument fDocument;

		public ExitPolicy(char exitCharacter, IDocument document) {
			fExitCharacter = exitCharacter;
			fDocument = document;
		}

		public ExitFlags doExit(LinkedModeModel environment, VerifyEvent event,
				int offset, int length) {

			if (event.character == fExitCharacter) {
				if (environment.anyPositionContains(offset))
					return new ExitFlags(ILinkedModeListener.UPDATE_CARET,
							false);
				else
					return new ExitFlags(ILinkedModeListener.UPDATE_CARET, true);
			}

			switch (event.character) {
			case ';':
				return new ExitFlags(ILinkedModeListener.NONE, true);
			case SWT.CR:
				// when entering an anonymous class as a parameter, we don't
				// want
				// to jump after the parenthesis when return is pressed
				if (offset > 0) {
					try {
						if (fDocument.getChar(offset - 1) == '{')
							return new ExitFlags(ILinkedModeListener.EXIT_ALL,
									true);
					} catch (BadLocationException e) {
					}
				}
				return null;
			default:
				return null;
			}
		}

	}

	@Override
	protected Shell getActiveWorkbenchShell() {
		return TernUIPlugin.getActiveWorkbenchShell();
	}

	@Override
	public int getRelevance() {
		return fRelevance;
	}
}

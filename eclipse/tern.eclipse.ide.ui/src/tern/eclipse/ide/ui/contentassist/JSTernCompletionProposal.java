package tern.eclipse.ide.ui.contentassist;

import java.util.List;

import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.Region;
import org.eclipse.jface.text.link.LinkedModeModel;
import org.eclipse.jface.text.link.LinkedModeUI;
import org.eclipse.jface.text.link.LinkedPosition;
import org.eclipse.jface.text.link.LinkedPositionGroup;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Point;
import org.eclipse.ui.texteditor.link.EditorLinkedModeUI;

import tern.eclipse.jface.contentassist.TernCompletionProposal;
import tern.server.protocol.completions.Parameter;

public class JSTernCompletionProposal extends TernCompletionProposal {

	private static final String COMMA = ",";

	private IRegion fSelectedRegion; // initialized by apply()
	private int[] fArgumentOffsets;
	private int[] fArgumentLengths;
	private ITextViewer fTextViewer;
	private boolean fReplacementStringComputed;

	private boolean fToggleEating;

	public JSTernCompletionProposal(String name, String type, String origin,
			Object doc, int pos, int startOffset) {
		super(name, type, origin, doc, pos, startOffset);
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
				// ui.setExitPolicy(new ExitPolicy(')', document));
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
		String doc = super.getAdditionalProposalInfo();
		StringBuilder info = new StringBuilder(doc != null ? doc : "");
		List<Parameter> parameters = getParameters();
		if (parameters != null) {
			if (info.length() > 0) {
				info.append("<br/>");
			}
			info.append("<b>Parameters</b>");
			for (Parameter parameter : parameters) {
				info.append("<br/>");
				info.append(parameter.getName());
				info.append(": ");
				info.append(parameter.getType());
			}
		}
		return info.toString();
	}
}

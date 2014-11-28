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

import java.util.ArrayList;
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

import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.utils.HTMLTernPrinter;
import tern.eclipse.jface.contentassist.TernCompletionProposal;
import tern.server.protocol.completions.FunctionInfo;
import tern.server.protocol.completions.Parameter;

public class JSTernCompletionProposal extends TernCompletionProposal {

	private static final String RPAREN = ")";
	private static final String LPAREN = "(";
	private static final String COMMA = ",";
	private static final String SPACE = " ";

	private IRegion fSelectedRegion; // initialized by apply()
	private List<Integer> fArgumentOffsets;
	private List<Integer> fArgumentLengths;
	private ITextViewer fTextViewer;

	private boolean fToggleEating;
	private boolean generateAnonymousFunction;

	public JSTernCompletionProposal(String name, String type, String doc,
			String url, String origin, int start, int end) {
		super(name, type, doc, url, origin, start, end);
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

	@Override
	public void apply(IDocument document, char trigger, int offset) {
		// compute replacement string
		String replacement = computeReplacementString(document, offset);
		setReplacementString(replacement);

		// apply the replacement.
		super.apply(document, trigger, offset);
		int baseOffset = getReplacementOffset();

		if (fArgumentOffsets != null && getTextViewer() != null) {
			try {
				LinkedModeModel model = new LinkedModeModel();
				for (int i = 0; i != fArgumentOffsets.size(); i++) {
					LinkedPositionGroup group = new LinkedPositionGroup();
					group.addPosition(new LinkedPosition(document, baseOffset
							+ fArgumentOffsets.get(i), fArgumentLengths.get(i),
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
		// if (!fReplacementStringComputed)
		// setReplacementString(computeReplacementString());
		return super.getReplacementString();
	}

	private String computeReplacementString(IDocument document, int offset) {

		List<Parameter> parameters = super.getParameters();
		if (parameters == null) {
			return super.getReplacementString();
		}

		String indentation = getIndentation(document, offset);
		fArgumentOffsets = new ArrayList<Integer>();
		fArgumentLengths = new ArrayList<Integer>();

		StringBuilder replacement = new StringBuilder(super.getName());
		replacement.append(LPAREN);
		setCursorPosition(replacement.length());
		computeReplacementString(parameters, replacement, fArgumentOffsets,
				fArgumentLengths, indentation, 1);
		replacement.append(RPAREN);
		return replacement.toString();

	}

	private void computeReplacementString(List<Parameter> parameters,
			StringBuilder replacement, List<Integer> argumentOffsets,
			List<Integer> argumentLengths, String indentation,
			int nbIndentations) {
		int count = parameters.size();
		Parameter parameter = null;
		String paramName = null;
		for (int i = 0; i != count; i++) {
			parameter = parameters.get(i);
			if (i != 0) {
				// if (prefs.beforeComma)
				// buffer.append(SPACE);
				replacement.append(COMMA);
				// if (prefs.afterComma)
				replacement.append(SPACE);
			}

			if (parameter.isFunction() && isGenerateAnonymousFunction()) {
				FunctionInfo info = parameter.getInfo();
				List<Parameter> parametersOfParam = info.getParameters();
				replacement.append("function(");
				if (parametersOfParam != null) {
					computeReplacementString(parametersOfParam, replacement,
							argumentOffsets, argumentLengths, indentation,
							nbIndentations + 1);
				} else {
					// to select focus inside the () of generated inline
					// function
					fArgumentOffsets.add(replacement.length());
					fArgumentLengths.add(0);
				}
				replacement.append(") {");
				replacement.append("\n");
				indent(replacement, indentation, nbIndentations);
				replacement.append("\t");
				// to select focus inside the {} of generated inline function
				fArgumentOffsets.add(replacement.length());
				fArgumentLengths.add(0);
				replacement.append("\n");
				indent(replacement, indentation, nbIndentations);
				replacement.append("}");
			} else {
				paramName = parameter.getName();
				// to select focus for parameter
				fArgumentOffsets.add(replacement.length());
				replacement.append(paramName);
				fArgumentLengths.add(paramName.length());
			}
		}
		
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

	/**
	 * Returns true if anonymous function must be generated and false otherwise.
	 * 
	 * @return true if anonymous function must be generated and false otherwise.
	 */
	public boolean isGenerateAnonymousFunction() {
		return generateAnonymousFunction;
	}

	/**
	 * Set true if anonymous function must be generated and false otherwise.
	 * 
	 * @param generateAnonymousFunction
	 */
	public void setGenerateAnonymousFunction(boolean generateAnonymousFunction) {
		this.generateAnonymousFunction = generateAnonymousFunction;
	}

	/**
	 * Returns true if completion must be inserted and false otheriwse.
	 * 
	 * @return true if completion must be inserted and false otheriwse.
	 */
	private boolean insertCompletion() {
		// TODO : manage that with preferences
		return false;
	}

	/**
	 * Indent the given replacement with indentation * nbIndentations.
	 * 
	 * @param replacement
	 *            the buffer ton indent.
	 * @param indentation
	 *            the indentation composed by \t and spaces.
	 * @param nbIndentations
	 *            number of indentation.
	 */
	private void indent(StringBuilder replacement, String indentation,
			int nbIndentations) {
		for (int j = 0; j < nbIndentations; j++) {
			replacement.append(indentation);
		}
	}

	/**
	 * Returns the indentation characters from the given line.
	 * 
	 * @param document
	 * @param offset
	 * @return the indentation characters from the given line.
	 */
	private String getIndentation(IDocument document, int offset) {
		try {
			IRegion lineRegion = document.getLineInformationOfOffset(offset);
			String lineText = document.get(lineRegion.getOffset(),
					lineRegion.getLength());
			StringBuilder indentation = new StringBuilder();
			char[] chars = lineText.toCharArray();
			char c;
			for (int i = 0; i < chars.length; i++) {
				c = chars[i];
				if (c == ' ' || c == '\t') {
					indentation.append(c);
				} else {
					break;
				}
			}
			return indentation.toString();

		} catch (BadLocationException e1) {
		}
		return "";
	}

}

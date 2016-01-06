/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
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
import org.eclipse.jface.text.BadPositionCategoryException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IPositionUpdater;
import org.eclipse.jface.text.IRegion;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.Region;
import org.eclipse.jface.text.link.ILinkedModeListener;
import org.eclipse.jface.text.link.InclusivePositionUpdater;
import org.eclipse.jface.text.link.LinkedModeModel;
import org.eclipse.jface.text.link.LinkedModeUI;
import org.eclipse.jface.text.link.LinkedModeUI.ExitFlags;
import org.eclipse.jface.text.link.LinkedModeUI.IExitPolicy;
import org.eclipse.jface.text.link.LinkedPosition;
import org.eclipse.jface.text.link.LinkedPositionGroup;
import org.eclipse.jface.text.link.ProposalPosition;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.VerifyEvent;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.texteditor.link.EditorLinkedModeUI;

import tern.ITernFile;
import tern.ITernProject;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.utils.HTMLTernPrinter;
import tern.eclipse.jface.contentassist.TernCompletionProposal;
import tern.server.TernPlugin;
import tern.server.protocol.completions.FunctionInfo;
import tern.server.protocol.completions.Parameter;
import tern.server.protocol.completions.TernCompletionProposalRec;
import tern.server.protocol.completions.TernTypeHelper;
import tern.server.protocol.guesstypes.TernGuessTypesQuery;
import tern.utils.StringUtils;

/**
 * JavaScript tern completion proposal.
 *
 */
public class JSTernCompletionProposal extends TernCompletionProposal {

	public static final String TAB = "\t";
	public static final String SPACE = " ";

	private static final String RPAREN = ")";
	private static final String LPAREN = "(";
	private static final String COMMA = ",";

	private IRegion fSelectedRegion; // initialized by apply()
	private IPositionUpdater fUpdater;

	private Arguments arguments;
	private ITextViewer fTextViewer;

	private boolean fToggleEating;
	private boolean generateObjectValue;
	private boolean generateAnonymousFunction;
	private String indentChars;

	private ITernFile ternFile;

	public JSTernCompletionProposal(TernCompletionProposalRec proposal) {
		super(proposal);
		this.indentChars = TAB;
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

		updateReplacementLengthForString(document, offset, replacement);

		// apply the replacement.
		super.apply(document, trigger, offset);
		int baseOffset = getReplacementOffset();

		if (arguments != null && getTextViewer() != null) {
			try {
				// adjust offset of the whole arguments
				arguments.setBaseOffset(baseOffset);
				// guess parameters if "guess-types" tern plugin is checked.
				guessParameters(offset);
				// Create group.
				Arg arg = null;
				LinkedModeModel model = new LinkedModeModel();
				for (int i = 0; i != arguments.size(); i++) {
					arg = arguments.get(i);
					LinkedPositionGroup group = new LinkedPositionGroup();
					if (arg.getProposals() == null) {
						group.addPosition(new LinkedPosition(document, arg
								.getOffset(), arg.getLength(),
								LinkedPositionGroup.NO_STOP));
					} else {
						ensurePositionCategoryInstalled(document, model);
						document.addPosition(getCategory(), arg);
						group.addPosition(new ProposalPosition(document, arg
								.getOffset(), arg.getLength(),
								LinkedPositionGroup.NO_STOP, arg.getProposals()));
					}
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
				ensurePositionCategoryRemoved(document);
				// JavaScriptPlugin.log(e);
				// openErrorDialog(e);
			} catch (BadPositionCategoryException e) {
				ensurePositionCategoryRemoved(document);
				// JavaScriptPlugin.log(e);
				// openErrorDialog(e);
			}
		} else {
			int newOffset = baseOffset + replacement.length();
			if (isObjectKey() && TernTypeHelper.isStringType(getType())) {
				// select cursor inside quote of property value (ex : config:
				// "")
				newOffset--;
			}
			fSelectedRegion = new Region(newOffset, 0);
		}
	}

	protected void guessParameters(int offset) {
		ITernProject ternProject = super.getTernProject();
		if (ternProject != null
				&& ternProject.hasPlugin(TernPlugin.guess_types)) {
			String property = super.getName();
			TernGuessTypesQuery query = new TernGuessTypesQuery(
					ternFile.getFileName(), offset, property);

			try {
				ternProject.request(query, ternFile, arguments);
			} catch (Exception e) {
				Trace.trace(Trace.SEVERE, "Error while guessing type", e);
			}
		}
	}

	/**
	 * Compute new replacement length for string replacement.
	 * 
	 * @param document
	 * @param offset
	 * @param replacement
	 */
	protected void updateReplacementLengthForString(IDocument document,
			int offset, String replacement) {
		boolean isString = replacement.startsWith("\"")
				|| replacement.startsWith("'");
		if (isString) {
			int length = document.getLength();
			int pos = offset;
			char c;
			while (pos < length) {
				try {
					c = document.getChar(pos);
					switch (c) {
					case '\r':
					case '\n':
					case '\t':
					case ' ':
						return;
					case '"':
					case '\'':
						setReplacementLength(getReplacementLength() + pos
								- offset + 1);
						return;
					}
					++pos;
				} catch (BadLocationException e) {
					e.printStackTrace();
				}
			}
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

		if (isObjectKey()) {
			StringBuilder replacement = new StringBuilder(super.getName());
			replacement.append(": ");
			if (TernTypeHelper.isStringType(getType())) {
				replacement.append("\"\"");
			}
			// else if ("number".equals(getType())) {
			// replacement.append("0");
			// }
			else if (TernTypeHelper.isBoolType(getType())) {
				replacement.append("false");
			}
			return replacement.toString();
		}
		List<Parameter> parameters = super.getParameters();
		if (parameters == null) {
			return super.getReplacementString();
		}

		String indentation = getIndentation(document, offset);
		arguments = new Arguments(getTernProject());

		StringBuilder replacement = new StringBuilder(super.getName());
		replacement.append(LPAREN);
		setCursorPosition(replacement.length());
		computeReplacementString(parameters, replacement, arguments,
				indentation, 1, true);
		replacement.append(RPAREN);
		return replacement.toString();

	}

	/**
	 * Compute replacement string for the given function.
	 * 
	 * @param parameters
	 * @param replacement
	 * @param arguments
	 * @param indentation
	 * @param nbIndentations
	 * @param initialFunction
	 */
	private void computeReplacementString(List<Parameter> parameters,
			StringBuilder replacement, Arguments arguments, String indentation,
			int nbIndentations, boolean initialFunction) {
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

			if (parameter.isFunction() && isGenerateAnonymousFunction()
					&& initialFunction) {
				FunctionInfo info = parameter.getInfo();
				List<Parameter> parametersOfParam = info.getParameters();
				replacement.append("function(");
				if (parametersOfParam != null) {
					computeReplacementString(parametersOfParam, replacement,
							arguments, indentation, nbIndentations + 1, false);
				} else {
					// to select focus inside the () of generated inline
					// function
					arguments.addArg(replacement.length(), 0);
				}
				replacement.append(") {");
				replacement.append("\n");
				indent(replacement, indentation, nbIndentations);
				indent(replacement);
				if (!StringUtils.isEmpty(info.getReturnType())) {
					if (TernTypeHelper.isStringType(info.getReturnType())) {
						replacement.append("return \"\";");
					} else if (TernTypeHelper.isBoolType(info.getReturnType())) {
						replacement.append("return true;");
					} else if ("{}".equals(info.getReturnType())) {
						replacement.append("return {");
						replacement.append("\n");
						indent(replacement, indentation, nbIndentations);
						indent(replacement);
						indent(replacement);
						// to select focus inside the {} of generated return
						// statement of the function.
						arguments.addArg(replacement.length(), 0);
						replacement.append("\n");
						indent(replacement, indentation, nbIndentations);
						indent(replacement);
						replacement.append("}");
					}
				} else {
					// to select focus inside the {} of generated inline
					// function
					arguments.addArg(replacement.length(), 0);
				}
				replacement.append("\n");
				indent(replacement, indentation, nbIndentations);
				replacement.append("}");
			} else {
				if ("{}".equals(parameter.getType()) && isGenerateObjectValue() && initialFunction) {
					replacement.append("{");
					replacement.append("\n");
					indent(replacement, indentation, nbIndentations);
					replacement.append("}");
				} else {
					int offset = replacement.length();
					paramName = parameter.getName();
					// to select focus for parameter
					replacement.append(paramName);
					if (initialFunction) {
						arguments.addParameter(offset, paramName.length(),
								paramName, i);
					} else {
						arguments.addArg(offset, paramName.length());
					}

				}
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

	protected void indent(StringBuilder replacement) {
		replacement.append(indentChars);
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

	public boolean isGenerateObjectValue() {
		return generateObjectValue;
	}

	public void setGenerateObjectValue(boolean generateObjectValue) {
		this.generateObjectValue = generateObjectValue;
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
		return true;
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

	public void setIndentChars(String indentChars) {
		this.indentChars = indentChars;
	}

	public String getIndentChars() {
		return indentChars;
	}

	public void setTernFile(ITernFile ternFile) {
		this.ternFile = ternFile;
	}

	public ITernFile getTernFile() {
		return ternFile;
	}

	public void setTernProject(IIDETernProject ternProject) {
		super.setTernProject(ternProject);
	}

	private void ensurePositionCategoryInstalled(final IDocument document,
			LinkedModeModel model) {
		if (!document.containsPositionCategory(getCategory())) {
			document.addPositionCategory(getCategory());
			fUpdater = new InclusivePositionUpdater(getCategory());
			document.addPositionUpdater(fUpdater);

			model.addLinkingListener(new ILinkedModeListener() {

				/*
				 * @see
				 * org.eclipse.jface.text.link.ILinkedModeListener#left(org.
				 * eclipse.jface.text.link.LinkedModeModel, int)
				 */
				public void left(LinkedModeModel environment, int flags) {
					ensurePositionCategoryRemoved(document);
				}

				public void suspend(LinkedModeModel environment) {
				}

				public void resume(LinkedModeModel environment, int flags) {
				}
			});
		}
	}

	private void ensurePositionCategoryRemoved(IDocument document) {
		if (document.containsPositionCategory(getCategory())) {
			try {
				document.removePositionCategory(getCategory());
			} catch (BadPositionCategoryException e) {
				// ignore
			}
			document.removePositionUpdater(fUpdater);
		}
	}

	private String getCategory() {
		return "JSTernCompletionProposal_" + toString(); //$NON-NLS-1$
	}
	
}

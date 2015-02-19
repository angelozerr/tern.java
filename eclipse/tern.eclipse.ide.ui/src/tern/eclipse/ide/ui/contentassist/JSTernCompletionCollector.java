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

import org.eclipse.core.resources.ProjectScope;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.preferences.DefaultScope;
import org.eclipse.core.runtime.preferences.IPreferencesService;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;
import org.eclipse.jface.text.contentassist.ICompletionProposal;

import tern.ITernFile;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.internal.ui.preferences.TernUIPreferenceConstants;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.server.ITernServer;
import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.completions.TernCompletionProposalRec;

/**
 * Tern collector which creates {@link JSTernCompletionProposal}.
 * 
 */
public class JSTernCompletionCollector implements ITernCompletionCollector {

	protected final List<ICompletionProposal> proposals;
	private boolean generateAnonymousFunction;
	private boolean expandFunction;
	private String indentChars;
	private final ITernFile ternFile;
	private final IIDETernProject ternProject;

	public JSTernCompletionCollector(List<ICompletionProposal> proposals,
			int startOffset, ITernFile ternFile, IIDETernProject ternProject) {
		this.proposals = proposals;
		this.ternFile = ternFile;
		this.ternProject = ternProject;

		IPreferencesService preferencesService = Platform
				.getPreferencesService();
		IScopeContext[] lookupOrder = new IScopeContext[] {
				new ProjectScope(ternProject.getProject()),
				new InstanceScope(), new DefaultScope() };

		generateAnonymousFunction = preferencesService
				.getBoolean(
						TernUIPlugin.getDefault().getBundle().getSymbolicName(),
						TernUIPreferenceConstants.GENERATE_ANONYMOUS_FUNCTION_CONTENT_ASSIST,
						true, lookupOrder);

		int indentSize = preferencesService.getInt(TernUIPlugin.getDefault()
				.getBundle().getSymbolicName(),
				TernUIPreferenceConstants.INDENT_SIZE_CONTENT_ASSIST,
				TernUIPreferenceConstants.INDENT_SIZE_CONTENT_ASSIST_DEFAULT,
				lookupOrder);
		boolean indentWithTabs = preferencesService.getBoolean(TernUIPlugin
				.getDefault().getBundle().getSymbolicName(),
				TernUIPreferenceConstants.INDENT_TABS_CONTENT_ASSIST,
				TernUIPreferenceConstants.INDENT_TABS_CONTENT_ASSIST_DEFAULT,
				lookupOrder);
		indentChars = getIndentChars(indentWithTabs, indentSize);

		expandFunction = preferencesService.getBoolean(TernUIPlugin
				.getDefault().getBundle().getSymbolicName(),
				TernUIPreferenceConstants.EXPAND_FUNCTION_CONTENT_ASSIST, true,
				lookupOrder);
	}

	private String getIndentChars(boolean indentWithTabs, int indentSize) {
		StringBuilder indent = new StringBuilder();
		for (int i = 0; i < indentSize; i++) {
			indent.append(indentWithTabs ? JSTernCompletionProposal.TAB
					: JSTernCompletionProposal.SPACE);
		}
		return indent.toString();
	}

	@Override
	public void addProposal(TernCompletionProposalRec proposalItem,
			Object completion, IJSONObjectHelper jsonObjectHelper) {
		JSTernCompletionProposal proposal = internalCreateProposal(proposalItem);
		if (proposal.isFunction()) {
			// Add the function reference
			proposals
					.add(internalCreateProposal(proposalItem.changeType("fn")));
		}

		proposals.add(proposal);

		if (expandFunction) {
			// expand functions if the functions contains several "optionnal"
			// parameters.
			// ex : the expansion of
			// "fn(selector: string, context?: frameElement)"
			// returns an array of functions
			//
			String[] functions = proposal.expand();
			if (functions != null) {
				for (int i = 0; i < functions.length; i++) {
					proposals.add(internalCreateProposal(proposalItem
							.changeType(functions[i])));
				}
			}
		}
	}

	private JSTernCompletionProposal internalCreateProposal(
			TernCompletionProposalRec proposalItem) {
		JSTernCompletionProposal proposal = createProposal(proposalItem);
		proposal.setGenerateAnonymousFunction(generateAnonymousFunction);
		proposal.setIndentChars(indentChars);
		// TODO manage that with preferences
		proposal.setGenerateObjectValue(true);

		proposal.setTernFile(ternFile);
		proposal.setTernProject(ternProject);
		return proposal;
	}

	/**
	 * Completion proposal factory.
	 * 
	 * @param proposalItem
	 * 
	 * @return
	 */
	protected JSTernCompletionProposal createProposal(
			TernCompletionProposalRec proposalItem) {
		return new JSTernCompletionProposal(proposalItem);
	}
}

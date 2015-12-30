/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - unified completion proposals calculation
 */
package tern.eclipse.ide.ui.contentassist;

import java.util.List;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ProjectScope;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.preferences.DefaultScope;
import org.eclipse.core.runtime.preferences.IPreferencesService;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;
import org.eclipse.jface.text.contentassist.ICompletionProposal;

import tern.ITernFile;
import tern.ITernProject;
import tern.eclipse.ide.internal.ui.preferences.TernUIPreferenceConstants;
import tern.eclipse.ide.ui.TernUIPlugin;
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
	private final ITernProject ternProject;

	public JSTernCompletionCollector(List<ICompletionProposal> proposals,
			int startOffset, ITernFile ternFile, ITernProject ternProject) {
		this.proposals = proposals;
		this.ternFile = ternFile;
		this.ternProject = ternProject;

		IPreferencesService preferencesService = Platform
				.getPreferencesService();
		
		IProject project = (IProject) ternProject.getAdapter(IProject.class);
		
		IScopeContext[] lookupOrder;
		
		if (project != null) {
			lookupOrder = new IScopeContext[] {
					new ProjectScope(project),
					InstanceScope.INSTANCE, 
					DefaultScope.INSTANCE
			};
		} else {
			lookupOrder = new IScopeContext[] {
					InstanceScope.INSTANCE, 
					DefaultScope.INSTANCE
			};
		}

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
			if (!proposalItem.isSpecifier) {
				proposals.add(proposal);
			}
		} else {
			proposals.add(proposal);
		}	
		if (!proposalItem.isSpecifier && expandFunction) {
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

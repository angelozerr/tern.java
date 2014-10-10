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

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ProjectScope;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.preferences.DefaultScope;
import org.eclipse.core.runtime.preferences.IPreferencesService;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;
import org.eclipse.jface.text.contentassist.ICompletionProposal;

import tern.eclipse.ide.internal.ui.preferences.TernUIPreferenceConstants;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.server.ITernServer;
import tern.server.protocol.completions.ITernCompletionCollector;

/**
 * Tern collector which creates {@link JSTernCompletionProposal}.
 * 
 */
public class JSTernCompletionCollector implements ITernCompletionCollector {

	private final List<ICompletionProposal> proposals;
	private final int startOffset;
	private boolean generateAnonymousFunction;
	private boolean expandFunction;

	public JSTernCompletionCollector(List<ICompletionProposal> proposals,
			int startOffset, IProject project) {
		this.proposals = proposals;
		this.startOffset = startOffset;

		IPreferencesService preferencesService = Platform
				.getPreferencesService();
		IScopeContext[] lookupOrder = new IScopeContext[] {
				new ProjectScope(project), new InstanceScope(),
				new DefaultScope() };

		generateAnonymousFunction = preferencesService
				.getBoolean(
						TernUIPlugin.getDefault().getBundle().getSymbolicName(),
						TernUIPreferenceConstants.GENERATE_ANONYMOUS_FUNCTION_CONTENT_ASSIST,
						true, lookupOrder);
		expandFunction = preferencesService.getBoolean(TernUIPlugin
				.getDefault().getBundle().getSymbolicName(),
				TernUIPreferenceConstants.EXPAND_FUNCTION_CONTENT_ASSIST, true,
				lookupOrder);
	}

	@Override
	public void addProposal(String name, String type, String doc, String url,
			String origin, int pos, Object completion, ITernServer ternServer) {
		JSTernCompletionProposal proposal = internalCreateProposal(name, type,
				doc, url, origin, pos, startOffset);
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
					proposals.add(internalCreateProposal(name, functions[i],
							doc, url, origin, pos, startOffset));
				}
			}
		}
	}

	private JSTernCompletionProposal internalCreateProposal(String name,
			String type, String doc, String url, String origin, int pos,
			int startOffset) {
		JSTernCompletionProposal proposal = createProposal(name, type, doc,
				url, origin, pos, startOffset);
		proposal.setGenerateAnonymousFunction(generateAnonymousFunction);
		return proposal;
	}

	/**
	 * Completion proposal factory.
	 * 
	 * @param name
	 * @param type
	 * @param doc
	 * @param url
	 * @param origin
	 * @param pos
	 * @param startOffset
	 * @return
	 */
	protected JSTernCompletionProposal createProposal(String name, String type,
			String doc, String url, String origin, int pos, int startOffset) {
		return new JSTernCompletionProposal(name, type, doc, url, origin, pos,
				startOffset);
	}
}

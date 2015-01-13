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
	private boolean generateAnonymousFunction;
	private boolean expandFunction;
	private String indentChars;

	public JSTernCompletionCollector(List<ICompletionProposal> proposals,
			int startOffset, IProject project) {
		this.proposals = proposals;

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
	public void addProposal(String name, String displayName, String type,
			String doc, String url, String origin, int start, int end,
			boolean isProperty, boolean isObjectKey, Object completion,
			ITernServer ternServer) {
		JSTernCompletionProposal proposal = internalCreateProposal(name,
				displayName, type, doc, url, origin, start, end, isProperty,
				isObjectKey);
		if (proposal.isFunction()) {
			// Add the function reference
			proposals.add(internalCreateProposal(name, displayName, "fn", doc,
					url, origin, start, end, isProperty, isObjectKey));
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
					proposals.add(internalCreateProposal(name, displayName,
							functions[i], doc, url, origin, start, end,
							isProperty, isObjectKey));
				}
			}
		}
	}

	private JSTernCompletionProposal internalCreateProposal(String name,
			String displayName, String type, String doc, String url,
			String origin, int start, int end, boolean isProperty,
			boolean isObjectKey) {
		JSTernCompletionProposal proposal = createProposal(name, displayName,
				type, doc, url, origin, start, end, isProperty, isObjectKey);
		proposal.setGenerateAnonymousFunction(generateAnonymousFunction);
		proposal.setIndentChars(indentChars);
		// TODO manage that with preferences
		proposal.setGenerateObjectValue(true);
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
	 * @param isObjectKey
	 * @param isProperty
	 * @param pos
	 * @param startOffset
	 * @return
	 */
	protected JSTernCompletionProposal createProposal(String name,
			String displayName, String type, String doc, String url,
			String origin, int start, int end, boolean isProperty,
			boolean isObjectKey) {
		return new JSTernCompletionProposal(name, displayName, type, doc, url,
				origin, start, end, isProperty, isObjectKey);
	}
}

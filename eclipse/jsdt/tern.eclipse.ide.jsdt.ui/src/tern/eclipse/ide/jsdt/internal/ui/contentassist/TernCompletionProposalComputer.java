/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 *  									unified completion proposals calculation
 */
package tern.eclipse.ide.jsdt.internal.ui.contentassist;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.wst.jsdt.ui.text.java.ContentAssistInvocationContext;
import org.eclipse.wst.jsdt.ui.text.java.IJavaCompletionProposalComputer;
import org.eclipse.wst.sse.ui.contentassist.CompletionProposalInvocationContext;
import org.eclipse.wst.sse.ui.contentassist.ICompletionProposalComputer;

import tern.ITernFile;
import tern.ITernProject;
import tern.eclipse.ide.jsdt.internal.ui.JSDTTernUIPlugin;
import tern.eclipse.ide.jsdt.internal.ui.Trace;
import tern.eclipse.ide.jsdt.internal.ui.contentassist.ITernContextProvider.TernContext;
import tern.eclipse.ide.ui.contentassist.TernCompletionsQueryFactory;
import tern.server.protocol.completions.TernCompletionsQuery;

/**
 * JSDT completion proposal computer manage completion Proposal for Javascript
 * (IJavaCompletionProposalComputer - inside JavaScript files) and for HTML
 * (ICompletionProposalComputer - inside HTML files).
 * 
 */
public class TernCompletionProposalComputer implements
		IJavaCompletionProposalComputer, ICompletionProposalComputer {

	public List computeCompletionProposals(
			ContentAssistInvocationContext context, IProgressMonitor monitor) {
		return computeCompletionProposals(context);
	}

	@Override
	public List computeCompletionProposals(
			CompletionProposalInvocationContext context, IProgressMonitor monitor) {
		return computeCompletionProposals(context);
	}
	
	private List<?> computeCompletionProposals(Object context) {
		TernContext ternContext = JSDTTernUIPlugin.getContextProvider().getTernContext(context);
		if (ternContext != null) {
			try {

				final List<ICompletionProposal> proposals = new ArrayList<ICompletionProposal>();

				ITernFile tf = ternContext.file;
				ITernProject ternProject = ternContext.project;
				IProject project = (IProject)ternProject.getAdapter(IProject.class);
				
				int startOffset = ternContext.invocationOffset;
				String filename = tf.getFullName(ternProject);
				TernCompletionsQuery query = TernCompletionsQueryFactory
						.createQuery(project, filename, startOffset);

				ternProject.request(query, tf,
						new JSDTTernCompletionCollector(proposals,
								startOffset, tf, ternProject));
				return proposals;

			} catch (Exception e) {
				Trace.trace(Trace.SEVERE,
						"Error while JSDT Tern completion.", e);
			}
		}
		return Collections.EMPTY_LIST;
	}

	@Override
	public List computeContextInformation(
			CompletionProposalInvocationContext context, IProgressMonitor moniotr) {
		return Collections.EMPTY_LIST;
	}

	public List computeContextInformation(
			ContentAssistInvocationContext context, IProgressMonitor monitor) {
		return Collections.EMPTY_LIST;
	}

	public String getErrorMessage() {
		return null;
	}

	public void sessionStarted() {
	}

	public void sessionEnded() {
	}
}

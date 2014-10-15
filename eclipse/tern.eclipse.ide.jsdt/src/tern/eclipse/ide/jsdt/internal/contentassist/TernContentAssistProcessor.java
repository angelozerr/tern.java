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
package tern.eclipse.ide.jsdt.internal.contentassist;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.jface.text.contentassist.IContextInformationValidator;
import org.eclipse.wst.jsdt.internal.ui.text.java.JavaParameterListValidator;
import org.eclipse.wst.sse.ui.contentassist.CompletionProposalInvocationContext;
import org.eclipse.wst.sse.ui.contentassist.ICompletionProposalComputer;
import org.eclipse.wst.xml.ui.internal.contentassist.AbstractContentAssistProcessor;

import tern.ITernFile;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.jsdt.internal.Trace;
import tern.eclipse.ide.jsdt.internal.utils.DOMUtils;
import tern.eclipse.ide.ui.contentassist.JSTernCompletionCollector;
import tern.server.protocol.completions.TernCompletionsQuery;

/**
 * Content assist processor to manage completion Proposal for JavaScript (inside
 * HTML)
 * 
 */
@SuppressWarnings({ "restriction", "deprecation" })
public class TernContentAssistProcessor extends AbstractContentAssistProcessor
		implements ICompletionProposalComputer {

	private IContextInformationValidator fValidator;

	@Override
	public List computeCompletionProposals(
			CompletionProposalInvocationContext context,
			IProgressMonitor monitor) {
		final List<ICompletionProposal> proposals = new ArrayList<ICompletionProposal>();

		IFile file = DOMUtils.getFile(context.getDocument());
		if (file != null) {
			IProject project = file.getProject();
			if (TernCorePlugin.hasTernNature(project)) {

				IDocument document = context.getDocument();
				
				try {

					IIDETernProject ternProject = TernCorePlugin
							.getTernProject(project);

					ITernFile tf = TernDocumentFile.create(file, document);

					int startOffset = context.getInvocationOffset();
					TernCompletionsQuery query = new TernCompletionsQuery(
							tf.getFullName(ternProject),
							startOffset);
					query.setTypes(true);
					query.setDocs(true);
					query.setUrls(true);
					query.setOrigins(true);
					query.setCaseInsensitive(true);
					query.setLineCharPositions(true);
					query.setExpandWordForward(false);

					ternProject.request(query, tf, 
							new JSTernCompletionCollector(
									proposals, startOffset, project));
					return proposals;

				} catch (Exception e) {
					Trace.trace(Trace.SEVERE,
							"Error while JSDT Tern completion.", e);
				}
			}
		}
		return proposals;
	}

	@Override
	public List computeContextInformation(
			CompletionProposalInvocationContext context,
			IProgressMonitor monitor) {
		return Arrays.asList(computeContextInformation(context.getViewer(),
				context.getInvocationOffset()));
	}

	@Override
	public void sessionEnded() {

	}

	@Override
	public void sessionStarted() {

	}

	@Override
	public IContextInformationValidator getContextInformationValidator() {
		if (fValidator == null) {
			fValidator = new JavaParameterListValidator();
		}
		return fValidator;
	}

}

/**
 *  Copyright (c) 2013-2014 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 */
package tern.eclipse.ide.jsdt.internal.ui.contentassist;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.wst.jsdt.ui.text.java.ContentAssistInvocationContext;
import org.eclipse.wst.jsdt.ui.text.java.IJavaCompletionProposalComputer;
import org.eclipse.wst.jsdt.ui.text.java.JavaContentAssistInvocationContext;

import tern.ITernFile;
/**
 * JSDT completion extension with Tern.
 */
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.jsdt.internal.ui.Trace;
import tern.eclipse.ide.ui.contentassist.TernCompletionsQueryFactory;
import tern.server.protocol.completions.TernCompletionsQuery;

/**
 * JSDT completion proposal computer manage completion Proposal for Javascript
 * (inside JavaScript files)
 * 
 */
public class TernCompletionProposalComputer implements
		IJavaCompletionProposalComputer {

	public List computeCompletionProposals(
			ContentAssistInvocationContext context, IProgressMonitor monitor) {
		if (context instanceof JavaContentAssistInvocationContext) {
			JavaContentAssistInvocationContext javaContext = (JavaContentAssistInvocationContext) context;
			IProject project = javaContext.getProject().getProject();
			if (TernCorePlugin.hasTernNature(project)) {

				IDocument document = javaContext.getDocument();
				IResource resource = javaContext.getCompilationUnit()
						.getResource();
				if (resource.getType() == IResource.FILE) {
					IFile scriptFile = (IFile) resource;

					try {

						final List<ICompletionProposal> proposals = new ArrayList<ICompletionProposal>();

						IIDETernProject ternProject = TernCorePlugin
								.getTernProject(project);
						ITernFile tf = new TernDocumentFile(scriptFile,
								document);

						int startOffset = context.getInvocationOffset();
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
			}
		}
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

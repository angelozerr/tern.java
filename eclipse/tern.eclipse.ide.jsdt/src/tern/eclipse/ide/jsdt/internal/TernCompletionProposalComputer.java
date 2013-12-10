/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.eclipse.ide.jsdt.internal;

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


/**
 * JSDT completion extension with Tern.
 */
import tern.eclipse.ide.core.EclipseTernProject;
import tern.eclipse.jface.contentassist.TernCompletionProposal;
import tern.server.ITernServer;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.ITernCompletionCollector;
import tern.server.protocol.completions.TernCompletionQuery;

public class TernCompletionProposalComputer implements
		IJavaCompletionProposalComputer {

	public List computeCompletionProposals(
			ContentAssistInvocationContext context, IProgressMonitor monitor) {
		if (context instanceof JavaContentAssistInvocationContext) {
			JavaContentAssistInvocationContext javaContext = (JavaContentAssistInvocationContext) context;
			IProject project = javaContext.getProject().getProject();
			if (EclipseTernProject.hasTernNature(project)) {

				IDocument document = javaContext.getDocument();
				IResource resource = javaContext.getCompilationUnit()
						.getResource();
				if (resource.getType() == IResource.FILE) {
					IFile scriptFile = (IFile) resource;

					try {

						final List<ICompletionProposal> proposals = new ArrayList<ICompletionProposal>();

						EclipseTernProject ternProject = EclipseTernProject
								.getTernProject(project);

						ITernServer ternServer = ternProject.getTernServer();
						TernDoc doc = new TernDoc();
						TernCompletionQuery query = new TernCompletionQuery(
								"#0", context.getInvocationOffset());
						query.setTypes(true);
						query.setDocs(true);
						query.setUrls(true);
						query.setLineCharPositions(true);
						doc.setQuery(query);

						if (scriptFile != null && scriptFile.exists()) {
							String name = scriptFile.getName();
							/*
							 * String text = IOUtils.toString(
							 * scriptFile.getContents(),
							 * scriptFile.getCharset());
							 */
							String text = document.get();
							doc.addFile(name, text, null);
							query.setFile("#0");
						}

						final int startOffset = context.getInvocationOffset();
						ternServer.request(doc, new ITernCompletionCollector() {

							@Override
							public void addProposal(String name, String type,
									Object doc, int pos) {
								proposals.add(new TernCompletionProposal(name,
										type, doc, pos, startOffset));

							}
						});
						return proposals;

					} catch (Exception e) {
						e.printStackTrace();
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

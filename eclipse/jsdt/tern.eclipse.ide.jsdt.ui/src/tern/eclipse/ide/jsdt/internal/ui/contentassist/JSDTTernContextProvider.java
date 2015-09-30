/**
 *  Copyright (c) 2015 Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.eclipse.ide.jsdt.internal.ui.contentassist;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.jface.text.IDocument;
import org.eclipse.wst.jsdt.ui.text.java.JavaContentAssistInvocationContext;
import org.eclipse.wst.sse.ui.contentassist.CompletionProposalInvocationContext;

import tern.ITernFile;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.jsdt.internal.ui.utils.DOMUtils;

public class JSDTTernContextProvider implements ITernContextProvider {

	@Override
	public TernContext getTernContext(Object context) {
		if (context instanceof JavaContentAssistInvocationContext) {
			JavaContentAssistInvocationContext javaContext = (JavaContentAssistInvocationContext) context;
			IProject project = javaContext.getProject().getProject();
			ITernProject ternProject = TernResourcesManager.getTernProject(project);
			
			if (ternProject != null) {
	
				IDocument document = javaContext.getDocument();
				IResource resource = javaContext.getCompilationUnit()
						.getResource();
				if (resource.getType() == IResource.FILE) {
					IFile scriptFile = (IFile) resource;
	
					ITernFile tf = new TernDocumentFile(scriptFile, document);
					return new TernContext(ternProject, tf, javaContext.getInvocationOffset());
				}
			}
		} else if (context instanceof CompletionProposalInvocationContext) {
			CompletionProposalInvocationContext htmlContext = (CompletionProposalInvocationContext)context;
			IFile file = DOMUtils.getFile(htmlContext.getDocument());
			if (file != null) {
				IProject project = file.getProject();
				ITernProject ternProject = TernResourcesManager.getTernProject(project);
				if (ternProject != null) {
					IDocument document = htmlContext.getDocument();
					ITernFile tf = new TernDocumentFile(file, document);
					return new TernContext(ternProject, tf, htmlContext.getInvocationOffset());
				}
			}
		}
		return null;
	}
	
	
}

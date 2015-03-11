/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.linter.internal.ui.validation;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.OperationCanceledException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.wst.sse.ui.internal.reconcile.validator.ISourceValidator;
import org.eclipse.wst.validation.internal.core.ValidationException;
import org.eclipse.wst.validation.internal.provisional.core.IReporter;
import org.eclipse.wst.validation.internal.provisional.core.IValidationContext;
import org.eclipse.wst.validation.internal.provisional.core.IValidator;

import tern.ITernFile;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.linter.internal.ui.Trace;
import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.server.ITernPlugin;
import tern.server.protocol.lint.ITernLintCollector;
import tern.server.protocol.lint.TernLintQuery;

/**
 * WTP Tern Validator "as-you-type" to validate JavaScript (HTML, JSP, JS etc
 * files) when user type content inside JSDT JavaScript editor, HTML, JSP
 * editors.
 *
 */
public class TernSourceValidator implements IValidator, ISourceValidator {

	private IDocument document;

	@Override
	public void validate(IValidationContext helper, IReporter reporter)
			throws ValidationException {

		if (helper == null || document == null)
			return;

		if ((reporter != null) && (reporter.isCancelled() == true)) {
			throw new OperationCanceledException();
		}

		// we cannot use helper#getURI() to retrieve the IFile which is
		// validating, because
		// this helper is filled by using IStructuredModel (see
		// ReconcileStepForValidator#getFile())
		// and JSDT JavaScript Editor doesn't manage IStructuredModel
		IFile file = EditorUtils.getFile(document);
		try {
			IIDETernProject ternProject = TernCorePlugin.getTernProject(file
					.getProject());
			ITernLintCollector collector = getCollector(ternProject, reporter);
			ITernPlugin[] lintPlugins = ternProject.getLinters();
			if (lintPlugins.length > 0) {
				try {
					ITernFile tf = new TernDocumentFile(file, document);
					for (ITernPlugin linter : lintPlugins) {
						TernLintQuery query = TernLintQuery.create(linter,
								false);
						ternProject.request(query, tf, collector);
					}
				} catch (Exception e) {
					Trace.trace(Trace.SEVERE, "Error while tern validation.", e);
				}
			}
		} catch (CoreException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private ITernLintCollector getCollector(IIDETernProject ternProject,
			IReporter reporter) {
		return new TernReporterCollector(ternProject, reporter, this);
	}

	@Override
	public void cleanup(IReporter reporter) {
		// don't need to implement
	}

	@Override
	public void connect(IDocument document) {
		this.document = document;
	}

	@Override
	public void disconnect(IDocument document) {
		this.document = null;
	}

	@Override
	public void validate(IRegion dirtyRegion, IValidationContext helper,
			IReporter reporter) {
		if (document != null) {
			System.err
					.println("DelegatingSourceValidatorForTern#validateDirtyRegion => "
							+ document.get());

		}
	}

}

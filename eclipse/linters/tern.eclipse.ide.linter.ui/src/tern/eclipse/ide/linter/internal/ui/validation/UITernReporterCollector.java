/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.linter.internal.ui.validation;

import org.eclipse.wst.sse.ui.internal.reconcile.validator.AnnotationInfo;
import org.eclipse.wst.sse.ui.internal.reconcile.validator.IncrementalReporter;
import org.eclipse.wst.validation.internal.operations.LocalizedMessage;
import org.eclipse.wst.validation.internal.provisional.core.IReporter;
import org.eclipse.wst.validation.internal.provisional.core.IValidator;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.linter.core.validation.TernReporterCollector;
import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.lint.Fix;
import tern.server.protocol.lint.TernLintQuery;
import tern.server.protocol.lint.TernLintResultHelper;

/**
 * Tern reporter collector which link {@link Fix} to the annotation.
 *
 */
public class UITernReporterCollector extends TernReporterCollector {

	public UITernReporterCollector(IIDETernProject ternProject, IReporter reporter, IValidator validator) {
		super(ternProject, reporter, validator);
	}

	@Override
	protected void addMessage(LocalizedMessage message, Object messageObject, TernLintQuery query,
			IJSONObjectHelper helper) {
		if (!addMessageWithQuickFix(message, messageObject, query, helper)) {
			super.addMessage(message, messageObject, query, helper);
		}
	}

	protected boolean addMessageWithQuickFix(LocalizedMessage message, Object messageObject, TernLintQuery query,
			IJSONObjectHelper helper) {
		IReporter reporter = getReporter();
		if (reporter instanceof IncrementalReporter) {
			Fix fix = TernLintResultHelper.getFix(messageObject, query, helper);
			if (reporter instanceof IncrementalReporter && fix != null) {
				AnnotationInfo info = new AnnotationInfo(message, AnnotationInfo.NO_PROBLEM_ID, fix);
				((IncrementalReporter) reporter).addAnnotationInfo(getValidator(), info);
				return true;
			}
		}
		return false;
	}

}

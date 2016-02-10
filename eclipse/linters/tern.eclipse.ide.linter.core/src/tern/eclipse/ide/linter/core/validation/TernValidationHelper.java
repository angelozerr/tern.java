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
package tern.eclipse.ide.linter.core.validation;

import org.eclipse.core.resources.IResource;
import org.eclipse.wst.validation.internal.provisional.core.IReporter;
import org.eclipse.wst.validation.internal.provisional.core.IValidator;

import tern.ITernFile;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.linter.internal.core.Trace;
import tern.server.ITernPlugin;
import tern.server.protocol.lint.ITernLintCollector;
import tern.server.protocol.lint.TernLintQuery;

public class TernValidationHelper {

	private TernValidationHelper() {
	}

	public static void validate(IResource resource, IIDETernProject ternProject, boolean needsLineNumber, boolean synch, 
			boolean withFix, IReporter reporter, IValidator validator) {
		ITernPlugin[] lintPlugins = ternProject.getLinters();
		if (lintPlugins.length > 0) {
			ITernFile ternFile = ternProject.getFile(resource);
			ITernLintCollector collector = new TernReporterCollector(ternProject, reporter, validator);
			validate(ternFile, ternProject, needsLineNumber, synch, withFix, collector);
		}
	}

	public static void validate(ITernFile ternFile, IIDETernProject ternProject, boolean needsLineNumber, boolean synch,
			boolean withFix, ITernLintCollector collector) {
		ITernPlugin[] lintPlugins = ternProject.getLinters();
		try {
			for (ITernPlugin linter : lintPlugins) {
				TernLintQuery query = TernLintQuery.create(linter, false);
				query.setFix(withFix);
				query.setLineNumber(needsLineNumber);
				ternProject.request(query, ternFile, synch, collector);
			}
		} catch (Exception e) {
			Trace.trace(Trace.SEVERE, "Error while tern validation.", e);
		}
	}
}

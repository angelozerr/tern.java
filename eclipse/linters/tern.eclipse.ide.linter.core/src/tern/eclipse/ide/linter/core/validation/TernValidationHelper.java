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
package tern.eclipse.ide.linter.core.validation;

import org.eclipse.core.resources.IResource;
import org.eclipse.wst.validation.internal.provisional.core.IReporter;
import org.eclipse.wst.validation.internal.provisional.core.IValidator;

import tern.ITernFile;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.linter.internal.core.Trace;
import tern.eclipse.ide.linter.internal.core.validation.TernReporterCollector;
import tern.server.ITernPlugin;
import tern.server.protocol.lint.ITernLintCollector;
import tern.server.protocol.lint.TernLintQuery;

public class TernValidationHelper {

	public static void validate(IResource resource,
			IIDETernProject ternProject, boolean needsLineNumber,
			boolean synch, IReporter reporter, IValidator validator) {
		ITernPlugin[] lintPlugins = ternProject.getLinters();
		if (lintPlugins.length > 0) {
			ITernFile ternFile = ternProject.getFile(resource);
			validate(ternFile, ternProject, needsLineNumber, synch, reporter,
					validator);
		}
	}

	public static void validate(ITernFile ternFile,
			IIDETernProject ternProject, boolean needsLineNumber,
			boolean synch, IReporter reporter, IValidator validator) {
		ITernPlugin[] lintPlugins = ternProject.getLinters();
		try {
			ITernLintCollector collector = new TernReporterCollector(
					ternProject, reporter, validator);
			for (ITernPlugin linter : lintPlugins) {
				TernLintQuery query = TernLintQuery.create(linter, false);
				if (needsLineNumber) {
					query.setLineNumber(true);
				}
				ternProject.request(query, ternFile, synch, collector);
			}
		} catch (Exception e) {
			Trace.trace(Trace.SEVERE, "Error while tern validation.", e);
		}
	}
}

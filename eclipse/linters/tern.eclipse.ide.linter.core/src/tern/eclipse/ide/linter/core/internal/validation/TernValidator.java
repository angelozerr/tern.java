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
package tern.eclipse.ide.linter.core.internal.validation;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.jobs.ISchedulingRule;
import org.eclipse.wst.validation.AbstractValidator;
import org.eclipse.wst.validation.ValidationResult;
import org.eclipse.wst.validation.ValidationState;
import org.eclipse.wst.validation.internal.core.ValidationException;
import org.eclipse.wst.validation.internal.provisional.core.IReporter;
import org.eclipse.wst.validation.internal.provisional.core.IValidationContext;
import org.eclipse.wst.validation.internal.provisional.core.IValidatorJob;

import tern.eclipse.ide.core.TernCorePlugin;

/**
 * WTP Tern Validator V2 to validate JavaScript (HTML, JSP, JS etc files). This
 * validator can be called when project is Build or Validate at hand (with
 * Validate context menu).
 *
 */
public class TernValidator extends AbstractValidator implements IValidatorJob {

	/**
	 * Perform the validation using version 2 of the validation framework.
	 */
	@Override
	public ValidationResult validate(IResource resource, int kind,
			ValidationState state, IProgressMonitor monitor) {
		System.err.println("Validate with tern " + resource.getLocation());
		return null;
	}

	@Override
	public void validationStarting(IProject project, ValidationState state,
			IProgressMonitor monitor) {
		if (project != null && TernCorePlugin.hasTernNature(project)) {
			System.err.println("start tern validator");
			// NestedValidatorContext context = getNestedContext(state, false);
			// if (context == null)
			// {
			// context = getNestedContext(state, true);
			// if (context != null)
			// context.setProject(project);
			// setupValidation(context);
			// state.put(XML_VALIDATOR_CONTEXT, context);
			// }
			super.validationStarting(project, state, monitor);
		}
	}

	@Override
	public void validationFinishing(IProject project, ValidationState state,
			IProgressMonitor monitor) {
		if (project != null && TernCorePlugin.hasTernNature(project)) {
			System.err.println("end tern validator");
			super.validationFinishing(project, state, monitor);
		}
	}

	@Override
	public void cleanup(IReporter reporter) {
		// do nothing
	}

	@Override
	public void validate(IValidationContext context, IReporter reporter)
			throws ValidationException {
		System.err.println("validate");
	}

	@Override
	public ISchedulingRule getSchedulingRule(IValidationContext context) {
		return null;
	}

	@Override
	public IStatus validateInJob(IValidationContext paramIValidationContext,
			IReporter reporter) throws ValidationException {
		System.err.println("validateInJob");
		return null;
	}

}

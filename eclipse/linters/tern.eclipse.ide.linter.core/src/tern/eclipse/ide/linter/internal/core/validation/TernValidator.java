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
package tern.eclipse.ide.linter.internal.core.validation;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.ISchedulingRule;
import org.eclipse.wst.validation.AbstractValidator;
import org.eclipse.wst.validation.ValidationResult;
import org.eclipse.wst.validation.ValidationState;
import org.eclipse.wst.validation.internal.core.ValidationException;
import org.eclipse.wst.validation.internal.provisional.core.IReporter;
import org.eclipse.wst.validation.internal.provisional.core.IValidationContext;
import org.eclipse.wst.validation.internal.provisional.core.IValidatorJob;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.linter.core.validation.TernValidationHelper;
import tern.eclipse.ide.linter.internal.core.Trace;

/**
 * WTP Tern Validator V2 to validate JavaScript (HTML, JSP, JS etc files). This
 * validator can be called when project is Build or Validate at hand (with
 * Validate context menu).
 *
 */
public class TernValidator extends AbstractValidator implements IValidatorJob {

	private static final String TERN_VALIDATOR_CONTEXT = "tern.eclipse.ide.linter.core.validatorContext"; //$NON-NLS-1$

	/**
	 * Perform the validation using version 2 of the validation framework.
	 */
	@Override
	public ValidationResult validate(IResource resource, int kind,
			ValidationState state, IProgressMonitor monitor) {
		ValidationResult result = new ValidationResult();
		TernValidatorContext context = getTernContext(state, false);
		if (context != null) {
			// It's a tern project
			IIDETernProject ternProject = context.getTernProject();
			if (ternProject.isInScope(resource)) {
				IReporter reporter = result.getReporter(monitor);
				TernValidationHelper.validate(resource, ternProject, true,
						reporter, this);
			}
		}
		return result;
	}

	@Override
	public void validationStarting(IProject project, ValidationState state,
			IProgressMonitor monitor) {
		if (project != null && TernCorePlugin.hasTernNature(project)) {
			try {
				IIDETernProject ternProject = TernCorePlugin.getTernProject(
						project, true);
				if (ternProject.getLinters().length > 0) {
					TernValidatorContext context = getTernContext(state, true);
					setupValidation(context, ternProject);
					state.put(TERN_VALIDATOR_CONTEXT, context);
					super.validationStarting(project, state, monitor);
				}
			} catch (CoreException e) {
				Trace.trace(Trace.SEVERE, "Error while tern start validation.",
						e);
			}
		}
	}

	@Override
	public void validationFinishing(IProject project, ValidationState state,
			IProgressMonitor monitor) {
		if (project != null && TernCorePlugin.hasTernNature(project)) {
			super.validationFinishing(project, state, monitor);
			TernValidatorContext context = getTernContext(state, false);
			if (context != null) {
				state.put(TERN_VALIDATOR_CONTEXT, null);
			}
		}
	}

	@Override
	public void cleanup(IReporter reporter) {
		// do nothing
	}

	@Override
	public void validate(IValidationContext context, IReporter reporter)
			throws ValidationException {
		// It seems that it is never called?
	}

	@Override
	public ISchedulingRule getSchedulingRule(IValidationContext context) {
		return null;
	}

	@Override
	public IStatus validateInJob(IValidationContext helper, IReporter reporter)
			throws ValidationException {
		IStatus status = Status.OK_STATUS;
		validate(helper, reporter);
		return status;
	}

	protected void setupValidation(TernValidatorContext context,
			IIDETernProject ternProject) {
		context.setTernProject(ternProject);
	}

	/**
	 * Get the nested validation context.
	 * 
	 * @param state
	 *            the validation state.
	 * @param create
	 *            when true, a new context will be created if one is not found
	 * @return the nested validation context.
	 */
	protected TernValidatorContext getTernContext(ValidationState state,
			boolean create) {
		TernValidatorContext context = (TernValidatorContext) state
				.get(TERN_VALIDATOR_CONTEXT);
		if (context != null) {
			return context;
		}
		if (create) {
			return new TernValidatorContext();
		}
		return null;
	}

}

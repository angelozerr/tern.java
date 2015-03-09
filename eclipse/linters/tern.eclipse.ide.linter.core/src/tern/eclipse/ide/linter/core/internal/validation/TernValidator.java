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
	public void cleanup(IReporter paramIReporter) {
		// TODO Auto-generated method stub

	}

	@Override
	public void validate(IValidationContext paramIValidationContext,
			IReporter paramIReporter) throws ValidationException {
		System.err.println("validate");
	}

	@Override
	public ISchedulingRule getSchedulingRule(
			IValidationContext paramIValidationContext) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public IStatus validateInJob(IValidationContext paramIValidationContext,
			IReporter paramIReporter) throws ValidationException {
		System.err.println("validateInJob");
		return null;
	}

}

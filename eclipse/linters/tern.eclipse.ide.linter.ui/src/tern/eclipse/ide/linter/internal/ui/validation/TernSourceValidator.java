package tern.eclipse.ide.linter.internal.ui.validation;

import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.wst.sse.ui.internal.reconcile.validator.ISourceValidator;
import org.eclipse.wst.validation.internal.core.ValidationException;
import org.eclipse.wst.validation.internal.provisional.core.IReporter;
import org.eclipse.wst.validation.internal.provisional.core.IValidationContext;
import org.eclipse.wst.validation.internal.provisional.core.IValidator;

public class TernSourceValidator implements IValidator,
		ISourceValidator {

	private IDocument document;

	@Override
	public void validate(IValidationContext helper, IReporter reporter)
			throws ValidationException {
		if (document != null) {
			System.err.println("DelegatingSourceValidatorForTern#validate => "
					+ document.get());
		}
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
			System.err.println("DelegatingSourceValidatorForTern#validateDirtyRegion => "
					+ document.get());
		}
	}

}

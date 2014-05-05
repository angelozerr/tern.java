package tern.eclipse.ide.internal.ui.validation;

import org.eclipse.jface.text.source.Annotation;

public class TernAnnotation extends Annotation {

	public TernAnnotation(String severity, String message) {
		super("org.eclipse.ui.workbench.texteditor." + severity, true, message);
	}
}

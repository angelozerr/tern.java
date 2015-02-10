/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.ui.validation;

import org.eclipse.jface.text.source.Annotation;

import tern.server.ITernPlugin;
import tern.utils.TernModuleHelper;

/**
 * Tern annotation.
 *
 */
public class TernAnnotation extends Annotation {

	private final String severity;
	private final int start;
	private final int end;
	private final ITernPlugin linter;

	public TernAnnotation(String severity, String message, int start, int end,
			ITernPlugin linter) {
		super("org.eclipse.ui.workbench.texteditor." + severity, true, message);
		this.severity = severity;
		this.start = start;
		this.end = end;
		this.linter = linter;
		String text = message;
		if (linter != null) {
			text = new StringBuilder("[")
					.append(TernModuleHelper.getLabel(linter)).append("]")
					.append(": ").append(message).toString();
		}
		super.setText(text);
	}

	public String getSeverity() {
		return severity;
	}

	public int getStart() {
		return start;
	}

	public int getEnd() {
		return end;
	}

	public boolean isEquals(String severity, String message, int start, int end) {
		return severity.equals(this.severity) && message.equals(this.getText())
				&& start == this.start && end == this.end;
	}

}

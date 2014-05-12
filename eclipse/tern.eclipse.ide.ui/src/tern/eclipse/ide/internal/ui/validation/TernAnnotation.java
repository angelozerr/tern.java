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

/**
 * Tern annotation.
 *
 */
public class TernAnnotation extends Annotation {

	private final String severity;
	private final String message;
	private final int start;
	private final int end;

	public TernAnnotation(String severity, String message, int start, int end) {
		super("org.eclipse.ui.workbench.texteditor." + severity, true, message);
		this.severity = severity;
		this.message = message;
		this.start = start;
		this.end = end;
	}

	public String getSeverity() {
		return severity;
	}

	public String getMessage() {
		return message;
	}

	public int getStart() {
		return start;
	}

	public int getEnd() {
		return end;
	}

	public boolean isEquals(String severity, String message, int start, int end) {
		return severity.equals(this.severity) && message.equals(this.message)
				&& start == this.start && end == this.end;
	}

}

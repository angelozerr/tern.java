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
package tern.eclipse.ide.internal.ui.validation;

import org.eclipse.jface.text.source.Annotation;

import tern.server.ITernPlugin;

/**
 * Tern annotation.
 *
 */
public class TernAnnotation extends Annotation {

	private static final String ORG_ECLIPSE_UI_WORKBENCH_TEXTEDITOR = "org.eclipse.ui.workbench.texteditor.";

	private final String severity;
	private final int start;
	private final int end;

	public TernAnnotation(String severity, String message, int start, int end,
			ITernPlugin linter) {
		super(ORG_ECLIPSE_UI_WORKBENCH_TEXTEDITOR + severity, true, message);
		this.severity = severity;
		this.start = start;
		this.end = end;
	}

	/**
	 * Returns the tern severity as string 'error', 'warning'.
	 * 
	 * @return the tern severity as string 'error', 'warning'.
	 */
	public String getSeverity() {
		return severity;
	}

	/**
	 * Returns the start offset of the tern annotation.
	 * 
	 * @return the start offset of the tern annotation.
	 */
	public int getStart() {
		return start;
	}

	/**
	 * Returns the end offset of the tern annotation.
	 * 
	 * @return the end offset of the tern annotation.
	 */
	public int getEnd() {
		return end;
	}

	public boolean isEquals(String severity, String message, int start, int end) {
		return severity.equals(this.severity) && message.equals(this.getText())
				&& start == this.start && end == this.end;
	}

}

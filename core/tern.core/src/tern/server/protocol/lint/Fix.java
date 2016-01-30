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
package tern.server.protocol.lint;

import tern.server.ITernPlugin;

/**
 * Fix information.
 *
 */
public class Fix {

	private final String label;
	private final Long start;
	private final Long end;
	private final String text;
	private final ITernPlugin linter;

	public Fix(String label, Long start, Long end, String text, ITernPlugin linter) {
		this.label = label;
		this.start = start;
		this.end = end;
		this.text = text;
		this.linter = linter;
	}

	public String getLabel() {
		return label;
	}

	public Long getStart() {
		return start;
	}

	public Long getEnd() {
		return end;
	}

	public String getText() {
		return text;
	}

	public ITernPlugin getLinter() {
		return linter;
	}
}

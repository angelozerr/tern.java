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
package tern.eclipse.ide.internal.ui.descriptors.options;

/**
 * Severities for tern-lint.
 *
 */
public enum LintRuleSeverity {

	none, warning, error;

	private final static String[] array = { none.name(), warning.name(),
			error.name() };

	public static String[] toStringArray() {
		return array;
	}
}

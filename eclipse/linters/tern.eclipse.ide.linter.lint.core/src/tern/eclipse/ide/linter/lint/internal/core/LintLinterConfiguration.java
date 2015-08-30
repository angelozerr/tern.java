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
package tern.eclipse.ide.linter.lint.internal.core;

import java.io.InputStream;

import tern.eclipse.ide.linter.core.XMLTernLinterConfigFactory;

/**
 * Lint linter configuration.
 *
 */
public class LintLinterConfiguration extends XMLTernLinterConfigFactory {

	@Override
	protected InputStream getInputStream() {
		return LintLinterConfiguration.class
				.getResourceAsStream("lint-linter-config.xml");
	}
}

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
package tern.eclipse.ide.linter.eslint.internal.core;

import java.io.InputStream;

import tern.eclipse.ide.linter.core.XMLTernLinterConfigFactory;

/**
 * ESLint linter configuration.
 *
 */
public class ESLintLinterConfiguration extends XMLTernLinterConfigFactory {

	@Override
	protected InputStream getInputStream() {
		return ESLintLinterConfiguration.class
				.getResourceAsStream("eslint-linter-config.xml");
	}
}

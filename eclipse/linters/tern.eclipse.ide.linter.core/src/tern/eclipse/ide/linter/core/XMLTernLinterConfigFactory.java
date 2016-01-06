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
package tern.eclipse.ide.linter.core;

import java.io.IOException;
import java.io.InputStream;

import tern.eclipse.ide.linter.internal.core.SAXLinterConfigHandler;

/**
 * Tern linter config factory which loads the config from a XML file.
 *
 */
public abstract class XMLTernLinterConfigFactory implements
		ITernLinterConfigFactory {

	@Override
	public ITernLinterConfig create() throws IOException {
		return new SAXLinterConfigHandler().load(getInputStream()).getLinter();
	}

	protected abstract InputStream getInputStream();

}

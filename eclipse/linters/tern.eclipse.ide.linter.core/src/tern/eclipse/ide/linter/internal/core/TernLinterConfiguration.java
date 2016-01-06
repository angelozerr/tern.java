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
package tern.eclipse.ide.linter.internal.core;

import java.io.IOException;

import tern.eclipse.ide.linter.core.ITernLinterConfig;
import tern.eclipse.ide.linter.core.ITernLinterConfigFactory;

/**
 * Tern linter configuration.
 * 
 * @author azerr
 *
 */
public class TernLinterConfiguration {

	private final ITernLinterConfigFactory factory;
	private final String filename;

	public TernLinterConfiguration(ITernLinterConfigFactory factory,
			String filename) {
		this.factory = factory;
		this.filename = filename;
	}

	public ITernLinterConfig create() throws IOException {
		return factory.create();
	}

	public String getFilename() {
		return filename;
	}
}

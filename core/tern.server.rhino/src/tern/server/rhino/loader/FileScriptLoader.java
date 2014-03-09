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
package tern.server.rhino.loader;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;

public class FileScriptLoader extends AbstractScriptLoader {

	private final File baseDir;

	public FileScriptLoader(File baseDir) {
		this.baseDir = baseDir;
	}

	@Override
	protected Reader getReader(String src) throws IOException {
		return new FileReader(new File(baseDir, src));
	}
}

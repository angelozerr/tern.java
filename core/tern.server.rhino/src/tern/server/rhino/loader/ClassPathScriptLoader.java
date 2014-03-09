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

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;

import tern.server.rhino.internal.scripts.Data;

public class ClassPathScriptLoader extends AbstractScriptLoader {

	private static final IScriptLoader INSTANCE = new ClassPathScriptLoader();
	
	public static IScriptLoader getInstance() {
		return INSTANCE;
	}
	
	private final Class<?> clazz;

	
	
	public ClassPathScriptLoader(Class<?> clazz) {
		this.clazz = clazz;
	}

	public ClassPathScriptLoader() {
		this(Data.class);
	}

	@Override
	protected Reader getReader(String src) throws IOException {
		InputStream stream = clazz.getResourceAsStream(src);
		return new InputStreamReader(stream);
	}

}

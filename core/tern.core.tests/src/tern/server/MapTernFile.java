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
package tern.server;

import java.io.IOException;

import tern.ITernFile;
import tern.ITernProject;
import tern.server.protocol.TernFile;
import tern.server.protocol.html.ScriptTagRegion;
import tern.utils.ExtensionUtils;

public class MapTernFile implements ITernFile {

	private final String name;
	private final String content;

	public MapTernFile(String name, String content) {
		this.name = name;
		this.content = content;
	}

	@Override
	public String getFullName(ITernProject context) {
		return name;
	}

	@Override
	public String getFileName() {
		return name;
	}

	@Override
	public String getContents() throws IOException {
		return content;
	}

	@Override
	public ITernFile getRelativeFile(String relativePath) {
		return null;
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class adapterClass) {
		return null;
	}

	@Override
	public String getFileExtension() {
		return ExtensionUtils.getFileExtension(name);
	}

	@Override
	public TernFile toTernServerFile(ITernProject context) throws IOException {
		return new TernFile(name, content, null, null);
	}

	@Override
	public ScriptTagRegion[] getScriptTags(ITernProject context) {
		return null;
	}
	
	@Override
	public boolean isAccessible() {
		return true;
	}
}

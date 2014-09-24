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
package tern.server;

import java.io.IOException;

import tern.TernFileManager;
import tern.server.protocol.html.ScriptTagRegion;

public class MapTernFileManager extends TernFileManager<MapTernFile> {

	@Override
	public String getFileName(MapTernFile file) {
		return file.getName();
	}

	@Override
	public String getFileContent(MapTernFile file) throws IOException {
		return file.getContent();
	}

	@Override
	public MapTernFile getRelativeFile(MapTernFile file, String path) {
		return null;
	}

	@Override
	protected MapTernFile getFile(String projectName, String path) {
		return null;
	}

	@Override
	public ScriptTagRegion[] getScriptTags(MapTernFile file) {
		return null;
	}

}

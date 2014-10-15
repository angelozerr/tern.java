/*
 * Copyright 2014, Genuitec, LLC
 * All Rights Reserved.
 */
package tern.resources;

import java.io.IOException;

import tern.ITernFile;
import tern.ITernProject;
import tern.internal.resources.InternalTernResourcesManager;
import tern.server.protocol.TernFile;
import tern.server.protocol.html.ScriptTagRegion;

public abstract class AbstractTernFile implements ITernFile {

	@Override
	public ScriptTagRegion[] getScriptTags() {
		return InternalTernResourcesManager.getInstance().getScriptTagRegions(this);
	}

	@Override
	public TernFile toTernServerFile(ITernProject context) throws IOException {
		return new TernFile(getFullName(context), getContents(), 
				getScriptTags(), null);
	}
	
}

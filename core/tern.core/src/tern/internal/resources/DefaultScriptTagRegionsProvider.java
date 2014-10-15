/*
 * Copyright 2014, Genuitec, LLC
 * All Rights Reserved.
 */
package tern.internal.resources;

import tern.ITernFile;
import tern.TernResourcesManager;
import tern.server.protocol.html.IScriptTagRegionProvider;
import tern.server.protocol.html.ScriptTagRegion;

public class DefaultScriptTagRegionsProvider implements IScriptTagRegionProvider {
	
	@Override
	public ScriptTagRegion[] getScriptTags(ITernFile file) {
		if (TernResourcesManager.isHTMLFile(file)) {
			return ScriptTagRegion.DEFAULT_SCRIPT_TAGS;
		}
		return null;
	}

}

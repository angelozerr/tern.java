/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
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

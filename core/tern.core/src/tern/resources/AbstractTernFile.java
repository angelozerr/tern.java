/**
 *  Copyright (c) 2014 Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
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

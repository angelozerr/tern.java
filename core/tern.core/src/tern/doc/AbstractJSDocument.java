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
package tern.doc;

import tern.server.ITernServer;

public abstract class AbstractJSDocument implements IJSDocument {

	private final ITernServer server;
	private final String name;
	private boolean changed;

	public AbstractJSDocument(String name, ITernServer server) {
		this(name, server, false);
	}

	public AbstractJSDocument(String name, ITernServer server, boolean register) {
		this.name = name;
		this.server = server;
		this.changed = false;
		if (register) {
			JSDocumentHelper.registerDoc(this, server);
		}
	}

	public String getName() {
		return name;
	}

	public boolean isChanged() {
		return changed;
	}

	public void setChanged(boolean changed) {
		this.changed = changed;
	}

	@Override
	public ITernServer getServer() {
		return server;
	}
}

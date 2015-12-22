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

package tern.server.protocol.outline;

import tern.ITernProject;

public class TernOutlineCollector implements ITernOutlineCollector {

	private final ITernProject ternProject;
	private IJSNodeRoot root;

	public TernOutlineCollector(ITernProject ternProject) {
		this.ternProject = ternProject;
	}

	@Override
	public IJSNodeRoot createRoot() {
		this.root = doCreateRoot();
		return root;
	}

	protected IJSNodeRoot doCreateRoot() {
		return new JSNodeRoot(ternProject);
	}

	public IJSNode getRoot() {
		return root;
	}

	public ITernProject getTernProject() {
		return ternProject;
	}
}

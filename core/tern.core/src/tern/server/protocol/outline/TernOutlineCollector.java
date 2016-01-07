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

package tern.server.protocol.outline;

import tern.ITernProject;
import tern.server.protocol.IJSONObjectHelper;

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

	@Override
	public IJSNode createNode(String name, String type, String kind, String value, Long start, Long end, String file,
			IJSNode parent, Object jsonNode, IJSONObjectHelper helper) {
		return new JSNode(name, type, kind, value, start, end, file, parent);
	}

	public IJSNodeRoot getRoot() {
		return root;
	}

	public ITernProject getTernProject() {
		return ternProject;
	}

}

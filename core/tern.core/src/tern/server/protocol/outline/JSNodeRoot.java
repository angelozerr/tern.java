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

/**
 * JavaScript node root.
 *
 */
public class JSNodeRoot extends JSNode implements IJSNodeRoot {

	private static final String ROOT = "#Root";

	private final ITernProject ternProject;

	public JSNodeRoot(ITernProject ternProject) {
		this(ROOT, ternProject);
	}

	public JSNodeRoot(String name, ITernProject ternProject) {
		super(name, null, null, null, null, null, null, null);
		this.ternProject = ternProject;
	}

	@Override
	public ITernProject getTernProject() {
		return ternProject;
	}

	public void clear() {
		getChildren().clear();
	}

}

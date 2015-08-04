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

import tern.metadata.TernModuleMetadata;

/**
 * Basic tern plugin.
 *
 */
public class BasicTernPlugin extends AbstractBasicTernModule implements
		ITernPlugin {

	public BasicTernPlugin(String name) {
		super(name, ModuleType.Plugin);
	}

	public BasicTernPlugin(TernModuleInfo info) {
		super(info, ModuleType.Plugin);
	}

	@Override
	public boolean isLinter() {
		TernModuleMetadata metadata = getMetadata();
		return metadata != null ? metadata.isLinter() : false;
	}

}

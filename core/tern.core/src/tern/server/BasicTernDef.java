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

/**
 * Basic JSON Type Definition.
 * 
 * @author azerr
 *
 */
public class BasicTernDef extends AbstractBasicTernModule implements ITernDef {

	public BasicTernDef(String name) {
		super(name, ModuleType.Def);
	}

	@Override
	public String getType() {
		return null;
	}

	@Override
	public String getVersion() {
		return null;
	}

}

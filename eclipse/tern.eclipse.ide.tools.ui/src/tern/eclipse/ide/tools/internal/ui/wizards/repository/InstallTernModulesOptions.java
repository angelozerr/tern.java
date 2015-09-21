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
package tern.eclipse.ide.tools.internal.ui.wizards.repository;

import tern.repository.ITernRepository;
import tern.server.ITernModule;
import tern.server.nodejs.npm.INPMProcessListener;

public class InstallTernModulesOptions {

	private ITernRepository repository;
	private ITernModule[] ternModules;

	public ITernRepository getRepository() {
		return repository;
	}

	public void setRepository(ITernRepository repository) {
		this.repository = repository;
	}

	public ITernModule[] getTernModules() {
		return ternModules;
	}

	public void setTernModules(ITernModule[] ternModules) {
		this.ternModules = ternModules;
	}

}

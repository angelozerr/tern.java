/**
 *  Copyright (c) 2013-present Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.core;

import java.util.Collection;

import org.eclipse.core.resources.IProject;

/**
 * Default tern modules provider.
 *
 */
public interface IDefaultTernModulesProvider {

	/**
	 * Returns list of tern modules names which must be added by default when
	 * the given project is converted to a tern project.
	 * 
	 * @param project
	 * @return list of tern modules names which must be added by default when
	 *         the given project is converted to a tern project.
	 */
	Collection<DefaultTernModule> getTernModules(IProject project);
}

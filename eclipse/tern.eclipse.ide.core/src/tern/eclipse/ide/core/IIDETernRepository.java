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
package tern.eclipse.ide.core;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.IPath;

import tern.repository.ITernRepository;

/**
 * API for tern repository for Eclipse.
 *
 */
public interface IIDETernRepository extends ITernRepository {

	/**
	 * Returns the Eclipse location.
	 * 
	 * @return
	 */
	IPath getLocation();

	/**
	 * Returns true if the repository is imported in the workspace as an Eclipse
	 * project and false otherwise.
	 * 
	 * @return true if the repository is imported in the workspace as an Eclipse
	 *         project and false otherwise.
	 */
	boolean isImported();

	/**
	 * Returns the owner project of the repository if it is imported in the
	 * workspace and null otherwise.
	 * 
	 * @return the owner project of the repository if it is imported in the
	 *         workspace and null otherwise.
	 */
	IProject getProject();

	/**
	 * Returns the node_modules/tern/bin/tern file as IFile if repository is
	 * imported and null otherwise.
	 * 
	 * @return the node_modules/tern/bin/tern file as IFile if repository is
	 *         imported and null otherwise.
	 */
	IFile getTernServerFile();

	/**
	 * Returns a copy of the tern repository.
	 * 
	 * @return a copy of the tern repository.
	 */
	IIDETernRepository copy();

}

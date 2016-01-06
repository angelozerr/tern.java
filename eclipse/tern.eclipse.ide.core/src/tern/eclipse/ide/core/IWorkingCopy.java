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
package tern.eclipse.ide.core;

import java.io.IOException;
import java.util.Collection;
import java.util.List;

import tern.EcmaVersion;
import tern.TernException;
import tern.server.ITernModule;

/**
 * A working copy is used to update tern project :
 * 
 * <ul>
 * <li>tern modules</li>
 * </ul>
 *
 * A working copy is usefull when several preference pages can update tern
 * modules (eg : Tern -> Modules and Tern -> Validation -> JSHint).
 */
public interface IWorkingCopy {

	/**
	 * The caller (eg : page preference) which uses the working copy.
	 * 
	 * @param caller
	 */
	void call(Object caller);

	/**
	 * Initialize checked tern modules from the tern project.
	 * 
	 * @throws TernException
	 */
	void initialize() throws TernException;

	/**
	 * Returns true if the working copy is dirty and false otherwise.
	 * 
	 * @return true if the working copy is dirty and false otherwise.
	 */
	boolean isDirty();

	/**
	 * Try to commit (save tern modules) in the .tern-project.
	 * 
	 * @param caller
	 * @throws IOException
	 */
	void commit(Object caller) throws IOException;

	/**
	 * Clear the working copy.
	 */
	void clear();

	/**
	 * Returns the tern modules of the tern project.
	 * 
	 * @return the tern modules of the tern project.
	 */
	Collection<ITernModule> getCheckedModules();

	/**
	 * Returns the tern module found by the given name.
	 * 
	 * @param name
	 * @return the tern module foudn by the given name.
	 * @throws TernException
	 */
	ITernModule getTernModule(String name) throws TernException;

	/**
	 * Returns true if the tern project have the given module name and false
	 * otheriwse.
	 * 
	 * @param name
	 * @return true if the tern project have the given module name and false
	 *         otheriwse.
	 */
	boolean hasCheckedTernModule(String name);

	/**
	 * Add working copy listener.
	 * 
	 * @param listener
	 */
	void addWorkingCopyListener(IWorkingCopyListener listener);

	/**
	 * Remove working copy listener.
	 * 
	 * @param listener
	 */
	void removeWorkingCopyListener(IWorkingCopyListener listener);

	/**
	 * Return the all modules.
	 * 
	 * @return the all modules.
	 */
	List<ITernModule> getAllModules();

	/**
	 * Returns the all modules without ECMAScript and JSDoc.
	 * 
	 * @return the all modules without ECMAScript and JSDoc.
	 */
	List<ITernModule> getFilteredModules();
	
	/**
	 * Returns the owner tern project.
	 * 
	 * @return the owner tern project.
	 */
	IIDETernProject getProject();

	EcmaVersion getEcmaVersion();
	
	void setEcmaVersion(EcmaVersion ecmaVersion);

}

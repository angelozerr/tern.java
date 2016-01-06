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

import tern.server.ITernModule;

/**
 * Working copy listener to observe changes of add/remove checked tern modules.
 * 
 */
public interface IWorkingCopyListener {

	/**
	 * This method is call when tern modules id checked/unchecked for tern
	 * project.
	 * 
	 * @param module
	 *            the module which was added/removed.
	 * @param selected
	 *            true if module was checked and false otherwise.
	 */
	void moduleSelectionChanged(ITernModule module, boolean selected);

}

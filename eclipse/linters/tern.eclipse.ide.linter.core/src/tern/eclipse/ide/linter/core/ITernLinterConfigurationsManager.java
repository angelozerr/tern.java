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
package tern.eclipse.ide.linter.core;

import java.io.IOException;

/**
 * Tern Linter configuration manager API.
 */
public interface ITernLinterConfigurationsManager {

	/**
	 * Create instance of tern linter config according the given tern module
	 * name which is a linter.
	 * 
	 * @param linterId
	 * @return
	 * @throws IOException
	 */
	ITernLinterConfig createLinterConfig(String linterId) throws IOException;

	/**
	 * Returns the file name of the given linter id (eg : '.jshintrc for
	 * JSHint).
	 * 
	 * @param linterId
	 * @return
	 */
	String getFilename(String linterId);

}

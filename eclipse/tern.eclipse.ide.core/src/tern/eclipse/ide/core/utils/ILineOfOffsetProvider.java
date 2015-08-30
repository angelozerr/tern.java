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
package tern.eclipse.ide.core.utils;

import org.eclipse.core.resources.IFile;

/**
 * Line offset provider.
 *
 */
public interface ILineOfOffsetProvider {

	/**
	 * Returns the line of offset of the given file with the given start offset
	 * and null otherwise.
	 * 
	 * @param start
	 * @param file
	 * @return the line of offset of the given file with the given start offset
	 *         and null otherwise.
	 */
	Integer getLineOfOffset(int start, IFile file);

}

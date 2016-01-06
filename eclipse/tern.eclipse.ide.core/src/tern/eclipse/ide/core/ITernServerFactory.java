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

import tern.ITernProject;
import tern.server.ITernServer;

/**
 * Tern server factory.
 */
public interface ITernServerFactory {

	/**
	 * Create an instance of tern server by using the given tern project.
	 * 
	 * @param project
	 *            tern project.
	 * @return an instance of tern server by using the given tern project.
	 * @throws Exception
	 */
	ITernServer create(ITernProject project) throws Exception;

}

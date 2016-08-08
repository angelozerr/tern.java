/**
 *  Copyright (c) 2016 Angelo ZERR, IBM
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Victor Sosa <sosah.victor@gmail.com>- initial API and implementation
 */
package tern.eclipse.ide.server.nodejs.core;

import java.io.File;

/**
 * Provides a way to programmatically specify the install location of a Node.js
 * within the system.
 * 
 * @author <a href="mailto:sosah.victor@gmail.com">sosah.victor@gmail.com</a>
 *
 */
public interface INodejsInstallProvider {
	
	/**
	 * Location where this Node.js is installed
	 * 
	 * @return Node.js install location
	 */
	File getPath();
}

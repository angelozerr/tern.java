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
package tern.server.nodejs.process;

import java.util.List;

/**
 * API to create node arguments for the command.
 *
 */
public interface INodejsLaunchConfiguration {

	/**
	 * Returns a list of arguments for the node command.
	 * 
	 * @return a list of arguments for the node command.
	 */
	List<String> createNodeArgs();

	/**
	 * Returns the launch mode 'run', 'debug'.
	 * 
	 * @return the launch mode 'run', 'debug'.
	 */
	String getLaunchMode();

	/**
	 * 
	 * @return
	 */
	boolean isSaveLaunch();

	boolean isWaitOnPort();

	/**
	 * Generate a configuration name for launch
	 * 
	 * @return a configuration name for launch
	 */
	String generateLaunchConfigurationName();
}

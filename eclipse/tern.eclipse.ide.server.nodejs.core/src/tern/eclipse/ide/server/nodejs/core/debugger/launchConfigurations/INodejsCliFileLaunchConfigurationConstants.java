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
package tern.eclipse.ide.server.nodejs.core.debugger.launchConfigurations;

/**
 * Commons constants of launch configurations for run/debug cli file with tern
 * debugger (Grunt, Gulp, Protractor launch).
 *
 */
public interface INodejsCliFileLaunchConfigurationConstants {

	/**
	 * Client file to use to run/debug grunt, gulp, protractor, etc
	 */
	String ATTR_CLI_FILE = "cli_file";

	/**
	 * Tern debugger to use to run/debug grunt, gulp, protractor, etc
	 */
	String ATTR_DEBUGGER = "debugger";

	String ATTR_NODE_INSTALL = "nodeinstall";
	
	String ATTR_NODE_PATH = "nodepath";

}

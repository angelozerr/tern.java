/**
 *  Copyright (c) 2013-2014 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - refactoring of file management API
 */
package tern.eclipse.ide.core;

import java.io.IOException;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;

import tern.ITernProject;
import tern.scriptpath.ITernScriptPath;
import tern.scriptpath.ITernScriptPath.ScriptPathsType;
import tern.server.ITernModule;
import tern.server.ITernServerListener;

/**
 * IDE tern project API.
 *
 */
public interface IIDETernProject extends ITernProject {
	
	// -------------- Utility
	
	IFile getIDEFile(String name);
	
	// -------------- Tern server.

	void addServerListener(ITernServerListener listener);

	void removeServerListener(ITernServerListener listener);

	void disposeServer();

	boolean isServerDisposed();

	// -------------- Tern script paths.

	void setScriptPaths(List<ITernScriptPath> scriptPaths) throws IOException;

	/**
	 * Returns the list of script paths.
	 * 
	 * @return
	 */
	ITernScriptPath getScriptPath(String path);

	ITernScriptPath createScriptPath(IResource resource, ScriptPathsType type);

	ITernScriptPath addExternalScriptPath(IResource resource,
			ScriptPathsType type, String external) throws IOException;

	void removeExternalScriptPaths(String external);
	
	// -------------- misc


	void configureConsole();

	<T> T getData(String key);

	void setData(String key, Object value);

	IProject getProject();

	/**
	 * Returns the tern plugin hosted on the root project.
	 * 
	 * @return the tern plugin hosted on the root project.
	 */
	List<ITernModule> getProjectModules();

}

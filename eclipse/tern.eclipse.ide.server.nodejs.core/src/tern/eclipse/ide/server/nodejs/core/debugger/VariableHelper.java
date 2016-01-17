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
package tern.eclipse.ide.server.nodejs.core.debugger;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;
import org.eclipse.core.variables.VariablesPlugin;

/**
 * Variable helper.
 *
 */
public class VariableHelper {

	private static final String WORKSPACE_LOC = "workspace_loc";

	public static String getWorkspaceLoc(IResource file) {
		return VariablesPlugin.getDefault().getStringVariableManager().generateVariableExpression(WORKSPACE_LOC,
				file.getFullPath().toString());
	}

	public static IFile getResource(String path) throws CoreException {
		String location = VariablesPlugin.getDefault().getStringVariableManager().performStringSubstitution(path);
		return getFileForLocation(location);
	}

	public static IFile getFileForLocation(String path) {
		if (path == null) {
			return null;
		}
		IPath filePath = new Path(path);
		IFile file = null;
		IFile[] files = ResourcesPlugin.getWorkspace().getRoot().findFilesForLocation(filePath);
		if (files.length > 0) {
			return files[0];
		}
		return null;
	}
}

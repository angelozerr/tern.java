/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.eclipse.ide.core.scriptpath;

import java.util.Collection;

import org.eclipse.core.resources.IResource;

public interface ITernScriptPath {

	public enum ScriptPathsType {
		PAGE, FOLDER, FILE;
	}

	IResource getResource();
	
	String getPath();

	ScriptPathsType getType();

	Collection<String> getScriptResources();

}

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
package tern;

import java.io.IOException;

import tern.server.protocol.TernFile;
import tern.server.protocol.html.ScriptTagRegion;

public interface ITernFile extends ITernAdaptable {
	
	/**
	 * Protocol for file hosted in a different Tern project within the workspace
	 */
	String PROJECT_PROTOCOL = "project://"; //$NON-NLS-1$
	
	/**
	 * Protocol for file from outside the workspace, referred by its filesystem path
	 */
	String EXTERNAL_PROTOCOL = "external://"; //$NON-NLS-1$
	
	/**
	 * Returns name of the file as passed to the tern server. It can be e.g.:
	 * <ul>
	 * <li>{@code src/bar.js}: when file belongs to the same project</li> 
	 * <li>{@code project://JSProject/foo.js}: when file belongs to a different project in the workspace</li>
	 * <li>{@code external://C:\JS resources\jquery.js}: when file does not belong to the workspace</li>
	 * </ul>
	 * Name is created in context of the project.
	 * 
	 * @return full file name
	 */
	String getFullName(ITernProject context);

	/**
	 * Returns the last segment of the full file name. E.g. {@bar.js};
	 * 
	 * @return last segment of the file name
	 */
	String getFileName();
	
	/**
	 * Returns whether the file is present in the filesystem and
	 * is accessible. This should be a relatively fast method and in 
	 * case of non filesystem files, it may return false if method is sure that 
	 * contents are not accessible. Even if this method returns true,
	 * getContents method can still fail with IOException.
	 */
	boolean isAccessible();
	
	/**
	 * Returns contents of the file.
	 * 
	 * @return contents of the file, never null
	 * @throws IOException if contents of the file cannot be retrieved
	 */
	String getContents() throws IOException;
	
	/**
	 * Returns file relative to the given one, or null if there is no such file. 
	 * 
	 * @param relativePath Relative path to the requested file.
	 * @return Relative file or null
	 */
	ITernFile getRelativeFile(String relativePath);
	
	/**
	 * Provides a way to adapt ITernFile to an environment specific object representing file.
	 * E.g. it can return {@link java.io.File} object or Eclipse 
	 * {@code org.eclipse.core.resources.IFile}. 
	 * 
	 * @param adapterClass
	 * @return Adapter extending/implementing requested class or null
	 */
	Object getAdapter(@SuppressWarnings("rawtypes") Class adapterClass);

	/**
	 * Convenience method to provide extension of referred file.
	 * @return
	 */
	String getFileExtension();
	
	/**
	 * Converts file to tern server file,
	 * which can be sent over to the server
	 * 
	 * @return
	 * @throws IOException 
	 */
	TernFile toTernServerFile(ITernProject context) throws IOException;
	
	/**
	 * Returns an array of tag names, which contents should be treated as 
	 * JavaScript content. 
	 * @return
	 */
	ScriptTagRegion[] getScriptTags(ITernProject context);
	
}

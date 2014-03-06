/**
 *  Copyright (c) 2013-20A4 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.core.scriptpath;

import java.io.IOException;
import java.util.Collection;
import java.util.List;

import org.eclipse.core.resources.IResource;

import tern.TernFileManager;
import tern.server.protocol.TernDoc;

/**
 * API of tern script path used to retrieve a list of JS files to load by tern
 * server.
 * 
 */
public interface ITernScriptPath {

	public static final ITernScriptPath[] EMPTY_SCRIPT_PATHS = new ITernScriptPath[0];

	/**
	 * Path type.
	 * 
	 */
	public enum ScriptPathsType {
		FILE, FOLDER;

		public static ScriptPathsType getType(String type) {
			ScriptPathsType[] types = ScriptPathsType.values();
			ScriptPathsType t = null;
			for (int i = 0; i < types.length; i++) {
				t = types[i];
				if (t.name().equals(type)) {
					return t;
				}
			}
			return null;
		}
	}

	/**
	 * The root resource which contains the scripts to load.
	 * 
	 * @return
	 */
	IResource getResource();

	/**
	 * The path of the root resource.
	 * 
	 * @return
	 */
	String getPath();

	/**
	 * Returns the script path type.
	 */
	ScriptPathsType getType();

	/**
	 * Returns list of scripts defined by the script path.
	 * 
	 * @return
	 */
	Collection<IScriptResource> getScriptResources();

	/**
	 * Update files of the given tern doc.
	 * 
	 * @param ternFileManager
	 *            the tern file manager.
	 * @param doc
	 *            the tern doc.
	 * @param names
	 *            list of file names which must be used for the tern query.
	 * @throws IOException
	 */
	void updateFiles(TernFileManager ternFileManager, TernDoc doc, List names)
			throws IOException;

}

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
package tern.eclipse.ide.internal.core.resources;

import org.eclipse.core.resources.IFile;

import tern.ITernFile;
import tern.ITernProject;
import tern.TernResourcesManager;
import tern.resources.TernFileSynchronizer;

/**
 * Extension of {@link TernFileManager} to works with Eclipse {@link IFile}
 * 
 */
public class IDETernFileSynchronizer extends TernFileSynchronizer {

	/**
	 * Constructor of file manager with the owner Eclipse project.
	 */
	public IDETernFileSynchronizer(ITernProject project) {
		super(project);
	}

	/**
	 * Dispose the file manager.
	 */
	@Override
	public void dispose() {
		super.dispose();
	}

	void addFileToDelete(IFile file) {
		ITernFile tf = TernResourcesManager.getTernFile(file);
		if (tf != null) {
			super.addFileToDelete(tf.getFullName(getProject()));
		}
	}

	void removeIndexedFile(IFile file) {
		ITernFile tf = TernResourcesManager.getTernFile(file);
		if (tf != null) {
			super.removeIndexedFile(tf.getFullName(getProject()));
		}
	}

}

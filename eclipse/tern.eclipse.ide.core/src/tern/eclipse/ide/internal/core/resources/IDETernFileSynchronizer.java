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
package tern.eclipse.ide.internal.core.resources;

import org.eclipse.core.resources.IFile;

import tern.ITernProject;
import tern.resources.ITernFileUploader;
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

	@Override
	protected ITernFileUploader createTernFileUploader() {
		return new IDETernFileUploader(getProject());
	}
	
}

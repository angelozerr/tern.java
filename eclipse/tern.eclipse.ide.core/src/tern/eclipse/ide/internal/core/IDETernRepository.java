/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.core;

import java.io.File;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;

import tern.eclipse.ide.core.IIDETernRepository;
import tern.repository.TernRepository;

/**
 * {@link IIDETernRepository} implementation.
 *
 */
public class IDETernRepository extends TernRepository implements IIDETernRepository {

	private IPath location;
	private IProject project;

	public IDETernRepository(String name, File baseDir) {
		super(name, baseDir);
	}

	public IDETernRepository(String name, File baseDir, boolean defaultRepository) {
		super(name, baseDir, defaultRepository);
	}

	@Override
	public IPath getLocation() {
		return location;
	}
	
	@Override
	public boolean isImported() {
		return getProject() != null;
	}

	@Override
	public IProject getProject() {
		return project;
	}
	
	public void setProject(IProject project) {
		this.project = project;
	}

	@Override
	public IFile getTernServerFile() {
		if (project != null) {
			IFile ternFile = project.getFile(new Path("node_modules/tern/bin/tern"));
			if (ternFile != null && ternFile.exists()) {
				return ternFile;
			}
		}
		return null;
	}

	@Override
	public void setBaseDir(File baseDir) {
		super.setBaseDir(baseDir);
		this.location = new Path(getBaseDir().toString());
		tryToGetProject();
	}

	/**
	 * Try to get the Eclipse project of the repository.
	 */
	private void tryToGetProject() {
		IContainer container = ResourcesPlugin.getWorkspace().getRoot().getContainerForLocation(location);
		if (container != null && container.exists() && container.getType() == IResource.PROJECT) {
			this.project = (IProject) container;
		}
	}

	public IIDETernRepository copy() {
		return new IDETernRepository(this.getName(), this.getBaseDir(), this.isDefault());
	}

}

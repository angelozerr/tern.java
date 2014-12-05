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
package tern.eclipse.ide.internal.core.builder;

import java.util.Date;
import java.util.Map;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResourceDelta;
import org.eclipse.core.resources.IResourceDeltaVisitor;
import org.eclipse.core.resources.IncrementalProjectBuilder;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;

/**
 * Tern builder.
 *
 */
public class TernBuilder extends IncrementalProjectBuilder {

	public static final String BUILDER_ID = "tern.eclipse.ide.core.ternBuilder";

	private static final IProject[] EMPTY_PROJECT = new IProject[0];

	@Override
	protected IProject[] build(int kind, Map<String, String> args,
			IProgressMonitor monitor) throws CoreException {
		IProject currentProject = getProject();
		if (currentProject == null || !currentProject.isAccessible())
			return EMPTY_PROJECT;

		/*if (DEBUG)
			System.out.println("\nJavaBuilder: Starting build of " + currentProject.getName() //$NON-NLS-1$
				+ " @ " + new Date(System.currentTimeMillis())); //$NON-NLS-1$
		/*
		 * if (IDETernProject.hasTernNature(currentProject)) { try { long start
		 * = System.currentTimeMillis();
		 * IDETernProject.getTernProject(currentProject) .loadFiles(monitor);
		 * System.err.println("Terminated in" + (System.currentTimeMillis() -
		 * start) + "ms"); } catch (IOException e) { e.printStackTrace(); } }
		 */
		return EMPTY_PROJECT;
	}
	
	protected IProject[] buildOLD(int kind, Map args, IProgressMonitor monitor) {
		if (kind == IncrementalProjectBuilder.FULL_BUILD) {
			fullBuild(monitor);
		} else {
			IResourceDelta delta = getDelta(getProject());
			if (delta == null) {
				fullBuild(monitor);
			} else {
				incrementalBuild(delta, monitor);
			}
		}
		return null;
	}

	private void incrementalBuild(IResourceDelta delta, IProgressMonitor monitor) {
		System.out.println("incremental build on " + delta);
		try {
			delta.accept(new IResourceDeltaVisitor() {
				public boolean visit(IResourceDelta delta) {
					System.out.println("changed: "
							+ delta.getResource().getRawLocation());
					return true; // visit children too
				}
			});
		} catch (CoreException e) {
			e.printStackTrace();
		}
	}

	private void fullBuild(IProgressMonitor monitor) {
		System.out.println("full build");
	}

	

}

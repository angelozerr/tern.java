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
package tern.eclipse.ide.internal.core.builder;

import java.io.IOException;
import java.util.Map;

import org.eclipse.core.resources.ICommand;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IProjectDescription;
import org.eclipse.core.resources.IResourceDelta;
import org.eclipse.core.resources.IResourceDeltaVisitor;
import org.eclipse.core.resources.IncrementalProjectBuilder;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;

import tern.ITernFile;
import tern.TernException;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.core.Trace;
import tern.eclipse.ide.internal.core.preferences.TernCorePreferencesSupport;
import tern.scriptpath.ITernScriptPath;
import tern.scriptpath.ITernScriptResource;
import tern.server.ITernPlugin;
import tern.server.protocol.TernQuery;
import tern.server.protocol.lint.TernLintQuery;

/**
 * Tern builder used to validate JS files with tern linter
 * https://github.com/angelozerr/tern.java/wiki/Tern-Linter
 *
 */
public class TernBuilder extends IncrementalProjectBuilder {

	public static final String BUILDER_ID = "tern.eclipse.ide.core.ternBuilder";

	private static final IProject[] EMPTY_PROJECT = new IProject[0];

	@Override
	protected IProject[] build(int kind, Map<String, String> args,
			IProgressMonitor monitor) throws CoreException {
		IProject currentProject = getProject();

		// check if the given project has tern nature.
		if (currentProject == null
				|| !TernCorePlugin.hasTernNature(currentProject))
			return EMPTY_PROJECT;

		// Remove this test, the tern builder is added as soon as a project is
		// configurated to tern project (that's bad).
		// It must be added dynamicly (like WTP ValidationBuilder with a UI
		// Preferences "Add Tern Builder to project").
		if (!TernCorePreferencesSupport.getInstance().isAvailableTernBuilder(
				currentProject)) {
			return EMPTY_PROJECT;
		}
		if (true) {
			return EMPTY_PROJECT;
		}

		// Check if the tern project has linters.
		IIDETernProject ternProject = TernCorePlugin
				.getTernProject(currentProject);
		ITernPlugin[] lintPlugins = ternProject.getLinters();
		if (lintPlugins.length < 0) {
			return EMPTY_PROJECT;
		}

		// The given tern project as some tern linters, execute it and create
		// Eclipse markers for each file which have errors.
		MarkerTernLintCollector collector = new MarkerTernLintCollector(
				ternProject);
		try {
			// Loop for tern script path to retrieve files to validate
			for (ITernScriptPath path : ternProject.getScriptPaths()) {
				// Loopo for each JS files of the current script path
				for (ITernScriptResource resource : path.getScriptResources()) {
					ITernFile file = resource.getFile();
					if (file == null) {
						continue;
					}
					// Validate JS file
					validate(file, ternProject, lintPlugins, collector);
				}
			}
		} catch (Exception e) {
			Trace.trace(Trace.SEVERE, "Error while executing tern builder", e);
		}
		return EMPTY_PROJECT;
	}

	/**
	 * Validate the given file which belongs to teh given tern project by using
	 * the given linters. Create marker for each tern messages collected by the
	 * given collector.
	 * 
	 * @param file
	 *            the JS file to validate
	 * @param ternProject
	 *            the owner tern project
	 * @param lintPlugins
	 *            the list of tern linter to use to validate the JS file.
	 * @param collector
	 *            collect message and create Eclipse marker for the Eclipse file
	 *            which have errors.
	 * @throws TernException
	 * @throws IOException
	 */
	private void validate(ITernFile file, IIDETernProject ternProject,
			ITernPlugin[] lintPlugins, MarkerTernLintCollector collector)
			throws TernException, IOException {
		String name = file.getFullName(ternProject);
		try {
			collector.onFullLinterStart(name);
			for (ITernPlugin linter : lintPlugins) {
				TernQuery query = TernLintQuery.create(linter, false);
				query.setFile(name);
				ternProject.request(query, collector);
			}
		} finally {
			collector.onFullLinterEnd(name);
		}
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

	@Override
	protected void clean(IProgressMonitor monitor) throws CoreException {
		// TODO Auto-generated method stub
		super.clean(monitor);
	}

	private void fullBuild(IProgressMonitor monitor) {
		System.out.println("full build");
	}

	public static void addTernBuilder(IProject project) throws CoreException {
		IProjectDescription desc = project.getDescription();
		ICommand[] commands = desc.getBuildSpec();
		boolean found = false;

		for (int i = 0; i < commands.length; ++i) {
			if (commands[i].getBuilderName().equals(BUILDER_ID)) {
				found = true;
				break;
			}
		}
		if (!found) {
			// add builder to project
			ICommand command = desc.newCommand();
			command.setBuilderName(BUILDER_ID);
			ICommand[] newCommands = new ICommand[commands.length + 1];

			// Add it before other builders.
			System.arraycopy(commands, 0, newCommands, 1, commands.length);
			newCommands[0] = command;
			desc.setBuildSpec(newCommands);
			project.setDescription(desc, null);
		}
	}

}

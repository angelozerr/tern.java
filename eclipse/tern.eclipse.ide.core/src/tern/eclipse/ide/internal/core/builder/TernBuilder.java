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

import java.io.IOException;
import java.util.Map;

import org.eclipse.core.resources.ICommand;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IMarker;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IProjectDescription;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceDelta;
import org.eclipse.core.resources.IResourceDeltaVisitor;
import org.eclipse.core.resources.IncrementalProjectBuilder;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;

import tern.TernException;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.core.preferences.TernCorePreferencesSupport;
import tern.server.ITernPlugin;
import tern.server.protocol.TernQuery;
import tern.server.protocol.lint.ITernLintCollector;
import tern.server.protocol.lint.TernLintQuery;
import tern.utils.TernModuleHelper;

/**
 * Tern builder.
 *
 */
public class TernBuilder extends IncrementalProjectBuilder {

	public static final String BUILDER_ID = "tern.eclipse.ide.core.ternBuilder";

	private static final IProject[] EMPTY_PROJECT = new IProject[0];

	private static final String JAVASCRIPT_MODEL_PROBLEM_MARKER = TernCorePlugin.PLUGIN_ID
			+ ".problem";

	public final static String[] JAVA_PROBLEM_MARKER_ATTRIBUTE_NAMES = {
			IMarker.MESSAGE, IMarker.SEVERITY, IMarker.CHAR_START,
			IMarker.CHAR_END, IMarker.LINE_NUMBER };
	public final static Integer S_ERROR = new Integer(IMarker.SEVERITY_ERROR);
	public final static Integer S_WARNING = new Integer(
			IMarker.SEVERITY_WARNING);

	@Override
	protected IProject[] build(int kind, Map<String, String> args,
			IProgressMonitor monitor) throws CoreException {
		IProject currentProject = getProject();
		if (currentProject == null
				|| !TernCorePlugin.hasTernNature(currentProject))
			return EMPTY_PROJECT;

		if (!TernCorePreferencesSupport.getInstance().isAvailableTernBuilder(
				currentProject)) {
			return EMPTY_PROJECT;
		}
		final IIDETernProject ternProject = TernCorePlugin
				.getTernProject(currentProject);
		ITernPlugin[] lintPlugins = ternProject.getLinters();
		if (lintPlugins.length > 0) {

			ITernLintCollector collector = new ITernLintCollector() {

				IResource resource = null;

				@Override
				public void startLint(String file) {
					resource = (IResource) ternProject.getFile(file)
							.getAdapter(IFile.class);
					removeProblemsFor(resource);
				}

				@Override
				public void addMessage(String message, Long start, Long end,
						String severity, String file) {
					if (resource != null) {
						try {
							IMarker marker = resource
									.createMarker(JAVASCRIPT_MODEL_PROBLEM_MARKER);

							String[] attributeNames = JAVA_PROBLEM_MARKER_ATTRIBUTE_NAMES;
							int standardLength = attributeNames.length;
							String[] allNames = attributeNames;

							Object[] allValues = new Object[allNames.length];
							// standard attributes
							int index = 0;
							allValues[index++] = message; // message
							allValues[index++] = "error".equals(severity) ? S_ERROR
									: S_WARNING; // severity
							// allValues[index++] = new Integer(id); // ID
							allValues[index++] = start.intValue(); // start
							allValues[index++] = end.intValue(); // end
							// allValues[index++] = new
							// Integer(problem.getSourceLineNumber()); // line
							// allValues[index++] =
							// Util.getProblemArgumentsForMarker(problem.getArguments());
							// // arguments
							// allValues[index++] = new
							// Integer(problem.getCategoryID()); // category ID
							// GENERATED_BY attribute for JDT problems
							// if (managedLength > 0)
							// allValues[index++] = JavaBuilder.SOURCE_ID;
							// optional extra attributes
							// if (extraLength > 0)
							// System.arraycopy(problem.getExtraMarkerAttributeValues(),
							// 0, allValues, index, extraLength);

							marker.setAttributes(allNames, allValues);

						} catch (CoreException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}

					}
				}

				@Override
				public void endLint(String file) {
					resource = null;
				}
			};

			try {
				for (ITernPlugin linter : lintPlugins) {
					TernQuery query = TernLintQuery.create(linter, true);
					ternProject.request(query, collector);
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (TernException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
		/*
		 * if (DEBUG) System.out.println("\nJavaBuilder: Starting build of " +
		 * currentProject.getName() //$NON-NLS-1$ + " @ " + new
		 * Date(System.currentTimeMillis())); //$NON-NLS-1$ /* if
		 * (IDETernProject.hasTernNature(currentProject)) { try { long start =
		 * System.currentTimeMillis();
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

	@Override
	protected void clean(IProgressMonitor monitor) throws CoreException {
		// TODO Auto-generated method stub
		super.clean(monitor);
	}

	private void fullBuild(IProgressMonitor monitor) {
		System.out.println("full build");
	}

	public static void removeProblemsFor(IResource resource) {
		try {
			if (resource != null && resource.exists()) {
				resource.deleteMarkers(JAVASCRIPT_MODEL_PROBLEM_MARKER, false,
						IResource.DEPTH_INFINITE);
			}
		} catch (CoreException e) {
			// assume there were no problems
		}
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

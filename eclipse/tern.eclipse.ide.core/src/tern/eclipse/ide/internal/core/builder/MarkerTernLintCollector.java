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

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IMarker;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.server.protocol.lint.ITernLintCollector;

/**
 * Tern lint collector which create Eclipse {@link IMarker} when an error occurs
 * from a tern linter for a given {@link IResource}.
 */
class MarkerTernLintCollector implements ITernLintCollector {

	private static final String TERN_PROBLEM_MARKER = TernCorePlugin.PLUGIN_ID
			+ ".problem";

	private final static String[] TERN_PROBLEM_MARKER_ATTRIBUTE_NAMES = {
			IMarker.MESSAGE, IMarker.SEVERITY, IMarker.CHAR_START,
			IMarker.CHAR_END, IMarker.LINE_NUMBER };
	public final static Integer S_ERROR = new Integer(IMarker.SEVERITY_ERROR);
	public final static Integer S_WARNING = new Integer(
			IMarker.SEVERITY_WARNING);

	private IResource resource = null;
	private final IIDETernProject ternProject;

	public MarkerTernLintCollector(IIDETernProject ternProject) {
		this.ternProject = ternProject;
	}

	public void onFullLinterStart(String file) {
		resource = (IResource) ternProject.getFile(file)
				.getAdapter(IFile.class);
		removeProblemsFor(resource);
	}

	public void onFullLinterEnd(String file) {
		resource = null;
	}

	@Override
	public void startLint(String file) {
		// don't use starLint
	}

	@Override
	public void addMessage(String message, Long start, Long end,
			String severity, String file) {
		if (resource != null) {
			try {
				IMarker marker = resource.createMarker(TERN_PROBLEM_MARKER);

				String[] attributeNames = TERN_PROBLEM_MARKER_ATTRIBUTE_NAMES;
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
	}

	public static void removeProblemsFor(IResource resource) {
		try {
			if (resource != null && resource.exists()) {
				resource.deleteMarkers(TERN_PROBLEM_MARKER, false,
						IResource.DEPTH_INFINITE);
			}
		} catch (CoreException e) {
			// assume there were no problems
		}
	}

}

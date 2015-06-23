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
package tern.eclipse.ide.jsdt.internal.core;

import java.io.IOException;

import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.resources.WorkspaceJob;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.wst.jsdt.core.ElementChangedEvent;
import org.eclipse.wst.jsdt.core.IElementChangedListener;
import org.eclipse.wst.jsdt.core.IIncludePathEntry;
import org.eclipse.wst.jsdt.core.IJavaScriptElement;
import org.eclipse.wst.jsdt.core.IJavaScriptElementDelta;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.core.JavaScriptCore;
import org.eclipse.wst.jsdt.core.JavaScriptModelException;
import org.eclipse.wst.jsdt.internal.core.JavaProject;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.ITernProjectLifecycleListener;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.scriptpath.ITernScriptPath.ScriptPathsType;

/**
 * JSDT Class Path manager used to synchronize tern script paths with JSDT
 * "Include Paths".
 *
 */
public class JSDTClassPathManager implements IElementChangedListener,
		ITernProjectLifecycleListener {

	private static final String JSDT_EXTERNAL_LABEL = "jsdt";
	private static final JSDTClassPathManager INSTANCE = new JSDTClassPathManager();

	public static JSDTClassPathManager getManager() {
		return INSTANCE;
	}

	/**
	 * Observe the changes of the JSDT "Include Path" to synchronize tern script
	 * paths.
	 */
	@Override
	public void elementChanged(ElementChangedEvent event) {
		IJavaScriptElementDelta delta = event.getDelta();
		if (delta.getKind() == IJavaScriptElementDelta.CHANGED) {
			// retrieve the JSDT Project if delta is about "Includes Path"
			// changes.
			IJavaScriptProject jsProject = getJavaScriptProjectIfClassPathChanged(delta);
			if (jsProject != null) {
				Job configJob = new ConfigureJob(jsProject);
				configJob.setRule(jsProject.getProject());
				configJob.schedule();
			}
		}
	}

	private class ConfigureJob extends WorkspaceJob {
		private final IJavaScriptProject jsProject;

		private ConfigureJob(IJavaScriptProject jsProject) {
			super("Tern Project configuration job");
			this.jsProject = jsProject;
		}

		@Override
		public IStatus runInWorkspace(IProgressMonitor monitor)
				throws CoreException {
			if (monitor.isCanceled()) {
				return Status.CANCEL_STATUS;
			}
			monitor.beginTask("Confuguring the project", 1);
			// JSDT "Includes Path", has changed.
			if (jsProject != null) {
				IProject project = jsProject.getProject();
				if (TernCorePlugin.hasTernNature(project)) {
					// It's a tern project
					try {
						IIDETernProject ternProject = TernCorePlugin
								.getTernProject(project);
						// Synchronize tern script paths with JSDT
						// "Include Path"
						synchTernScriptPaths(jsProject, ternProject);
					} catch (Exception e) {
						Trace.trace(Trace.SEVERE,
								"Error while JSDT ClassPath changed.", e);
					}
				}
			}
			monitor.worked(1);
			monitor.done();
			return Status.OK_STATUS;
		}
	}

	/**
	 * Retrieve the JSDT Project from the delta, if delta is about
	 * "Includes Path" changes.
	 * 
	 * @param delta
	 *            the JSDT delta.
	 * @return
	 */
	private IJavaScriptProject getJavaScriptProjectIfClassPathChanged(
			IJavaScriptElementDelta delta) {
		if (delta.getKind() != IJavaScriptElementDelta.CHANGED) {
			return null;
		}
		IJavaScriptElement element = delta.getElement();
		switch (element.getElementType()) {
		case IJavaScriptElement.JAVASCRIPT_MODEL:
			IJavaScriptElementDelta[] children = delta.getAffectedChildren();
			for (int i = 0, length = children.length; i < length; i++) {
				IJavaScriptElementDelta child = children[i];
				IJavaScriptProject project = getJavaScriptProjectIfClassPathChanged(child);
				if (project != null) {
					return project;
				}
			}
			return null;
		case IJavaScriptElement.JAVASCRIPT_PROJECT:
			int kind = delta.getKind();
			switch (kind) {
			case IJavaScriptElementDelta.ADDED:
			case IJavaScriptElementDelta.REMOVED:
				return null;
			case IJavaScriptElementDelta.CHANGED:
				int flags = delta.getFlags();
				if ((flags & IJavaScriptElementDelta.F_CLOSED) != 0
						|| (flags & IJavaScriptElementDelta.F_OPENED) != 0) {
					return null;
				} else {
					children = delta.getAffectedChildren();
					for (int i = 0, length = children.length; i < length; i++) {
						IJavaScriptElementDelta child = children[i];
						IJavaScriptProject project = getJavaScriptProjectIfClassPathChanged(child);
						if (project != null) {
							return project;
						}
					}
				}
				return null;
			}
			return null;
		case IJavaScriptElement.PACKAGE_FRAGMENT_ROOT:
			kind = delta.getKind();
			switch (kind) {
			case IJavaScriptElementDelta.ADDED:
			case IJavaScriptElementDelta.REMOVED:
				return null;
			case IJavaScriptElementDelta.CHANGED:
				int flags = delta.getFlags();
				if ((flags & IJavaScriptElementDelta.F_ADDED_TO_CLASSPATH) > 0
						|| (flags & IJavaScriptElementDelta.F_REMOVED_FROM_CLASSPATH) > 0) {
					// "Include Path" has changed, returns the JSDT project.
					return element.getJavaScriptProject();
				}
				return null;
			}
			break;
		}
		return null;
	}

	public void startup() {
		JavaScriptCore.addElementChangedListener(this,
				ElementChangedEvent.POST_CHANGE);
		// the JSDT Class Path Manager is registered as listener with the
		// ternProjectLifecycleListeners extension point
		// to be sure when TernProject fires listener, this JSDT Class Path
		// manager is registered.
		// TernCorePlugin.addTernProjectLifeCycleListener(this);
	}

	public void shutdown() {
		JavaScriptCore.removeElementChangedListener(this);
		TernCorePlugin.removeTernProjectLifeCycleListener(this);
	}

	/**
	 * Synchronize on the tern project load, tern script pats with JSDT
	 * "Include Path".
	 */
	@Override
	public void handleEvent(IIDETernProject ternProject,
			LifecycleEventType eventType) {
		if (eventType != LifecycleEventType.onLoadAfter) {
			return;
		}
		// the given tern project is loading...
		IProject project = ternProject.getProject();
		if (JavaProject.hasJavaNature(project)) {
			// The project is a JSDT project.
			IJavaScriptProject jsProject = JavaScriptCore.create(project);
			// Synchronize tern script paths with JSDT "Include Path"
			synchTernScriptPaths(jsProject, ternProject);
		}
	}

	/**
	 * Synchronize tern script paths with JSDT "Include Path"
	 * 
	 * @param jsProject
	 * @param ternProject
	 */
	private void synchTernScriptPaths(IJavaScriptProject jsProject,
			IIDETernProject ternProject) {
		try {
			ternProject.removeExternalScriptPaths(JSDT_EXTERNAL_LABEL);
			IIncludePathEntry[] entries = jsProject.getRawIncludepath();
			for (int i = 0; i < entries.length; i++) {
				IIncludePathEntry entry = entries[i];
				switch (entry.getEntryKind()) {
				case IIncludePathEntry.CPE_LIBRARY:
					// TODO : manage JSDT library
					// JSDT Source file => Tern script path file.
					/*
					 * IFolder libFolder =
					 * ResourcesPlugin.getWorkspace().getRoot()
					 * .getFolder(entry.getPath()); try {
					 * ternProject.addExternalScriptPath(libFolder,
					 * ScriptPathsType.FOLDER, JSDT_EXTERNAL_LABEL); } catch
					 * (IOException e) { Trace.trace(Trace.SEVERE,
					 * "Error while adding external tern script path for project "
					 * + ternProject.getProject().getName(), e); }
					 */
					break;
				case IIncludePathEntry.CPE_SOURCE:
					if (entry.getPath().segmentCount() == 1) {
						// It's a project
						synchTernProjectScriptPaths(ternProject, entry);
					} else {
						// It's a folder
						// JSDT Source folder => Tern script path folder.
						IFolder folder = ResourcesPlugin.getWorkspace()
								.getRoot().getFolder(entry.getPath());
						try {
							String[] inclusionPatterns = toTernPatterns(entry
									.getInclusionPatterns());
							String[] exclusionPatterns = toTernPatterns(entry
									.getExclusionPatterns());
							ternProject.addExternalScriptPath(folder,
									ScriptPathsType.FOLDER, inclusionPatterns,
									exclusionPatterns, JSDT_EXTERNAL_LABEL);
						} catch (IOException e) {
							Trace.trace(Trace.SEVERE,
									"Error while adding external tern script path for project "
											+ ternProject.getProject()
													.getName(), e);
						}
					}
					break;
				case IIncludePathEntry.CPE_PROJECT:
					// JS file?
					synchTernProjectScriptPaths(ternProject, entry);
					break;
				}
			}
		} catch (JavaScriptModelException e) {
			Trace.trace(Trace.SEVERE,
					"Error while getting JSDT ClassPath for project "
							+ ternProject.getProject().getName(), e);
		}
	}

	private String[] toTernPatterns(IPath[] paths) {
		if (paths == null || paths.length < 1) {
			return null;
		}
		String[] patterns = new String[paths.length];
		for (int i = 0; i < paths.length; i++) {
			patterns[i] = paths[i].toString();
		}
		return patterns;
	}

	/**
	 * Synchronize tern project script paths with JSDT "Include Path"
	 * 
	 * @param ternProject
	 * @param entry
	 */
	private void synchTernProjectScriptPaths(IIDETernProject ternProject,
			IIncludePathEntry entry) {
		// JSDT Project => Tern script path project.
		IProject project = ResourcesPlugin.getWorkspace().getRoot()
				.getProject(entry.getPath().lastSegment());
		try {
			String[] inclusionPatterns = toTernPatterns(entry
					.getInclusionPatterns());
			String[] exclusionPatterns = toTernPatterns(entry
					.getExclusionPatterns());
			ternProject.addExternalScriptPath(project, ScriptPathsType.PROJECT,
					inclusionPatterns, exclusionPatterns, JSDT_EXTERNAL_LABEL);
		} catch (IOException e) {
			Trace.trace(Trace.SEVERE,
					"Error while adding external tern script path for project "
							+ ternProject.getProject().getName(), e);
		}
	}

}

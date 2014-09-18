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
package tern.eclipse.ide.jsdt.internal;

import java.io.IOException;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ResourcesPlugin;
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
import tern.eclipse.ide.core.scriptpath.ITernScriptPath.ScriptPathsType;

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
				// JSDT "Includes Path", has changed.
				IProject project = jsProject.getProject();
				if (TernCorePlugin.hasTernNature(project)) {
					// It's a tern project
					try {
						IIDETernProject ternProject = TernCorePlugin
								.getTernProject(project);
						// Synchronize tern script paths with JSDT
						// "Includes Paths"
						synchTernScriptPaths(jsProject, ternProject);
					} catch (Exception e) {
						Trace.trace(Trace.SEVERE,
								"Error while JSDT ClassPath changed.", e);
					}
				}
			}
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
					// "Includes Paths" has changed, returns the JSDT project.
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
		TernCorePlugin.addTernProjectLifeCycleListener(this);
	}

	public void shutdown() {
		JavaScriptCore.removeElementChangedListener(this);
		TernCorePlugin.removeTernProjectLifeCycleListener(this);
	}

	/**
	 * Synchronize on the tern project load, tern script pats with JSDT
	 * "Includes Paths".
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
			// Synchronize tern script paths with JSDT "Includes Paths"
			synchTernScriptPaths(jsProject, ternProject);
		}
	}

	/**
	 * Synchronize tern script paths with JSDT "Includes Paths"
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
					// JS file?
					// JSDT Source file => Tern script path file.
					IFile file = ResourcesPlugin.getWorkspace().getRoot()
							.getFile(entry.getPath());
					try {
						ternProject.addExternalScriptPath(file,
								ScriptPathsType.FILE, JSDT_EXTERNAL_LABEL);
					} catch (IOException e) {
						Trace.trace(Trace.SEVERE,
								"Error while adding external tern script path for project "
										+ ternProject.getProject().getName(), e);
					}
					break;
				case IIncludePathEntry.CPE_SOURCE:
					// JSDT Source folder => Tern script path folder.
					IFolder folder = ResourcesPlugin.getWorkspace().getRoot()
							.getFolder(entry.getPath());
					try {
						ternProject.addExternalScriptPath(folder,
								ScriptPathsType.FOLDER, JSDT_EXTERNAL_LABEL);
					} catch (IOException e) {
						Trace.trace(Trace.SEVERE,
								"Error while adding external tern script path for project "
										+ ternProject.getProject().getName(), e);
					}
					break;
				case IIncludePathEntry.CPE_PROJECT:
					// JS file?
					// JSDT Project => Tern script path project.
					IProject project = ResourcesPlugin.getWorkspace().getRoot()
							.getProject(entry.getPath().lastSegment());
					try {
						ternProject.addExternalScriptPath(project,
								ScriptPathsType.PROJECT, JSDT_EXTERNAL_LABEL);
					} catch (IOException e) {
						Trace.trace(Trace.SEVERE,
								"Error while adding external tern script path for project "
										+ ternProject.getProject().getName(), e);
					}
					break;
				}
			}
		} catch (JavaScriptModelException e) {
			Trace.trace(Trace.SEVERE,
					"Error while getting JSDT ClassPath for project "
							+ ternProject.getProject().getName(), e);
		}
	}

}

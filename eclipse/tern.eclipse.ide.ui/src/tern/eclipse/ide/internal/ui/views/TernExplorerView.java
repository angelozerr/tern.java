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
package tern.eclipse.ide.internal.ui.views;

import java.util.Collections;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IAdaptable;
import org.eclipse.jface.action.IToolBarManager;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.TreePath;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Tree;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IPartListener2;
import org.eclipse.ui.ISelectionListener;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.IWorkbenchPartReference;
import org.eclipse.ui.part.ViewPart;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.ITernProjectLifecycleListener;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.views.actions.TerminateTernServerAction;
import tern.server.ITernServer;
import tern.server.ITernServerListener;

/**
 * Tern Explorer View used to display variable function of selected JavaScript
 * Editor file (like JSDT Outline). The view display a tree which is filled with
 * https://github.com/angelozerr/tern-outline
 *
 */
public class TernExplorerView extends ViewPart
		implements ISelectionListener, ITernServerListener, ITernProjectLifecycleListener {

	private IWorkbenchPart currentEditor;
	private IIDETernProject currentTernProject;
	private IResource currentResource;
	private TreeViewer viewer;

	private TerminateTernServerAction terminateAction;

	private IPartListener2 partListener = new IPartListener2() {
		public void partVisible(IWorkbenchPartReference ref) {
			if (ref.getId().equals(getSite().getId())) {
				IWorkbenchPart activePart = ref.getPage().getActivePart();
				if (activePart != null)
					selectionChanged(activePart, ref.getPage().getSelection());
				startListeningForSelectionChanges();
			}
		}

		public void partHidden(IWorkbenchPartReference ref) {
			if (ref.getId().equals(getSite().getId()))
				stopListeningForSelectionChanges();
		}

		public void partInputChanged(IWorkbenchPartReference ref) {

		}

		public void partActivated(IWorkbenchPartReference ref) {
		}

		public void partBroughtToTop(IWorkbenchPartReference ref) {
		}

		public void partClosed(IWorkbenchPartReference ref) {
		}

		public void partDeactivated(IWorkbenchPartReference ref) {
		}

		public void partOpened(IWorkbenchPartReference ref) {
		}
	};

	@Override
	public void createPartControl(Composite parent) {
		FillLayout layout = new FillLayout();
		parent.setLayout(layout);

		viewer = new TreeViewer(parent, SWT.H_SCROLL | SWT.V_SCROLL | SWT.MULTI);
		viewer.setContentProvider(new TernExplorerContentProvider());
		viewer.setLabelProvider(new TernExplorerLabelProvider());

		Tree tree = viewer.getTree();
		tree.setHeaderVisible(false);
		tree.setLinesVisible(false);

		registerActions();
		registerContextMenu();

		getSite().getWorkbenchWindow().getPartService().addPartListener(partListener);
		TernCorePlugin.addTernProjectLifeCycleListener(this);
		updateEnabledActions();
	}

	private void registerActions() {
		IToolBarManager manager = getViewSite().getActionBars().getToolBarManager();
		this.terminateAction = new TerminateTernServerAction(this);
		manager.add(terminateAction);
	}

	private void registerContextMenu() {

	}

	/**
	 * Update enabled of actions.
	 */
	private void updateEnabledActions() {

	}

	@Override
	public void setFocus() {
		viewer.getTree().setFocus();
	}

	/**
	 * Start to listen for selection changes.
	 */
	protected void startListeningForSelectionChanges() {
		getSite().getPage().addPostSelectionListener(this);
	}

	/**
	 * Stop to listen for selection changes.
	 */
	protected void stopListeningForSelectionChanges() {
		getSite().getPage().removePostSelectionListener(this);
	}

	@Override
	public void selectionChanged(IWorkbenchPart part, ISelection selection) {
		if (part.equals(this) || part.equals(currentEditor)) {
			return;
		}
		currentEditor = part;
		currentEditor = part;
		if (part != null && part instanceof IEditorPart) {
			currentResource = null;
			Object sel = ((IEditorPart) part).getEditorInput();
			if (sel instanceof IAdaptable) {
				IResource resource = (IResource) ((IAdaptable) sel).getAdapter(IResource.class);
				if (resource != null) {
					IProject project = resource.getProject();
					if (TernCorePlugin.hasTernNature(project)) {
						try {
							IIDETernProject ternProject = TernCorePlugin.getTernProject(project);
							boolean projectChanged = !ternProject.equals(currentTernProject);
							if (projectChanged) {
								ternProject.addServerListener(this);
								if (currentTernProject != null) {
									currentTernProject.removeServerListener(this);
								}
							}
							currentTernProject = ternProject;
							this.terminateAction.setEnabled(!currentTernProject.isServerDisposed());
							currentResource = resource;
							if (projectChanged) {
								// refresh
								//viewer.setInput(currentTernProject.getScriptPaths());
							} else {
								refreshTree(true);
							}
						} catch (CoreException e) {
							e.printStackTrace();
						}

					}
				}

			}
		}
		if (currentResource == null) {
			initializeExplorer();
		}
	}

	protected void initializeExplorer() {
		// The current resources doesn't belong to an angular project,
		// disable angular explorer.
		if (currentTernProject != null) {
			currentTernProject.removeServerListener(this);
		}
		currentTernProject = null;
		currentResource = null;
		viewer.setInput(Collections.emptyList());
	}

	@Override
	public void dispose() {
		super.dispose();
		getSite().getWorkbenchWindow().getPartService().removePartListener(partListener);
		TernCorePlugin.removeTernProjectLifeCycleListener(this);
		if (currentTernProject != null) {
			currentTernProject.removeServerListener(this);
		}
	}

	public IResource getCurrentResource() {
		return currentResource;
	}

	public IIDETernProject getCurrentTernProject() {
		return currentTernProject;
	}

	public TreeViewer getViewer() {
		return viewer;
	}

	/**
	 * Refresh the tree of the view.
	 * 
	 * @param updateLabels
	 *            true if only labels of each tree item must be refreshed and
	 *            false otherwise.
	 */
	public void refreshTree(boolean updateLabels) {
		if (!updateLabels) {
			/*
			 * try { if (getCurrentTernProject() != null) { AngularProject
			 * angularProject = AngularProject
			 * .getAngularProject(getCurrentTernProject().getProject());
			 * angularProject.cleanModel(); } } catch (CoreException e) {
			 * 
			 * }
			 */
		}
		Object[] expandedElements = viewer.getExpandedElements();
		TreePath[] expandedTreePaths = viewer.getExpandedTreePaths();
		viewer.refresh(updateLabels);
		viewer.setExpandedElements(expandedElements);
		viewer.setExpandedTreePaths(expandedTreePaths);
	}

	@Override
	public void onStart(ITernServer server) {
		terminateAction.setEnabled(true);
	}

	@Override
	public void onStop(ITernServer server) {
		terminateAction.setEnabled(false);
	}

	@Override
	public void handleEvent(IIDETernProject project, LifecycleEventType state) {
		if (project.equals(currentTernProject)) {
			switch (state) {
			case onDisposeAfter:
				Display.getDefault().asyncExec(new Runnable() {

					@Override
					public void run() {
						initializeExplorer();
					}
				});
				break;
			case onLoadAfter:
				// refresh
				Display.getDefault().asyncExec(new Runnable() {

					@Override
					public void run() {
						// viewer.setInput(currentTernProject.getScriptPaths());
					}
				});
				break;
			default:
				break;
			}

		}
	}
}

/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.ui.views;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.jface.text.ITextSelection;
import org.eclipse.jface.viewers.IPostSelectionProvider;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.ISelectionProvider;
import org.eclipse.jface.viewers.IStructuredContentProvider;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.jface.viewers.TreePath;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IMemento;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.navigator.CommonViewer;
import org.eclipse.ui.part.IPage;
import org.eclipse.ui.part.IPageBookViewPage;
import org.eclipse.ui.progress.UIJob;
import org.eclipse.ui.texteditor.ITextEditor;
import org.eclipse.ui.views.contentoutline.ContentOutline;
import org.eclipse.ui.views.contentoutline.IContentOutlinePage;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.server.protocol.outline.IJSNode;
import tern.server.protocol.outline.IJSNodeRoot;
import tern.server.protocol.outline.TernOutlineCollector;

/**
 * Abstract class for tern outline view.
 *
 */
public abstract class AbstractTernOutlineView extends ContentOutline implements ISelectionChangedListener {

	public static final int IS_LINKING_ENABLED_PROPERTY = 0;
	private static final int LINK_HELPER_DELAY = 100;
	private static final int UPDATE_DELAY = 500;

	private ITextEditor textEditor;

	protected IMemento memento;

	private String LINKING_ENABLED = "AbstractTernOutlineView.LINKING_ENABLED"; //$NON-NLS-1$
	private boolean linkingEnabled = false;
	private ISelection currentEditorSelection;
	private IJSNode currentNodeToOpen;

	private boolean ignoreEditorActivation;
	private boolean ignoreSelectionChanged;

	private boolean parsed;
	private TernOutlineCollector outline;

	private class BestNode {
		public final IJSNode node;
		public final CommonViewer viewer;

		public BestNode(IJSNode node, CommonViewer viewer) {
			this.node = node;
			this.viewer = viewer;
		}
	}

	private UIJob activateEditorJob = new UIJob(TernUIMessages.Link_With_Editor_Job_) {

		@Override
		public IStatus runInUIThread(IProgressMonitor monitor) {
			AbstractTernContentOutlinePage page = getCurrentTernPage();
			if (page != null) {
				try {
					ignoreEditorActivation = true;
					IFile file = page.getFile();
					if (file != null) {
						EditorUtils.openInEditor(currentNodeToOpen, file);
					} else {
						EditorUtils.openInEditor(currentNodeToOpen);
					}
				} finally {
					ignoreEditorActivation = false;
				}
			}
			return Status.OK_STATUS;
		}
	};

	private Job updateSelectionJob = new Job(TernUIMessages.Link_With_Editor_Job_) {
		@Override
		protected IStatus run(IProgressMonitor monitor) {
			BestNode bestNode = findBestNode(currentEditorSelection);
			if (bestNode != null) {
				try {
					ignoreSelectionChanged = true;
					final IJSNode node = bestNode.node;
					final CommonViewer viewer = bestNode.viewer;
					Display.getDefault().syncExec(new Runnable() {
						@Override
						public void run() {
							viewer.setSelection(new StructuredSelection(node));
						}
					});
				} finally {
					ignoreSelectionChanged = false;
				}
			}
			return Status.OK_STATUS;
		}
	};

	private Job refreshJob = createRefreshJob();

	@Override
	protected PageRec doCreatePage(IWorkbenchPart part) {
		IFile file = getFile(part);
		if (file == null) {
			// The opened file in the given editor cannot be displayed in the
			// outline
			return null;
		}

		// Try to get the shared outline for the given project (ex : for angular
		// explorer)
		IProject project = file.getProject();
		IContentOutlinePage page = getOutlinePage(project);
		if (page == null) {
			// Create a new instance of the outline page
			page = createOutlinePage(file.getProject());
			if (page != null) {
				if (page instanceof IPageBookViewPage) {
					initPage((IPageBookViewPage) page);
				}
				page.createControl(getPageBook());
				if (page instanceof AbstractTernContentOutlinePage) {
					updateCurrentFile(page, part, file);
				}
			}
		} else {
			if (page instanceof AbstractTernContentOutlinePage) {
				updateCurrentFile(page, part, file);
			}
		}

		if (page != null) {
			return new PageRec(part, page);
		}

		// There is no content outline
		return null;
	}

	@Override
	protected void showPageRec(PageRec pageRec) {
		IPage page = pageRec.page;
		IWorkbenchPart part = pageRec.part;
		if (page instanceof AbstractTernContentOutlinePage) {
			IFile file = getFile(part);
			if (file != null) {
				updateCurrentFile(page, part, file);
			}
		}
		super.showPageRec(pageRec);
	}

	/**
	 * Returns the shared outline page for the given project or null if a page
	 * must be created for each file.
	 * 
	 * @param project
	 * @return the shared outline page for the given project or null if a page
	 *         must be created for each file.
	 */
	protected IContentOutlinePage getOutlinePage(IProject project) {
		return null;
	}

	protected IFile getFile(IWorkbenchPart part) {
		if (part != null && part instanceof IEditorPart) {
			IFile file = EditorUtils.getFile((IEditorPart) part);
			if (file != null && isAdaptFor(file)) {
				return file;
			}
		}
		return null;
	}

	@Override
	public void init(IViewSite aSite, IMemento aMemento) throws PartInitException {
		super.init(aSite, aMemento);
		memento = aMemento;
		if (memento != null) {
			Integer linkingEnabledInteger = memento.getInteger(LINKING_ENABLED);
			setLinkingEnabled(((linkingEnabledInteger != null) ? linkingEnabledInteger.intValue() == 1 : false));
		}

	}

	@Override
	public void saveState(IMemento aMemento) {
		aMemento.putInteger(LINKING_ENABLED, (linkingEnabled) ? 1 : 0);
		super.saveState(aMemento);
	}

	/**
	 * Returns true if the outline view is adapted for the given file and false
	 * otherwise.
	 * 
	 * @param file
	 * @return true if the outline view is adapted for the given file and false
	 *         otherwise.
	 */
	protected abstract boolean isAdaptFor(IFile file);

	/**
	 * Create the outline view for the given project. It can have one page per
	 * file (see tern outline) or one page per project (see angular outline).
	 * 
	 * @param project
	 * @return an instance of outline page for the given project.
	 */
	protected abstract IContentOutlinePage createOutlinePage(IProject project);

	public boolean isLinkingEnabled() {
		return linkingEnabled;
	}

	public void setLinkingEnabled(boolean linkingEnabled) {
		this.linkingEnabled = linkingEnabled;
	}

	private void updateCurrentFile(IPage page, IWorkbenchPart part, IFile file) {
		if (isEditorChanged(part)) {
			((AbstractTernContentOutlinePage) page).setCurrentFile(file);
			this.setCurrentPart(part);
		}
	}

	protected boolean isEditorChanged(IWorkbenchPart part) {
		return this.textEditor != part;
	}

	private void setCurrentPart(IWorkbenchPart part) {
		if (this.textEditor != null) {
			uninstall(this.textEditor.getSelectionProvider());
		}
		if (part instanceof ITextEditor) {
			this.textEditor = (ITextEditor) part;
			ISelectionProvider provider = this.textEditor.getSelectionProvider();
			selectInTreeview(provider.getSelection());
			install(provider);
		} else {
			this.textEditor = null;
		}
	}

	private void install(ISelectionProvider selectionProvider) {
		if (selectionProvider == null) {
			return;
		}
		if (selectionProvider instanceof IPostSelectionProvider) {
			IPostSelectionProvider provider = (IPostSelectionProvider) selectionProvider;
			provider.addPostSelectionChangedListener(this);
		} else {
			selectionProvider.addSelectionChangedListener(this);
		}
	}

	private void uninstall(ISelectionProvider selectionProvider) {
		if (selectionProvider == null) {
			return;
		}
		if (selectionProvider instanceof IPostSelectionProvider) {
			IPostSelectionProvider provider = (IPostSelectionProvider) selectionProvider;
			provider.removePostSelectionChangedListener(this);
		} else {
			selectionProvider.removeSelectionChangedListener(this);
		}
	}

	public void openInEditor(IJSNode node, boolean force) {
		AbstractTernContentOutlinePage page = getCurrentTernPage();
		if (page == null) {
			return;
		}
		if (!force && (!isLinkingEnabled() || ignoreSelectionChanged)) {
			return;
		}
		this.currentNodeToOpen = node;
		/*
		 * Create and schedule a UI Job to activate the editor in a valid
		 * Display thread
		 */
		activateEditorJob.schedule(LINK_HELPER_DELAY);
	}

	private void selectInTreeview(ISelection selection) {
		if (ignoreEditorActivation) {
			return;
		}
		this.currentEditorSelection = selection;
		updateSelectionJob.schedule(LINK_HELPER_DELAY);
	}

	@Override
	public void selectionChanged(SelectionChangedEvent event) {
		selectInTreeview(event.getSelection());
	}

	private BestNode findBestNode(ISelection selection) {
		if (!this.isLinkingEnabled() /* && !ignoreSelectionChanged */ ) {
			return null;
		}
		CommonViewer viewer = getCurrentViewer();
		if (viewer == null) {
			return null;
		}
		IStructuredContentProvider contentProvider = (IStructuredContentProvider) viewer.getContentProvider();
		if (contentProvider == null || selection == null || selection.isEmpty()
				|| !(selection instanceof ITextSelection)) {
			return null;
		}
		Object[] elements = contentProvider.getElements(viewer.getInput());
		IFile currentFile = getCurrentTernPage().getCurrentFile();
		if (elements != null) {
			Object elt = null;
			IJSNode bestNode = null;
			for (int i = 0; i < elements.length; i++) {
				elt = elements[i];
				if (elt instanceof IJSNode) {
					bestNode = findBestNode((IJSNode) elt, (ITextSelection) selection, currentFile);
					if (bestNode != null) {
						return new BestNode(bestNode, viewer);
					}
				}
			}
		}
		return null;
	}

	protected AbstractTernContentOutlinePage getCurrentTernPage() {
		IPage p = getCurrentPage();
		if (p == null || !(p instanceof AbstractTernContentOutlinePage)) {
			return null;
		}
		AbstractTernContentOutlinePage page = (AbstractTernContentOutlinePage) p;
		return page;
	}

	protected CommonViewer getCurrentViewer() {
		AbstractTernContentOutlinePage page = getCurrentTernPage();
		return page != null ? page.getViewer() : null;
	}

	private IJSNode findBestNode(IJSNode node, ITextSelection selection, IFile currentFile) {
		int start = selection.getOffset(), end = start + selection.getLength();
		if (node.getStart() != null) {
			if (node.getStart() <= start && node.getEnd() >= end) {
				if (currentFile != null && !currentFile.equals(EditorUtils.getFile(node))) {
					// doesn't match the file
					return null;
				}
				return node;
			}
		}
		if (node.hasChidren()) {
			for (IJSNode child : node.getChildren()) {
				IJSNode c = findBestNode(child, selection, currentFile);
				if (c != null) {
					return c;
				}
			}
		}
		return null;
	}

	@Override
	public void dispose() {
		super.dispose();
		if (this.textEditor != null) {
			uninstall(this.textEditor.getSelectionProvider());
		}
		activateEditorJob.cancel();
		updateSelectionJob.cancel();
		refreshJob.cancel();
	}

	private Job createRefreshJob() {
		Job refreshJob = new Job(TernUIMessages.refreshOutline) {

			@Override
			protected IStatus run(IProgressMonitor monitor) {
				parsed = false;
				final CommonViewer viewer = getCurrentViewer();
				if (viewer == null) {
					return Status.OK_STATUS;
				}
				try {
					outline = loadOutline();
					if (outline != null) {
						parsed = true;
						Display.getDefault().syncExec(new Runnable() {
							@Override
							public void run() {
								Control refreshControl = viewer.getControl();
								if ((refreshControl != null) && !refreshControl.isDisposed()) {
									TreePath[] expendedPaths = null;
									if (viewer instanceof TreeViewer) {
										expendedPaths = ((TreeViewer) viewer).getExpandedTreePaths();
									}
									viewer.refresh();
									if (viewer instanceof TreeViewer && expendedPaths != null) {
										((TreeViewer) viewer)
												.setExpandedTreePaths(toNewTreePaths(expendedPaths, outline.getRoot()));
									}
								}
							}
						});
					}
				} catch (Exception e) {
					return new Status(Status.ERROR, TernUIPlugin.PLUGIN_ID, "Error while loading tern outline...", e);
				}
				return Status.OK_STATUS;
			}
		};
		refreshJob.setSystem(true);
		refreshJob.setPriority(Job.SHORT);
		return refreshJob;
	}

	private TreePath[] toNewTreePaths(TreePath[] originExpandedPaths, IJSNode newRoot) {
		List<TreePath> res = new ArrayList<TreePath>();
		for (TreePath originExpanded : originExpandedPaths) {
			int i = 0;
			List<Object> newPathItems = new ArrayList<Object>();
			IJSNode previousJSNode = null;
			while (i < originExpanded.getSegmentCount()) {
				Object originSegment = originExpanded.getSegment(i);
				if (originSegment instanceof IJSNode) {
					IJSNode originNode = (IJSNode) originSegment;
					IJSNode matchingNode = null;
					if (previousJSNode == null) {
						if (originNode instanceof IJSNodeRoot) {
							matchingNode = newRoot;
						} else {
							matchingNode = findSimilarChild(newRoot, originNode);
						}
					} else {
						matchingNode = findSimilarChild(previousJSNode, originNode);
					}
					if (matchingNode != null) {
						newPathItems.add(matchingNode);
						previousJSNode = matchingNode;
					}
				} else {
					newPathItems.add(originSegment);
				}
				i++;
			}
			res.add(new TreePath(newPathItems.toArray()));
		}
		return res.toArray(new TreePath[res.size()]);
	}

	private IJSNode findSimilarChild(IJSNode newParentNode, IJSNode originChildNode) {
		IJSNode matchingNode = null;
		// First search node with same name
		if (originChildNode.getName() != null) {
			for (IJSNode child : newParentNode.getChildren()) {
				if (child.getName() != null && child.getName().equals(originChildNode.getName())) {
					matchingNode = child;
				}
			}
		}
		// If not found, fail back to index
		if (matchingNode == null) {
			matchingNode = newParentNode.getChildren()
					.get(originChildNode.getParent().getChildren().indexOf(originChildNode));
		}
		return matchingNode;
	}

	public boolean isParsed() {
		return parsed;
	}

	public TernOutlineCollector getOutline() {
		return outline;
	}

	/**
	 * Refresh the outline tree in a job.
	 */
	public void refreshOutline() {
		if (refreshJob.getState() != Job.NONE) {
			refreshJob.cancel();
		}
		refreshJob.schedule(UPDATE_DELAY);
	}

	protected abstract TernOutlineCollector loadOutline() throws Exception;

}

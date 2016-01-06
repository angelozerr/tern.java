/**
 *  Copyright (c) 2013-2016 Angelo ZERR, and others
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Mickael Istria (Red Hat Inc.) - reduce coupling to TernOutlineView
 */
package tern.eclipse.ide.ui.views;

import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.Viewer;

import tern.server.protocol.outline.IJSNode;
import tern.server.protocol.outline.TernOutlineCollector;

public abstract class AbstractTernOutlineContentProvider implements ITreeContentProvider {

	public static final Object COMPUTING_NODE = new Object();
	private static final Object[] EMPTY_ARRAY = new Object[0];

	private TernCommonViewer viewer;
	// protected final Job refreshJob;
	// private boolean parsed = false;
	// private TernOutlineCollector outline = null;

	public AbstractTernOutlineContentProvider() {
		// this.refreshJob = new Job(TernUIMessages.refreshOutline) {
		// @Override
		// protected IStatus run(IProgressMonitor monitor) {
		// parsed = false;
		// Display.getDefault().syncExec(new Runnable() {
		// @Override
		// public void run() {
		// viewer.refresh();
		// }
		// });
		// try {
		// outline = loadOutline();
		// if (outline != null && outline.isChanged()) {
		// outline.setChanged(false);
		// parsed = true;
		// Display.getDefault().syncExec(new Runnable() {
		// @Override
		// public void run() {
		// Control refreshControl = viewer.getControl();
		// if ((refreshControl != null) && !refreshControl.isDisposed()) {
		// TreePath[] expendedPaths = null;
		// if (viewer instanceof TreeViewer) {
		// expendedPaths = ((TreeViewer) viewer).getExpandedTreePaths();
		// }
		// viewer.refresh();
		// if (viewer instanceof TreeViewer && expendedPaths != null) {
		// ((TreeViewer) viewer)
		// .setExpandedTreePaths(toNewTreePaths(expendedPaths,
		// outline.getRoot()));
		// }
		// }
		// }
		// });
		// }
		// } catch (Exception e) {
		// return new Status(Status.ERROR, TernUIPlugin.PLUGIN_ID, "Error while
		// loading tern outline...", e);
		// }
		// return Status.OK_STATUS;
		// }
		// };
		// refreshJob.setSystem(true);
		// refreshJob.setPriority(Job.SHORT);
	}

	// protected abstract TernOutlineCollector loadOutline() throws Exception;
	//
	// private TreePath[] toNewTreePaths(TreePath[] originExpandedPaths, IJSNode
	// newRoot) {
	// List<TreePath> res = new ArrayList<TreePath>();
	// for (TreePath originExpanded : originExpandedPaths) {
	// int i = 0;
	// List<Object> newPathItems = new ArrayList<Object>();
	// IJSNode previousJSNode = null;
	// while (i < originExpanded.getSegmentCount()) {
	// Object originSegment = originExpanded.getSegment(i);
	// if (originSegment instanceof IJSNode) {
	// IJSNode originNode = (IJSNode) originSegment;
	// IJSNode matchingNode = null;
	// if (previousJSNode == null) {
	// if (originNode instanceof IJSNodeRoot) {
	// matchingNode = newRoot;
	// } else {
	// matchingNode = findSimilarChild(newRoot, originNode);
	// }
	// } else {
	// matchingNode = findSimilarChild(previousJSNode, originNode);
	// }
	// if (matchingNode != null) {
	// newPathItems.add(matchingNode);
	// previousJSNode = matchingNode;
	// }
	// } else {
	// newPathItems.add(originSegment);
	// }
	// i++;
	// }
	// res.add(new TreePath(newPathItems.toArray()));
	// }
	// return res.toArray(new TreePath[res.size()]);
	// }
	//
	// private IJSNode findSimilarChild(IJSNode newParentNode, IJSNode
	// originChildNode) {
	// IJSNode matchingNode = null;
	// // First search node with same name
	// if (originChildNode.getName() != null) {
	// for (IJSNode child : newParentNode.getChildren()) {
	// if (child.getName() != null &&
	// child.getName().equals(originChildNode.getName())) {
	// matchingNode = child;
	// }
	// }
	// }
	// // If not found, fail back to index
	// if (matchingNode == null) {
	// matchingNode = newParentNode.getChildren()
	// .get(originChildNode.getParent().getChildren().indexOf(originChildNode));
	// }
	// return matchingNode;
	// }

	@Override
	public Object[] getElements(Object element) {
		if (!viewer.isParsed()) {
			return new Object[] { COMPUTING_NODE };
		}
		return viewer.getOutline().getRoot().getChildren().toArray();
	}

	@Override
	public Object[] getChildren(Object element) {
		if (element instanceof IJSNode) {
			return ((IJSNode) element).getChildren().toArray();
		}
		return EMPTY_ARRAY;
	}

	@Override
	public Object getParent(Object element) {
		if (element instanceof IJSNode) {
			return ((IJSNode) element).getParent();
		}
		return null;
	}

	@Override
	public boolean hasChildren(Object element) {
		if (element instanceof IJSNode) {
			return ((IJSNode) element).hasChidren();
		}
		return false;
	}

	@Override
	public void dispose() {
		// this.refreshJob.cancel();
	}

	@Override
	public void inputChanged(Viewer viewer, Object oldInput, Object newInput) {
		setViewer(viewer);
		refresh();
	}

	protected void setViewer(Viewer viewer) {
		this.viewer = (TernCommonViewer) viewer;
	}

	public void refresh() {
		this.viewer.getRefreshJob().schedule();
	}
	
	public TernCommonViewer getViewer() {
		return viewer;
	}
}

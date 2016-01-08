/**
- *  Copyright (c) 2013-2016 Angelo ZERR.
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
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.viewers.TreePath;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.navigator.CommonViewer;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.server.protocol.outline.IJSNode;
import tern.server.protocol.outline.IJSNodeRoot;
import tern.server.protocol.outline.TernOutlineCollector;

/**
 * Job used to refresh tern outline.
 *
 */
class RefreshOutlineJob extends Job implements IOutlineProvider {

	private static final int UPDATE_DELAY = 500;

	private final AbstractTernOutlineView view;
	private State state;
	private TernOutlineCollector outline;

	public RefreshOutlineJob(AbstractTernOutlineView view) {
		super(TernUIMessages.refreshOutline);
		super.setSystem(true);
		super.setPriority(Job.SHORT);
		this.view = view;
	}

	@Override
	protected IStatus run(IProgressMonitor monitor) {
		final CommonViewer viewer = view.getCurrentViewer();
		if (viewer == null) {
			return Status.OK_STATUS;
		}
		AbstractTernContentOutlinePage page = view.getCurrentTernPage();
		IFile file = page.getCurrentFile();
		if (!view.isOutlineAvailable(file)) {
			state = State.Unavailable;
		} else {
			state = State.Computing;
		}
		if (viewer.getInput() == null) {
			Display.getDefault().syncExec(new Runnable() {
				@Override
				public void run() {
					Control refreshControl = viewer.getControl();
					if ((refreshControl != null) && !refreshControl.isDisposed()) {
						viewer.setInput(RefreshOutlineJob.this);
					}
				}
			});
		}
		if (state != State.Unavailable) {
			try {
				IDocument document = page.getCurrentDocument();
				outline = view.loadOutline(file, document);
				if (outline != null) {
					state = State.Done;
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
		}

		return Status.OK_STATUS;
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
			int index = originChildNode.getParent().getChildren().indexOf(originChildNode);
			if (index >= 0 && newParentNode.getChildren().size() > index) {
				matchingNode = newParentNode.getChildren().get(index);
			}
		}
		return matchingNode;
	}

	@Override
	public State getOutlineState() {
		return state;
	}

	@Override
	public IJSNode getRoot() {
		return outline != null ? outline.getRoot() : null;
	}

	public void refreshOutline() {
		if (getState() != Job.NONE) {
			cancel();
		}
		schedule(UPDATE_DELAY);
	}

}

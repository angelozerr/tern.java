/**
 *  Copyright (c) 2013-2015 Angelo ZERR, and others
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Mickael Istria (Red Hat Inc.) - reduce coupling to TernOutlineView
 */
package tern.eclipse.ide.internal.ui.views;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.runtime.IAdaptable;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.jface.text.DocumentEvent;
import org.eclipse.jface.text.IDocumentListener;
import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.TreePath;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Display;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.server.TernPlugin;
import tern.server.protocol.outline.JSNode;
import tern.server.protocol.outline.JSNodeRoot;
import tern.server.protocol.outline.TernOutlineQuery;

public class TernOutlineContentProvider implements ITreeContentProvider, IDocumentListener {

	public static final Object COMPUTING_NODE = new Object();
	private static final Object[] EMPTY_ARRAY = new Object[0];
	private static final int UPDATE_DELAY = 500;
	
	private Viewer viewer;
	private TernDocumentFile document;
	private Job refreshJob;
	private boolean parsed = false;
	private TernOutline outline = null;
	
	public TernOutlineContentProvider() {
		this.refreshJob = new Job(TernUIMessages.refreshOutline) {
			@Override
			protected IStatus run(IProgressMonitor monitor) {
				parsed = false;
				if (document == null) {
					return Status.OK_STATUS;
				}
				try {
					IIDETernProject ternProject = TernCorePlugin.getTernProject(document.getFile().getProject());
					if (ternProject != null && ternProject.hasPlugin(TernPlugin.outline)) {
						// Call tern-outline
						TernOutlineQuery query = new TernOutlineQuery(document.getFileName());
						outline = new TernOutline(document);
						ternProject.request(query, document, outline);
						parsed = true;
						Display.getDefault().syncExec(new Runnable() {
							@Override
							public void run() {
								Control refreshControl = viewer.getControl();
								if ((refreshControl != null) && !refreshControl.isDisposed()) {
									TreePath[] expendedPaths = null;
									if (viewer instanceof TreeViewer) {
										 expendedPaths = ((TreeViewer)viewer).getExpandedTreePaths();
									}
									viewer.refresh();
									if (viewer instanceof TreeViewer && expendedPaths != null) {
										((TreeViewer)viewer).setExpandedTreePaths(toNewTreePaths(expendedPaths, outline.getRoot()));
									}
								}
							}
						});
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
				return Status.OK_STATUS;
			}
		};
		refreshJob.setSystem(true);
		refreshJob.setPriority(Job.SHORT);
	}
	
	private TreePath[] toNewTreePaths(TreePath[] originExpandedPaths, JSNodeRoot newRoot) {
		List<TreePath> res = new ArrayList<TreePath>();
		for (TreePath originExpanded : originExpandedPaths) {
			int i = 0;
			List<Object> newPathItems = new ArrayList<Object>();
			JSNode previousJSNode = null;
			while (i < originExpanded.getSegmentCount()) {
				Object originSegment = originExpanded.getSegment(i);
				if (originSegment instanceof JSNode) {
					JSNode originNode = (JSNode)originSegment;
					JSNode matchingNode = null;
					if (previousJSNode == null) {
						if (originNode instanceof JSNodeRoot) {
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

	private JSNode findSimilarChild(JSNode newParentNode, JSNode originChildNode) {
		JSNode matchingNode = null;
		// First search node with same name
		if (originChildNode.getName() != null) {
			for (JSNode child : newParentNode.getChildren()) {
				if (child.getName() != null && child.getName().equals(originChildNode.getName())) {
					matchingNode = child;
				}
			}
		}
		// If not found, fail back to index
		if (matchingNode == null) {
			matchingNode = newParentNode.getChildren().get(originChildNode.getParent().getChildren().indexOf(originChildNode));
		}
		return matchingNode;
	}
	

	@Override
	public Object[] getElements(Object element) {
		if (!parsed) {
			return new Object[] { COMPUTING_NODE };
		}
		return outline.getRoot().getChildren().toArray();
	}

	@Override
	public Object[] getChildren(Object element) {
		if (element instanceof JSNode) {
			return ((JSNode) element).getChildren().toArray();
		}
		return EMPTY_ARRAY;
	}

	@Override
	public Object getParent(Object element) {
		if (element instanceof JSNode) {
			return ((JSNode) element).getParent();
		}
		return null;
	}

	@Override
	public boolean hasChildren(Object element) {
		if (element instanceof JSNode) {
			return ((JSNode) element).hasChidren();
		}
		return false;
	}

	@Override
	public void dispose() {
		this.refreshJob.cancel();
		this.document.getDocument().removeDocumentListener(this);
	}

	@Override
	public void inputChanged(Viewer viewer, Object oldInput, Object newInput) {
		this.viewer = viewer;
		if (this.document != null) {
			document.getDocument().removeDocumentListener(this);
		}
		if (newInput instanceof TernDocumentFile) {
			this.document = (TernDocumentFile) newInput;
		} else if (newInput instanceof IAdaptable) {
			this.document = (TernDocumentFile) ((IAdaptable)newInput).getAdapter(TernDocumentFile.class);
		}
		if (this.document != null) {
			document.getDocument().addDocumentListener(this);
		}
		this.refreshJob.schedule();
	}
	
	@Override
	public void documentChanged(DocumentEvent event) {
		if (this.refreshJob.getState() != Job.NONE) {
			this.refreshJob.cancel();
		}
		this.refreshJob.schedule(UPDATE_DELAY);
	}
	
	@Override
	public void documentAboutToBeChanged(DocumentEvent event) {
	}
	
}

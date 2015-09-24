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

import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;
import org.eclipse.jface.viewers.DelegatingStyledCellLabelProvider;
import org.eclipse.jface.viewers.DoubleClickEvent;
import org.eclipse.jface.viewers.IDoubleClickListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.views.contentoutline.ContentOutlinePage;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.resources.TernDocumentFile;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.utils.EditorUtils;
import tern.server.TernPlugin;
import tern.server.protocol.outline.JSNode;
import tern.server.protocol.outline.TernOutlineQuery;

public class TernContentOutlinePage extends ContentOutlinePage {

	private static final int UPDATE_DELAY = 200;

	private final TernOutline outline;
	private Boolean updating;
	private Boolean redone;

	public TernContentOutlinePage(TernDocumentFile ternFile) {
		this.outline = new TernOutline(ternFile);
		this.updating = false;
		this.redone = false;
	}

	@Override
	public void createControl(Composite parent) {
		super.createControl(parent);
		getTreeViewer().setContentProvider(new TernOutlineContentProvider(this));
		getTreeViewer().setLabelProvider(new DelegatingStyledCellLabelProvider(new TernOutlineLabelProvider()));
		getTreeViewer().addDoubleClickListener(new IDoubleClickListener() {

			@Override
			public void doubleClick(DoubleClickEvent event) {
				IStructuredSelection selection = (IStructuredSelection) event.getSelection();
				if (!selection.isEmpty()) {
					if (selection.getFirstElement() instanceof JSNode) {
						JSNode node = (JSNode) selection.getFirstElement();
						IFile file = outline.getTernFile().getFile();
						Long start = node.getStart();
						Long end = node.getEnd();
						EditorUtils.openInEditor(
								file,
								start != null ? start.intValue() : -1,
								start != null && end != null ? end.intValue()
										- start.intValue() : -1, true);

					}
				}
			}
		});
		getTreeViewer().setAutoExpandLevel(TreeViewer.ALL_LEVELS);
		refreshOutline();
	}

	void refreshOutline() {
		if (updating) {
			redone = true;
			return;
		}
		synchronized (updating) {
			updating = true;
		}
		Job refresh = new Job(TernUIMessages.refreshOutline) {

			@Override
			protected IStatus run(IProgressMonitor monitor) {
				try {
					final TreeViewer viewer = getTreeViewer();
					TernDocumentFile ternFile = outline.getTernFile();
					IIDETernProject ternProject = TernCorePlugin.getTernProject(ternFile.getFile().getProject());
					if (ternProject != null && ternProject.hasPlugin(TernPlugin.outline)) {

						if (redone) {
							return Status.CANCEL_STATUS;
						}
						// Call tern-outline
						TernOutlineQuery query = new TernOutlineQuery(ternFile.getFileName());
						ternProject.request(query, ternFile, outline);

						// Refresh UI Tree
						Display.getDefault().syncExec(new Runnable() {

							@Override
							public void run() {
								Control refreshControl = viewer.getControl();
								if ((refreshControl != null) && !refreshControl.isDisposed() && !redone) {
									if (viewer.getInput() == null) {
										viewer.setInput(outline);
									} else {
										viewer.refresh();
										viewer.expandAll();
									}
								}
							}
						});
					}
				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					synchronized (updating) {
						updating = false;
					}
					if (redone) {
						redone = false;
						refreshOutline();
					}
				}
				return Status.OK_STATUS;
			}
		};
		refresh.setSystem(true);
		refresh.setPriority(Job.SHORT);
		refresh.schedule(UPDATE_DELAY);

	}

}

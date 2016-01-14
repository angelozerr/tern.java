/**
 *  Copyright (c) 2015 Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.eclipse.ide.ui.dialogs;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.jface.layout.GridDataFactory;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.jface.viewers.ViewerFilter;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.dialogs.ElementTreeSelectionDialog;
import org.eclipse.ui.dialogs.FilteredTree;
import org.eclipse.ui.dialogs.ISelectionStatusValidator;
import org.eclipse.ui.dialogs.PatternFilter;
import org.eclipse.ui.model.WorkbenchContentProvider;
import org.eclipse.ui.model.WorkbenchLabelProvider;

import tern.eclipse.ide.ui.TernUIPlugin;

/**
 * Dialog for selecting resources from workspace - files, folders or both Can be
 * subclassed
 */
public class WorkspaceResourceSelectionDialog extends
		ElementTreeSelectionDialog {

	private static final String EMPTY_STRING = ""; //$NON-NLS-1$

	public enum Mode {
		FILE, FOLDER, FILE_FOLDER
	}

	private Mode mode = Mode.FILE_FOLDER;
	private ViewerFilter[] filters;

	public WorkspaceResourceSelectionDialog(Shell parent, Mode mode) {
		super(parent, new WorkbenchLabelProvider(),
				new WorkbenchContentProvider());
		this.mode = mode;
		setValidator(new ISelectionStatusValidator() {
			public IStatus validate(Object[] selection) {
				if (selection.length > 0 && checkMode(selection[0])) {
					return new Status(IStatus.OK, TernUIPlugin.PLUGIN_ID,
							IStatus.OK, EMPTY_STRING, null);
				}
				return new Status(IStatus.ERROR, TernUIPlugin.PLUGIN_ID,
						IStatus.ERROR, EMPTY_STRING, null);
			}
		});
		setInput(ResourcesPlugin.getWorkspace().getRoot());
	}

	public WorkspaceResourceSelectionDialog(Shell parent, Mode mode,
			String title, String message) {
		this(parent, mode);
		setTitle(title);
		setMessage(message);

	}

	protected boolean checkMode(Object selection) {
		return mode == Mode.FILE && selection instanceof IFile
				|| mode == Mode.FOLDER && selection instanceof IFolder
				|| mode == Mode.FILE_FOLDER;
	}

	protected TreeViewer doCreateTreeViewer(Composite parent, int style) {
		FilteredTree tree = new FilteredTree(parent, style,
				new PatternFilter(), true);
		tree.setLayoutData(new GridData(GridData.FILL_BOTH));

		applyDialogFont(tree);

		TreeViewer viewer = tree.getViewer();
		return viewer;
	}

	@Override
	protected Control createDialogArea(Composite parent) {
		Control dialogControl = super.createDialogArea(parent);
		ViewerFilter[] filters = getTreeViewer().getFilters();
		if (filters.length > 0
				&& !(filters.length == 1 && filters[0] instanceof PatternFilter)) {
			this.filters = filters;
			final Button showAllFilesButton = new Button(
					(Composite) dialogControl, SWT.CHECK);
			showAllFilesButton.setText("Show all files"); //$NON-NLS-1$
			GridDataFactory.fillDefaults().align(SWT.END, SWT.CENTER)
					.grab(true, false).span(2, 2).applyTo(showAllFilesButton);
			showAllFilesButton.addSelectionListener(new SelectionAdapter() {

				@Override
				public void widgetSelected(SelectionEvent event) {
					if (showAllFilesButton.getSelection()) {
						for (ViewerFilter viewerFilter : WorkspaceResourceSelectionDialog.this.filters) {
							getTreeViewer().removeFilter(viewerFilter);
						}
					} else {
						for (ViewerFilter viewerFilter : WorkspaceResourceSelectionDialog.this.filters) {
							getTreeViewer().addFilter(viewerFilter);
						}
					}
				}
			});
		}

		return dialogControl;
	}

}

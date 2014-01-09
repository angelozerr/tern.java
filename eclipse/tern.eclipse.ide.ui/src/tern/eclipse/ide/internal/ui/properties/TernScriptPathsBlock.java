/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.eclipse.ide.internal.ui.properties;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
import org.eclipse.jface.dialogs.IDialogSettings;
import org.eclipse.jface.layout.GridDataFactory;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.KeyAdapter;
import org.eclipse.swt.events.KeyEvent;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Tree;

import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.core.scriptpath.ITernScriptPath;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.TernUIPlugin;
import tern.eclipse.ide.internal.ui.dialogs.OpenResourceDialog;
import tern.eclipse.ide.ui.viewers.TernScriptPathContentProvider;
import tern.eclipse.ide.ui.viewers.TernScriptPathLabelProvider;

/**
 * Tree of Tern scripts path.
 * 
 */
public class TernScriptPathsBlock extends AbstractTreeBlock {

	private Composite fControl;
	private final List<ITernScriptPath> ternScriptPaths = new ArrayList<ITernScriptPath>();
	private TreeViewer treeViewer;
	private Button fAddPageButton;
	private Button fRemoveButton;
	private Button fEditButton;

	private final IDETernProject ternProject;

	public TernScriptPathsBlock(IDETernProject project) {
		this.ternProject = project;
	}

	public void createControl(Composite ancestor) {

		Composite parent = new Composite(ancestor, SWT.NULL);
		GridLayout layout = new GridLayout();
		layout.numColumns = 2;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		parent.setLayout(layout);
		Font font = ancestor.getFont();
		parent.setFont(font);
		fControl = parent;

		GridData data;

		Label treeLabel = new Label(parent, SWT.NONE);
		treeLabel.setText(TernUIMessages.TernScriptPathsBlock_desc);
		data = new GridData();
		data.horizontalSpan = 2;
		treeLabel.setLayoutData(data);
		treeLabel.setFont(font);

		Tree fTree = new Tree(parent, SWT.BORDER | SWT.FULL_SELECTION
				| SWT.V_SCROLL);

		data = new GridData(GridData.FILL_BOTH);
		data.widthHint = 450;
		fTree.setLayoutData(data);
		fTree.setFont(font);

		fTree.setHeaderVisible(false);
		fTree.setLinesVisible(false);

		// TreeColumn column1 = new TreeColumn(fTree, SWT.NONE);
		// column1.setWidth(180);
		// column1.setResizable(true);
		// column1.setText(TernUIMessages.TernScriptPathsBlock_scriptPathName);

		/*
		 * TreeColumn column2 = new TreeColumn(fTree, SWT.NONE);
		 * column2.setWidth(180); column2.setResizable(true);
		 * column2.setText(TernUIMessages.TernScriptPathsBlock_scriptPathPath);
		 * column2.addSelectionListener(new SelectionAdapter() {
		 * 
		 * @Override public void widgetSelected(SelectionEvent e) {
		 * sortByPath(); } });
		 */

		treeViewer = new TreeViewer(fTree);
		treeViewer.setLabelProvider(new TernScriptPathLabelProvider());
		treeViewer.setContentProvider(new TernScriptPathContentProvider());

		fTree.addKeyListener(new KeyAdapter() {
			@Override
			public void keyPressed(KeyEvent event) {
				if (event.character == SWT.DEL && event.stateMask == 0) {
					removeProcessors();
				}
			}
		});

		Composite buttons = new Composite(parent, SWT.NULL);
		buttons.setLayoutData(new GridData(GridData.VERTICAL_ALIGN_BEGINNING));
		layout = new GridLayout();
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		buttons.setLayout(layout);
		buttons.setFont(font);

		fAddPageButton = createPushButton(buttons,
				TernUIMessages.TernScriptPathsBlock_addPageButton);
		fAddPageButton.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event evt) {
				addPageScriptPath();
			}
		});
		fAddPageButton.setEnabled(true);

		fRemoveButton = createPushButton(buttons,
				TernUIMessages.TernScriptPathsBlock_removeButton);
		fRemoveButton.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event evt) {
				removeProcessors();
			}
		});
		fRemoveButton.setEnabled(false);

		// copied from ListDialogField.CreateSeparator()
		Label separator = new Label(buttons, SWT.NONE);
		separator.setVisible(false);
		GridData gd = new GridData();
		gd.horizontalAlignment = GridData.FILL;
		gd.verticalAlignment = GridData.BEGINNING;
		gd.heightHint = 4;
		separator.setLayoutData(gd);
		fillWithProjectTernScriptPaths();

		restoreColumnSettings();
	}

	protected void addPageScriptPath() {
		OpenResourceDialog dialog = new OpenResourceDialog(getShell(), true,
				ternProject.getProject(), IResource.FILE);
		if (dialog.open() != Window.OK) {
			return;
		}
		Object[] results = dialog.getResult();
		if (results != null) {
			IFile resource = null;
			for (Object result : results) {
				resource = (IFile) result;
				ternScriptPaths.add(ternProject.createPageScriptPath(resource));
			}
		}

		treeViewer.setInput(ternScriptPaths);
	}

	private Shell getShell() {
		return fControl.getShell();
	}

	protected void removeProcessors() {
		// TODO Auto-generated method stub

	}

	protected void fillWithProjectTernScriptPaths() {
		// setTernScriptPaths(TernCoreScriptPath.getTernServerTypeManager()
		// .getTernScriptPaths());
	}

	public Control getControl() {
		return fControl;
	}

	protected void setTernScriptPaths(List<ITernScriptPath> ternScriptPaths) {
		this.ternScriptPaths.clear();
		this.ternScriptPaths.addAll(ternScriptPaths);
		treeViewer.setInput(this.ternScriptPaths);
	}

	public List<ITernScriptPath> getTernScriptPaths() {
		return ternScriptPaths;
	}

	//
	// public void setCheckedScriptPaths(Object[] selectedScriptPaths) {
	// treeViewer.setCheckedElements(selectedScriptPaths);
	//
	// /*
	// * if (selectedScriptPaths == null) { setSelection(new
	// * StructuredSelection()); } else { setSelection(new
	// * StructuredSelection(selectedScriptPaths)); }
	// */
	// }

	@Override
	protected Tree getTree() {
		return treeViewer.getTree();
	}

	@Override
	protected IDialogSettings getDialogSettings() {
		return TernUIPlugin.getDefault().getDialogSettings();
	}

	@Override
	protected String getQualifier() {
		return "";
	}

	protected Button createPushButton(Composite parent, String label) {
		Button button = new Button(parent, SWT.PUSH);
		button.setText(label);
		button.setLayoutData(GridDataFactory.fillDefaults().create());
		return button;
	}

}

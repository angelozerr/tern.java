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
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.StructuredSelection;
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
 * Block which hosts the Tree of the Tern scripts path.
 * 
 */
public class TernScriptPathsBlock extends AbstractTreeBlock {

	private Composite fControl;
	private final List<ITernScriptPath> ternScriptPaths = new ArrayList<ITernScriptPath>();
	private TreeViewer treeViewer;
	private Button fAddPageButton;
	private Button fRemoveButton;

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

		// Description
		Label treeLabel = new Label(parent, SWT.NONE);
		treeLabel.setText(TernUIMessages.TernScriptPathsBlock_desc);
		GridData data = new GridData();
		data.horizontalSpan = 2;
		treeLabel.setLayoutData(data);
		treeLabel.setFont(font);

		// Tree
		Tree tree = new Tree(parent, SWT.BORDER | SWT.FULL_SELECTION
				| SWT.V_SCROLL | SWT.MULTI);

		data = new GridData(GridData.FILL_BOTH);
		data.widthHint = 450;
		tree.setLayoutData(data);
		tree.setFont(font);

		tree.setHeaderVisible(false);
		tree.setLinesVisible(false);

		treeViewer = new TreeViewer(tree);
		treeViewer.setLabelProvider(new TernScriptPathLabelProvider());
		treeViewer.setContentProvider(new TernScriptPathContentProvider());

		// Add tree selection listener to enable "Remove" button when a script
		// path is selected.
		treeViewer.addSelectionChangedListener(new ISelectionChangedListener() {

			@Override
			public void selectionChanged(SelectionChangedEvent event) {
				fRemoveButton.setEnabled(!((IStructuredSelection) event
						.getSelection()).isEmpty());
			}
		});

		// Add tree listener to remove selected script path with del key.
		tree.addKeyListener(new KeyAdapter() {
			@Override
			public void keyPressed(KeyEvent event) {
				if (event.character == SWT.DEL && event.stateMask == 0) {
					removeScriptPaths();
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
				removeScriptPaths();
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

		restoreColumnSettings();
	}

	/**
	 * Add script path page type.
	 */
	protected void addPageScriptPath() {
		// Select the resource which contains scripts to load.
		OpenResourceDialog dialog = new OpenResourceDialog(getShell(), true,
				ternProject.getProject(), IResource.FILE);
		if (dialog.open() != Window.OK) {
			return;
		}
		ITernScriptPath firstExistingScriptPath = null;
		Object[] results = dialog.getResult();
		if (results != null) {
			// Add selected file as script path page type.
			IFile resource = null;
			ITernScriptPath scriptPath = null;
			for (Object result : results) {
				resource = (IFile) result;
				scriptPath = getScriptPath(resource);
				if (scriptPath != null) {
					// The current resource to add already exists as script
					// path.
					if (firstExistingScriptPath == null)
						firstExistingScriptPath = scriptPath;
				} else {
					// Create a script path and add it.
					ternScriptPaths.add(ternProject
							.createPageScriptPath(resource));
				}
			}
		}

		treeViewer.refresh();
		if (firstExistingScriptPath != null) {
			treeViewer.setSelection(new StructuredSelection(
					firstExistingScriptPath));
		}
	}

	/**
	 * Returns the script path of the given resource and null otherwise.
	 * 
	 * @param resource
	 * @return
	 */
	private ITernScriptPath getScriptPath(IResource resource) {
		for (ITernScriptPath scriptPath : ternScriptPaths) {
			if (resource.equals(scriptPath.getResource())) {
				return scriptPath;
			}
		}
		return null;
	}

	/**
	 * Remove selected script paths.
	 */
	protected void removeScriptPaths() {
		IStructuredSelection selection = (IStructuredSelection) treeViewer
				.getSelection();
		if (!selection.isEmpty()) {
			this.ternScriptPaths.removeAll(selection.toList());
			treeViewer.refresh();
		}
	}

	private Shell getShell() {
		return fControl.getShell();
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
		return TernUIPlugin.PLUGIN_ID;
	}

	protected Button createPushButton(Composite parent, String label) {
		Button button = new Button(parent, SWT.PUSH);
		button.setText(label);
		button.setLayoutData(GridDataFactory.fillDefaults().create());
		return button;
	}

}

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
package tern.eclipse.ide.ui.controls;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.jface.dialogs.IDialogSettings;
import org.eclipse.jface.layout.GridDataFactory;
import org.eclipse.jface.viewers.ILabelProvider;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.jface.viewers.ViewerFilter;
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
import org.eclipse.ui.dialogs.SelectionDialog;
import org.eclipse.ui.model.WorkbenchContentProvider;
import org.eclipse.ui.model.WorkbenchLabelProvider;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.dialogs.MultipleFolderSelectionDialog;
import tern.eclipse.ide.ui.dialogs.OpenResourceDialog;
import tern.eclipse.ide.ui.viewers.TernScriptPathContentProvider;
import tern.eclipse.ide.ui.viewers.TernScriptPathLabelProvider;
import tern.scriptpath.ITernScriptPath;
import tern.scriptpath.ITernScriptPath.ScriptPathsType;

/**
 * Block which hosts the Tree of the Tern scripts path.
 * 
 */
public class TernScriptPathsBlock extends AbstractTreeBlock {

	private Composite fControl;
	private final List<ITernScriptPath> ternScriptPaths = new ArrayList<ITernScriptPath>();
	private TreeViewer treeViewer;
	private Button addFileButton;
	private Button addFolderButton;
	private Button addProjectButton;
	private Button removeButton;

	private final IIDETernProject ternProject;

	public TernScriptPathsBlock(IIDETernProject project) {
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
		treeViewer.setLabelProvider(TernScriptPathLabelProvider.getInstance());
		treeViewer.setContentProvider(TernScriptPathContentProvider
				.getInstance());

		// Add tree selection listener to enable "Remove" button when a script
		// path is selected.
		treeViewer.addSelectionChangedListener(new ISelectionChangedListener() {

			@Override
			public void selectionChanged(SelectionChangedEvent event) {
				IStructuredSelection selection = (IStructuredSelection) event
						.getSelection();
				boolean enabled = false;
				if (!selection.isEmpty()) {
					for (Iterator iterator = selection.iterator(); iterator
							.hasNext();) {
						Object element = iterator.next();
						if (element instanceof ITernScriptPath
								&& !((ITernScriptPath) element).isExternal()) {
							enabled = true;
							break;
						}
					}
				}
				removeButton.setEnabled(enabled);
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

		// Add "File" button
		addFileButton = createPushButton(buttons, TernUIMessages.Button_addFile);
		addFileButton.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event evt) {
				addScriptPath(ScriptPathsType.FILE);
			}
		});
		addFileButton.setEnabled(true);

		// "Add Folder" button
		addFolderButton = createPushButton(buttons,
				TernUIMessages.Button_addFolder);
		addFolderButton.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event evt) {
				addScriptPath(ScriptPathsType.FOLDER);
			}
		});
		addFolderButton.setEnabled(true);

		// "Add Project" button
		addProjectButton = createPushButton(buttons,
				TernUIMessages.Button_addProject);
		addProjectButton.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event evt) {
				addScriptPath(ScriptPathsType.PROJECT);
			}
		});
		addProjectButton.setEnabled(true);

		// Remove button
		removeButton = createPushButton(buttons, TernUIMessages.Button_remove);
		removeButton.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event evt) {
				removeScriptPaths();
			}
		});
		removeButton.setEnabled(false);

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
	protected void addScriptPath(ScriptPathsType type) {
		// Select the resource which contains scripts to load.
		SelectionDialog dialog = createDialog(type);
		if (dialog.open() != Window.OK) {
			return;
		}

		ITernScriptPath firstExistingScriptPath = null;
		Object[] results = dialog.getResult();
		if (results != null && results.length > 0) {
			// Add selected file as script path page type.
			IResource resource = null;
			ITernScriptPath scriptPath = null;
			for (Object result : results) {
				resource = (IResource) result;
				scriptPath = getScriptPath(resource);
				if (scriptPath != null) {
					// The current resource to add already exists as script
					// path.
					if (firstExistingScriptPath == null)
						firstExistingScriptPath = scriptPath;
				} else {
					// Create a script path and add it.
					String[] includesPattern = null;
					String[] excludesPattern = null;
					ternScriptPaths.add(ternProject.createScriptPath(resource,
							type, includesPattern, excludesPattern));
				}
			}

			treeViewer.refresh();
			if (firstExistingScriptPath != null) {
				treeViewer.setSelection(new StructuredSelection(
						firstExistingScriptPath));
			}
		}

	}

	public SelectionDialog createDialog(ScriptPathsType type) {
		final IProject project = ternProject.getProject();
		switch (type) {
		case FOLDER:
			return createFolderDialog(project, false);
		case FILE:
			return new OpenResourceDialog(getShell(), true, project,
					IResource.FILE);
		case PROJECT:
			return createFolderDialog(project, true);
		default:
			return null;
		}
	}

	public SelectionDialog createFolderDialog(final IProject project,
			final boolean showAllProjects) {
		ILabelProvider lp = new WorkbenchLabelProvider();
		ITreeContentProvider cp = new WorkbenchContentProvider();
		MultipleFolderSelectionDialog dialog = new MultipleFolderSelectionDialog(
				getShell(), lp, cp, !showAllProjects);
		if (showAllProjects) {
			dialog.setInput(ResourcesPlugin.getWorkspace().getRoot());
		} else {
			dialog.setInput(project.getParent());
		}
		dialog.setInitialFocus(project);
		ViewerFilter filter = new ViewerFilter() {

			@Override
			public boolean select(Viewer viewer, Object parentElement,
					Object element) {
				if (showAllProjects) {
					if (element instanceof IProject) {
						IProject p = (IProject) element;
						return (!p.equals(project) && TernCorePlugin
								.hasTernNature(p));
					}
				} else {
					if (element instanceof IContainer) {
						IContainer container = (IContainer) element;
						if (container.getType() == IResource.FOLDER) {
							return true;
						}
						if (container.getType() == IResource.PROJECT) {
							return project.equals(container);
						}
						return false;
					}
				}
				return false;
			}
		};
		dialog.addFilter(filter);
		return dialog;
	}

	/**
	 * Returns the script path of the given resource and null otherwise.
	 * 
	 * @param resource
	 * @return
	 */
	private ITernScriptPath getScriptPath(IResource resource) {
		for (ITernScriptPath scriptPath : ternScriptPaths) {
			if (resource.equals(scriptPath.getAdapter(IResource.class))) {
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

	public void setTernScriptPaths(Collection<ITernScriptPath> ternScriptPaths) {
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

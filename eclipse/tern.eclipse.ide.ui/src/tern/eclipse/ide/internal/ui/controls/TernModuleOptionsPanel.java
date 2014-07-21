/**
 *  Copyright (c) 2013-2014 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.internal.ui.controls;

import java.util.Collection;
import java.util.Iterator;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.Path;
import org.eclipse.jface.fieldassist.ControlDecoration;
import org.eclipse.jface.fieldassist.FieldDecorationRegistry;
import org.eclipse.jface.viewers.ILabelProvider;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.jface.viewers.TableViewerColumn;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.jface.viewers.ViewerFilter;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Table;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.dialogs.SelectionDialog;
import org.eclipse.ui.model.WorkbenchContentProvider;
import org.eclipse.ui.model.WorkbenchLabelProvider;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.dialogs.FolderSelectionDialog;
import tern.eclipse.ide.internal.ui.dialogs.OpenResourceDialog;
import tern.eclipse.ide.ui.viewers.JsonContentProvider;
import tern.eclipse.ide.ui.viewers.JsonLabelProvider;
import tern.eclipse.ide.ui.viewers.MemberWrapper;
import tern.metadata.TernModuleMetadata;
import tern.metadata.TernModuleMetadataOption;
import tern.server.ModuleType;
import tern.server.ITernModule;
import tern.server.ITernModuleConfigurable;
import tern.server.protocol.JsonHelper;
import tern.utils.StringUtils;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

/**
 * Display options of the given tern plugin.
 *
 */
public class TernModuleOptionsPanel extends AbstractTernModulePanel {

	public TernModuleOptionsPanel(Composite parent, ITernModule module,
			IProject project) {
		super(parent, module, project);
	}

	@Override
	protected void createUI(Composite parent, ITernModule module,
			IProject project) {

		GridLayout layout = new GridLayout(2, false);
		super.setLayout(layout);

		TernModuleMetadata metadata = module.getMetadata();
		if (metadata != null
				&& module.getModuleType() == ModuleType.Configurable) {
			// get the options of the given module and display UI field for
			// each option.

			JsonObject jsonOptions = getOptions((ITernModuleConfigurable) module);

			Collection<TernModuleMetadataOption> options = metadata
					.getOptions();
			for (TernModuleMetadataOption option : options) {
				createUI(parent, jsonOptions, project, option);
			}
		}

	}

	protected void createUI(Composite parent, final JsonObject options,
			IProject project, TernModuleMetadataOption option) {

		final String name = option.getName();
		String description = option.getDescription();
		String type = option.getType();

		Label label = new Label(parent, SWT.NONE);
		label.setLayoutData(new GridData(GridData.VERTICAL_ALIGN_BEGINNING));
		label.setText(new StringBuilder(name).append(":").toString());
		label.setToolTipText(description);

		if ("boolean".equals(type)) {
			createBooleanOption(parent, name, options);
		} else if ("string".equals(type)) {
			createStringOption(parent, name, options);
		} else if ("path".equals(type)) {
			if (project != null) {
				createPathOption(parent, project, name, options);
			} else {
				createStringOption(parent, name, options);
			}
		} else if ("path[]".equals(type)) {
			createPathArrayOption(parent, project, name, options);
		} else if ("finder".equals(type)) {
			if (project != null) {
				createFinderOption(parent, project, name, options);
			} else {
				createStringOption(parent, name, options);
			}
		} else {
			createJsonOption(parent, name, options);
		}
	}

	protected void createBooleanOption(Composite parent, final String name,
			final JsonObject options) {
		// create UI
		final Button checkbox = new Button(parent, SWT.CHECK);
		checkbox.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		// init UI value
		boolean value = JsonHelper.getBoolean(options, name, false);
		checkbox.setSelection(value);
		// Synchronize UI & JSON
		checkbox.addSelectionListener(new SelectionAdapter() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				options.set(name, checkbox.getSelection());
			}
		});
	}

	protected void createStringOption(Composite parent, final String name,
			final JsonObject options) {
		// create UI
		final Text textField = new Text(parent, SWT.BORDER);
		textField.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		// init UI value
		String initialValue = JsonHelper.getString(options.get(name));
		textField.setText(initialValue != null ? initialValue : "");
		// Synchronize UI & JSON
		textField.addModifyListener(new ModifyListener() {

			@Override
			public void modifyText(ModifyEvent e) {
				String value = textField.getText();
				if (StringUtils.isEmpty(value)) {
					options.remove(name);
				} else {
					options.set(name, value);
				}
			}
		});
	}

	protected void createPathOption(Composite ancestor, final IProject project,
			final String name, final JsonObject options) {

		Composite parent = new Composite(ancestor, SWT.NONE);
		parent.setLayout(new GridLayout(2, false));
		parent.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		// create UI
		final Text textField = new Text(parent, SWT.BORDER);
		textField.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		// create the decoration for the text component
		final ControlDecoration deco = new ControlDecoration(textField, SWT.TOP
				| SWT.LEFT);
		Image image = FieldDecorationRegistry.getDefault()
				.getFieldDecoration(FieldDecorationRegistry.DEC_WARNING)
				.getImage();

		// set description and image
		deco.setDescriptionText(TernUIMessages.TernModuleOptionsPanel_validatePath);
		deco.setImage(image);
		deco.hide();

		// Synchronize UI & JSON
		textField.addModifyListener(new ModifyListener() {

			@Override
			public void modifyText(ModifyEvent e) {
				String value = textField.getText();
				if (StringUtils.isEmpty(value)) {
					options.remove(name);
				} else {
					IFolder folder = project.getFolder(value);
					if ((folder != null && folder.exists())) {
						deco.hide();
					} else {
						deco.show();
					}
					options.set(name, value);
				}

			}
		});

		// init UI value
		String initialValue = JsonHelper.getString(options.get(name));
		textField.setText(initialValue != null ? initialValue : "");

		Button pathButton = new Button(parent, SWT.PUSH);
		pathButton.setText(TernUIMessages.Button_selectPath);
		pathButton.addSelectionListener(new SelectionAdapter() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				IResource resource = openFolderDialog(textField.getText(),
						project, false);
				if (resource != null) {
					String path = resource.getProjectRelativePath().toString();
					textField.setText(path);
				}
			}

		});
	}

	private IResource openFolderDialog(String initialFolder, IProject project,
			boolean showAllProjects) {
		SelectionDialog dialog = createFolderDialog(initialFolder, project,
				showAllProjects);
		if (dialog.open() != Window.OK) {
			return null;
		}
		Object[] results = dialog.getResult();
		if (results != null && results.length > 0) {
			return (IResource) results[0];
		}
		return null;
	}

	private SelectionDialog createFolderDialog(String initialFolder,
			final IProject project, final boolean showAllProjects) {

		ILabelProvider lp = new WorkbenchLabelProvider();
		ITreeContentProvider cp = new WorkbenchContentProvider();
		FolderSelectionDialog dialog = new FolderSelectionDialog(getShell(),
				lp, cp);
		dialog.setTitle(TernUIMessages.TernModuleOptionsPanel_selectPathDialogTitle);
		IFolder folder = StringUtils.isEmpty(initialFolder) ? null : project
				.getFolder(initialFolder);
		if (folder != null && folder.exists()) {
			dialog.setInitialSelection(folder);
		}
		dialog.setInput(ResourcesPlugin.getWorkspace().getRoot());
		ViewerFilter filter = new ViewerFilter() {

			@Override
			public boolean select(Viewer viewer, Object parentElement,
					Object element) {
				if (element instanceof IProject) {
					if (showAllProjects)
						return true;
					IProject p = (IProject) element;
					return (p.equals(project));
				} else if (element instanceof IContainer) {
					IContainer container = (IContainer) element;
					if (container.getType() == IResource.FOLDER) {
						return true;
					}
					return false;
				}
				return false;
			}
		};
		dialog.addFilter(filter);
		return dialog;
	}

	protected void createPathArrayOption(Composite ancestor,
			final IProject project, final String name, final JsonObject options) {

		Label title = new Label(ancestor, SWT.NONE);
		title.setText("fill mappings of filename/path.");
		title.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		final JsonObject pathsOption = getPathsOption(name, options);

		final Composite parent = new Composite(ancestor, SWT.NONE);
		parent.setLayout(new GridLayout(2, false));
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 2;
		parent.setLayoutData(data);

		// create UI
		final TableViewer viewer = new TableViewer(parent, SWT.BORDER
				| SWT.H_SCROLL | SWT.V_SCROLL | SWT.FULL_SELECTION | SWT.MULTI);

		// create filename column
		TableViewerColumn filenameColumn = new TableViewerColumn(viewer,
				SWT.NONE);
		filenameColumn.getColumn().setWidth(100);
		filenameColumn.getColumn().setResizable(true);
		filenameColumn.getColumn().setText(
				TernUIMessages.TernModuleOptionsPanel_paths_filenameColumn);
		filenameColumn.setEditingSupport(new FilenameEditingSupport(viewer));

		// create path column
		TableViewerColumn pathColumn = new TableViewerColumn(viewer, SWT.NONE);
		pathColumn.getColumn().setWidth(180);
		pathColumn.getColumn().setResizable(true);
		pathColumn.getColumn().setText(
				TernUIMessages.TernModuleOptionsPanel_paths_pathColumn);
		pathColumn.setEditingSupport(new PathEditingSupport(viewer));

		viewer.setLabelProvider(JsonLabelProvider.getInstance());
		viewer.setContentProvider(JsonContentProvider.getInstance());

		Table table = viewer.getTable();
		table.setHeaderVisible(true);
		table.setLinesVisible(true);

		data = new GridData(GridData.FILL_BOTH);
		data.heightHint = 100;
		table.setLayoutData(data);

		viewer.setInput(pathsOption);

		Composite toolbarComposite = new Composite(parent, SWT.NONE);
		toolbarComposite.setLayout(new GridLayout());
		toolbarComposite.setLayoutData(new GridData(GridData.FILL_BOTH));

		Button addButton = new Button(toolbarComposite, SWT.PUSH);
		addButton.setText("Add..");
		addButton.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		addButton.addSelectionListener(new SelectionAdapter() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				OpenResourceDialog dialog = new OpenResourceDialog(getShell(),
						true, project, IResource.FILE);
				if (dialog.open() != Window.OK) {
					return;
				}
				Object[] results = dialog.getResult();
				if (results != null && results.length > 0) {
					IFile file = (IFile) results[0];
					String fileName = getPath(file.getName());
					String path = file.getProjectRelativePath().toString();

					String base = null;
					JsonValue baseURL = options.get("baseURL");
					if (baseURL != null && baseURL.isString()) {
						base = JsonHelper.getString(baseURL);
					}

					if (base != null) {
						path = file.getProjectRelativePath()
								.makeRelativeTo(new Path(base)).toString();
					}
					path = getPath(path);
					pathsOption.set(fileName, path);
					viewer.refresh();
				}
			}

			private String getPath(String name) {
				int index = name.lastIndexOf(".");
				if (index != -1) {
					return name.substring(0, index);
				}
				return name;
			}
		});

		final Button removeButton = new Button(toolbarComposite, SWT.PUSH);
		removeButton.setText("Remove..");
		removeButton.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		removeButton.setEnabled(false);
		removeButton.addSelectionListener(new SelectionAdapter() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				IStructuredSelection selection = (IStructuredSelection) viewer
						.getSelection();
				if (!selection.isEmpty()) {
					Iterator it = selection.iterator();
					while (it.hasNext()) {
						Object element = it.next();
						pathsOption.remove(((MemberWrapper) element).getName());
					}
					viewer.refresh();
					removeButton.setEnabled(false);
				}
			}
		});
		viewer.addSelectionChangedListener(new ISelectionChangedListener() {

			@Override
			public void selectionChanged(SelectionChangedEvent e) {
				removeButton.setEnabled(true);
			}
		});
	}

	public JsonObject getPathsOption(final String name, final JsonObject options) {
		JsonValue pathsOption = options.get(name);
		if (pathsOption == null || !(pathsOption instanceof JsonObject)) {
			pathsOption = new JsonObject();
			options.set(name, pathsOption);
		}
		return (JsonObject) pathsOption;
	}

	protected void createFinderOption(Composite ancestor,
			final IProject project, final String name, final JsonObject options) {

		Label title = new Label(ancestor, SWT.NONE);
		title.setText("fill mappings of filename/path.");
		title.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		final JsonArray finderDirs = getFinderDirsOption(options);

		final Composite parent = new Composite(ancestor, SWT.NONE);
		parent.setLayout(new GridLayout(2, false));
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 2;
		parent.setLayoutData(data);

		// create UI
		final TableViewer viewer = new TableViewer(parent, SWT.BORDER
				| SWT.H_SCROLL | SWT.V_SCROLL | SWT.FULL_SELECTION | SWT.MULTI);

		// create filename column
		TableViewerColumn filenameColumn = new TableViewerColumn(viewer,
				SWT.NONE);
		filenameColumn.getColumn().setWidth(100);
		filenameColumn.getColumn().setResizable(true);
		filenameColumn.getColumn().setText(
				TernUIMessages.TernModuleOptionsPanel_paths_filenameColumn);

		viewer.setLabelProvider(JsonLabelProvider.getInstance());
		viewer.setContentProvider(JsonContentProvider.getInstance());

		Table table = viewer.getTable();
		table.setHeaderVisible(true);
		table.setLinesVisible(true);

		data = new GridData(GridData.FILL_BOTH);
		data.heightHint = 100;
		table.setLayoutData(data);

		viewer.setInput(finderDirs);

		Composite toolbarComposite = new Composite(parent, SWT.NONE);
		toolbarComposite.setLayout(new GridLayout());
		toolbarComposite.setLayoutData(new GridData(GridData.FILL_BOTH));

		Button addButton = new Button(toolbarComposite, SWT.PUSH);
		addButton.setText("Add..");
		addButton.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		addButton.addSelectionListener(new SelectionAdapter() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				String initialFolder = "";
				IResource folder = openFolderDialog(initialFolder, project,
						true);
				if (folder != null) {
					String path = null;
					if (project.equals(folder.getProject())) {
						// same project
						path = folder.getProjectRelativePath().toString();
					} else if (project
							.getLocation()
							.removeLastSegments(1)
							.equals(folder.getProject().getLocation()
									.removeLastSegments(1))) {
						// same base folder
						path = "../" + folder.getFullPath().toString();
					} else {
						path = folder.getProject().getLocation().toString();

					}					
					finderDirs.add(path);
					viewer.refresh();
				}
			}

			private String getPath(String name) {
				int index = name.lastIndexOf(".");
				if (index != -1) {
					return name.substring(0, index);
				}
				return name;
			}
		});

		final Button removeButton = new Button(toolbarComposite, SWT.PUSH);
		removeButton.setText("Remove..");
		removeButton.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		removeButton.setEnabled(false);
		removeButton.addSelectionListener(new SelectionAdapter() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				IStructuredSelection selection = (IStructuredSelection) viewer
						.getSelection();
				if (!selection.isEmpty()) {
					Iterator it = selection.iterator();
					while (it.hasNext()) {
						Object element = it.next();
						for (int i = 0; i < finderDirs.size(); i++) {
							if (finderDirs.get(i).equals(element)) {
								finderDirs.remove(i);
								break;
							}
						}
					}
					viewer.refresh();
					removeButton.setEnabled(false);
				}
			}
		});
		viewer.addSelectionChangedListener(new ISelectionChangedListener() {

			@Override
			public void selectionChanged(SelectionChangedEvent e) {
				removeButton.setEnabled(true);
			}
		});
	}

	public JsonArray getFinderDirsOption(final JsonObject options) {
		JsonValue finderOption = options.get("finder");
		if (finderOption == null || !(finderOption instanceof JsonObject)) {
			finderOption = new JsonObject();
			options.set("finder", finderOption);
		}
		((JsonObject) finderOption).set("name", "grep");
		JsonObject grepFinderOptions = (JsonObject) ((JsonObject) finderOption)
				.get("options");
		if (grepFinderOptions == null) {
			grepFinderOptions = new JsonObject();
			((JsonObject) finderOption).set("options", grepFinderOptions);
		}
		JsonArray dirs = (JsonArray) grepFinderOptions.get("dirs");
		if (dirs == null) {
			dirs = new JsonArray();
			grepFinderOptions.set("dirs", dirs);
		}
		return dirs;
	}

	protected void createJsonOption(Composite parent, final String name,
			final JsonObject options) {
		// create UI
		final Text textField = new Text(parent, SWT.MULTI | SWT.BORDER
				| SWT.WRAP | SWT.V_SCROLL);
		GridData data = new GridData(GridData.FILL_HORIZONTAL);
		data.heightHint = 100;
		textField.setLayoutData(data);
		// init UI value
		String initialValue = JsonHelper.getString(options.get(name));
		textField.setText(initialValue != null ? initialValue : "");
		// Synchronize UI & JSON
		textField.addModifyListener(new ModifyListener() {

			@Override
			public void modifyText(ModifyEvent e) {
				String value = textField.getText();
				if (StringUtils.isEmpty(value)) {
					options.remove(name);
				} else {
					try {
						options.set(name, JsonObject.readFrom(value));
					} catch (Throwable t) {
						t.printStackTrace();
					}
				}
			}
		});
	}

	public JsonObject getOptions(ITernModuleConfigurable module) {
		JsonObject options = module.getOptions();
		if (options == null) {
			options = new JsonObject();
			module.setOptions(options);
		}
		return options;
	}

}

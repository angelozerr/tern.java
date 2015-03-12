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
package tern.eclipse.ide.internal.ui.descriptors.options;

import java.util.Iterator;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.Path;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.jface.viewers.TableViewerColumn;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Table;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.viewers.FilenameEditingSupport;
import tern.eclipse.ide.internal.ui.viewers.PathEditingSupport;
import tern.eclipse.ide.ui.descriptors.options.ITernModuleOptionFactory;
import tern.eclipse.ide.ui.dialogs.OpenResourceDialog;
import tern.eclipse.ide.ui.viewers.JsonContentProvider;
import tern.eclipse.ide.ui.viewers.JsonLabelProvider;
import tern.eclipse.ide.ui.viewers.MemberWrapper;
import tern.metadata.TernModuleMetadataOption;
import tern.server.protocol.JsonHelper;

import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

/**
 * Path tern module option.
 *
 */
public class PathArrayTernModuleOptionFactory implements
		ITernModuleOptionFactory {

	@Override
	public void createOption(final Composite ancestor, final IProject project,
			TernModuleMetadataOption metadata, final JsonObject options) {
		final String name = metadata.getName();
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
		filenameColumn
				.getColumn()
				.setText(
						TernUIMessages.FinderTernModuleOptionFactory_paths_filenameColumn);
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

		// Add button
		Button addButton = new Button(toolbarComposite, SWT.PUSH);
		addButton.setText(TernUIMessages.Button_add);
		addButton.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		addButton.addSelectionListener(new SelectionAdapter() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				OpenResourceDialog dialog = new OpenResourceDialog(ancestor
						.getShell(), true, project, IResource.FILE);
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

		// Remove button
		final Button removeButton = new Button(toolbarComposite, SWT.PUSH);
		removeButton.setText(TernUIMessages.Button_remove);
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

	private JsonObject getPathsOption(final String name,
			final JsonObject options) {
		JsonValue pathsOption = options.get(name);
		if (pathsOption == null || !(pathsOption instanceof JsonObject)) {
			pathsOption = new JsonObject();
			options.set(name, pathsOption);
		}
		return (JsonObject) pathsOption;
	}
}

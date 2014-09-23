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

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.jface.viewers.TableViewerColumn;
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
import tern.eclipse.ide.internal.ui.descriptors.TernModuleDescriptorManager;
import tern.eclipse.ide.ui.descriptors.options.ITernModuleOptionFactory;
import tern.eclipse.ide.ui.utils.DialogUtils;
import tern.eclipse.ide.ui.viewers.JsonContentProvider;
import tern.eclipse.ide.ui.viewers.JsonLabelProvider;
import tern.metadata.TernModuleMetadataOption;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

/**
 * Finder tern module option.
 *
 */
public class FinderTernModuleOptionFactory implements ITernModuleOptionFactory {

	private static final String FINDER_FIELD = "finder";
	private static final String NAME_FIELD = "name";
	private static final String GREP = "grep";
	private static final String DIRS_FIELD = "dirs";

	@Override
	public void createOption(final Composite ancestor, final IProject project,
			TernModuleMetadataOption metadata, final JsonObject options) {
		if (project == null) {
			TernModuleDescriptorManager
					.getManager()
					.getTernModuleOptionFactory(
							StringTernModuleOptionFactory.ID)
					.createOption(ancestor, project, metadata, options);
			return;
		}

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
		filenameColumn
				.getColumn()
				.setText(
						TernUIMessages.FinderTernModuleOptionFactory_paths_filenameColumn);

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

		// Add button
		Button addButton = new Button(toolbarComposite, SWT.PUSH);
		addButton.setText(TernUIMessages.Button_add);
		addButton.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		addButton.addSelectionListener(new SelectionAdapter() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				String initialFolder = "";
				IResource folder = DialogUtils.openFolderDialog(initialFolder,
						project, true, ancestor.getShell());
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
		JsonValue finderOption = options.get(FINDER_FIELD);
		if (finderOption == null || !(finderOption instanceof JsonObject)) {
			finderOption = new JsonObject();
			options.set(FINDER_FIELD, finderOption);
		}
		((JsonObject) finderOption).set(NAME_FIELD, GREP);
		JsonObject grepFinderOptions = ((JsonObject) finderOption);
		JsonArray dirs = (JsonArray) grepFinderOptions.get(DIRS_FIELD);
		if (dirs == null) {
			dirs = new JsonArray();
			grepFinderOptions.set(DIRS_FIELD, dirs);
		}
		return dirs;
	}

}

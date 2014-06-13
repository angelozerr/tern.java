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

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.jface.viewers.ILabelProvider;
import org.eclipse.jface.viewers.ITreeContentProvider;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.jface.viewers.ViewerFilter;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.dialogs.SelectionDialog;
import org.eclipse.ui.model.WorkbenchContentProvider;
import org.eclipse.ui.model.WorkbenchLabelProvider;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.dialogs.FolderSelectionDialog;
import tern.metadata.TernFacetMetadata;
import tern.metadata.TernFacetMetadataOption;
import tern.server.FacetType;
import tern.server.ITernFacet;
import tern.server.ITernFacetConfigurable;
import tern.server.protocol.JsonHelper;
import tern.utils.StringUtils;

import com.eclipsesource.json.JsonObject;

/**
 * Display options of the given tern plugin.
 *
 */
public class TernFacetOptionsPanel extends AbstractTernFacetPanel {

	public TernFacetOptionsPanel(Composite parent, ITernFacet facet,
			IProject project) {
		super(parent, facet, project);
	}

	@Override
	protected void createUI(Composite parent, ITernFacet facet, IProject project) {

		GridLayout layout = new GridLayout(2, false);
		super.setLayout(layout);

		TernFacetMetadata metadata = facet.getMetadata();
		if (metadata != null && facet.getFacetType() == FacetType.Configurable) {
			// get the options of the given facet and display UI field for
			// each option.
			Collection<TernFacetMetadataOption> options = metadata.getOptions();
			for (TernFacetMetadataOption option : options) {
				createUI(parent, (ITernFacetConfigurable) facet, project,
						option);
			}
		}

	}

	protected void createUI(Composite parent,
			final ITernFacetConfigurable facet, IProject project,
			TernFacetMetadataOption option) {

		final String name = option.getName();
		String description = option.getDescription();
		String type = option.getType();

		final JsonObject options = getOptions(facet);

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

		Button pathButton = new Button(parent, SWT.PUSH);
		pathButton.setText(TernUIMessages.Button_selectPath);
		pathButton.addSelectionListener(new SelectionAdapter() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				openFolderDialog(textField, project);
			}

		});
	}

	private void openFolderDialog(Text textField, IProject project) {
		SelectionDialog dialog = createFolderDialog(textField, project);
		if (dialog.open() != Window.OK) {
			return;
		}
		Object[] results = dialog.getResult();
		if (results != null && results.length > 0) {
			IResource resource = (IResource) results[0];
			String path = resource.getProjectRelativePath().toString();
			textField.setText(path);
		}
	}

	private SelectionDialog createFolderDialog(Text textField,
			final IProject project) {

		ILabelProvider lp = new WorkbenchLabelProvider();
		ITreeContentProvider cp = new WorkbenchContentProvider();
		FolderSelectionDialog dialog = new FolderSelectionDialog(getShell(),
				lp, cp);
		dialog.setTitle(TernUIMessages.TernFacetOptionsPanel_selectPathDialogTitle);
		IFolder folder = project.getFolder(textField.getText());
		if (folder != null && folder.exists()) {
			dialog.setInitialSelection(folder);
		}
		dialog.setInput(project);
		ViewerFilter filter = new ViewerFilter() {

			@Override
			public boolean select(Viewer viewer, Object parentElement,
					Object element) {
				if (element instanceof IProject) {
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

	public JsonObject getOptions(ITernFacetConfigurable facet) {
		JsonObject options = facet.getOptions();
		if (options == null) {
			options = new JsonObject();
			facet.setOptions(options);
		}
		return options;
	}

}

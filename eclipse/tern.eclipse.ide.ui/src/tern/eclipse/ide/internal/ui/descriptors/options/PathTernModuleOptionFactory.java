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
package tern.eclipse.ide.internal.ui.descriptors.options;

import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.jface.fieldassist.ControlDecoration;
import org.eclipse.jface.fieldassist.FieldDecorationRegistry;
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
import org.eclipse.swt.widgets.Text;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.descriptors.TernModuleDescriptorManager;
import tern.eclipse.ide.ui.descriptors.options.ITernModuleOptionFactory;
import tern.eclipse.ide.ui.utils.DialogUtils;
import tern.metadata.TernModuleMetadataOption;
import tern.server.protocol.JsonHelper;
import tern.utils.StringUtils;

import com.eclipsesource.json.JsonObject;

/**
 * Path tern module option.
 *
 */
public class PathTernModuleOptionFactory implements ITernModuleOptionFactory {

	@Override
	public void createOption(Composite ancestor, final IProject project,
			TernModuleMetadataOption metadata, final JsonObject options) {
		final String name = metadata.getName();
		if (project == null) {
			TernModuleDescriptorManager
					.getManager()
					.getTernModuleOptionFactory(
							StringTernModuleOptionFactory.ID)
					.createOption(ancestor, project, metadata, options);
			return;
		}

		final Composite parent = new Composite(ancestor, SWT.NONE);
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
		deco.setDescriptionText(TernUIMessages.PathTernModuleOptionFactory_validatePath);
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
				IResource resource = DialogUtils.openFolderDialog(
						textField.getText(), project, false, parent.getShell());
				if (resource != null) {
					String path = resource.getProjectRelativePath().toString();
					textField.setText(path);
				}
			}

		});
	}

}

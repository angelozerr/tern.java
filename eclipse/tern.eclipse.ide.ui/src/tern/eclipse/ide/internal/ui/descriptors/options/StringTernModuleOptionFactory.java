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

import org.eclipse.core.resources.IProject;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Text;

import tern.eclipse.ide.ui.descriptors.options.ITernModuleOptionFactory;
import tern.metadata.TernModuleMetadataOption;
import tern.server.protocol.JsonHelper;
import tern.utils.StringUtils;

import com.eclipsesource.json.JsonObject;

/**
 * String tern module option.
 *
 */
public class StringTernModuleOptionFactory implements ITernModuleOptionFactory {

	public static final String ID = "string";
	
	@Override
	public void createOption(Composite parent, IProject project,
			TernModuleMetadataOption metadata, final JsonObject options) {
		final String name = metadata.getName();
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

}

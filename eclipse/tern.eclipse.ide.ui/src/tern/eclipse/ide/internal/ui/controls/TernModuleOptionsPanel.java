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

import org.eclipse.core.resources.IProject;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;

import tern.eclipse.ide.internal.ui.descriptors.TernModuleDescriptorManager;
import tern.eclipse.ide.ui.descriptors.options.ITernModuleOptionFactory;
import tern.metadata.TernModuleMetadata;
import tern.metadata.TernModuleMetadataOption;
import tern.server.ITernModule;
import tern.server.ITernModuleConfigurable;
import tern.server.ModuleType;
import tern.server.protocol.JsonHelper;
import tern.utils.StringUtils;

import com.eclipsesource.json.JsonObject;

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

			if (metadata.hasOptions()) {
				JsonObject jsonOptions = getOptions((ITernModuleConfigurable) module);
				Collection<TernModuleMetadataOption> options = metadata
						.getOptions();
				for (TernModuleMetadataOption option : options) {
					createUI(parent, jsonOptions, project, option);
				}
			}
		}

	}

	protected void createUI(Composite parent, final JsonObject options,
			IProject project, TernModuleMetadataOption metadata) {

		final String name = metadata.getName();
		String description = metadata.getDescription();
		String type = metadata.getType();

		Label label = new Label(parent, SWT.NONE);
		label.setLayoutData(new GridData(GridData.VERTICAL_ALIGN_BEGINNING));
		label.setText(new StringBuilder(name).append(":").toString());
		label.setToolTipText(description);

		ITernModuleOptionFactory factory = TernModuleDescriptorManager
				.getManager().getTernModuleOptionFactory(type);
		if (factory != null) {
			factory.createOption(parent, project, metadata, options);
		} else {
			createJsonOption(parent, name, options);
		}
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

	protected JsonObject getOptions(ITernModuleConfigurable module) {
		JsonObject options = module.getOptions();
		if (options == null) {
			options = new JsonObject();
			module.setOptions(options);
		}
		return options;
	}

}

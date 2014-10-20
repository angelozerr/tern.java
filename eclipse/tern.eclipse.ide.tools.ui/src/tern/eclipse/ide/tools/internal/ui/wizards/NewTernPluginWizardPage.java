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
package tern.eclipse.ide.tools.internal.ui.wizards;

import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;

import tern.eclipse.ide.tools.core.generator.IGenerator;
import tern.eclipse.ide.tools.core.generator.TernPluginGenerator;
import tern.eclipse.ide.tools.core.generator.TernPluginOptions;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;
import tern.utils.ExtensionUtils;

/**
 * Page to fill tern plugin information.
 * 
 */
public class NewTernPluginWizardPage extends
		NewFileWizardPage<TernPluginOptions> {

	private static final String PAGE = "NewTernPluginWizardPage";

	private Text nameText;

	public NewTernPluginWizardPage() {
		super(PAGE, ExtensionUtils.JS_EXTENSION);
		setTitle(TernToolsUIMessages.NewTernPluginWizardPage_title);
		setDescription(TernToolsUIMessages.NewTernPluginWizardPage_description);
	}

	@Override
	protected void createBody(Composite container) {
		// Plugin name
		Label label = new Label(container, SWT.NULL);
		label.setText(TernToolsUIMessages.NewFileWizardPage_name_text);

		nameText = new Text(container, SWT.BORDER | SWT.SINGLE);
		GridData gd = new GridData(GridData.FILL_HORIZONTAL);
		gd.horizontalSpan = 2;
		nameText.setLayoutData(gd);
		nameText.addModifyListener(new ModifyListener() {
			public void modifyText(ModifyEvent e) {
				getFileText().setText(
						nameText.getText() + "." + getFileExtension());
			}
		});
		super.createBody(container);
	}

	@Override
	protected void initialize() {
		super.initialize();
		nameText.setText("mylibrary");
	}

	public String getName() {
		return nameText.getText();
	}

	@Override
	protected void updateModel(TernPluginOptions options) {
		options.setPluginName(getName());
		options.setDefName(getName());
	}

	@Override
	public IGenerator getGenerator(String lineSeparator) {
		return TernPluginGenerator.create(lineSeparator);
	}
}

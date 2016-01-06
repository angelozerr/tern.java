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
package tern.eclipse.ide.tools.internal.ui.wizards;

import org.eclipse.swt.SWT;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;

import tern.eclipse.ide.tools.core.generator.IGenerator;
import tern.eclipse.ide.tools.core.generator.TernDefGenerator;
import tern.eclipse.ide.tools.core.generator.TernDefOptions;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;
import tern.utils.ExtensionUtils;

/**
 * Page to fill tern def information.
 * 
 */
public class NewTernDefWizardPage extends NewFileWizardPage<TernDefOptions> {

	private static final String PAGE = "NewTernDefWizardPage";

	private Text nameText;

	public NewTernDefWizardPage() {
		super(PAGE, ExtensionUtils.JSON_EXTENSION);
		setTitle(TernToolsUIMessages.NewTernDefWizardPage_title);
		setDescription(TernToolsUIMessages.NewTernDefWizardPage_description);
	}

	@Override
	protected void createBody(Composite container) {
		// Name of def
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
	protected void updateModel(TernDefOptions options) {
		options.setDefName(getName());
	}

	@Override
	public IGenerator getGenerator(String lineSeparator) {
		return TernDefGenerator.create(lineSeparator);
	}

	@Override
	protected Text createFileText(Composite parent) {
		// disable file text, to avoid having the problem explained in this issue
		// https://github.com/angelozerr/tern.java/issues/164#issuecomment-61779619
		return new Text(parent, SWT.BORDER | SWT.SINGLE | SWT.READ_ONLY);
	}
}

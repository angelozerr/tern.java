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
package tern.eclipse.ide.linter.ui.properties;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;

import tern.eclipse.ide.core.IWorkingCopy;
import tern.eclipse.ide.linter.core.ITernLinterConfig;
import tern.eclipse.ide.linter.core.TernLinterCorePlugin;
import tern.eclipse.ide.linter.internal.ui.TernLinterUIPlugin;
import tern.eclipse.ide.linter.internal.ui.Trace;
import tern.eclipse.ide.ui.properties.AbstractTernPropertyPage;

/**
 * Abstract class for Linter property page.
 *
 */
public abstract class TernLinterPropertyPage extends AbstractTernPropertyPage implements IWorkbenchPreferencePage {

	private final String linterId;
	private TernLinterOptionsBlock linterConfigBlock;

	public TernLinterPropertyPage(String linterId) {
		super();
		this.linterId = linterId;
	}

	@Override
	public void init(IWorkbench workbench) {
		setPreferenceStore(TernLinterUIPlugin.getDefault().getPreferenceStore());
	}

	@Override
	protected Control createContents(Composite ancestor) {
		Composite parent = new Composite(ancestor, SWT.NONE);
		parent.setLayoutData(new GridData(GridData.FILL_BOTH));

		initializeDialogUnits(parent);
		noDefaultAndApplyButton();

		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		parent.setLayout(layout);

		IWorkingCopy workingCopy = getWorkingCopy();
		// create UI linter config
		linterConfigBlock = new TernLinterOptionsBlock(linterId, workingCopy);
		Control control = linterConfigBlock.createControl(parent);
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 1;
		control.setLayoutData(data);

		// load linter config
		loadLinterConfig();

		applyDialogFont(parent);
		return parent;
	}

	@Override
	protected void doPerformOk() throws Exception {
		linterConfigBlock.saveColumnSettings();
		// create options and store it .tern-project or config file
		// name.
		linterConfigBlock.updateTenProject();
	}

	/**
	 * Load linter config.
	 */
	private void loadLinterConfig() {
		try {
			// Create instance of linter config
			ITernLinterConfig config = TernLinterCorePlugin.getDefault().getTernLinterConfigurationsManager()
					.createLinterConfig(linterId);
			// refresh the tree options
			linterConfigBlock.setLinterConfig(config);
		} catch (Throwable e) {
			Trace.trace(Trace.SEVERE, "Error while loading linter config.", e);
		}
	}

}

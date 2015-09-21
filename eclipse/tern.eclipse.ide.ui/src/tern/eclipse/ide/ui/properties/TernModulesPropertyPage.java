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
package tern.eclipse.ide.ui.properties;

import org.eclipse.core.resources.IResource;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;

import tern.eclipse.ide.core.IWorkingCopy;
import tern.eclipse.ide.core.IWorkingCopyListener;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.controls.TernModulesBlock;
import tern.server.ITernModule;

/**
 * Tern Modules (Plugins + JSON Type Definitions) property page.
 * 
 */
public class TernModulesPropertyPage extends AbstractTernPropertyPage
		implements IWorkbenchPreferencePage, IWorkingCopyListener {

	public static final String PAGE_ID = "tern.eclipse.ide.ui.properties.modules";

	private TernModulesBlock modulesBlock;

	public TernModulesPropertyPage() {
		super();
		setImageDescriptor(ImageResource.getImageDescriptor(ImageResource.IMG_LOGO));
	}

	@Override
	public void init(IWorkbench workbench) {
		setPreferenceStore(TernUIPlugin.getDefault().getPreferenceStore());
	}

	@Override
	protected Control createContents(Composite ancestor) {
		Composite parent = new Composite(ancestor, SWT.NONE);
		parent.setLayoutData(new GridData(GridData.FILL_BOTH));

		noDefaultAndApplyButton();

		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		parent.setLayout(layout);

		// create UI modules
		IResource resource = getResource();
		modulesBlock = new TernModulesBlock(resource != null ? resource.getProject() : null,
				TernUIMessages.TernModulesPropertyPage_desc);
		Control control = modulesBlock.createControl(parent);
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 1;
		control.setLayoutData(data);

		// load modules
		refreshModules();

		applyDialogFont(parent);
		return parent;
	}

	public void refreshModules() {
		try {
			IWorkingCopy workingCopy = getWorkingCopy();
			workingCopy.addWorkingCopyListener(this);
			modulesBlock.refresh(workingCopy.getFilteredModules(), workingCopy.getCheckedModules());
		} catch (Throwable e) {
			Trace.trace(Trace.SEVERE, "Error while loading tern project", e);
		}
	}

	@Override
	protected void doPerformOk() throws Exception {
		// save column settings
		modulesBlock.saveColumnSettings();
	}

	@Override
	public void moduleSelectionChanged(ITernModule module, boolean selected) {
		if (!modulesBlock.isCheckUpdating()) {
			modulesBlock.setCheckedModule(module, selected);
		}
	}

}

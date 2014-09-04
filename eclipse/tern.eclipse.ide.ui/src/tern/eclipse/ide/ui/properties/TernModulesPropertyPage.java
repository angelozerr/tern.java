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
package tern.eclipse.ide.ui.properties;

import org.eclipse.core.resources.IResource;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;

import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.internal.ui.properties.AbstractTernPropertyPage;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.controls.TernModulesBlock;
import tern.server.ITernModule;
import tern.utils.TernModuleHelper;

/**
 * Tern Modules (Plugins + JSON Type Definitions) property page.
 * 
 */
public class TernModulesPropertyPage extends AbstractTernPropertyPage implements
		IWorkbenchPreferencePage {

	private TernModulesBlock modulesBlock;

	public TernModulesPropertyPage() {
		super();
		setImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_LOGO));
	}

	public void init(IWorkbench workbench) {
		setPreferenceStore(TernUIPlugin.getDefault().getPreferenceStore());
	}

	@Override
	protected Control createContents(Composite parent) {
		initializeDialogUnits(parent);

		noDefaultAndApplyButton();

		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		parent.setLayout(layout);

		// create UI modules
		IResource resource = getResource();
		modulesBlock = new TernModulesBlock(
				resource != null ? resource.getProject() : null,
				TernUIMessages.TernModulesPropertyPage_desc);
		modulesBlock.createControl(parent);
		Control control = modulesBlock.getControl();
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 1;
		control.setLayoutData(data);

		// load modules
		modulesBlock.loadModules();

		applyDialogFont(parent);
		return parent;
	}

	@Override
	public boolean performOk() {
		// save column settings
		modulesBlock.saveColumnSettings();
		// save the checked plugins in the tern project
		Object[] checkedModules = modulesBlock.getCheckedModules();
		try {
			IDETernProject ternProject = getTernProject();
			// clear Plugin + JSON Type Definition
			ternProject.clearPlugins();
			ternProject.clearLibs();
			// Add Plugin + JSON Type Definition
			for (Object module : checkedModules) {
				TernModuleHelper.update((ITernModule) module, ternProject);
			}
			ternProject.save();
		} catch (Exception e) {
			Trace.trace(Trace.SEVERE, "Error while saving tern project", e);
		}
		return super.performOk();
	}
}

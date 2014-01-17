/*******************************************************************************
 * Copyright (c) 2010 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.eclipse.ide.internal.ui.properties;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;

import tern.TernProject;
import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.server.ITernDef;

/**
 * Tern defs property page.
 * 
 */
public class TernTypeDefinitionsPropertyPage extends AbstractTernPropertyPage
		implements IWorkbenchPreferencePage {

	private TernDefsBlock defsBlock;
	private List<ITernDef> initialDefs;

	public TernTypeDefinitionsPropertyPage() {
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

		defsBlock = new TernDefsBlock();
		defsBlock.createControl(parent);
		Control control = defsBlock.getControl();
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 1;
		control.setLayoutData(data);

		loadDefs();

		applyDialogFont(parent);
		return parent;
	}

	@Override
	public boolean performOk() {
		// save column settings
		defsBlock.saveColumnSettings();
		// save the checked defs in the tern project
		Object[] checkedDefs = defsBlock.getCheckedDefs();
		try {
			IDETernProject ternProject = getTernProject();
			ternProject.getLibs().clear();
			for (Object def : checkedDefs) {
				ternProject.addLib(((ITernDef) def).getName());
			}
			ternProject.save();
		} catch (Exception e) {
			Trace.trace(Trace.SEVERE, "Error while saving tern project", e);
		}
		return super.performOk();
	}

	/**
	 * Load defs from tern project.
	 */
	private void loadDefs() {
		try {
			TernProject ternProject = getTernProject();
			List defs = ternProject.getLibs();

			initialDefs = new ArrayList<ITernDef>();
			for (Object name : defs) {
				ITernDef def = TernCorePlugin.getTernServerTypeManager()
						.findTernDef(name.toString());
				if (def != null) {
					initialDefs.add(def);
				}
			}
			defsBlock.setCheckedDefs(initialDefs.toArray());

		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE, "Error while loading defs.", e);
		}
	}

}

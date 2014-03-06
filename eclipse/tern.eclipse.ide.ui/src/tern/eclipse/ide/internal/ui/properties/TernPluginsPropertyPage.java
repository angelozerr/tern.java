/**
 *  Copyright (c) 2013-20A4 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
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
import org.json.simple.JSONObject;

import tern.TernProject;
import tern.eclipse.ide.core.IDETernProject;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.server.ITernPlugin;

/**
 * Tern plugins property page.
 * 
 */
public class TernPluginsPropertyPage extends AbstractTernPropertyPage implements
		IWorkbenchPreferencePage {

	private TernPluginsBlock pluginsBlock;
	private List<ITernPlugin> initialPlugins;

	public TernPluginsPropertyPage() {
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

		pluginsBlock = new TernPluginsBlock();
		pluginsBlock.createControl(parent);
		Control control = pluginsBlock.getControl();
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 1;
		control.setLayoutData(data);

		loadPlugins();

		applyDialogFont(parent);
		return parent;
	}

	@Override
	public boolean performOk() {
		// save column settings
		pluginsBlock.saveColumnSettings();
		// save the checked plugins in the tern project
		Object[] checkedPlugins = pluginsBlock.getCheckedPlugins();
		try {
			IDETernProject ternProject = getTernProject();
			ternProject.getPlugins().clear();
			for (Object plugin : checkedPlugins) {
				ternProject.addPlugin((ITernPlugin) plugin);
			}
			ternProject.save();
		} catch (Exception e) {
			Trace.trace(Trace.SEVERE, "Error while saving tern project", e);
		}
		return super.performOk();
	}

	/**
	 * Load plugins from tern project.
	 */
	private void loadPlugins() {
		try {
			TernProject ternProject = getTernProject();
			JSONObject plugins = ternProject.getPlugins();

			initialPlugins = new ArrayList<ITernPlugin>();
			for (Object name : plugins.keySet()) {
				ITernPlugin plugin = TernCorePlugin.getTernServerTypeManager()
						.findTernPlugin(name.toString());
				if (plugin != null) {
					initialPlugins.add(plugin);
				}
			}
			pluginsBlock.setCheckedPlugins(initialPlugins.toArray());

		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE, "Error while loading plugins.", e);
		}
	}

}

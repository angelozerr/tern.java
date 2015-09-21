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
package tern.eclipse.ide.internal.ui.properties;

import java.util.List;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.controls.TernScriptPathsBlock;
import tern.eclipse.ide.ui.properties.AbstractTernPropertyPage;
import tern.scriptpath.ITernScriptPath;

/**
 * Tern script paths property page.
 * 
 */
public class TernScriptPathsPropertyPage extends AbstractTernPropertyPage implements IWorkbenchPreferencePage {

	private TernScriptPathsBlock scriptPathsBlock;

	public TernScriptPathsPropertyPage() {
		super();
		setImageDescriptor(ImageResource.getImageDescriptor(ImageResource.IMG_LOGO));
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

		IIDETernProject ternProject = null;
		try {
			ternProject = getTernProject();
		} catch (CoreException e1) {
		}
		scriptPathsBlock = new TernScriptPathsBlock(ternProject);
		scriptPathsBlock.createControl(parent);

		Control control = scriptPathsBlock.getControl();
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 1;
		control.setLayoutData(data);

		loadScriptPaths();

		applyDialogFont(parent);
		return parent;
	}

	@Override
	protected void doPerformOk() throws Exception {
		// save column settings
		scriptPathsBlock.saveColumnSettings();
		// save the checked scriptPaths in the tern project
		List<ITernScriptPath> scriptPaths = scriptPathsBlock.getTernScriptPaths();
		try {
			IIDETernProject ternProject = getTernProject();
			ternProject.setScriptPaths(scriptPaths);
		} catch (Exception e) {
			Trace.trace(Trace.SEVERE, "Error while saving tern project", e);
		}
	}

	/**
	 * Load scriptPaths from tern project.
	 */
	private void loadScriptPaths() {
		try {
			IIDETernProject ternProject = getTernProject();
			scriptPathsBlock.setTernScriptPaths(ternProject.getScriptPaths());
		} catch (CoreException e) {
			Trace.trace(Trace.SEVERE, "Error while loading scriptPaths.", e);
		}
	}

}

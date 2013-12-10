/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.eclipse.ide.server.nodejs.internal.ui.preferences;

import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;
import org.eclipse.jface.preference.ComboFieldEditor;
import org.eclipse.jface.preference.FieldEditorPreferencePage;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;
import org.eclipse.ui.preferences.ScopedPreferenceStore;

import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.server.nodejs.core.INodejsInstall;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCoreConstants;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCorePlugin;
import tern.eclipse.ide.server.nodejs.internal.ui.TernNodejsUIMessages;

/**
 * Tern Node.js preferences page.
 * 
 */
public class TernNodejsPreferencesPage extends FieldEditorPreferencePage
		implements IWorkbenchPreferencePage {

	public TernNodejsPreferencesPage() {
		super(GRID);
		setDescription(TernNodejsUIMessages.TernNodejsPreferencesPage_desc);
	}

	@Override
	protected void createFieldEditors() {

		// Tern Server type combo
		INodejsInstall[] installs = TernNodejsCorePlugin
				.getNodejsInstallManager().getNodejsInstalls();
		String[][] data = new String[installs.length + 1][2];
		data[0][0] = " -- Choose your node.js install --";
		data[0][1] = "";

		for (int i = 0; i < installs.length; i++) {
			data[i + 1][0] = installs[i].getName();
			data[i + 1][1] = installs[i].getId();
		}

		ComboFieldEditor ternServerEditor = new ComboFieldEditor(
				TernNodejsCoreConstants.NODEJS_INSTALL,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSInstall,
				data, getFieldEditorParent());
		addField(ternServerEditor);
	}

	@Override
	public void init(IWorkbench workbench) {

	}

	@Override
	protected IPreferenceStore doGetPreferenceStore() {
		IScopeContext scope = new InstanceScope();
		return new ScopedPreferenceStore(scope, TernNodejsCorePlugin.PLUGIN_ID);
	}

	@Override
	public boolean performOk() {
		boolean result = super.performOk();
		if (result) {
			TernCorePlugin.getTernServerTypeManager().refresh();
		}
		return result;
	}

}

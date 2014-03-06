/*******************************************************************************
 * Copyright (c) 2013-2014 Angelo ZERR.
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
import org.eclipse.jface.preference.BooleanFieldEditor;
import org.eclipse.jface.preference.ComboFieldEditor;
import org.eclipse.jface.preference.FieldEditorPreferencePage;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.preference.IntegerFieldEditor;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;
import org.eclipse.ui.preferences.ScopedPreferenceStore;

import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.server.nodejs.core.IDENodejsProcessHelper;
import tern.eclipse.ide.server.nodejs.core.INodejsInstall;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCoreConstants;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCorePlugin;
import tern.eclipse.ide.server.nodejs.internal.ui.TernNodejsUIMessages;
import tern.eclipse.ide.ui.ImageResource;
import tern.utils.StringUtils;

/**
 * Tern Node.js preferences page.
 * 
 */
public class TernNodejsPreferencesPage extends FieldEditorPreferencePage
		implements IWorkbenchPreferencePage {

	private FileComboFieldEditor nodeFileField;

	public TernNodejsPreferencesPage() {
		super(GRID);
		setDescription(TernNodejsUIMessages.TernNodejsPreferencesPage_desc);
		setImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_LOGO));
	}

	@Override
	protected void createFieldEditors() {

		// Start timeout field
		IntegerFieldEditor timeoutField = new IntegerFieldEditor(
				TernNodejsCoreConstants.NODEJS_TIMEOUT,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSTimeout,
				getFieldEditorParent());
		addField(timeoutField);

		// Persistent (not auto-shutdown)
		BooleanFieldEditor persistentField = new BooleanFieldEditor(
				TernNodejsCoreConstants.NODEJS_PERSISTENT,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSPersistent,
				getFieldEditorParent());
		addField(persistentField);
		
		// Tern Server type combo
		INodejsInstall[] installs = TernNodejsCorePlugin
				.getNodejsInstallManager().getNodejsInstalls();
		String[][] data = new String[installs.length + 1][2];
		data[0][0] = TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSInstall_emptyValue;
		data[0][1] = "";

		for (int i = 0; i < installs.length; i++) {
			data[i + 1][0] = installs[i].getName();
			data[i + 1][1] = installs[i].getId();
		}

		ComboFieldEditor nodeJSInstallField = new ComboFieldEditor(
				TernNodejsCoreConstants.NODEJS_INSTALL,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSInstall,
				data, getFieldEditorParent()) {
			@Override
			protected void fireValueChanged(String property, Object oldValue,
					Object newValue) {
				INodejsInstall install = TernNodejsCorePlugin
						.getNodejsInstallManager().findNodejsInstall(
								newValue.toString());
				if (install.isNative()) {
					nodeFileField.setEnabled(true, getFieldEditorParent());
					nodeFileField.setStringValue(IDENodejsProcessHelper
							.getNodejsPath());
				} else {
					nodeFileField.setEnabled(false, getFieldEditorParent());
					nodeFileField.setStringValue(install.getPath()
							.getAbsolutePath());
				}
				super.fireValueChanged(property, oldValue, newValue);
			}
		};
		addField(nodeJSInstallField);

		// Node.js path
		String[] defaultPaths = IDENodejsProcessHelper.getDefaultNodejsPaths();
		nodeFileField = new FileComboFieldEditor(
				TernNodejsCoreConstants.NODEJS_PATH,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSPath,
				defaultPaths, getFieldEditorParent());
		addField(nodeFileField);

		// Update enable/disable of the nodejs path field.
		INodejsInstall install = null;
		String installId = super.getPreferenceStore().getString(
				TernNodejsCoreConstants.NODEJS_INSTALL);
		if (!StringUtils.isEmpty(installId)) {
			install = TernNodejsCorePlugin.getNodejsInstallManager()
					.findNodejsInstall(installId);
		}
		nodeFileField.setEnabled(install != null && install.isNative(),
				getFieldEditorParent());
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

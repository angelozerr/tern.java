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
package tern.eclipse.ide.server.nodejs.internal.ui.preferences;

import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;
import org.eclipse.jface.preference.BooleanFieldEditor;
import org.eclipse.jface.preference.ComboFieldEditor;
import org.eclipse.jface.preference.FieldEditorPreferencePage;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.preference.IntegerFieldEditor;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Label;
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

	private FileComboFieldEditor nativeNodePath;
	private Label nodePath;

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
				if (install == null || install.isNative()) {
					nativeNodePath.setEnabled(true, getFieldEditorParent());
					String defaultPath = IDENodejsProcessHelper.getNodejsPath();
					nativeNodePath.setStringValue(defaultPath);
					nodePath.setText(defaultPath);

				} else {
					nativeNodePath.setEnabled(false, getFieldEditorParent());
					nodePath.setText(install.getPath().getAbsolutePath());
				}
				super.fireValueChanged(property, oldValue, newValue);
			}
		};
		addField(nodeJSInstallField);

		// Node.js path
		String[] defaultPaths = IDENodejsProcessHelper.getDefaultNodejsPaths();
		nativeNodePath = new FileComboFieldEditor(
				TernNodejsCoreConstants.NODEJS_PATH,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nativeNodeJSPath,
				defaultPaths, getFieldEditorParent()) {
			@Override
			protected void fireValueChanged(String property, Object oldValue,
					Object newValue) {
				nodePath.setText(newValue.toString());
				super.fireValueChanged(property, oldValue, newValue);
			}
		};
		addField(nativeNodePath);

		// Node path label
		Label nodePathTitle = new Label(getFieldEditorParent(), SWT.NONE);
		nodePathTitle
				.setText(TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSPath);
		GridData gridData = new GridData(GridData.VERTICAL_ALIGN_BEGINNING);
		nodePathTitle.setLayoutData(gridData);

		nodePath = new Label(getFieldEditorParent(), SWT.WRAP);
		nodePath.setText("");
		gridData = new GridData(GridData.FILL_BOTH);
		gridData.horizontalSpan = 2;
		nodePath.setLayoutData(gridData);
	}

	@Override
	protected void initialize() {
		super.initialize();
		// Update enable/disable of the nodejs path field.
		updateNodePath(false);
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

	@Override
	protected void performDefaults() {
		super.performDefaults();
		updateNodePath(true);

	}

	public void updateNodePath(boolean defaultValue) {
		INodejsInstall install = getNodejsInstall(defaultValue);
		// update node path
		if (install != null) {
			if (install.isNative()) {
				nodePath.setText(nativeNodePath.getStringValue());
			} else {
				nodePath.setText(install.getPath().getAbsolutePath());
			}
		}
		// update enable native node path
		nativeNodePath.setEnabled(install != null && install.isNative(),
				getFieldEditorParent());
	}

	private INodejsInstall getNodejsInstall(boolean defaultValue) {
		INodejsInstall install = null;
		String installId = defaultValue ? super.getPreferenceStore()
				.getDefaultString(TernNodejsCoreConstants.NODEJS_INSTALL)
				: super.getPreferenceStore().getString(
						TernNodejsCoreConstants.NODEJS_INSTALL);
		if (!StringUtils.isEmpty(installId)) {
			install = TernNodejsCorePlugin.getNodejsInstallManager()
					.findNodejsInstall(installId);
		}
		return install;
	}
}

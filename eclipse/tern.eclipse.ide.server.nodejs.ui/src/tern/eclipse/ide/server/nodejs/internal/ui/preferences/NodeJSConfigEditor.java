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
package tern.eclipse.ide.server.nodejs.internal.ui.preferences;

import org.eclipse.jface.preference.ComboFieldEditor;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;

import tern.eclipse.ide.server.nodejs.core.IDENodejsProcessHelper;
import tern.eclipse.ide.server.nodejs.core.INodejsInstall;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCorePlugin;
import tern.eclipse.ide.server.nodejs.internal.ui.TernNodejsUIMessages;
import tern.eclipse.ide.ui.preferences.FileComboFieldEditor;

/**
 * Node.js configuration editor.
 *
 */
public class NodeJSConfigEditor {

	private ComboFieldEditor nodeJSInstallField;
	private FileComboFieldEditor nativeNodePath;
	private Label nodePathTitle;
	private Text nodePath;

	public NodeJSConfigEditor(Composite parent, String nodeJSInstallPreferenceName, String nodeJSPathPrefrenceName) {
		this.nodeJSInstallField = createNodeJSInstall(parent, nodeJSInstallPreferenceName);
		this.nativeNodePath = createNativeNodePath(parent, nodeJSPathPrefrenceName);
		createNodePathInfo(parent);

	}

	private ComboFieldEditor createNodeJSInstall(final Composite parent, String nodeJSInstallPreferenceName) {
		// Node js install path
		String[][] data = createNodeInstalls();

		return new ComboFieldEditor(nodeJSInstallPreferenceName,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSInstall, data, parent) {
			@Override
			protected void fireValueChanged(String property, Object oldValue, Object newValue) {
				INodejsInstall install = TernNodejsCorePlugin.getNodejsInstallManager()
						.findNodejsInstall(newValue.toString());
				if (install == null || install.isNative()) {
					nativeNodePath.setEnabled(true, parent);
					String defaultPath = IDENodejsProcessHelper.getNodejsPath();
					nativeNodePath.setStringValue(defaultPath);
					nodePath.setText(defaultPath);

				} else {
					nativeNodePath.setEnabled(false, parent);
					nodePath.setText(install.getPath().getAbsolutePath());
				}
				super.fireValueChanged(property, oldValue, newValue);
			}
		};
	}

	public static String[][] createNodeInstalls() {
		INodejsInstall[] installs = TernNodejsCorePlugin.getNodejsInstallManager().getNodejsInstalls();
		String[][] data = new String[installs.length + 1][2];
		data[0][0] = TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSInstall_emptyValue;
		data[0][1] = ""; //$NON-NLS-1$

		for (int i = 0; i < installs.length; i++) {
			data[i + 1][0] = installs[i].getName();
			data[i + 1][1] = installs[i].getId();
		}
		return data;
	}

	private FileComboFieldEditor createNativeNodePath(Composite parent, String nodeJSPathPrefrenceName) {
		// Node.js path
		String[] defaultPaths = IDENodejsProcessHelper.getDefaultNodejsPaths();
		return new FileComboFieldEditor(nodeJSPathPrefrenceName,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nativeNodeJSPath, defaultPaths, parent) {
			@Override
			protected void fireValueChanged(String property, Object oldValue, Object newValue) {
				nodePath.setText(newValue.toString());
				super.fireValueChanged(property, oldValue, newValue);
			}
		};
	}

	private void createNodePathInfo(Composite parent) {
		// Node path label
		nodePathTitle = new Label(parent, SWT.NONE);
		nodePathTitle.setText(TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSPath);
		GridData gridData = new GridData(GridData.VERTICAL_ALIGN_BEGINNING);
		nodePathTitle.setLayoutData(gridData);

		nodePath = new Text(parent, SWT.WRAP | SWT.READ_ONLY);
		nodePath.setText(""); //$NON-NLS-1$
		gridData = new GridData(GridData.FILL_BOTH);
		gridData.horizontalSpan = 2;
		gridData.widthHint = 200;
		nodePath.setLayoutData(gridData);
	}

	public ComboFieldEditor getNodeJSInstallField() {
		return nodeJSInstallField;
	}

	public FileComboFieldEditor getNativeNodePath() {
		return nativeNodePath;
	}

	public void setEnabled(boolean enabled, Composite parent) {
		nodeJSInstallField.setEnabled(enabled, parent);
		nodePathTitle.setEnabled(enabled);
		nativeNodePath.setEnabled(enabled, parent);
		nodePath.setEnabled(enabled);
	}

	public void updateNodePath(INodejsInstall install, boolean isRemote, Composite parent) {
		// update node path
		if (install != null) {
			if (install.isNative()) {
				nodePath.setText(nativeNodePath.getStringValue());
			} else {
				nodePath.setText(install.getPath().getAbsolutePath());
			}
		}
		// update enable native node path
		nativeNodePath.setEnabled(!isRemote && install != null && install.isNative(), parent);
	}
}

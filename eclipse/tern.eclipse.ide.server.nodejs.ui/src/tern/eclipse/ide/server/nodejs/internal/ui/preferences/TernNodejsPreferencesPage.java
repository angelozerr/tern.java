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
package tern.eclipse.ide.server.nodejs.internal.ui.preferences;

import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;
import org.eclipse.jface.preference.BooleanFieldEditor;
import org.eclipse.jface.preference.ComboFieldEditor;
import org.eclipse.jface.preference.FieldEditorPreferencePage;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.preference.IntegerFieldEditor;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;
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

	private Button remoteAccessButton;
	private IntegerFieldEditor remotePortField;

	private Button directAccessButton;
	private IntegerFieldEditor timeoutField;
	private IntegerFieldEditor testNumberField;
	private BooleanFieldEditor persistentField;
	private ComboFieldEditor nodeJSInstallField;
	private Label nodePathTitle;
	private FileComboFieldEditor nativeNodePath;
	private Text nodePath;

	public TernNodejsPreferencesPage() {
		super(GRID);
		setDescription(TernNodejsUIMessages.TernNodejsPreferencesPage_desc);
		setImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_LOGO));
	}

	@Override
	protected void createFieldEditors() {
		boolean isRemote = getPreferenceStore().getBoolean(
				TernNodejsCoreConstants.NODEJS_REMOTE_ACCESS);
		createRemoteAccessContent(getFieldEditorParent(), isRemote);
		createSeparator(getFieldEditorParent());
		createDirectAccessContent(getFieldEditorParent(), !isRemote);
		updateEnabled(isRemote);
	}

	private void createRemoteAccessContent(Composite parent, boolean isRemote) {
		remoteAccessButton = addRadioButton(
				parent,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSRemoteAccess,
				isRemote);
		remoteAccessButton.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				updateEnabled(true);
			}
		});
		// Remote port field
		remotePortField = new IntegerFieldEditor(
				TernNodejsCoreConstants.NODEJS_REMOTE_PORT,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSRemotePort,
				parent);
		addField(remotePortField);
	}

	private void createDirectAccessContent(final Composite parent,
			boolean isDirect) {
		directAccessButton = addRadioButton(
				parent,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSDirectAccess,
				isDirect);
		directAccessButton.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				updateEnabled(false);
			}
		});
		// Start timeout field
		timeoutField = new IntegerFieldEditor(
				TernNodejsCoreConstants.NODEJS_TIMEOUT,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSTimeout,
				parent);
		addField(timeoutField);

		// Start timeout field
		testNumberField = new IntegerFieldEditor(
				TernNodejsCoreConstants.NODEJS_TEST_NUMBER,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSTestNumber,
				parent);
		addField(testNumberField);

		// Persistent (not auto-shutdown)
		persistentField = new BooleanFieldEditor(
				TernNodejsCoreConstants.NODEJS_PERSISTENT,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSPersistent,
				parent);
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

		nodeJSInstallField = new ComboFieldEditor(
				TernNodejsCoreConstants.NODEJS_INSTALL,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSInstall,
				data, parent) {
			@Override
			protected void fireValueChanged(String property, Object oldValue,
					Object newValue) {
				INodejsInstall install = TernNodejsCorePlugin
						.getNodejsInstallManager().findNodejsInstall(
								newValue.toString());
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
		addField(nodeJSInstallField);

		// Node.js path
		String[] defaultPaths = IDENodejsProcessHelper.getDefaultNodejsPaths();
		nativeNodePath = new FileComboFieldEditor(
				TernNodejsCoreConstants.NODEJS_PATH,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nativeNodeJSPath,
				defaultPaths, parent) {
			@Override
			protected void fireValueChanged(String property, Object oldValue,
					Object newValue) {
				nodePath.setText(newValue.toString());
				super.fireValueChanged(property, oldValue, newValue);
			}
		};
		addField(nativeNodePath);

		// Node path label
		nodePathTitle = new Label(parent, SWT.NONE);
		nodePathTitle
				.setText(TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSPath);
		GridData gridData = new GridData(GridData.VERTICAL_ALIGN_BEGINNING);
		nodePathTitle.setLayoutData(gridData);

		nodePath = new Text(parent, SWT.WRAP | SWT.READ_ONLY);
		nodePath.setText("");
		gridData = new GridData(GridData.FILL_BOTH);
		gridData.horizontalSpan = 2;
		gridData.widthHint = 200;
		nodePath.setLayoutData(gridData);
	}

	public void createSeparator(Composite parent) {
		Label separator = new Label(parent, SWT.HORIZONTAL | SWT.SEPARATOR);
		GridData gd = new GridData(GridData.FILL_HORIZONTAL);
		gd.horizontalSpan = 4;
		separator.setLayoutData(gd);
	}

	private Button addRadioButton(Composite parent, String label,
			boolean selected) {
		GridData gd = new GridData(GridData.HORIZONTAL_ALIGN_FILL);
		gd.horizontalSpan = 4;

		Button button = new Button(parent, SWT.RADIO);
		button.setText(label);

		button.setLayoutData(gd);
		button.setSelection(selected);
		// button.setSelection(value.equals(getPreferenceStore().getString(key)));

		return button;
	}

	private void updateEnabled(boolean isRemote) {
		Composite parent = getFieldEditorParent();
		remotePortField.setEnabled(isRemote, parent);
		timeoutField.setEnabled(!isRemote, parent);
		testNumberField.setEnabled(!isRemote, parent);
		persistentField.setEnabled(!isRemote, parent);
		nodeJSInstallField.setEnabled(!isRemote, parent);
		nodePathTitle.setEnabled(!isRemote);
		nativeNodePath.setEnabled(!isRemote, parent);
		nodePath.setEnabled(!isRemote);
	}

	@Override
	protected void initialize() {
		super.initialize();
		// Update enable/disable of the nodejs path field.
		boolean isRemote = getPreferenceStore().getBoolean(
				TernNodejsCoreConstants.NODEJS_REMOTE_ACCESS);
		updateNodePath(false, isRemote);
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
		IPreferenceStore store = getPreferenceStore();
		store.setValue(TernNodejsCoreConstants.NODEJS_REMOTE_ACCESS,
				remoteAccessButton.getSelection());
		TernCorePlugin.getTernServerTypeManager()
				.fireServerPreferencesChanged(null);
		return result;
	}

	@Override
	protected void performDefaults() {
		super.performDefaults();
		boolean isRemote = getPreferenceStore().getDefaultBoolean(
				TernNodejsCoreConstants.NODEJS_REMOTE_ACCESS);
		updateNodePath(true, isRemote);
		remoteAccessButton.setSelection(isRemote);
		directAccessButton.setSelection(!isRemote);
		updateEnabled(isRemote);
	}

	public void updateNodePath(boolean defaultValue, boolean isRemote) {
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
		nativeNodePath.setEnabled(
				!isRemote && install != null && install.isNative(),
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

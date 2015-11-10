/**
 *  Copyright (c) 2013-2015 Angelo ZERR and Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *  Piotr Tomiak <piotr@genuitec.com> - support for tern.js debugging
 */
package tern.eclipse.ide.server.nodejs.internal.ui.preferences;

import java.net.URL;
import java.util.Collection;

import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
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
import org.eclipse.swt.widgets.Link;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.preferences.ScopedPreferenceStore;

import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.server.nodejs.core.IDENodejsProcessHelper;
import tern.eclipse.ide.server.nodejs.core.INodejsInstall;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCoreConstants;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCorePlugin;
import tern.eclipse.ide.server.nodejs.core.debugger.INodejsDebugger;
import tern.eclipse.ide.server.nodejs.core.debugger.NodejsDebuggersManager;
import tern.eclipse.ide.server.nodejs.internal.ui.TernNodejsUIMessages;
import tern.eclipse.ide.server.nodejs.internal.ui.TernNodejsUIPlugin;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.preferences.TernRepositoryFieldEditor;
import tern.utils.StringUtils;

/**
 * Tern Node.js preferences page.
 * 
 */
public class TernNodejsPreferencesPage extends FieldEditorPreferencePage implements IWorkbenchPreferencePage {

	private Button remoteAccessButton;
	private IntegerFieldEditor remotePortField;

	private Button directAccessButton;
	private IntegerFieldEditor timeoutField;
	private IntegerFieldEditor testNumberField;
	private BooleanFieldEditor persistentField;
	private CheckComboFieldEditor debuggerField;
	private Link debuggerWikiLink;
	private ComboFieldEditor nodeJSInstallField;
	private Label nodePathTitle;
	private FileComboFieldEditor nativeNodePath;
	private Text nodePath;
	private IWorkbench workbench;
	private TernRepositoryFieldEditor ternRepositoryField;

	public TernNodejsPreferencesPage() {
		super(GRID);
		setDescription(TernNodejsUIMessages.TernNodejsPreferencesPage_desc);
		setImageDescriptor(ImageResource.getImageDescriptor(ImageResource.IMG_LOGO));
	}

	@Override
	protected void createFieldEditors() {
		boolean isRemote = getPreferenceStore().getBoolean(TernNodejsCoreConstants.NODEJS_REMOTE_ACCESS);
		createRemoteAccessContent(getFieldEditorParent(), isRemote);
		createSeparator(getFieldEditorParent());
		createDirectAccessContent(getFieldEditorParent(), !isRemote);
		updateEnabled(isRemote);
	}

	private void createRemoteAccessContent(Composite parent, boolean isRemote) {
		remoteAccessButton = addRadioButton(parent, TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSRemoteAccess,
				isRemote);
		remoteAccessButton.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				updateEnabled(true);
			}
		});
		// Remote port field
		remotePortField = new IntegerFieldEditor(TernNodejsCoreConstants.NODEJS_REMOTE_PORT,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSRemotePort, parent);
		addField(remotePortField);
	}

	private void createDirectAccessContent(final Composite parent, boolean isDirect) {
		directAccessButton = addRadioButton(parent, TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSDirectAccess,
				isDirect);
		directAccessButton.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				updateEnabled(false);
			}
		});
		// Start timeout field
		timeoutField = new IntegerFieldEditor(TernNodejsCoreConstants.NODEJS_TIMEOUT,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSTimeout, parent);
		addField(timeoutField);

		// Start timeout field
		testNumberField = new IntegerFieldEditor(TernNodejsCoreConstants.NODEJS_TEST_NUMBER,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSTestNumber, parent);
		addField(testNumberField);

		// Persistent (not auto-shutdown)
		persistentField = new BooleanFieldEditor(TernNodejsCoreConstants.NODEJS_PERSISTENT,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSPersistent, parent);
		addField(persistentField);

		// Debugger setup
		Collection<INodejsDebugger> list = NodejsDebuggersManager.getDebuggers();
		String[][] debuggers = new String[list.size() + 1][2];
		debuggers[0][0] = TernNodejsUIMessages.TernNodejsPreferencesPage_debugger_none;
		debuggers[0][1] = ""; //$NON-NLS-1$
		int j = 0;
		for (INodejsDebugger debugger : list) {
			j++;
			if (debugger.isInstalled()) {
				debuggers[j][0] = debugger.getName();
				debuggers[j][1] = debugger.getId();
			} else {
				debuggers[j][0] = debugger.getName()
						+ TernNodejsUIMessages.TernNodejsPreferencesPage_debugger_not_installed;
				debuggers[j][1] = ""; //$NON-NLS-1$
			}
		}
		
		debuggerField = new CheckComboFieldEditor(TernNodejsCoreConstants.NODEJS_DEBUGGER,
				TernNodejsUIMessages.TernNodejsPreferencesPage_debugger_label, debuggers, "", parent) { //$NON-NLS-1$

			private boolean isValid = true;

			@Override
			protected void refreshValidState() {
				if (isCheckboxSelected()) {
					if (getSelection() == 0) {
						isValid = false;
						setErrorMessage(TernNodejsUIMessages.TernNodejsPreferencesPage_debugger_err_not_selected);
						return;
					} else if ("".equals(getValue())) { //$NON-NLS-1$ )
						isValid = false;
						setErrorMessage(TernNodejsUIMessages.TernNodejsPreferencesPage_debugger_err_not_installed);
						return;
					}
				}
				isValid = true;
				clearErrorMessage();
			}

			@Override
			public boolean isValid() {
				return isValid;
			}

			@Override
			protected void updateComboBoxEnablement(Composite parent, boolean enabled) {
				super.updateComboBoxEnablement(parent, enabled);
				ternRepositoryField.setEnabled(enabled, parent);
				debuggerWikiLink.setEnabled(enabled);
			}
		};
		addField(debuggerField);

		// Repository setup
		ternRepositoryField = new TernRepositoryFieldEditor(TernNodejsCoreConstants.NODEJS_TERN_REPOSITORY,
				TernNodejsUIMessages.TernNodejsPreferencesPage_ternRepository_label, parent,
				workbench);
		addField(ternRepositoryField);

		GridData gd = new GridData();
		gd.horizontalIndent = 25;
		ternRepositoryField.getLabelControl(parent).setLayoutData(gd);

		debuggerWikiLink = new Link(parent, SWT.NONE);
		debuggerWikiLink.setText(TernNodejsUIMessages.TernNodejsPreferencesPage_debugger_wiki_link);
		debuggerWikiLink.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				try {
					PlatformUI.getWorkbench().getBrowserSupport().getExternalBrowser().openURL(
							new URL("https://github.com/angelozerr/tern.java/wiki/Debugging-Tern.js-on-Node.js")); //$NON-NLS-1$
				} catch (Exception e1) {
					TernNodejsUIPlugin.getDefault().getLog()
							.log(new Status(IStatus.ERROR, TernNodejsUIPlugin.PLUGIN_ID, e1.getMessage(), e1));
				}
			}
		});

		gd = new GridData(SWT.FILL, SWT.FILL, false, false, 5, 1);
		gd.horizontalIndent = 25;
		debuggerWikiLink.setLayoutData(gd);

		// Tern Server type combo
		INodejsInstall[] installs = TernNodejsCorePlugin.getNodejsInstallManager().getNodejsInstalls();
		String[][] data = new String[installs.length + 1][2];
		data[0][0] = TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSInstall_emptyValue;
		data[0][1] = ""; //$NON-NLS-1$

		for (int i = 0; i < installs.length; i++) {
			data[i + 1][0] = installs[i].getName();
			data[i + 1][1] = installs[i].getId();
		}

		nodeJSInstallField = new ComboFieldEditor(TernNodejsCoreConstants.NODEJS_INSTALL,
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
		addField(nodeJSInstallField);

		// Node.js path
		String[] defaultPaths = IDENodejsProcessHelper.getDefaultNodejsPaths();
		nativeNodePath = new FileComboFieldEditor(TernNodejsCoreConstants.NODEJS_PATH,
				TernNodejsUIMessages.TernNodejsPreferencesPage_nativeNodeJSPath, defaultPaths, parent) {
			@Override
			protected void fireValueChanged(String property, Object oldValue, Object newValue) {
				nodePath.setText(newValue.toString());
				super.fireValueChanged(property, oldValue, newValue);
			}
		};
		addField(nativeNodePath);

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

	public void createSeparator(Composite parent) {
		Label separator = new Label(parent, SWT.HORIZONTAL | SWT.SEPARATOR);
		GridData gd = new GridData(GridData.FILL_HORIZONTAL);
		gd.horizontalSpan = 4;
		separator.setLayoutData(gd);
	}

	private Button addRadioButton(Composite parent, String label, boolean selected) {
		GridData gd = new GridData(GridData.HORIZONTAL_ALIGN_FILL);
		gd.horizontalSpan = 4;

		Button button = new Button(parent, SWT.RADIO);
		button.setText(label);

		button.setLayoutData(gd);
		button.setSelection(selected);
		return button;
	}

	private void updateEnabled(boolean isRemote) {
		Composite parent = getFieldEditorParent();
		remotePortField.setEnabled(isRemote, parent);
		timeoutField.setEnabled(!isRemote, parent);
		testNumberField.setEnabled(!isRemote, parent);
		persistentField.setEnabled(!isRemote, parent);
		debuggerField.setEnabled(!isRemote, parent);
		ternRepositoryField.setEnabled(debuggerField.isCheckboxSelected() , parent);
		nodeJSInstallField.setEnabled(!isRemote, parent);
		nodePathTitle.setEnabled(!isRemote);
		nativeNodePath.setEnabled(!isRemote, parent);
		nodePath.setEnabled(!isRemote);
	}

	@Override
	protected void initialize() {
		super.initialize();
		// Update enable/disable of the nodejs path field.
		boolean isRemote = getPreferenceStore().getBoolean(TernNodejsCoreConstants.NODEJS_REMOTE_ACCESS);
		updateNodePath(false, isRemote);
	}

	@Override
	public void init(IWorkbench workbench) {
		this.workbench = workbench;
	}

	@Override
	protected IPreferenceStore doGetPreferenceStore() {
		return new ScopedPreferenceStore(InstanceScope.INSTANCE, TernNodejsCorePlugin.PLUGIN_ID);
	}

	@Override
	public boolean performOk() {
		boolean result = super.performOk();
		IPreferenceStore store = getPreferenceStore();
		store.setValue(TernNodejsCoreConstants.NODEJS_REMOTE_ACCESS, remoteAccessButton.getSelection());
		TernCorePlugin.getTernServerTypeManager().fireServerPreferencesChanged(null);
		return result;
	}

	@Override
	protected void performDefaults() {
		super.performDefaults();
		boolean isRemote = getPreferenceStore().getDefaultBoolean(TernNodejsCoreConstants.NODEJS_REMOTE_ACCESS);
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
		nativeNodePath.setEnabled(!isRemote && install != null && install.isNative(), getFieldEditorParent());
	}

	private INodejsInstall getNodejsInstall(boolean defaultValue) {
		INodejsInstall install = null;
		String installId = defaultValue
				? super.getPreferenceStore().getDefaultString(TernNodejsCoreConstants.NODEJS_INSTALL)
				: super.getPreferenceStore().getString(TernNodejsCoreConstants.NODEJS_INSTALL);
		if (!StringUtils.isEmpty(installId)) {
			install = TernNodejsCorePlugin.getNodejsInstallManager().findNodejsInstall(installId);
		}
		return install;
	}
}

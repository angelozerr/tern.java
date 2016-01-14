/**
 *  Copyright (c) 2013-2016 Angelo ZERR and Genuitec LLC.
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
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;
import org.eclipse.ui.preferences.ScopedPreferenceStore;

import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.server.nodejs.core.INodejsInstall;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCoreConstants;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCorePlugin;
import tern.eclipse.ide.server.nodejs.internal.ui.TernNodejsUIMessages;
import tern.eclipse.ide.server.nodejs.ui.preferences.DebuggerFieldEditor;
import tern.eclipse.ide.server.nodejs.ui.preferences.NodeJSConfigEditor;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.preferences.FileComboFieldEditor;
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
	private DebuggerFieldEditor debuggerField;

	private NodeJSConfigEditor nodeJSConfigEditor;

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
		debuggerField = new DebuggerFieldEditor(TernNodejsCoreConstants.NODEJS_DEBUGGER,
				TernNodejsUIMessages.TernNodejsPreferencesPage_debugger_label, parent) {
			@Override
			protected void updateComboBoxEnablement(Composite parent, boolean enabled) {
				super.updateComboBoxEnablement(parent, enabled);
				ternRepositoryField.setEnabled(enabled, parent);
			}
		};
		addField(debuggerField);

		// Repository setup
		ternRepositoryField = new TernRepositoryFieldEditor(TernNodejsCoreConstants.NODEJS_TERN_REPOSITORY,
				TernNodejsUIMessages.TernNodejsPreferencesPage_ternRepository_label, parent, workbench);
		addField(ternRepositoryField);

		GridData gd = new GridData();
		gd.horizontalIndent = 25;
		ternRepositoryField.getLabelControl(parent).setLayoutData(gd);

		// debugger wiki
		Link debuggerWikiLink = debuggerField.createWikiLink(parent, SWT.NONE);
		gd = new GridData(SWT.FILL, SWT.FILL, false, false, 5, 1);
		gd.horizontalIndent = 25;
		debuggerWikiLink.setLayoutData(gd);

		// Node configuration panel
		nodeJSConfigEditor = new NodeJSConfigEditor(parent, TernNodejsCoreConstants.NODEJS_INSTALL,
				TernNodejsCoreConstants.NODEJS_PATH);
		ComboFieldEditor nodeJSInstallField = nodeJSConfigEditor.getNodeJSInstallField();
		addField(nodeJSInstallField);
		FileComboFieldEditor nativeNodePath = nodeJSConfigEditor.getNativeNodePath();
		addField(nativeNodePath);
	}

	private void createSeparator(Composite parent) {
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
		ternRepositoryField.setEnabled(debuggerField.isCheckboxSelected(), parent);
		nodeJSConfigEditor.setEnabled(!isRemote, parent);
	}

	@Override
	protected void initialize() {
		super.initialize();
		// Update enable/disable of the nodejs path field.
		boolean isRemote = getPreferenceStore().getBoolean(TernNodejsCoreConstants.NODEJS_REMOTE_ACCESS);
		nodeJSConfigEditor.updateNodePath(getNodejsInstall(false), isRemote, getFieldEditorParent());
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
		nodeJSConfigEditor.updateNodePath(getNodejsInstall(true), isRemote, getFieldEditorParent());
		remoteAccessButton.setSelection(isRemote);
		directAccessButton.setSelection(!isRemote);
		updateEnabled(isRemote);
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

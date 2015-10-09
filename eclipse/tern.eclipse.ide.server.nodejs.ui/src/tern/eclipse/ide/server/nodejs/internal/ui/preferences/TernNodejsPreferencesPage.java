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

import java.util.Collection;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.Path;
import org.eclipse.core.runtime.preferences.InstanceScope;
import org.eclipse.jface.preference.BooleanFieldEditor;
import org.eclipse.jface.preference.ComboFieldEditor;
import org.eclipse.jface.preference.FieldEditorPreferencePage;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.preference.IntegerFieldEditor;
import org.eclipse.jface.preference.StringButtonFieldEditor;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.jface.viewers.ViewerFilter;
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
import tern.eclipse.ide.server.nodejs.core.INodejsDebugger;
import tern.eclipse.ide.server.nodejs.core.INodejsInstall;
import tern.eclipse.ide.server.nodejs.core.NodejsDebuggersManager;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCoreConstants;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCorePlugin;
import tern.eclipse.ide.server.nodejs.internal.ui.TernNodejsUIMessages;
import tern.eclipse.ide.server.nodejs.internal.ui.preferences.WorkspaceResourceSelectionDialog.Mode;
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
	private CheckComboFieldEditor debuggerField;
	private StringButtonFieldEditor ternServerFile;
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

		// Debugger setup
		Collection<INodejsDebugger> list = NodejsDebuggersManager
				.getDebuggers();
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
		debuggerField = new CheckComboFieldEditor(
				TernNodejsCoreConstants.NODEJS_DEBUGGER,
				TernNodejsUIMessages.TernNodejsPreferencesPage_debugger_label,
				debuggers, "", parent) { //$NON-NLS-1$
			@Override
			protected void updateComboBoxEnablement(Composite parent,
					boolean enabled) {
				super.updateComboBoxEnablement(parent, enabled);
				ternServerFile.setEnabled(enabled, parent);
			}
		};
		addField(debuggerField);

		ternServerFile = new StringButtonFieldEditor(
				TernNodejsCoreConstants.NODEJS_TERN_SERVER_DEBUG_FILE,
				TernNodejsUIMessages.TernNodejsPreferencesPage_ternServerFile_label,
				parent) {

			@Override
			protected boolean doCheckState() {
				String file = getStringValue();
				return !debuggerField.isCheckboxSelected()
						|| ResourcesPlugin.getWorkspace().getRoot()
								.getFile(new Path(file)).exists();
			}

			@Override
			protected String changePressed() {
				WorkspaceResourceSelectionDialog dialog = new WorkspaceResourceSelectionDialog(
						getShell(),
						Mode.FILE,
						TernNodejsUIMessages.TernNodejsPreferencesPage_ternServerFile_dialog_title,
						TernNodejsUIMessages.TernNodejsPreferencesPage_ternServerFile_dialog_msg);
				dialog.setAllowMultiple(false);
				dialog.addFilter(new ViewerFilter() {

					@Override
					public boolean select(Viewer viewer, Object parentElement,
							Object element) {
						if (element instanceof IFile) {
							IFile file = (IFile) element;
							return file.getName().equals("tern") //$NON-NLS-1$
									&& file.getParent().getName().equals("bin"); //$NON-NLS-1$
						}

						if (element instanceof IProject
								&& !((IProject) element).isOpen())
							return false;

						if (element instanceof IContainer) { // i.e. IProject,
																// IFolder
							try {
								IResource[] resources = ((IContainer) element)
										.members();
								for (int i = 0; i < resources.length; i++) {
									if (select(viewer, parent, resources[i]))
										return true;
								}
							} catch (CoreException e) {
							}
						}
						return false;
					}
				});
				dialog.open();
				Object result = dialog.getFirstResult();
				if (result instanceof IFile) {
					IFile file = (IFile) dialog.getFirstResult();
					return file.getFullPath().toString();
				}
				return null;
			}
		};
		ternServerFile.setEmptyStringAllowed(false);
		ternServerFile
				.setErrorMessage(TernNodejsUIMessages.TernNodejsPreferencesPage_ternServerFile_error);
		ternServerFile
				.setChangeButtonText(TernNodejsUIMessages.TernNodejsPreferencesPage_ternServerFile_browse);
		ternServerFile.getTextControl(parent).setEditable(false);
		addField(ternServerFile);

		GridData gd = new GridData();
		gd.horizontalIndent = 25;
		ternServerFile.getLabelControl(parent).setLayoutData(gd);

		// Tern Server type combo
		INodejsInstall[] installs = TernNodejsCorePlugin
				.getNodejsInstallManager().getNodejsInstalls();
		String[][] data = new String[installs.length + 1][2];
		data[0][0] = TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSInstall_emptyValue;
		data[0][1] = ""; //$NON-NLS-1$

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
		debuggerField.setEnabled(!isRemote, parent);
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
		return new ScopedPreferenceStore(InstanceScope.INSTANCE,
				TernNodejsCorePlugin.PLUGIN_ID);
	}

	@Override
	public boolean performOk() {
		boolean result = super.performOk();
		IPreferenceStore store = getPreferenceStore();
		store.setValue(TernNodejsCoreConstants.NODEJS_REMOTE_ACCESS,
				remoteAccessButton.getSelection());
		TernCorePlugin.getTernServerTypeManager().fireServerPreferencesChanged(
				null);
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

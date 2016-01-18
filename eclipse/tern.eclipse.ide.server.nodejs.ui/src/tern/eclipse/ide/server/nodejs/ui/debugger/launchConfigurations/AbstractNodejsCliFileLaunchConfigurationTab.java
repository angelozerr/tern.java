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
package tern.eclipse.ide.server.nodejs.ui.debugger.launchConfigurations;

import java.io.File;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.variables.IStringVariableManager;
import org.eclipse.core.variables.VariablesPlugin;
import org.eclipse.debug.core.ILaunchConfiguration;
import org.eclipse.debug.core.ILaunchConfigurationWorkingCopy;
import org.eclipse.debug.ui.AbstractLaunchConfigurationTab;
import org.eclipse.jface.dialogs.IDialogConstants;
import org.eclipse.osgi.util.NLS;
import org.eclipse.swt.SWT;
import org.eclipse.swt.accessibility.AccessibleAdapter;
import org.eclipse.swt.accessibility.AccessibleEvent;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.FileDialog;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Link;
import org.eclipse.swt.widgets.Text;
import org.eclipse.ui.dialogs.ResourceSelectionDialog;
import tern.eclipse.ide.server.nodejs.core.IDENodejsProcessHelper;
import tern.eclipse.ide.server.nodejs.core.INodejsInstall;
import tern.eclipse.ide.server.nodejs.core.INodejsInstallManager;
import tern.eclipse.ide.server.nodejs.core.TernNodejsCorePlugin;
import tern.eclipse.ide.server.nodejs.core.debugger.launchConfigurations.INodejsCliFileLaunchConfigurationConstants;
import tern.eclipse.ide.server.nodejs.core.debugger.launchConfigurations.NodejsCliFileHelper;
import tern.eclipse.ide.server.nodejs.internal.ui.TernNodejsUIMessages;
import tern.eclipse.ide.server.nodejs.internal.ui.TernNodejsUIPlugin;
import tern.eclipse.ide.server.nodejs.internal.ui.preferences.DebuggerFieldEditor;
import tern.eclipse.ide.server.nodejs.internal.ui.preferences.NodeJSConfigEditor;
import tern.utils.StringUtils;

/**
 * Abstract class for tab of launch of client file (ex: protractor tab).
 */
public abstract class AbstractNodejsCliFileLaunchConfigurationTab extends AbstractLaunchConfigurationTab {

	private Text cliFileField;
	private Button workspaceLocationButton;
	private Button variablesLocationButton;

	protected boolean fInitializing = false;
	private boolean userEdited = false;
	protected WidgetListener fListener = new WidgetListener();
	private Combo debuggerField;
	private String[][] debuggers;

	private Label nodePathTitle;
	private Text nodePathInfo;
	private Combo nodeInstallField;
	private String[][] nodeInstalls;
	private Combo nodePathField;
	private Button nodePathButton;

	/**
	 * A listener to update for text modification and widget selection.
	 */
	protected class WidgetListener extends SelectionAdapter implements ModifyListener {
		@Override
		public void modifyText(ModifyEvent e) {
			updateLaunchConfiguration();
		}

		protected void updateLaunchConfiguration() {
			if (!fInitializing) {
				setDirty(true);
				userEdited = true;
				updateLaunchConfigurationDialog();
			}
		}

		@Override
		public void widgetSelected(SelectionEvent e) {
			setDirty(true);
			Object source = e.getSource();
			if (source == workspaceLocationButton) {
				handleWorkspaceLocationButtonSelected();
			} else if (source == debuggerField || source == nodeInstallField || source == nodePathField) {
				updateLaunchConfiguration();
			} else if (source == nodePathButton) {
				handleNodePathButtonSelected();
			}
		}
	}

	@Override
	public void createControl(Composite parent) {
		Composite mainComposite = new Composite(parent, SWT.NONE);
		setControl(mainComposite);
		mainComposite.setFont(parent.getFont());
		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		GridData gridData = new GridData(GridData.FILL_HORIZONTAL);
		mainComposite.setLayout(layout);
		mainComposite.setLayoutData(gridData);

		createCliFileComponent(mainComposite);
		createDebuggerComponent(mainComposite);
		createNodeInstallComponent(mainComposite);
	}

	private void createCliFileComponent(Composite parent) {
		Group group = new Group(parent, SWT.NONE);
		String cliFileLabel = getCliFileLabel();
		group.setText(cliFileLabel);
		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		GridData gridData = new GridData(GridData.FILL_HORIZONTAL);
		group.setLayout(layout);
		group.setLayoutData(gridData);

		cliFileField = new Text(group, SWT.BORDER);
		gridData = new GridData(GridData.FILL_HORIZONTAL);
		gridData.widthHint = IDialogConstants.ENTRY_FIELD_WIDTH;
		cliFileField.setLayoutData(gridData);
		cliFileField.addModifyListener(fListener);
		addControlAccessibleListener(cliFileField, group.getText());

		Composite buttonComposite = new Composite(group, SWT.NONE);
		layout = new GridLayout();
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		layout.numColumns = 3;
		gridData = new GridData(GridData.HORIZONTAL_ALIGN_END);
		buttonComposite.setLayout(layout);
		buttonComposite.setLayoutData(gridData);
		buttonComposite.setFont(parent.getFont());

		workspaceLocationButton = createPushButton(buttonComposite, TernNodejsUIMessages.Button_browse_workspace, null);
		workspaceLocationButton.addSelectionListener(fListener);
		addControlAccessibleListener(workspaceLocationButton,
				group.getText() + " " + workspaceLocationButton.getText()); //$NON-NLS-1$

		// fileLocationButton= createPushButton(buttonComposite,
		// TernNodejsUIMessages.ExternalToolsMainTab_Brows_e_File_System____4,
		// null);
		// fileLocationButton.addSelectionListener(fListener);
		// addControlAccessibleListener(fileLocationButton, group.getText() + "
		// " + fileLocationButton.getText()); //$NON-NLS-1$

		variablesLocationButton = createPushButton(buttonComposite, TernNodejsUIMessages.Button_variables, null);
		variablesLocationButton.addSelectionListener(fListener);
		addControlAccessibleListener(variablesLocationButton,
				group.getText() + " " + variablesLocationButton.getText()); //$NON-NLS-1$

	}

	private void createDebuggerComponent(Composite parent) {
		Group group = new Group(parent, SWT.NONE);
		String debuggerLabel = TernNodejsUIMessages.TernNodejsPreferencesPage_debugger_label;
		group.setText(debuggerLabel);
		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		GridData gridData = new GridData(GridData.FILL_HORIZONTAL);
		group.setLayout(layout);
		group.setLayoutData(gridData);

		debuggers = DebuggerFieldEditor.createDebuggers();
		debuggerField = new Combo(group, SWT.READ_ONLY);
		debuggerField.setFont(group.getFont());
		for (int i = 0; i < debuggers.length; i++) {
			debuggerField.add(debuggers[i][0], i);
		}
		debuggerField.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		debuggerField.addSelectionListener(fListener);
		addControlAccessibleListener(debuggerField, group.getText());

		Link debuggerWikiLink = DebuggerFieldEditor.newWikiLink(group, SWT.NONE);
		GridData gd = new GridData(GridData.FILL_HORIZONTAL);
		debuggerWikiLink.setLayoutData(gd);
	}

	private void createNodeInstallComponent(Composite parent) {
		Group group = new Group(parent, SWT.NONE);
		String nodeInstallLabel = TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSInstall;
		group.setText(nodeInstallLabel);
		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		GridData gridData = new GridData(GridData.FILL_HORIZONTAL);
		group.setLayout(layout);

		nodeInstalls = NodeJSConfigEditor.createNodeInstalls();
		nodeInstallField = new Combo(group, SWT.READ_ONLY);
		nodeInstallField.setFont(group.getFont());
		for (int i = 0; i < nodeInstalls.length; i++) {
			nodeInstallField.add(nodeInstalls[i][0], i);
		}
		nodeInstallField.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		nodeInstallField.addSelectionListener(fListener);
		nodeInstallField.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				int nodeInstallSelectionIndex = nodeInstallField.getSelectionIndex();
				String nodeInstallId = nodeInstalls[nodeInstallSelectionIndex][1];
				INodejsInstall install = TernNodejsCorePlugin.getNodejsInstallManager()
						.findNodejsInstall(nodeInstallId);
				if (install == null || install.isNative()) {
					nodePathField.setEnabled(true);
					String defaultPath = IDENodejsProcessHelper.getNodejsPath();
					nodePathField.setText(defaultPath);
					nodePathInfo.setText(defaultPath);

				} else {
					nodePathField.setEnabled(false);
					nodePathInfo.setText(install.getPath().getAbsolutePath());
				}
			}
		});
		addControlAccessibleListener(nodeInstallField, group.getText());

		Composite pathComponent = new Composite(group, SWT.NONE);
		pathComponent.setLayout(new GridLayout(2, false));
		pathComponent.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		nodePathField = new Combo(pathComponent, SWT.NONE);
		nodePathField.setFont(pathComponent.getFont());
		nodePathField.setItems(IDENodejsProcessHelper.getDefaultNodejsPaths());
		nodePathField.addSelectionListener(fListener);
		nodePathField.addModifyListener(fListener);
		nodePathField.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		addControlAccessibleListener(nodePathField, group.getText());

		nodePathButton = createPushButton(pathComponent, TernNodejsUIMessages.Button_browse, null);
		nodePathButton.addSelectionListener(fListener);
		addControlAccessibleListener(nodePathButton, group.getText() + " " + nodePathButton.getText()); //$NON-NLS-1$

		group.setLayoutData(gridData);

		createNodePathInfo(group);
	}

	private void createNodePathInfo(Composite parent) {
		// Node path label
		nodePathTitle = new Label(parent, SWT.NONE);
		nodePathTitle.setText(TernNodejsUIMessages.TernNodejsPreferencesPage_nodeJSPath);
		GridData gridData = new GridData(GridData.VERTICAL_ALIGN_BEGINNING);
		nodePathTitle.setLayoutData(gridData);

		nodePathInfo = new Text(parent, SWT.WRAP | SWT.READ_ONLY);
		nodePathInfo.setText(""); //$NON-NLS-1$
		gridData = new GridData(GridData.FILL_BOTH);
		gridData.horizontalSpan = 2;
		gridData.widthHint = 200;
		nodePathInfo.setLayoutData(gridData);
	}

	@Override
	public void initializeFrom(ILaunchConfiguration configuration) {
		fInitializing = true;
		updateCliFile(configuration);
		updateDebugger(configuration);
		updateNodeInstallPath(configuration);
		fInitializing = false;
		setDirty(false);
	}

	private void updateCliFile(ILaunchConfiguration configuration) {
		String cliFile = "";
		try {
			cliFile = configuration.getAttribute(getCliFileLaunchAttrId(), "");
		} catch (CoreException ce) {
			TernNodejsUIPlugin.getDefault().getLog().log(new Status(IStatus.ERROR, TernNodejsUIPlugin.PLUGIN_ID,
					TernNodejsUIMessages.AbstractNodejsCliFileLaunchConfigurationTab_Error_reading_configuration, ce));
		}
		cliFileField.setText(cliFile);
	}

	private void updateDebugger(ILaunchConfiguration configuration) {
		try {
			String debuggerId = configuration.getAttribute(getDebuggerLaunchAttrId(), "");
			for (int i = 0; i < debuggers.length; i++) {
				if (debuggers[i][1].equals(debuggerId)) {
					debuggerField.setText(debuggers[i][0]);
					break;
				}
			}
		} catch (CoreException ce) {
			TernNodejsUIPlugin.getDefault().getLog().log(new Status(IStatus.ERROR, TernNodejsUIPlugin.PLUGIN_ID,
					TernNodejsUIMessages.AbstractNodejsCliFileLaunchConfigurationTab_Error_reading_configuration, ce));
		}
	}

	private void updateNodeInstallPath(ILaunchConfiguration configuration) {
		try {
			String nodeInstall = configuration.getAttribute(getNodeInstallLaunchAttrId(), "");
			for (int i = 0; i < nodeInstalls.length; i++) {
				if (nodeInstalls[i][1].equals(nodeInstall)) {
					nodeInstallField.setText(nodeInstalls[i][0]);
					break;
				}
			}
			String nodePath = configuration.getAttribute(getNodePathLaunchAttrId(), "");
			nodePathField.setText(nodePath);
			INodejsInstallManager installManager = TernNodejsCorePlugin.getNodejsInstallManager();
			INodejsInstall nodejsInstall = installManager.findNodejsInstall(nodeInstall);
			nodePathField.setEnabled(nodejsInstall != null && nodejsInstall.isNative());
		} catch (CoreException ce) {
			TernNodejsUIPlugin.getDefault().getLog().log(new Status(IStatus.ERROR, TernNodejsUIPlugin.PLUGIN_ID,
					TernNodejsUIMessages.AbstractNodejsCliFileLaunchConfigurationTab_Error_reading_configuration, ce));
		}
	}

	@Override
	public void performApply(ILaunchConfigurationWorkingCopy configuration) {
		// cli file
		String cliFile = cliFileField.getText().trim();
		if (cliFile.length() == 0) {
			configuration.setAttribute(getCliFileLaunchAttrId(), (String) null);
		} else {
			configuration.setAttribute(getCliFileLaunchAttrId(), cliFile);
		}
		// debugger
		int debuggerSelectionIndex = debuggerField.getSelectionIndex();
		if (debuggerSelectionIndex >= 0) {
			configuration.setAttribute(getDebuggerLaunchAttrId(), debuggers[debuggerSelectionIndex][1]);
		}
		// node install
		int nodeInstallSelectionIndex = nodeInstallField.getSelectionIndex();
		if (nodeInstallSelectionIndex >= 0) {
			configuration.setAttribute(getNodeInstallLaunchAttrId(), nodeInstalls[nodeInstallSelectionIndex][1]);
		}
		// node path
		String nodePath = nodePathField.getText();
		if (nodePath.length() == 0) {
			configuration.setAttribute(getNodePathLaunchAttrId(), (String) null);
		} else {
			configuration.setAttribute(getNodePathLaunchAttrId(), nodePath);
		}
	}

	@Override
	public void setDefaults(ILaunchConfigurationWorkingCopy configuration) {
		// cli file
		IFile cliFile = getDefaultCliFile();
		if (cliFile == null) {
			configuration.setAttribute(getCliFileLaunchAttrId(), (String) null);
		} else {
			configuration.setAttribute(getCliFileLaunchAttrId(), NodejsCliFileHelper.getWorkspaceLoc(cliFile));
		}
		// debugger
		String debugger = getDefaultDebugger();
		if (StringUtils.isEmpty(debugger)) {
			configuration.setAttribute(getDebuggerLaunchAttrId(), (String) null);
		} else {
			configuration.setAttribute(getDebuggerLaunchAttrId(), debugger);
		}
		// node install
		String nodeInstall = getDefaultNodeInstall();
		if (StringUtils.isEmpty(nodeInstall)) {
			configuration.setAttribute(getNodeInstallLaunchAttrId(), (String) null);
		} else {
			configuration.setAttribute(getNodeInstallLaunchAttrId(), nodeInstall);
		}
		// node path
		String nodePath = getDefaultNodePath();
		if (StringUtils.isEmpty(nodePath)) {
			configuration.setAttribute(getNodePathLaunchAttrId(), (String) null);
		} else {
			configuration.setAttribute(getNodePathLaunchAttrId(), nodePath);
		}

	}

	/**
	 * Prompts the user for a workspace location within the workspace and sets
	 * the location as a String containing the workspace_loc variable or
	 * <code>null</code> if no location was obtained from the user.
	 */
	protected void handleWorkspaceLocationButtonSelected() {
		ResourceSelectionDialog dialog;
		dialog = new ResourceSelectionDialog(getShell(), ResourcesPlugin.getWorkspace().getRoot(),
				TernNodejsUIMessages.AbstractNodejsCliFileLaunchConfigurationTab_Select_a_client_file);
		dialog.open();
		Object[] results = dialog.getResult();
		if (results == null || results.length < 1) {
			return;
		}
		IResource resource = (IResource) results[0];
		cliFileField.setText(NodejsCliFileHelper.getWorkspaceLoc(resource));
	}

	protected void handleNodePathButtonSelected() {
		FileDialog fileDialog = new FileDialog(getShell(), SWT.NONE);
		fileDialog.setFileName(nodePathField.getText());
		String text = fileDialog.open();
		if (text != null) {
			nodePathField.setText(text);
		}
	}

	/*
	 * Fix for Bug 60163 Accessibility: New Builder Dialog missing object info
	 * for textInput controls
	 */
	public void addControlAccessibleListener(Control control, String controlName) {
		// strip mnemonic (&)
		String[] strs = controlName.split("&"); //$NON-NLS-1$
		StringBuffer stripped = new StringBuffer();
		for (int i = 0; i < strs.length; i++) {
			stripped.append(strs[i]);
		}
		control.getAccessible().addAccessibleListener(new ControlAccessibleListener(stripped.toString()));
	}

	private class ControlAccessibleListener extends AccessibleAdapter {
		private String controlName;

		ControlAccessibleListener(String name) {
			controlName = name;
		}

		@Override
		public void getName(AccessibleEvent e) {
			e.result = controlName;
		}

	}

	private String getCliFileLaunchAttrId() {
		return INodejsCliFileLaunchConfigurationConstants.ATTR_CLI_FILE;
	}

	private String getDebuggerLaunchAttrId() {
		return INodejsCliFileLaunchConfigurationConstants.ATTR_DEBUGGER;
	}

	private String getNodeInstallLaunchAttrId() {
		return INodejsCliFileLaunchConfigurationConstants.ATTR_NODE_INSTALL;
	}

	private String getNodePathLaunchAttrId() {
		return INodejsCliFileLaunchConfigurationConstants.ATTR_NODE_PATH;
	}

	@Override
	public boolean isValid(ILaunchConfiguration launchConfig) {
		setErrorMessage(null);
		setMessage(null);
		return (validateCliFile() && validateDebugger() && validateNodeInstallPath());
	}

	private boolean validateCliFile() {
		String cliFile = this.cliFileField.getText().trim();
		if (StringUtils.isEmpty(cliFile)) {
			return true;
		}
		String expandedLocation = null;
		try {
			expandedLocation = resolveValue(cliFile);
			if (expandedLocation == null)
				return true;
		} catch (CoreException e) {
			setErrorMessage(e.getStatus().getMessage());
			return false;
		}

		File file = new File(expandedLocation);
		if (!(file.exists())) {
			setErrorMessage(
					TernNodejsUIMessages.AbstractNodejsCliFileLaunchConfigurationTab_client_file_does_not_exist);
			return false;
		}
		if (!(file.isFile())) {
			setErrorMessage(TernNodejsUIMessages.ExternalToolsMainTab_client_file_specified_is_not_a_file);
			return false;
		}
		return true;
	}

	private String resolveValue(String expression) throws CoreException {
		String expanded = null;
		try {
			expanded = getValue(expression);
		} catch (CoreException localCoreException) {
			validateVariables(expression);
			throw localCoreException;
		}
		return expanded;
	}

	private String getValue(String expression) throws CoreException {
		IStringVariableManager manager = VariablesPlugin.getDefault().getStringVariableManager();
		return manager.performStringSubstitution(expression);
	}

	private void validateVariables(String expression) throws CoreException {
		IStringVariableManager manager = VariablesPlugin.getDefault().getStringVariableManager();
		manager.validateStringVariables(expression);
	}

	private boolean validateDebugger() {
		int debuggerSelectionIndex = debuggerField.getSelectionIndex();
		if (debuggerSelectionIndex <= 0) {
			setErrorMessage(TernNodejsUIMessages.AbstractNodejsCliFileLaunchConfigurationTab_debugger_required);
			return false;
		}
		String debuggerId = debuggers[debuggerSelectionIndex][1];
		if (StringUtils.isEmpty(debuggerId)) {
			setErrorMessage(TernNodejsUIMessages.AbstractNodejsCliFileLaunchConfigurationTab_debugger_not_installed);
			return false;
		}
		return true;
	}

	private boolean validateNodeInstallPath() {
		int nodeInstallSelectionIndex = nodeInstallField.getSelectionIndex();
		if (nodeInstallSelectionIndex <= 0) {
			setErrorMessage(TernNodejsUIMessages.AbstractNodejsCliFileLaunchConfigurationTab_nodeInstall_required);
			return false;
		}
		INodejsInstallManager installManager = TernNodejsCorePlugin.getNodejsInstallManager();
		String nodeInstallId = nodeInstalls[nodeInstallSelectionIndex][1];
		INodejsInstall nodejsInstall = installManager.findNodejsInstall(nodeInstallId);
		if (nodejsInstall == null) {
			setErrorMessage(
					NLS.bind(TernNodejsUIMessages.AbstractNodejsCliFileLaunchConfigurationTab_nodeInstall_not_found,
							nodeInstallId));
			return false;
		}
		if (nodejsInstall.isNative()) {
			// validate node path
			String nodePath = nodePathField.getText();
			if (StringUtils.isEmpty(nodePath)) {
				setErrorMessage(TernNodejsUIMessages.AbstractNodejsCliFileLaunchConfigurationTab_nodePath_required);
				return false;
			}
			if (!new File(nodePath).exists() && !nodePath.equals("node")) {
				setErrorMessage(NLS.bind(
						TernNodejsUIMessages.AbstractNodejsCliFileLaunchConfigurationTab_nodePath_not_found, nodePath));
				return false;
			}
		}
		return true;
	}

	protected abstract String getCliFileLabel();

	protected abstract IFile getDefaultCliFile();

	protected abstract String getDefaultDebugger();

	protected abstract String getDefaultNodeInstall();

	protected abstract String getDefaultNodePath();

}

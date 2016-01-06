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
package tern.eclipse.ide.linter.ui.properties;

import java.io.File;
import java.util.Collection;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.dialogs.IDialogSettings;
import org.eclipse.jface.layout.TreeColumnLayout;
import org.eclipse.jface.preference.PreferencePage;
import org.eclipse.jface.viewers.ColumnWeightData;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.TreeColumnViewerLabelProvider;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.jface.viewers.TreeViewerColumn;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.SashForm;
import org.eclipse.swt.custom.StackLayout;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.FileDialog;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;
import org.eclipse.swt.widgets.Tree;

import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

import tern.TernException;
import tern.eclipse.ide.core.IWorkingCopy;
import tern.eclipse.ide.core.IWorkingCopyListener;
import tern.eclipse.ide.linter.core.ITernLinterConfig;
import tern.eclipse.ide.linter.core.ITernLinterOption;
import tern.eclipse.ide.linter.core.TernLinterCorePlugin;
import tern.eclipse.ide.linter.internal.ui.TernLinterUIMessages;
import tern.eclipse.ide.linter.internal.ui.TernLinterUIPlugin;
import tern.eclipse.ide.linter.internal.ui.Trace;
import tern.eclipse.ide.linter.ui.viewers.LinterConfigContentProvider;
import tern.eclipse.ide.linter.ui.viewers.LinterConfigLabelProvider;
import tern.eclipse.ide.linter.ui.viewers.LinterOptionEditingSupport;
import tern.eclipse.ide.ui.controls.AbstractTreeBlock;
import tern.eclipse.ide.ui.dialogs.OpenResourceDialog;
import tern.server.ITernModule;
import tern.server.ITernModuleConfigurable;
import tern.utils.StringUtils;

/**
 * Block which hosts the Tree of the Tern linter options.
 * 
 */
public class TernLinterOptionsBlock extends AbstractTreeBlock implements
		IWorkingCopyListener {

	// JSON field for linter config.
	private static final String CONFIG_FILE_FIELD = "configFile";
	private static final String CONFIG_FIELD = "config";
	
	private final String linterId;
	private String linterConfigFilename;

	private final IWorkingCopy workingCopy;
	private final PreferencePage preferencePage;
	
	private TreeViewer treeViewer;

	private TernLinterOptionsPanel optionsPanel;
	private Button enableCheckbox;
	private Button useConfigFilesCheckbox;

	// Use config
	private Text linterConfigFileText;
	private Button projectBrowserButton;
	private Button workspaceBrowserButton;
	private Button filesystemBrowserButton;
	
	// Composite panel stack.
	private Composite contentPanel;
	private Composite configPage;
	private Composite configFilePage;

	public TernLinterOptionsBlock(String linterId, IWorkingCopy workingCopy, PreferencePage preferencePage) {
		this.linterId = linterId;
		this.workingCopy = workingCopy;
		this.preferencePage = preferencePage;
		this.linterConfigFilename = TernLinterCorePlugin.getDefault()
				.getTernLinterConfigurationsManager().getFilename(linterId);
		workingCopy.addWorkingCopyListener(this);
	}

	public Control createControl(Composite ancestor) {

		Composite parent = new Composite(ancestor, SWT.NONE);
		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		parent.setLayout(layout);
		Font font = ancestor.getFont();
		parent.setFont(font);

		createHeader(parent);
		createSeparator(parent);
		this.contentPanel = createBody(parent);

		// Display page
		displayPage();

		Dialog.applyDialogFont(parent);
		return parent;
	}

	protected void createSeparator(Composite parent) {
		Label line = new Label(parent, SWT.SEPARATOR | SWT.HORIZONTAL);
		line.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_FILL));
	}

	private void createHeader(Composite parent) {
		Composite header = new Composite(parent, SWT.NONE);
		GridData data = new GridData(GridData.FILL_HORIZONTAL);
		data.horizontalSpan = 2;
		header.setLayoutData(data);
		header.setLayout(new GridLayout(6, false));

		// Create "Enable" checkbox
		enableCheckbox = new Button(header, SWT.CHECK);
		enableCheckbox
				.setText(TernLinterUIMessages.TernLinterOptionsBlock_enable);
		enableCheckbox.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent event) {
				boolean checked = enableCheckbox.getSelection();
				// Update UI
				updateEnabled();
				try {
					// update working copy
					ITernModule module = workingCopy.getTernModule(linterId);
					if (module != null) {
						if (checked) {
							workingCopy.getCheckedModules().add(module);
						} else {
							workingCopy.getCheckedModules().remove(module);
						}
					}
				} catch (TernException e) {
					Trace.trace(Trace.SEVERE,
							"Error while updating working copy", e);
				}

			}
		});

		if (canUseConfigFiles()) {
			// Create "Use config files" checkbox
			useConfigFilesCheckbox = new Button(header, SWT.CHECK);
			useConfigFilesCheckbox
					.setText(TernLinterUIMessages.TernLinterOptionsBlock_useConfigFiles);
			useConfigFilesCheckbox.addSelectionListener(new SelectionAdapter() {
				@Override
				public void widgetSelected(SelectionEvent e) {
					displayPage();
				}
			});
		}

		// Update "Enable" checkbox according if the linter exists in the
		// .tern-project.
		enableCheckbox.setSelection(hasLinter());

	}

	protected boolean canUseConfigFiles() {
		return !StringUtils.isEmpty(linterConfigFilename);
	}

	private void displayPage() {
		((StackLayout) contentPanel.getLayout()).topControl = isUseConfigFiles() ? configFilePage
				: configPage;
		contentPanel.layout();
	}

	private void updateEnabled() {
		Boolean checked = enableCheckbox.getSelection();
		if (useConfigFilesCheckbox != null) {
			useConfigFilesCheckbox.setEnabled(checked);
		}
		if (linterConfigFileText != null) {
			linterConfigFileText.setEnabled(checked);
			projectBrowserButton.setEnabled(checked);
			workspaceBrowserButton.setEnabled(checked);
			filesystemBrowserButton.setEnabled(checked);
		}
		if (optionsPanel != null) {
			optionsPanel.updateEnabled(checked);
		}
		treeViewer.getTree().setEnabled(checked);
	}

	protected Composite createBody(Composite parent) {
		Composite contentPanel = new Composite(parent, SWT.NONE);
		GridData data = new GridData(GridData.FILL_HORIZONTAL);
		data.heightHint = 400;
		contentPanel.setLayoutData(data);
		StackLayout layout = new StackLayout();
		contentPanel.setLayout(layout);
		this.configPage = createConfigPage(contentPanel);
		if (canUseConfigFiles()) {
			this.configFilePage = createConfigFilePage(contentPanel);
		}
		return contentPanel;
	}

	// -------------------- Config Page

	/**
	 * 
	 * @param parent
	 */
	protected Composite createConfigPage(Composite parent) {
		SashForm sashForm = new SashForm(parent, SWT.HORIZONTAL | SWT.SMOOTH);
		GridData data = new GridData(GridData.FILL_HORIZONTAL);
		sashForm.setLayoutData(data);
		createOptionsMaster(sashForm);
		createOptionsDetails(sashForm);
		return sashForm;
	}

	/**
	 * Create tree of tern linter config options.
	 * 
	 * @param ancestor
	 */
	private void createOptionsMaster(Composite ancestor) {
		Composite parent = new Composite(ancestor, SWT.NONE);
		parent.setLayoutData(new GridData(GridData.FILL_BOTH));
		TreeColumnLayout layout = new TreeColumnLayout();
		parent.setLayout(layout);
		Font font = ancestor.getFont();
		parent.setFont(font);

		// Create Tree
		treeViewer = new TreeViewer(parent, SWT.BORDER | SWT.FULL_SELECTION
				| SWT.V_SCROLL | SWT.MULTI);
		Tree tree = treeViewer.getTree();
		tree.setHeaderVisible(false);
		tree.setLinesVisible(true);

		GridData data = new GridData(GridData.FILL_BOTH);
		data.minimumHeight= 400;
		tree.setLayoutData(data);

		treeViewer
				.setContentProvider(LinterConfigContentProvider.getInstance());

		// Create label column
		TreeViewerColumn labelColumnViewer = new TreeViewerColumn(treeViewer,
				SWT.LEFT);
		labelColumnViewer.setLabelProvider(new TreeColumnViewerLabelProvider(
				LinterConfigLabelProvider.getInstance()));
		layout.setColumnData(labelColumnViewer.getColumn(),
				new ColumnWeightData(1, 150));

		// Create value column
		TreeViewerColumn valueColumnViewer = new TreeViewerColumn(treeViewer,
				SWT.LEFT);
		valueColumnViewer.setLabelProvider(new TreeColumnViewerLabelProvider(
				LinterConfigLabelProvider.getInstance()));
		valueColumnViewer.setEditingSupport(new LinterOptionEditingSupport(
				valueColumnViewer.getViewer()));
		layout.setColumnData(valueColumnViewer.getColumn(),
				new ColumnWeightData(1, 100));

		// Add tree selection listener to refresh the detail information of teh
		// selected option
		treeViewer.addSelectionChangedListener(new ISelectionChangedListener() {

			@Override
			public void selectionChanged(SelectionChangedEvent e) {
				if (!e.getSelection().isEmpty()) {
					ITernLinterOption option = (ITernLinterOption) ((IStructuredSelection) e
							.getSelection()).getFirstElement();
					refreshOption(option);
				} else {
					refreshOption(null);
				}
			}
		});
		restoreColumnSettings();
	}

	protected void refreshOption(ITernLinterOption option) {
		optionsPanel.refresh(option);
	}

	private void createOptionsDetails(Composite parent) {
		this.optionsPanel = new TernLinterOptionsPanel(parent, null);
	}

	// -------------------- Config File Page

	/**
	 * 
	 * @param parent
	 */
	protected Composite createConfigFilePage(Composite parent) {
		Composite page = new Composite(parent, SWT.NONE);
		page.setLayoutData(new GridData(GridData.FILL_BOTH));
		page.setLayout(new GridLayout(3, false));
		
		createConfigFileText(page);		
		createBrowseButtons(page);
		
		return page;
	}

	protected void createConfigFileText(Composite parent) {
		Composite container = new Composite(parent, SWT.NONE);
		container.setLayout(new GridLayout(2, false));
		GridData data = new GridData(GridData.FILL_BOTH);
		data.verticalAlignment = SWT.BEGINNING; 
		container.setLayoutData(data);
		
		Label linterConfigFileLabel = new Label(container, SWT.NONE);
		linterConfigFileLabel.setText(new StringBuilder(linterConfigFilename)
				.append(":").toString());
		linterConfigFileText = new Text(container, SWT.BORDER);
		linterConfigFileText.addModifyListener(new ModifyListener() {

			@Override
			public void modifyText(ModifyEvent e) {
				validate();
			}			
		});
		linterConfigFileText.setLayoutData(new GridData(
				GridData.FILL_HORIZONTAL));
	}

	private void createBrowseButtons(Composite parent) {
		Composite container = new Composite(parent, SWT.NONE);
		container.setLayout(new GridLayout(1, true));
		container.setLayoutData(new GridData(GridData.FILL_VERTICAL));
		
		final Shell shell = parent.getShell();
		final IProject project = workingCopy
				.getProject().getProject();
		
		// Browse files config of Project
		projectBrowserButton = new Button(container, SWT.NONE);
		projectBrowserButton.setText(TernLinterUIMessages.Button_browse_project);
		projectBrowserButton.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				OpenResourceDialog dialog = new OpenResourceDialog(
						shell, false, project, IResource.FILE);
				dialog.setInitialPattern(linterConfigFilename);
				if (dialog.open() != Window.OK) {
					return;
				}
				IResource result = (IResource) dialog.getFirstResult();
				if (result != null
						&& linterConfigFilename.equals(result.getName())) {
					linterConfigFileText.setText(result
							.getProjectRelativePath().toString());
				}
			}
		});
		projectBrowserButton.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		
		// Browse files config of Workspace
		workspaceBrowserButton = new Button(container, SWT.NONE);
		workspaceBrowserButton.setText(TernLinterUIMessages.Button_browse_workspace);
		workspaceBrowserButton.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				OpenResourceDialog dialog = new OpenResourceDialog(
						shell, false, ResourcesPlugin.getWorkspace().getRoot(), IResource.FILE);
				dialog.setInitialPattern(linterConfigFilename);
				if (dialog.open() != Window.OK) {
					return;
				}
				IResource result = (IResource) dialog.getFirstResult();
				if (result != null
						&& linterConfigFilename.equals(result.getName())) {					
					linterConfigFileText.setText(result.getFullPath().makeRelativeTo(project.getFullPath()).toString());
				}
			}
		});
		
		// Browse files config of File System
		filesystemBrowserButton = new Button(container, SWT.NONE);
		filesystemBrowserButton.setText(TernLinterUIMessages.Button_browse_filesystem);
		filesystemBrowserButton.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				FileDialog dialog = new FileDialog(shell, SWT.NONE);
				dialog.setFileName(linterConfigFileText.getText());
				dialog.setFileName(linterConfigFilename);
				String file = dialog.open();
				if (file != null) {
					file = file.trim();
					if (file.length() > 0) {
						linterConfigFileText.setText(file);
					}
				}
			}
		});
	}

	public void setLinterConfig(ITernLinterConfig config) throws TernException {
		// load value for each option from the .tern-project
		if (workingCopy.hasCheckedTernModule(linterId)) {
			ITernModuleConfigurable module = (ITernModuleConfigurable) workingCopy
					.getTernModule(linterId);
			JsonObject jsonOptions = module.getOptionsObject();
			if (jsonOptions != null) {
				JsonValue jsonConfig = jsonOptions.get(CONFIG_FIELD);
				if (jsonConfig != null && jsonConfig.isObject()) {
					// It's a config options
					updateConfig((JsonObject) jsonOptions.get(CONFIG_FIELD),
							config.getOptions());
				} else {
					JsonValue jsonConfigFile = jsonOptions
							.get(CONFIG_FILE_FIELD);
					if (canUseConfigFiles() && jsonConfigFile != null
							&& jsonConfigFile.isString()) {
						// it's a config file
						setConfigFile(jsonConfigFile.asString());
					}
				}
			}
		}
		treeViewer.setInput(config);
		treeViewer.expandAll();
		updateEnabled();
	}

	private void setConfigFile(String confiFile) {
		linterConfigFileText.setText(confiFile);
		useConfigFilesCheckbox.setSelection(true);
		displayPage();
	}

	private void updateConfig(JsonObject jsonOptions,
			Collection<ITernLinterOption> options) {
		for (ITernLinterOption option : options) {
			if (option.isCategoryType()) {
				updateConfig(jsonOptions, option.getOptions());
			} else {
				String name = option.getId();
				JsonValue jsonValue = jsonOptions.get(name);
				if (jsonValue != null) {
					if (jsonValue.isBoolean()) {
						option.setValue(jsonValue.asBoolean());
					} else if (jsonValue.isNumber()) {
						option.setValue(jsonValue.asLong());
					} else if (jsonValue.isString()) {
						option.setValue(jsonValue.asString());
					}
				}
			}
		}
	}

	@Override
	protected Tree getTree() {
		return treeViewer.getTree();
	}

	@Override
	protected IDialogSettings getDialogSettings() {
		return TernLinterUIPlugin.getDefault().getDialogSettings();
	}

	@Override
	protected String getQualifier() {
		return TernLinterUIPlugin.PLUGIN_ID;
	}

	private boolean hasLinter() {
		return workingCopy.hasCheckedTernModule(linterId);
	}

	@Override
	public void moduleSelectionChanged(ITernModule module, boolean selected) {
		if (linterId.equals(module.getName())) {
			enableCheckbox.setSelection(selected);
			updateEnabled();
		}
	}

	@Override
	public void dispose() {
		super.dispose();
		workingCopy.removeWorkingCopyListener(this);
	}

	/**
	 * Update the .tern-project :
	 * 
	 * <ul>
	 * <li>add tern linter in the .tern-project by updating JSON options.</li>
	 * <li>or remove the tern linter</li>
	 * </ul>
	 * 
	 * @throws TernException
	 */
	public void updateTenProject() throws TernException {
		// To be sure that update of checked modules doesn't fire event.
		workingCopy.removeWorkingCopyListener(this);
		ITernModuleConfigurable module = (ITernModuleConfigurable) workingCopy
				.getTernModule(linterId);
		if (enableCheckbox.getSelection()) {
			// add tern linter + options in the .tern-project
			ITernLinterConfig config = (ITernLinterConfig) treeViewer
					.getInput();
			JsonObject jsonOptions = new JsonObject();
			if (isUseConfigFiles()) {
				// configFile : save the referenced file path linter config (eg
				// : .jshintrc, eslint.json) in the .tern-project.
				String configFile = linterConfigFileText.getText();
				jsonOptions.add(CONFIG_FILE_FIELD, configFile);
			} else {
				// config : save the linter options inside the .tern-project
				JsonObject jsonConfig = new JsonObject();
				jsonOptions.add(CONFIG_FIELD, jsonConfig);
				updateJSONOptions(config.getOptions(), jsonConfig);
			}
			module.setOptions(jsonOptions);
		} else {
			// remove the tern linter from the .tern-project.
			workingCopy.getCheckedModules().remove(module);
		}
	}

	private void updateJSONOptions(Collection<ITernLinterOption> options,
			JsonObject json) {
		for (ITernLinterOption option : options) {
			if (option.isCategoryType()) {
				updateJSONOptions(option.getOptions(), json);
			} else if (option.hasValue()) {
				if (option.isBooleanType()) {
					json.add(option.getId(), option.getBooleanValue());
				} else if (option.isNumberType()) {
					json.add(option.getId(), option.getNumberValue());
				} else {
					json.add(option.getId(), option.getStringValue());
				}
			}
		}
	}

	private boolean isUseConfigFiles() {
		return useConfigFilesCheckbox != null
				&& useConfigFilesCheckbox.getSelection();
	}
	
	private void validate() {
		preferencePage.setErrorMessage(null);
		if (linterConfigFileText != null) {
			String fileConfig = linterConfigFileText.getText();
			// Validate if file config is valid.
			if (!isProjectFile(fileConfig) && !(new File(fileConfig).exists())) {
				preferencePage.setErrorMessage(fileConfig + " is not a valid path.");
			}		
		}
	}
	
	private boolean isProjectFile(String fileConfig) {
		try {
			IProject project = workingCopy
					.getProject().getProject();
			return project.getFile(fileConfig).exists();
		}
		catch(Throwable e) {
			return false;
		}
	}
}

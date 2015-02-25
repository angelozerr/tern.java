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
package tern.eclipse.ide.linter.ui.properties;

import java.util.Collection;

import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.dialogs.IDialogSettings;
import org.eclipse.jface.viewers.CheckStateChangedEvent;
import org.eclipse.jface.viewers.CheckboxTreeViewer;
import org.eclipse.jface.viewers.ICheckStateListener;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.SashForm;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;
import org.eclipse.swt.widgets.Tree;

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
import tern.eclipse.ide.ui.controls.AbstractTreeBlock;
import tern.server.ITernModule;
import tern.server.ITernModuleConfigurable;
import tern.utils.StringUtils;

import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

/**
 * Block which hosts the Tree of the Tern linter options.
 * 
 */
public class TernLinterOptionsBlock extends AbstractTreeBlock implements
		IWorkingCopyListener {

	private final String linterId;
	private String linterConfigFilename;

	private final IWorkingCopy workingCopy;
	private Composite fControl;
	private CheckboxTreeViewer treeViewer;

	private TernLinterOptionsPanel optionsPanel;
	private Button enableCheckbox;

	// Use config
	private Button useTernProjectCheckbox;
	private Button linterConfigFileCheckbox;
	private Text linterConfigFileText;
	private Button linterConfigFileButton;
	private Label useConfigLabel;

	public TernLinterOptionsBlock(String linterId, IWorkingCopy workingCopy) {
		this.linterId = linterId;
		this.workingCopy = workingCopy;
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
		createBody(parent);

		Dialog.applyDialogFont(parent);
		return parent;
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

		createUseConfig(header);

		// Update "Enable" checkbox according if the linter exists in the
		// .tern-project.
		enableCheckbox.setSelection(hasLinter());
	}

	private void createUseConfig(Composite parent) {
		// Create "use configuration" panels
		useConfigLabel = new Label(parent, SWT.NONE);
		useConfigLabel
				.setText(TernLinterUIMessages.TernLinterOptionsBlock_useConfig);

		// .tern-project radio
		useTernProjectCheckbox = new Button(parent, SWT.RADIO);
		useTernProjectCheckbox.setText(".tern-project");

		// config file (ex : .jshintrc)
		if (!StringUtils.isEmpty(linterConfigFilename)) {
			linterConfigFileCheckbox = new Button(parent, SWT.RADIO);
			linterConfigFileCheckbox.setText(linterConfigFilename);
			linterConfigFileText = new Text(parent, SWT.BORDER);
			linterConfigFileText.setLayoutData(new GridData(
					GridData.FILL_HORIZONTAL));
			linterConfigFileButton = new Button(parent, SWT.NONE);
			linterConfigFileButton.setText(TernLinterUIMessages.Button_browse);
		}
		useTernProjectCheckbox.setSelection(true);
	}

	private void updateEnabled() {
		Boolean checked = enableCheckbox.getSelection();
		useConfigLabel.setEnabled(checked);
		useTernProjectCheckbox.setEnabled(checked);
		linterConfigFileCheckbox.setEnabled(checked);
		linterConfigFileText.setEnabled(checked);
		linterConfigFileButton.setEnabled(checked);
		if (optionsPanel != null) {
			optionsPanel.updateEnabled(checked);
		}
		treeViewer.getTree().setEnabled(checked);
	}

	protected void createBody(Composite parent) {
		SashForm sashForm = new SashForm(parent, SWT.HORIZONTAL | SWT.SMOOTH);
		GridData data = new GridData(SWT.FILL, SWT.FILL, true, true);
		sashForm.setLayoutData(data);

		createOptionsMaster(sashForm);
		createOptionsDetails(sashForm);
	}

	/**
	 * Create tree of tern linter config options.
	 * 
	 * @param ancestor
	 */
	private void createOptionsMaster(Composite ancestor) {

		Composite parent = new Composite(ancestor, SWT.NONE);
		GridLayout layout = new GridLayout();
		layout.numColumns = 2;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		parent.setLayout(layout);
		Font font = ancestor.getFont();
		parent.setFont(font);
		fControl = parent;

		// Tree
		Tree tree = new Tree(parent, SWT.CHECK | SWT.BORDER
				| SWT.FULL_SELECTION | SWT.V_SCROLL | SWT.MULTI);

		GridData data = new GridData(GridData.FILL_BOTH);
		data.widthHint = 300;
		tree.setLayoutData(data);
		tree.setFont(font);

		tree.setHeaderVisible(false);
		tree.setLinesVisible(false);

		treeViewer = new CheckboxTreeViewer(tree);
		treeViewer.setLabelProvider(LinterConfigLabelProvider.getInstance());
		treeViewer
				.setContentProvider(LinterConfigContentProvider.getInstance());

		// TreeViewerColumn column = new TreeViewerColumn(treeViewer, SWT.NONE);
		// column.getColumn().setText("Column name");
		// column.setLabelProvider(new ColumnLabelProvider() {
		// @Override
		// public String getText(Object element) {
		// return element.toString();
		// }
		//
		// @Override
		// public Color getBackground(Object element) {
		// return new Color(Display.getCurrent(), 255, 255, 0);
		// }
		// });

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
		treeViewer.addCheckStateListener(new ICheckStateListener() {

			@Override
			public void checkStateChanged(CheckStateChangedEvent event) {
				ITernLinterOption option = (ITernLinterOption) event
						.getElement();
				option.setEnabled(event.getChecked());
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

	public Control getControl() {
		return fControl;
	}

	public void setLinterConfig(ITernLinterConfig config) throws TernException {
		// load value for each option from the .tern-project
		if (workingCopy.hasCheckedTernModule(linterId)) {
			ITernModuleConfigurable module = (ITernModuleConfigurable) workingCopy
					.getTernModule(linterId);
			JsonObject jsonOptions = module.getOptions();
			if (jsonOptions != null && jsonOptions.get("config") != null) {
				updateConfig((JsonObject) jsonOptions.get("config"),
						config.getOptions());
			}
		}
		treeViewer.setInput(config);
		treeViewer.expandAll();
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
					option.setValue(jsonValue);
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
		}
	}

	@Override
	public void dispose() {
		super.dispose();
		workingCopy.removeWorkingCopyListener(this);
	}

	/**
	 * Update JSON options of the tern linter plugin.
	 * 
	 * @throws TernException
	 */
	public void updateOptions() throws TernException {
		ITernLinterConfig config = (ITernLinterConfig) treeViewer.getInput();

		JsonObject jsonOptions = new JsonObject();
		JsonObject jsonConfig = new JsonObject();
		jsonOptions.add("config", jsonConfig);
		updateJSONOptions(config.getOptions(), jsonConfig);

		ITernModuleConfigurable module = (ITernModuleConfigurable) workingCopy
				.getTernModule(linterId);
		module.setOptions(jsonOptions);

	}

	private void updateJSONOptions(Collection<ITernLinterOption> options,
			JsonObject json) {
		for (ITernLinterOption option : options) {
			if (option.isCategoryType()) {
				updateJSONOptions(option.getOptions(), json);
			} else if (option.isEnabled()) {
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
}

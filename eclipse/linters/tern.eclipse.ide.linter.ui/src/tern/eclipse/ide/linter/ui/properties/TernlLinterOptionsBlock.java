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
package tern.eclipse.ide.linter.ui.properties;

import org.eclipse.jface.dialogs.Dialog;
import org.eclipse.jface.dialogs.IDialogSettings;
import org.eclipse.jface.viewers.CheckboxTreeViewer;
import org.eclipse.jface.viewers.ColumnLabelProvider;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.jface.viewers.TreeViewerColumn;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.SashForm;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Tree;

import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.linter.core.ITernLinterConfig;
import tern.eclipse.ide.linter.core.ITernLinterOption;
import tern.eclipse.ide.linter.internal.ui.TernLinterUIMessages;
import tern.eclipse.ide.linter.internal.ui.TernLinterUIPlugin;
import tern.eclipse.ide.linter.ui.viewers.LinterConfigContentProvider;
import tern.eclipse.ide.linter.ui.viewers.LinterConfigLabelProvider;
import tern.eclipse.ide.ui.controls.AbstractTreeBlock;
import tern.server.ITernPlugin;

/**
 * Block which hosts the Tree of the Tern linter options.
 * 
 */
public class TernlLinterOptionsBlock extends AbstractTreeBlock {

	private Composite fControl;
	private TreeViewer treeViewer;

	private final IIDETernProject ternProject;
	private final ITernPlugin linter;
	private TernLinterOptionsPanel optionsPanel;

	public TernlLinterOptionsBlock(IIDETernProject project, ITernPlugin linter) {
		this.ternProject = project;
		this.linter = linter;
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
		GridData data = new GridData();
		data.horizontalSpan = 2;
		header.setLayoutData(data);
		header.setLayout(new GridLayout(2, false));

		// Create enabled checkbox
		Button enabled = new Button(header, SWT.CHECK);
		enabled.setText(TernLinterUIMessages.TernlLinterOptionsBlock_enable);
		enabled.setSelection(ternProject.hasPlugin(linter));

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

//		TreeViewerColumn column = new TreeViewerColumn(treeViewer, SWT.NONE);
//		column.getColumn().setText("Column name");
//		column.setLabelProvider(new ColumnLabelProvider() {
//		    @Override
//		    public String getText(Object element) {
//		        return element.toString();
//		    }
//
//		    @Override
//		    public Color getBackground(Object element) {
//		        return new Color(Display.getCurrent(), 255, 255, 0);
//		    }
//		});
		
		// Add tree selection listener to enable "Remove" button when a script
		// path is selected.
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

	public Control getControl() {
		return fControl;
	}

	public void setLinterConfig(ITernLinterConfig config) {
		treeViewer.setInput(config);
		treeViewer.expandAll();
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

}

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
package tern.eclipse.ide.server.nodejs.ui.debugger.preferences;

import org.eclipse.jface.preference.ComboFieldEditor;
import org.eclipse.jface.preference.FieldEditorPreferencePage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Link;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;

import tern.eclipse.ide.server.nodejs.internal.ui.preferences.DebuggerFieldEditor;
import tern.eclipse.ide.server.nodejs.internal.ui.preferences.NodeJSConfigEditor;
import tern.eclipse.ide.ui.preferences.FileComboFieldEditor;
import tern.eclipse.ide.ui.preferences.WorkspaceFileFieldEditor;

/**
 * Abstract node.js preferences page.
 *
 */
public abstract class AbstractNodejsCliFilePreferencesPage extends FieldEditorPreferencePage
		implements IWorkbenchPreferencePage {

	private WorkspaceFileFieldEditor defaultProtractorCliFileField;
	private DebuggerFieldEditor debuggerField;
	private NodeJSConfigEditor nodeJSConfigEditor;

	public AbstractNodejsCliFilePreferencesPage(int style) {
		super(style);
	}

	@Override
	protected void createFieldEditors() {
		createDebuggerContent(getFieldEditorParent());
	}

	protected void createDebuggerContent(Composite parent) {

		defaultProtractorCliFileField = new WorkspaceFileFieldEditor(getCliFilePreferenceName(), getCliFileLabel(),
				parent);
		addField(defaultProtractorCliFileField);

		createSeparator(parent);

		// Debugger setup
		debuggerField = new DebuggerFieldEditor(getDebuggerPreferenceName(), getDebuggerLabel(), parent);
		addField(debuggerField);

		// debugger wiki
		Link debuggerWikiLink = debuggerField.createWikiLink(parent, SWT.NONE);
		GridData gd = new GridData(SWT.FILL, SWT.FILL, false, false, 5, 1);
		gd.horizontalIndent = 25;
		debuggerWikiLink.setLayoutData(gd);

		createSeparator(parent);

		// Node configuration panel
		nodeJSConfigEditor = new NodeJSConfigEditor(parent, getNodeJSInstallPreferenceName(),
				getNodeJSPathlPreferenceName());
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

	@Override
	public void init(IWorkbench workbench) {

	}

	protected abstract String getCliFilePreferenceName();

	protected abstract String getCliFileLabel();

	protected abstract String getDebuggerPreferenceName();

	protected abstract String getDebuggerLabel();
	
	protected abstract String getNodeJSInstallPreferenceName();
	
	protected abstract String getNodeJSPathlPreferenceName();
}

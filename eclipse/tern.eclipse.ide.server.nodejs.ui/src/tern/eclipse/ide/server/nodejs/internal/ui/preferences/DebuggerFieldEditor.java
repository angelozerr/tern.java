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

import java.net.URL;
import java.util.Collection;

import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Link;
import org.eclipse.ui.PlatformUI;

import tern.eclipse.ide.server.nodejs.core.debugger.INodejsDebugger;
import tern.eclipse.ide.server.nodejs.core.debugger.NodejsDebuggersManager;
import tern.eclipse.ide.server.nodejs.internal.ui.TernNodejsUIMessages;
import tern.eclipse.ide.server.nodejs.internal.ui.TernNodejsUIPlugin;
import tern.eclipse.ide.ui.preferences.CheckComboFieldEditor;

/**
 * Debugger field editor.
 *
 */
public class DebuggerFieldEditor extends CheckComboFieldEditor {

	private Link wikiLink;

	private boolean isValid = true;

	public DebuggerFieldEditor(String name, String labelText, Composite parent) {
		super(name, labelText, createDebuggers(), "", parent);
	}

	@Override
	protected void updateComboBoxEnablement(Composite parent, boolean enabled) {
		super.updateComboBoxEnablement(parent, enabled);
		if (wikiLink != null) {
			wikiLink.setEnabled(enabled);
		}
	}

	@Override
	protected void refreshValidState() {
		if (isCheckboxSelected()) {
			if (getSelection() == 0) {
				isValid = false;
				showErrorMessage(TernNodejsUIMessages.TernNodejsPreferencesPage_debugger_err_not_selected);
				return;
			} else if ("".equals(getValue())) { //$NON-NLS-1$ )
				isValid = false;
				showErrorMessage(TernNodejsUIMessages.TernNodejsPreferencesPage_debugger_err_not_installed);
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

	public static String[][] createDebuggers() {
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
		return debuggers;
	}

	public Link createWikiLink(Composite parent, int style) {
		return this.wikiLink = newWikiLink(parent, style);
	}

	public static Link newWikiLink(Composite parent, int style) {
		Link wikiLink = new Link(parent, style);
		wikiLink.setText(TernNodejsUIMessages.TernNodejsPreferencesPage_debugger_wiki_link);
		wikiLink.addSelectionListener(new SelectionAdapter() {
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
		return wikiLink;
	}

}

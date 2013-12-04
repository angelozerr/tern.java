/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package tern.eclipse.ide.internal.ui.preferences;

import org.eclipse.jface.preference.ComboFieldEditor;
import org.eclipse.jface.preference.FieldEditorPreferencePage;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;

import tern.eclipse.ide.core.ITernServerType;
import tern.eclipse.ide.core.ITernServerTypeManager;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.TernUIPlugin;

/**
 * Tern Global preferences page.
 * 
 */
public class TernGlobalPreferencesPage extends FieldEditorPreferencePage
		implements IWorkbenchPreferencePage {

	public TernGlobalPreferencesPage() {
		super(GRID);
		super.setPreferenceStore(TernUIPlugin.getDefault().getPreferenceStore());
	}

	@Override
	protected void createFieldEditors() {

		// Tern Server type combo
		ITernServerType[] serverTypes = TernCorePlugin
				.getTernServerTypeManager().getTernServerTypes();
		String[][] types = new String[serverTypes.length][2];
		for (int i = 0; i < serverTypes.length; i++) {
			types[i][0] = serverTypes[i].getName();
			types[i][1] = serverTypes[i].getId();
		}

		ComboFieldEditor ternServerEditor = new ComboFieldEditor(
				TernUIPreferenceNames.TERN_SERVER_TYPE,
				TernUIMessages.TernGlobalPreferencesPage_serverType, types,
				getFieldEditorParent());
		addField(ternServerEditor);
	}

	@Override
	public void init(IWorkbench workbench) {
		setDescription(TernUIMessages.TernGlobalPreferencesPage_desc);
	}

}

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
package tern.eclipse.ide.internal.ui.preferences;

import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;
import org.eclipse.jface.preference.BooleanFieldEditor;
import org.eclipse.jface.preference.ComboFieldEditor;
import org.eclipse.jface.preference.FieldEditorPreferencePage;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.util.PropertyChangeEvent;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;
import org.eclipse.ui.preferences.ScopedPreferenceStore;

import tern.eclipse.ide.core.ITernServerType;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.preferences.TernCorePreferenceConstants;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;

/**
 * Tern Global preferences page.
 * 
 */
public class TernGlobalPreferencesPage extends FieldEditorPreferencePage
		implements IWorkbenchPreferencePage {

	public TernGlobalPreferencesPage() {
		super(GRID);
		setDescription(TernUIMessages.TernGlobalPreferencesPage_desc);
		setImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_LOGO));
	}

	@Override
	protected void createFieldEditors() {

		// Tern Server type combo
		ITernServerType[] serverTypes = TernCorePlugin
				.getTernServerTypeManager().getTernServerTypes();
		String[][] types = new String[serverTypes.length + 1][2];
		types[0][0] = " -- Choose your server type --"; //$NON-NLS-1$
		types[0][1] = ""; //$NON-NLS-1$

		for (int i = 0; i < serverTypes.length; i++) {
			types[i + 1][0] = serverTypes[i].getName();
			types[i + 1][1] = serverTypes[i].getId();
		}

		ComboFieldEditor ternServerEditor = new ComboFieldEditor(
				TernCorePreferenceConstants.TERN_SERVER_TYPE,
				TernUIMessages.TernGlobalPreferencesPage_serverType, types,
				getFieldEditorParent());
		addField(ternServerEditor);

		BooleanFieldEditor asyncRequestsEditor = new BooleanFieldEditor(
				TernCorePreferenceConstants.DISABLE_ASYNC_REQUESTS,
				TernUIMessages.TernGlobalPreferencesPage_disable_async_reqs,
				getFieldEditorParent());
		addField(asyncRequestsEditor);
	}

	@Override
	public void init(IWorkbench workbench) {

	}

	@Override
	protected IPreferenceStore doGetPreferenceStore() {
		// IProject project = getProject();
		// ScopedPreferenceStore store;
		// if (project == null) {
		// // workspace settings
		// IScopeContext scope = new InstanceScope();
		// return new ScopedPreferenceStore(scope, TernCorePlugin.PLUGIN_ID);
		// } else {
		// // project settings
		// IScopeContext projectScope = new ProjectScope(project);
		// preferences = projectScope.getNode(TernCorePlugin.PLUGIN_ID);
		// store = new ScopedPreferenceStore(projectScope,
		// TernCorePlugin.PLUGIN_ID);
		// }
		// return store;
		IScopeContext scope = new InstanceScope();
		return new ScopedPreferenceStore(scope, TernCorePlugin.PLUGIN_ID);

	}

	@Override
	public void propertyChange(PropertyChangeEvent event) {
		super.propertyChange(event);
		TernCorePlugin.getTernServerTypeManager().refresh();
	}

}

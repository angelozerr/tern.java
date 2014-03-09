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
package tern.eclipse.ide.internal.ui.properties;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ProjectScope;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.jface.preference.BooleanFieldEditor;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.ui.preferences.ScopedPreferenceStore;

import tern.eclipse.ide.core.TernCoreConstants;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;

/**
 * Tern Console preferences page.
 * 
 */
public class TernConsolePropertyPage extends
		AbstractTernFieldEditorPropertyPage {

	public TernConsolePropertyPage() {
		super(GRID);
		setDescription(TernUIMessages.TernConsolePropertyPage_desc);
		setImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_LOGO));
	}

	@Override
	protected void createFieldEditors() {
		BooleanFieldEditor traceOnConsole = new BooleanFieldEditor(
				TernCoreConstants.TRACE_ON_CONSOLE,
				TernUIMessages.TernConsolePropertyPage_traceOnConsole_label,
				super.getFieldEditorParent());
		addField(traceOnConsole);
	}

	@Override
	protected IPreferenceStore doGetPreferenceStore() {
		IProject project = null;
		try {
			project = getTernProject().getProject();
		} catch (CoreException e) {
		}
		IScopeContext projectScope = new ProjectScope(project);
		return new ScopedPreferenceStore(projectScope, TernCorePlugin.PLUGIN_ID);
	}

	@Override
	public boolean performOk() {
		boolean result = super.performOk();
		if (result) {
			try {
				getTernProject().configureConsole();
			} catch (CoreException e) {
			}
		}
		return result;
	}

}

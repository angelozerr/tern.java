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

import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.preferences.IEclipsePreferences;
import org.eclipse.core.runtime.preferences.IPreferencesService;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.ui.IWorkbench;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.TernUIPlugin;
import tern.eclipse.ide.ui.preferences.PropertyPreferencePage;

/**
 * Tern content assist preferences page used for global and project preferences.
 *
 */
public class TernContentAssistPreferencesPage extends PropertyPreferencePage {

	public static final String PROPERTY_PAGE_ID = "tern.eclipse.ide.ui.properties.TernContentAssistPropertyPage";
	public static final String PREFERENCE_PAGE_ID = "tern.eclipse.ide.ui.preferences.TernContentAssistPropertyPage";

	private final IPreferencesService fPreferencesService;

	private Button generateAnonymousFunctionCheckbox;
	private Button expandFunctionCheckbox;

	public TernContentAssistPreferencesPage() {
		setImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_LOGO));
		fPreferencesService = Platform.getPreferencesService();
	}

	@Override
	protected Control createCommonContents(Composite parent) {
		final Composite page = new Composite(parent, SWT.NULL);
		page.setLayout(new GridLayout());

		IScopeContext[] preferenceScopes = createPreferenceScopes();
		generateAnonymousFunctionCheckbox = createCheckbox(
				page,
				TernUIPreferenceConstants.GENERATE_ANONYMOUS_FUNCTION_CONTENT_ASSIST,
				preferenceScopes,
				TernUIMessages.TernContentAssistPreferencesPage_generateAnonymousFunction_label);
		expandFunctionCheckbox = createCheckbox(
				page,
				TernUIPreferenceConstants.EXPAND_FUNCTION_CONTENT_ASSIST,
				preferenceScopes,
				TernUIMessages.TernContentAssistPreferencesPage_expandFunction_label);
		return page;
	}

	private Button createCheckbox(Composite parent, String preferenceName,
			IScopeContext[] preferenceScopes, String label) {

		Button checkbox = new Button(parent, SWT.CHECK);
		checkbox.setText(label); //$NON-NLS-1$
		checkbox.setLayoutData(new GridData(
				GridData.HORIZONTAL_ALIGN_BEGINNING,
				GridData.VERTICAL_ALIGN_END, false, false, 1, 1));
		updateCheckbox(checkbox, preferenceName, preferenceScopes);
		return checkbox;
	}

	private void updateCheckbox(Button checkbox, String preferenceName,
			IScopeContext[] preferenceScopes) {
		boolean checked = fPreferencesService.getBoolean(
				getPreferenceNodeQualifier(), preferenceName, true,
				preferenceScopes);
		checkbox.setSelection(checked);
	}

	private void updateCheckbox(Button checkbox, String preferenceName,
			IEclipsePreferences defaultPreferences) {
		boolean checked = defaultPreferences.getBoolean(preferenceName, false);
		checkbox.setSelection(checked);
	}

	@Override
	protected void performDefaults() {
		super.performDefaults();
		IEclipsePreferences defaultPreferences = createPreferenceScopes()[1]
				.getNode(getPreferenceNodeQualifier());
		updateCheckbox(
				generateAnonymousFunctionCheckbox,
				TernUIPreferenceConstants.GENERATE_ANONYMOUS_FUNCTION_CONTENT_ASSIST,
				defaultPreferences);
		updateCheckbox(expandFunctionCheckbox,
				TernUIPreferenceConstants.EXPAND_FUNCTION_CONTENT_ASSIST,
				defaultPreferences);
	}

	@Override
	public boolean performOk() {
		boolean ok = super.performOk();
		IScopeContext[] contexts = createPreferenceScopes();
		// remove project-specific information if it's not enabled
		boolean remove = getProject() != null && !isElementSettingsEnabled();
		updateContexts(
				generateAnonymousFunctionCheckbox,
				TernUIPreferenceConstants.GENERATE_ANONYMOUS_FUNCTION_CONTENT_ASSIST,
				contexts, remove);
		updateContexts(expandFunctionCheckbox,
				TernUIPreferenceConstants.EXPAND_FUNCTION_CONTENT_ASSIST,
				contexts, remove);
		flushContexts(contexts);
		return ok;
	}

	private void updateContexts(Button checkbox, String preferenceName,
			IScopeContext[] contexts, boolean remove) {
		if (remove) {
			contexts[0].getNode(getPreferenceNodeQualifier()).remove(
					preferenceName);

		} else {
			contexts[0].getNode(getPreferenceNodeQualifier()).putBoolean(
					preferenceName, checkbox.getSelection());
		}
	}

	@Override
	protected String getPreferenceNodeQualifier() {
		return TernUIPlugin.getDefault().getBundle().getSymbolicName();
	}

	@Override
	protected String getPreferencePageID() {
		return PREFERENCE_PAGE_ID;
	}

	@Override
	protected String getProjectSettingsKey() {
		return TernUIPreferenceConstants.CONTENT_ASSIST_USE_PROJECT_SETTINGS;
	}

	@Override
	protected String getPropertyPageID() {
		return PROPERTY_PAGE_ID;
	}

	@Override
	public void init(IWorkbench workbencsh) {

	}
}

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

import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.preferences.TernCorePreferenceConstants;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.preferences.PropertyPreferencePage;

/**
 * Tern validation preferences page used for global and project preferences.
 *
 */
public class TernValidationPreferencesPage extends PropertyPreferencePage {

	public static final String PROPERTY_PAGE_ID = "tern.eclipse.ide.ui.properties.TernValidationPropertyPage";
	public static final String PREFERENCE_PAGE_ID = "tern.eclipse.ide.ui.preferences.TernValidationPropertyPage";

	private final IPreferencesService fPreferencesService;

	private Button availableTernBuilderCheckbox;

	public TernValidationPreferencesPage() {
		setImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_LOGO));
		fPreferencesService = Platform.getPreferencesService();
	}

	@Override
	protected Control createCommonContents(Composite parent) {
		final Composite page = new Composite(parent, SWT.NULL);
		page.setLayout(new GridLayout());

		IScopeContext[] preferenceScopes = createPreferenceScopes();
		availableTernBuilderCheckbox = createCheckbox(
				page,
				TernCorePreferenceConstants.AVAILABLE_TERN_BUILDER,
				preferenceScopes,
				TernUIMessages.TernValidationPreferencesPage_availableTernBuilder_label);

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
		updateCheckbox(availableTernBuilderCheckbox,
				TernCorePreferenceConstants.AVAILABLE_TERN_BUILDER,
				defaultPreferences);
	}

	@Override
	public boolean performOk() {
		boolean ok = super.performOk();
		IScopeContext[] contexts = createPreferenceScopes();
		// remove project-specific information if it's not enabled
		boolean remove = getProject() != null && !isElementSettingsEnabled();
		updateContexts(availableTernBuilderCheckbox,
				TernCorePreferenceConstants.AVAILABLE_TERN_BUILDER, contexts,
				remove);
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
		return TernCorePlugin.getDefault().getBundle().getSymbolicName();
	}

	@Override
	protected String getPreferencePageID() {
		return PREFERENCE_PAGE_ID;
	}

	@Override
	protected String getProjectSettingsKey() {
		return TernCorePreferenceConstants.VALIDATION_USE_PROJECT_SETTINGS;
	}

	@Override
	protected String getPropertyPageID() {
		return PROPERTY_PAGE_ID;
	}

	@Override
	public void init(IWorkbench workbencsh) {

	}
}

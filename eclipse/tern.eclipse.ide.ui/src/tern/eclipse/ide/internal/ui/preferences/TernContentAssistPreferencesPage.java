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
import org.eclipse.jface.viewers.ComboViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;
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
	private Button omitObjectPrototype;
	private Text indentSizeText;
	private Button indentTabsButton;

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
		// Insertion panel
		createInsertionContents(page, preferenceScopes);
		// Filtering panel
		createFilteringContents(page, preferenceScopes);

		return page;
	}

	/**
	 * Create "Filtering" contents panel.
	 * 
	 * @param parent
	 * @param preferenceScopes
	 */
	private void createFilteringContents(final Composite parent,
			IScopeContext[] preferenceScopes) {

		Group filteringGroup = new Group(parent, SWT.SHADOW_ETCHED_IN);
		filteringGroup
				.setText(TernUIMessages.TernContentAssistPreferencesPage_filteringGroup_label);
		filteringGroup.setLayout(new GridLayout());
		filteringGroup.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		expandFunctionCheckbox = createCheckbox(
				filteringGroup,
				TernUIPreferenceConstants.EXPAND_FUNCTION_CONTENT_ASSIST,
				preferenceScopes,
				TernUIMessages.TernContentAssistPreferencesPage_expandFunction_label);
		omitObjectPrototype = createCheckbox(
				filteringGroup,
				TernUIPreferenceConstants.OMIT_OBJECT_PROTOTYPE_CONTENT_ASSIST,
				preferenceScopes,
				TernUIMessages.TernContentAssistPreferencesPage_omitObjectPrototype_label);
	}

	/**
	 * Create "Insertion" contents panel.
	 * 
	 * @param parent
	 * @param preferenceScopes
	 */
	private void createInsertionContents(final Composite parent,
			IScopeContext[] preferenceScopes) {

		Group insertionGroup = new Group(parent, SWT.SHADOW_ETCHED_IN);
		insertionGroup
				.setText(TernUIMessages.TernContentAssistPreferencesPage_insertionGroup_label);
		insertionGroup.setLayout(new GridLayout());
		insertionGroup.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		createIndentatContent(insertionGroup, preferenceScopes);

		// Function Insertion
		createFunctionInsertionContents(insertionGroup, preferenceScopes);
		// Object literal Insertion
		createObjLitInsertionContents(insertionGroup, preferenceScopes);
	}

	private void createIndentatContent(Composite ancestor,
			IScopeContext[] preferenceScopes) {

		Composite parent = new Composite(ancestor, SWT.NONE);
		parent.setLayout(new GridLayout(4, false));
		parent.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		Label indentLabel = new Label(parent, SWT.NONE);
		indentLabel
				.setText(TernUIMessages.TernContentAssistPreferencesPage_indentation_label);

		indentSizeText = new Text(parent, SWT.BORDER);
		updateTextInt(indentSizeText,
				TernUIPreferenceConstants.INDENT_SIZE_CONTENT_ASSIST,
				preferenceScopes);

		Button indentSpacesButton = new Button(parent, SWT.RADIO);
		indentSpacesButton.setText("Spaces");

		indentTabsButton = new Button(parent, SWT.RADIO);
		indentTabsButton.setText("Tabs");
		updateCheckbox(indentTabsButton,
				TernUIPreferenceConstants.INDENT_TABS_CONTENT_ASSIST,
				preferenceScopes);
		indentSpacesButton.setSelection(!indentTabsButton.getSelection());
		/*
		 * ComboViewer indentationCombo = createComboViewer( insertionGroup,
		 * TernUIPreferenceConstants.INDENTATION_CONTENT_ASSIST,
		 * preferenceScopes,
		 * TernUIMessages.TernContentAssistPreferencesPage_indentation_label);
		 */

	}

	private void createFunctionInsertionContents(Composite parent,
			IScopeContext[] preferenceScopes) {
		Group insertionGroup = new Group(parent, SWT.SHADOW_ETCHED_IN);
		insertionGroup
				.setText(TernUIMessages.TernContentAssistPreferencesPage_functionInsertionGroup_label);
		insertionGroup.setLayout(new GridLayout());
		insertionGroup.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		generateAnonymousFunctionCheckbox = createCheckbox(
				insertionGroup,
				TernUIPreferenceConstants.GENERATE_ANONYMOUS_FUNCTION_CONTENT_ASSIST,
				preferenceScopes,
				TernUIMessages.TernContentAssistPreferencesPage_generateAnonymousFunction_label);
	}

	private void createObjLitInsertionContents(Composite parent,
			IScopeContext[] preferenceScopes) {
		Group insertionGroup = new Group(parent, SWT.SHADOW_ETCHED_IN);
		insertionGroup
				.setText(TernUIMessages.TernContentAssistPreferencesPage_objLitInsertionGroup_label);
		insertionGroup.setLayout(new GridLayout());
		insertionGroup.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
	}

	private ComboViewer createComboViewer(Composite ancestor,
			String preferenceName, IScopeContext[] preferenceScopes,
			String label) {
		Composite parent = new Composite(ancestor, SWT.NONE);
		parent.setLayout(new GridLayout(2, false));
		parent.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		Label comboLabel = new Label(parent, SWT.NONE);
		comboLabel.setText(label);
		ComboViewer viewer = new ComboViewer(parent);
		return viewer;
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

	private void updateTextInt(Text text, String preferenceName,
			IScopeContext[] preferenceScopes) {
		int value = fPreferencesService.getInt(getPreferenceNodeQualifier(),
				preferenceName, 1, preferenceScopes);
		text.setText(String.valueOf(value));
	}

	private void updateTextAsInt(Text text, String preferenceName,
			IEclipsePreferences defaultPreferences) {
		int value = defaultPreferences.getInt(preferenceName, 1);
		text.setText(String.valueOf(value));
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
		updateTextAsInt(indentSizeText,
				TernUIPreferenceConstants.INDENT_SIZE_CONTENT_ASSIST,
				defaultPreferences);
		updateCheckbox(indentTabsButton,
				TernUIPreferenceConstants.INDENT_TABS_CONTENT_ASSIST,
				defaultPreferences);

		updateCheckbox(expandFunctionCheckbox,
				TernUIPreferenceConstants.EXPAND_FUNCTION_CONTENT_ASSIST,
				defaultPreferences);
		updateCheckbox(omitObjectPrototype,
				TernUIPreferenceConstants.OMIT_OBJECT_PROTOTYPE_CONTENT_ASSIST,
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
		updateContextsAsInt(indentSizeText,
				TernUIPreferenceConstants.INDENT_SIZE_CONTENT_ASSIST, contexts,
				remove);
		updateContexts(indentTabsButton,
				TernUIPreferenceConstants.INDENT_TABS_CONTENT_ASSIST, contexts,
				remove);

		updateContexts(expandFunctionCheckbox,
				TernUIPreferenceConstants.EXPAND_FUNCTION_CONTENT_ASSIST,
				contexts, remove);
		updateContexts(omitObjectPrototype,
				TernUIPreferenceConstants.OMIT_OBJECT_PROTOTYPE_CONTENT_ASSIST,
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

	private void updateContextsAsInt(Text text, String preferenceName,
			IScopeContext[] contexts, boolean remove) {
		if (remove) {
			contexts[0].getNode(getPreferenceNodeQualifier()).remove(
					preferenceName);

		} else {
			try {
				contexts[0].getNode(getPreferenceNodeQualifier()).putInt(
						preferenceName, Integer.parseInt(text.getText()));
			} catch (Throwable e) {

			}
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

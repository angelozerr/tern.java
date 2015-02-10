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

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.preferences.IEclipsePreferences;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.ui.IWorkbench;

import tern.eclipse.ide.core.ITernRepositoryManager;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.core.preferences.TernCorePreferenceConstants;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.controls.TernRepositoryBlock;
import tern.eclipse.ide.ui.preferences.PropertyPreferencePage;
import tern.repository.ITernRepository;

/**
 * Tern dev preferences page used for global and project preferences.
 *
 */
public class TernRepositoryPreferencesPage extends PropertyPreferencePage {

	public static final String PROPERTY_PAGE_ID = "tern.eclipse.ide.ui.properties.repository";
	public static final String PREFERENCE_PAGE_ID = "tern.eclipse.ide.ui.preferences.repository";

	private TernRepositoryBlock repositoryBlock;
	private Button removeButton;
	private Button editButton;
	private Button refreshButton;

	public TernRepositoryPreferencesPage() {
		setImageDescriptor(ImageResource
				.getImageDescriptor(ImageResource.IMG_LOGO));
	}

	@Override
	protected Control createCommonContents(Composite parent) {
		final Composite page = new Composite(parent, SWT.NULL);
		GridLayout layout = new GridLayout();
		layout.numColumns = 2;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		page.setLayout(layout);

		createRepositoryTable(page);
		createButtons(page);
		addListeners();

		// load repositories
		repositoryBlock.loadRepositories();

		applyDialogFont(page);
		return page;
	}

	private void createRepositoryTable(Composite parent) {
		// create UI repository
		repositoryBlock = new TernRepositoryBlock(getProject());
		Control control = repositoryBlock.createControl(parent);
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 1;
		control.setLayoutData(data);
	}

	private void createButtons(final Composite parent) {
		Composite buttonComp = new Composite(parent, SWT.NONE);
		GridLayout layout = new GridLayout();
		layout.horizontalSpacing = 0;
		layout.verticalSpacing = convertVerticalDLUsToPixels(3);
		layout.marginWidth = 0;
		layout.marginHeight = 0;
		layout.numColumns = 1;
		buttonComp.setLayout(layout);
		GridData data = new GridData(GridData.HORIZONTAL_ALIGN_FILL
				| GridData.VERTICAL_ALIGN_FILL);
		buttonComp.setLayoutData(data);

		// Add button
		Button addButton = createButton(buttonComp, TernUIMessages.Button_add);
		addButton.addSelectionListener(new SelectionAdapter() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				repositoryBlock.addRepository(parent.getShell());
			}
		});

		// Remove button
		removeButton = createButton(buttonComp, TernUIMessages.Button_remove);
		removeButton.addSelectionListener(new SelectionAdapter() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				repositoryBlock.removeRepository(parent.getShell());
			}
		});
		removeButton.setEnabled(false);

		// Edit button
		editButton = createButton(buttonComp, TernUIMessages.Button_edit);
		editButton.addSelectionListener(new SelectionAdapter() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				repositoryBlock.editRepository(parent.getShell());
			}
		});
		editButton.setEnabled(false);

		// Refresh button
		refreshButton = createButton(buttonComp, TernUIMessages.Button_refresh);
		refreshButton.addSelectionListener(new SelectionAdapter() {

			@Override
			public void widgetSelected(SelectionEvent e) {
				repositoryBlock.refreshRepository();
			}
		});
		refreshButton.setEnabled(false);
	}

	private static Button createButton(Composite comp, String label) {
		Button b = new Button(comp, SWT.PUSH);
		b.setText(label);
		GridData data = new GridData(GridData.HORIZONTAL_ALIGN_FILL
				| GridData.VERTICAL_ALIGN_BEGINNING);
		b.setLayoutData(data);
		return b;
	}

	private void addListeners() {
		// Disable/Enable buttons
		repositoryBlock
				.addSelectionChangedListener(new ISelectionChangedListener() {

					@Override
					public void selectionChanged(SelectionChangedEvent event) {
						IStructuredSelection selection = (IStructuredSelection) event
								.getSelection();
						if (!selection.isEmpty()) {
							ITernRepository repository = (ITernRepository) selection
									.getFirstElement();
							removeButton.setEnabled(!repository.isDefault());
							editButton.setEnabled(!repository.isDefault());
							refreshButton.setEnabled(true);
						}
					}
				});
	}

	@Override
	protected void performDefaults() {
		super.performDefaults();
		IEclipsePreferences defaultPreferences = createPreferenceScopes()[1]
				.getNode(getPreferenceNodeQualifier());
		String repositoryName = defaultPreferences.get(
				TernCorePreferenceConstants.USED_REPOSITORY_NAME,
				ITernRepositoryManager.DEFAULT_REPOSITORY_NAME);
		ITernRepository repository = TernCorePlugin.getTernRepositoryManager()
				.getRepository(repositoryName);
		repositoryBlock.setCheckedRepository(repository);
		repositoryBlock
				.setCheckedModules(TernCorePreferenceConstants.DEFAULT_TERN_MODULES_VALUE.split(","));
	}

	@Override
	public boolean performOk() {
		// save column settings
		repositoryBlock.saveColumnSettings();
		// save tern repositories in the global preferences
		repositoryBlock.saveRepositories();
		boolean ok = super.performOk();
		ITernRepository repository = repositoryBlock.getCheckedRepository();
		IScopeContext[] contexts = createPreferenceScopes();
		// remove project-specific information if it's not enabled
		IProject project = getProject();
		boolean remove = project != null && !isElementSettingsEnabled();
		if (remove) {
			contexts[0].getNode(getPreferenceNodeQualifier()).remove(
					TernCorePreferenceConstants.USED_REPOSITORY_NAME);

		} else {
			contexts[0].getNode(getPreferenceNodeQualifier()).put(
					TernCorePreferenceConstants.USED_REPOSITORY_NAME,
					repository.getName());
		}
		flushContexts(contexts);
		return ok;
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
		return TernCorePreferenceConstants.REPOSITORY_USE_PROJECT_SETTINGS;
	}

	@Override
	protected String getPropertyPageID() {
		return PROPERTY_PAGE_ID;
	}

	@Override
	public void init(IWorkbench workbencsh) {

	}
}

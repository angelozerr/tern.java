/*******************************************************************************
 * Copyright (c) 2001, 2011 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *     Jens Lukowski/Innoopract - initial renaming/restructuring
 *     
 *******************************************************************************/
package tern.eclipse.ide.ui.preferences;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IWorkspace;
import org.eclipse.core.resources.ProjectScope;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.preferences.DefaultScope;
import org.eclipse.core.runtime.preferences.IScopeContext;
import org.eclipse.core.runtime.preferences.InstanceScope;
import org.eclipse.jface.dialogs.ControlEnableState;
import org.eclipse.jface.viewers.DecoratingLabelProvider;
import org.eclipse.jface.viewers.IStructuredContentProvider;
import org.eclipse.jface.viewers.Viewer;
import org.eclipse.jface.window.Window;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.events.SelectionListener;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Link;
import org.eclipse.ui.IWorkbenchPreferencePage;
import org.eclipse.ui.dialogs.ListDialog;
import org.eclipse.ui.dialogs.PreferencesUtil;
import org.eclipse.ui.dialogs.PropertyPage;
import org.eclipse.ui.model.WorkbenchLabelProvider;
import org.eclipse.ui.views.navigator.ResourceSorter;
import org.osgi.service.prefs.BackingStoreException;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.Trace;
import tern.eclipse.ide.ui.TernUIPlugin;

/**
 * Based loosley on
 * org.eclipse.wst.sse.ui.internal.preferences.ui.PropertyPreferencePage
 */
public abstract class PropertyPreferencePage extends PropertyPage implements
		IWorkbenchPreferencePage {
	/*
	 * Disable link data, prevents the display of a "workspace" or "project"
	 * settings link to prevent recursive dialog launching
	 */
	private static final Object DISABLE_LINK = "DISABLE_LINK"; //$NON-NLS-1$

	private Map fData = null;

	private Button fEnableProjectSettings;

	private Link fProjectSettingsLink;

	private Control fCommon;

	private ControlEnableState fEnablements;

	public PropertyPreferencePage() {
		super();
	}

	public final void applyData(Object data) {
		super.applyData(data);
		if (data instanceof Map) {
			fData = (Map) data;
			updateLinkEnablement();
		}
	}

	protected abstract Control createCommonContents(Composite composite);

	public final Control createContents(Composite parent) {
		Composite composite = new Composite(parent, SWT.NULL);

		GridLayout layout = new GridLayout();
		composite.setLayout(layout);
		GridData data = new GridData(GridData.FILL_BOTH);
		composite.setLayoutData(data);

		Composite checkLinkComposite = new Composite(composite, SWT.NONE);
		checkLinkComposite.setLayoutData(new GridData(SWT.FILL, SWT.CENTER,
				true, false));
		checkLinkComposite.setLayout(new GridLayout(2, false));

		if (getProject() != null) {
			fEnableProjectSettings = new Button(checkLinkComposite, SWT.CHECK);
			fEnableProjectSettings
					.setText(TernUIMessages.EnableProjectSettings); //$NON-NLS-1$//$NON-NLS-2$
			fEnableProjectSettings.setLayoutData(new GridData(SWT.BEGINNING,
					SWT.CENTER, false, false));
			boolean enabledForProject = createPreferenceScopes()[0].getNode(
					getPreferenceNodeQualifier()).getBoolean(
					getProjectSettingsKey(), false);
			fEnableProjectSettings.setSelection(enabledForProject);
		} else {
			Label spacer = new Label(checkLinkComposite, SWT.CHECK);
			spacer.setLayoutData(new GridData());
		}

		fProjectSettingsLink = new Link(checkLinkComposite, SWT.NONE);
		fProjectSettingsLink.setLayoutData(new GridData(SWT.END, SWT.BEGINNING,
				true, false));

		/*
		 * "element" should be a project, if null, link to per-project
		 * properties
		 */
		if (getProject() != null) {
			fProjectSettingsLink
					.setText("<a>" + TernUIMessages.ConfigureWorkspaceSettings + "</a>"); //$NON-NLS-1$//$NON-NLS-2$
		} else {
			fProjectSettingsLink
					.setText("<a>" + TernUIMessages.ConfigureProjectSettings + "</a>"); //$NON-NLS-1$//$NON-NLS-2$
		}

		updateLinkEnablement();

		fProjectSettingsLink.addSelectionListener(new SelectionListener() {
			public void widgetDefaultSelected(SelectionEvent e) {
				widgetSelected(e);
			}

			public void widgetSelected(SelectionEvent e) {
				if (getProject() == null) {
					openProjectSettings();
				} else {
					openWorkspaceSettings();
				}
			}

		});

		if (getProject() != null) {
			Label line = new Label(composite, SWT.SEPARATOR | SWT.HORIZONTAL);
			line.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_FILL));
		}

		fCommon = createCommonContents(composite);
		fCommon.setLayoutData(new GridData(GridData.FILL_BOTH));

		if (fEnableProjectSettings != null) {
			SelectionAdapter selectionAdapter = new SelectionAdapter() {
				public void widgetSelected(SelectionEvent e) {
					super.widgetSelected(e);
					enablePreferenceContent(fEnableProjectSettings
							.getSelection());
				}
			};
			selectionAdapter.widgetSelected(null);
			fEnableProjectSettings.addSelectionListener(selectionAdapter);
		}

		applyDialogFont(composite);
		return composite;
	}

	public void createControl(Composite parent) {
		if (getProject() != null) {
			noDefaultAndApplyButton();
		}
		super.createControl(parent);
	}

	protected IScopeContext[] createPreferenceScopes() {
		IProject project = getProject();
		if (project != null) {
			return new IScopeContext[] { new ProjectScope(project),
					new InstanceScope(), new DefaultScope() };
		}
		return createGlobalScopes();
	}

	protected IScopeContext[] createGlobalScopes() {
		return new IScopeContext[] { new InstanceScope(), new DefaultScope() };
	}

	protected abstract String getPreferenceNodeQualifier();

	protected abstract String getPreferencePageID();

	protected IProject getProject() {
		if (getElement() != null) {
			if (getElement() instanceof IProject) {
				return (IProject) getElement();
			}
			Object adapter = getElement().getAdapter(IProject.class);
			if (adapter instanceof IProject) {
				return (IProject) adapter;
			}
			adapter = getElement().getAdapter(IResource.class);
			if (adapter instanceof IProject) {
				return (IProject) adapter;
			}
		}
		return null;
	}

	protected abstract String getProjectSettingsKey();

	protected abstract String getPropertyPageID();

	protected boolean isElementSettingsEnabled() {
		return fEnableProjectSettings != null
				&& fEnableProjectSettings.getSelection();
	}

	void openProjectSettings() {
		ListDialog dialog = new ListDialog(getShell()) {

			protected Control createDialogArea(Composite container) {
				Control area = super.createDialogArea(container);
				getTableViewer().setSorter(
						new ResourceSorter(ResourceSorter.NAME));
				return area;
			}
		};
		dialog.setMessage(TernUIMessages.PropertyPreferencePage_02);
		dialog.setContentProvider(new IStructuredContentProvider() {
			public void dispose() {
			}

			public Object[] getElements(Object inputElement) {
				return ((IWorkspace) inputElement).getRoot().getProjects();
			}

			public void inputChanged(Viewer viewer, Object oldInput,
					Object newInput) {
			}
		});
		dialog.setLabelProvider(new DecoratingLabelProvider(
				new WorkbenchLabelProvider(), TernUIPlugin.getDefault()
						.getWorkbench().getDecoratorManager()
						.getLabelDecorator()));
		dialog.setInput(ResourcesPlugin.getWorkspace());
		dialog.setTitle(TernUIMessages.PropertyPreferencePage_01);
		if (dialog.open() == Window.OK) {
			Object[] result = dialog.getResult();
			if (result.length > 0) {
				IProject project = (IProject) dialog.getResult()[0];
				Map data = new HashMap();
				data.put(DISABLE_LINK, Boolean.TRUE);
				PreferencesUtil.createPropertyDialogOn(getShell(), project,
						getPropertyPageID(),
						new String[] { getPropertyPageID() }, data).open();
			}
		}
	}

	void openWorkspaceSettings() {
		Map data = new HashMap();
		data.put(DISABLE_LINK, Boolean.TRUE);
		PreferencesUtil.createPreferenceDialogOn(getShell(),
				getPreferencePageID(), new String[] { getPreferencePageID() },
				data).open();
	}

	public boolean performOk() {
		boolean ok = super.performOk();
		IScopeContext[] preferenceScopes = createPreferenceScopes();
		if (getProject() != null) {
			if (isElementSettingsEnabled()) {
				preferenceScopes[0].getNode(getPreferenceNodeQualifier())
						.putBoolean(getProjectSettingsKey(),
								fEnableProjectSettings.getSelection());
			} else {
				preferenceScopes[0].getNode(getPreferenceNodeQualifier())
						.remove(getProjectSettingsKey());
			}
		}
		return ok;
	}

	protected void performDefaults() {
		if (getProject() != null && fEnableProjectSettings != null) {
			fEnableProjectSettings.setSelection(false);
			enablePreferenceContent(false);
		}
		super.performDefaults();
	}

	/**
	 * Controls the enablement of the common content region of a property or
	 * preference page
	 * 
	 * @param enable
	 *            the enabled state of the common content area
	 */
	protected void enablePreferenceContent(boolean enable) {
		if (enable) {
			if (fEnablements != null) {
				fEnablements.restore();
				fEnablements = null;
			}
		} else {
			if (fEnablements == null)
				fEnablements = ControlEnableState.disable(fCommon);
		}
	}

	private void updateLinkEnablement() {
		if (fData != null && fProjectSettingsLink != null) {
			fProjectSettingsLink.setEnabled(!Boolean.TRUE.equals(fData
					.get(DISABLE_LINK)));
		}
	}

	protected void flushContexts(IScopeContext[] contexts) {
		for (int i = 0; i < contexts.length; i++) {
			try {
				contexts[i].getNode(getPreferenceNodeQualifier()).flush();
			} catch (BackingStoreException e) {
				Trace.trace(
						Trace.WARNING,
						"problem saving preference settings to scope " + contexts[i].getName(), e); //$NON-NLS-1$
			}
		}
	}
}

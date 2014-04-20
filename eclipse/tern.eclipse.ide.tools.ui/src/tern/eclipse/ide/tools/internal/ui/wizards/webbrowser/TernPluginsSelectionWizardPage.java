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
package tern.eclipse.ide.tools.internal.ui.wizards.webbrowser;

import java.util.Arrays;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;

import tern.eclipse.ide.tools.core.webbrowser.EditorOptions;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;
import tern.eclipse.ide.tools.internal.ui.wizards.TernWizardPage;
import tern.eclipse.ide.ui.controls.TernPluginsBlock;
import tern.server.ITernPlugin;

/**
 * Wizard page to select Server plugins.
 * 
 */
public class TernPluginsSelectionWizardPage extends
		TernWizardPage<EditorOptions> {

	private static final String PAGE = "TernPluginsSelectionWizardPage";
	private TernPluginsBlock pluginsBlock;

	protected TernPluginsSelectionWizardPage() {
		super(PAGE);
		setTitle(TernToolsUIMessages.TernPluginsSelectionWizardPage_title);
		setDescription(TernToolsUIMessages.TernPluginsSelectionWizardPage_description);

	}

	@Override
	protected Composite createUI(Composite parent) {
		Composite container = new Composite(parent, SWT.NULL);

		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		container.setLayout(layout);

		pluginsBlock = new TernPluginsBlock();
		pluginsBlock.createControl(container);
		pluginsBlock
				.addSelectionChangedListener(new ISelectionChangedListener() {

					@Override
					public void selectionChanged(SelectionChangedEvent event) {
						TernPluginsSelectionWizardPage.this.dialogChanged();
					}
				});
		Control control = pluginsBlock.getControl();
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 1;
		control.setLayoutData(data);

		return container;
	}

	@Override
	protected void initialize() {
		IResource resource = super.getResource();
		IProject project = resource != null ? resource.getProject() : null;
		pluginsBlock.loadPlugins(project);
	}

	@Override
	protected String validate() {
		return null;
	}

	@Override
	protected void updateModel(EditorOptions model) {
		Object[] plugins = pluginsBlock.getCheckedPlugins();
		ITernPlugin[] ternPlugins = Arrays.copyOf(plugins, plugins.length,
				ITernPlugin[].class);
		model.setTernPlugins(ternPlugins);
	}
}

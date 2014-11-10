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

import java.util.ArrayList;
import java.util.List;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;

import tern.ITernRepository;
import tern.eclipse.ide.core.TernCorePlugin;
import tern.eclipse.ide.tools.core.webbrowser.EditorOptions;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;
import tern.eclipse.ide.tools.internal.ui.wizards.TernWizardPage;
import tern.eclipse.ide.ui.controls.TernModulesBlock;
import tern.server.ITernDef;
import tern.server.ITernModule;
import tern.server.ITernPlugin;
import tern.utils.TernModuleHelper;

/**
 * Wizard page to select tern modules (JSON type definition or Server plugins).
 * 
 */
public class TernModulesSelectionWizardPage extends
		TernWizardPage<EditorOptions> {

	private static final String PAGE = "TernModulesSelectionWizardPage";
	private TernModulesBlock modulesBlock;

	protected TernModulesSelectionWizardPage() {
		super(PAGE);
		setTitle(TernToolsUIMessages.TernModulesSelectionWizardPage_title);
		setDescription(TernToolsUIMessages.TernModulesSelectionWizardPage_description);

	}

	@Override
	protected Composite createUI(Composite parent) {
		Composite container = new Composite(parent, SWT.NULL);

		GridLayout layout = new GridLayout();
		layout.numColumns = 1;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		container.setLayout(layout);

		IResource resource = super.getResource();
		IProject project = resource != null ? resource.getProject() : null;
		modulesBlock = new TernModulesBlock(project, null);
		Control control = modulesBlock.createControl(container);
		modulesBlock
				.addSelectionChangedListener(new ISelectionChangedListener() {

					@Override
					public void selectionChanged(SelectionChangedEvent event) {
						TernModulesSelectionWizardPage.this.dialogChanged();
					}
				});
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 1;
		control.setLayoutData(data);

		return container;
	}

	@Override
	protected void initialize() {
		modulesBlock.loadModules();
	}

	@Override
	protected String validate() {
		return null;
	}

	@Override
	protected void updateModel(EditorOptions model) {
		Object[] modules = modulesBlock.getCheckedModules();
		List<ITernDef> defs = new ArrayList<ITernDef>();
		List<ITernPlugin> plugins = new ArrayList<ITernPlugin>();
		ITernModule module = null;
		for (int i = 0; i < modules.length; i++) {
			module = (ITernModule) modules[i];
			TernModuleHelper.update(defs, plugins, module);
		}
		model.setTernDefs(defs.toArray(ITernDef.EMPTY_DEF));
		model.setTernPlugins(plugins.toArray(ITernPlugin.EMPTY_PLUGIN));
		ITernRepository repository = TernCorePlugin.getTernRepositoryManager()
				.getRepository(modulesBlock.getProject());
		model.setRepository(repository);
		model.setProject(modulesBlock.getProject());
	}

}

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
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;

import tern.eclipse.ide.tools.core.webbrowser.EditorOptions;
import tern.eclipse.ide.tools.internal.ui.TernToolsUIMessages;
import tern.eclipse.ide.tools.internal.ui.wizards.TernWizardPage;
import tern.eclipse.ide.ui.controls.TernDefsBlock;
import tern.server.ITernDef;

/**
 * Wizard page to select JSON type definitions.
 * 
 */
public class TernDefsSelectionWizardPage extends TernWizardPage<EditorOptions> {

	private static final String PAGE = "TernDefsSelectionWizardPage";
	private TernDefsBlock defsBlock;

	protected TernDefsSelectionWizardPage() {
		super(PAGE);
		setTitle(TernToolsUIMessages.TernDefsSelectionWizardPage_title);
		setDescription(TernToolsUIMessages.TernDefsSelectionWizardPage_description);
	}

	@Override
	protected Composite createUI(Composite parent) {
		Composite container = new Composite(parent, SWT.NULL);

		GridLayout layout = new GridLayout();
		layout.numColumns = 2;
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		container.setLayout(layout);

		// Table to select JSON type def.
		defsBlock = new TernDefsBlock(null);
		defsBlock.createControl(container);
		defsBlock.addSelectionChangedListener(new ISelectionChangedListener() {

			@Override
			public void selectionChanged(SelectionChangedEvent event) {
				TernDefsSelectionWizardPage.this.dialogChanged();
			}
		});
		Control control = defsBlock.getControl();
		GridData data = new GridData(GridData.FILL_BOTH);
		data.horizontalSpan = 2;
		control.setLayoutData(data);

		// Loader Type for JSON type def.
		Label label = new Label(container, SWT.NULL);
		label.setText("Load JSON type definition:");

		Composite loaderComposite = new Composite(container, SWT.NULL);
		loaderComposite.setLayout(new GridLayout(3, false));
		data = new GridData(GridData.FILL_HORIZONTAL);
		loaderComposite.setLayoutData(data);
		Button withAjax = new Button(loaderComposite, SWT.RADIO);
		withAjax.setText("With Ajax");
		Button embedInHTML = new Button(loaderComposite, SWT.RADIO);
		embedInHTML.setText("Embed in HTML");
		Button embedInJS = new Button(loaderComposite, SWT.RADIO);
		embedInJS.setText("Embed in Javascript");

		return container;
	}

	@Override
	protected void initialize() {
		IResource resource = super.getResource();
		IProject project = resource != null ? resource.getProject() : null;
		defsBlock.loadDefs(project);
	}

	@Override
	protected String validate() {
		return null;
	}

	@Override
	protected void updateModel(EditorOptions model) {
		Object[] defs = defsBlock.getCheckedDefs();
		ITernDef[] ternDefs = Arrays
				.copyOf(defs, defs.length, ITernDef[].class);
		model.setTernDefs(ternDefs);
	}
}

/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.ui.properties;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.jface.viewers.ArrayContentProvider;
import org.eclipse.jface.viewers.ComboViewer;
import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Label;
import org.eclipse.ui.IWorkbenchPropertyPage;
import org.eclipse.ui.dialogs.PropertyPage;

import tern.EcmaVersion;
import tern.eclipse.ide.core.IIDETernProject;
import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.ImageResource;
import tern.eclipse.ide.ui.viewers.ECMAVersionLabelProvider;
import tern.server.TernPlugin;

/**
 * Tern Main page for project properties.
 * 
 */
public class TernMainPropertyPage extends AbstractTernPropertyPage {

	public static final String PROP_ID = "tern.eclipse.ide.ui.properties";

	private Button useESModules;
	private Button useJSDoc;
	private Button jsdocStrong;
	private ComboViewer ecmaVersionViewer;

	public TernMainPropertyPage() {
		setImageDescriptor(ImageResource.getImageDescriptor(ImageResource.IMG_LOGO));
	}

	@Override
	protected Control createContents(Composite parent) {
		Composite composite = new Composite(parent, SWT.NONE);
		composite.setLayoutData(new GridData(4, 4, true, true));
		composite.setLayout(new GridLayout());

		try {
			IIDETernProject ternProject = getTernProject();
			// ECMAScript contents
			createECMAScriptComplianceContents(composite, ternProject);
			// JSDoc contents
			createJSDocContents(composite, ternProject);
		} catch (CoreException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return composite;
	}

	/**
	 * Create "ECMAScript Compliance" contents panel.
	 * 
	 * @param parent
	 * @param ternProject
	 */
	private void createECMAScriptComplianceContents(final Composite parent, IIDETernProject ternProject) {

		Group ecmaGroup = new Group(parent, SWT.SHADOW_ETCHED_IN);
		ecmaGroup.setText(TernUIMessages.TernMainPropertyPage_ecmaGroup_label);
		ecmaGroup.setLayout(new GridLayout(2, false));
		ecmaGroup.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		// Ecma Version
		Label versionLabel = new Label(ecmaGroup, SWT.NONE);
		versionLabel.setText(TernUIMessages.TernMainPropertyPage_ecmaVersion);
		versionLabel.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		ecmaVersionViewer = new ComboViewer(ecmaGroup, SWT.READ_ONLY);
		ecmaVersionViewer.setContentProvider(ArrayContentProvider.getInstance());
		ecmaVersionViewer.setLabelProvider(ECMAVersionLabelProvider.INSTANCE);
		ecmaVersionViewer.setInput(EcmaVersion.values());
		ecmaVersionViewer.addSelectionChangedListener(new ISelectionChangedListener() {

			@Override
			public void selectionChanged(SelectionChangedEvent event) {
				updateUseESModules();
			}
		});

		// Use ES modules?
		useESModules = new Button(ecmaGroup, SWT.CHECK);
		useESModules.setText(TernUIMessages.TernMainPropertyPage_useESModules);
		useESModules.setEnabled(false);

		// Update ES version
		ecmaVersionViewer.setSelection(new StructuredSelection(ternProject.getEcmaVersion()));
		// Update use ES modules?
		useESModules.setSelection(ternProject.hasPlugin(TernPlugin.es_modules));
	}

	private void updateUseESModules() {
		IStructuredSelection selection = (IStructuredSelection) ecmaVersionViewer.getSelection();
		EcmaVersion version = (EcmaVersion) selection.getFirstElement();
		useESModules.setEnabled(version.getVersion() >= 6);
	}

	/**
	 * Create "JSDoc" contents panel.
	 * 
	 * @param parent
	 * @param ternProject
	 */
	private void createJSDocContents(Composite parent, IIDETernProject ternProject) {
		Group jsdocGroup = new Group(parent, SWT.SHADOW_ETCHED_IN);
		jsdocGroup.setText(TernUIMessages.TernMainPropertyPage_jsdocGroup_label);
		jsdocGroup.setLayout(new GridLayout());
		jsdocGroup.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

		// Use JSDoc?
		useJSDoc = new Button(jsdocGroup, SWT.CHECK);
		useJSDoc.setText(TernUIMessages.TernMainPropertyPage_useJSDoc);

		// Strong.
		jsdocStrong = new Button(jsdocGroup, SWT.CHECK);
		jsdocStrong.setText(TernUIMessages.TernMainPropertyPage_JSDocStrong);
		jsdocStrong.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
		
		// Update use JSDoc?
		useJSDoc.setSelection(ternProject.hasPlugin(TernPlugin.doc_comment));
		useJSDoc.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
	}
}

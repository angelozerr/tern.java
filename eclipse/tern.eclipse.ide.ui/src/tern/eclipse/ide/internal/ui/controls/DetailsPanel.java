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
package tern.eclipse.ide.internal.ui.controls;

import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.FontData;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Text;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.server.ITernFacet;

/**
 * Content of the "Details" Tab of tern facet selection.
 *
 */
public class DetailsPanel extends AbstractPanel {

	public static final String HEADER_FONT = DetailsPanel.class.getName()
			+ ".HEADER_FONT"; //$NON-NLS-1$

	static {
		// Initialize font for header title detail (bold font).
		final String defaultFontName = JFaceResources.getDefaultFont()
				.getFontData()[0].getName();
		final FontData[] fontData = JFaceResources.getFontRegistry()
				.getBold(defaultFontName).getFontData();
		JFaceResources.getFontRegistry().put(HEADER_FONT, fontData);
	}

	public DetailsPanel(Composite parent) {
		super(parent);
	}

	@Override
	protected void createEmptyBodyContent(Composite parent) {
		final Text noSelectionTextField = new Text(parent, SWT.WRAP
				| SWT.READ_ONLY);
		noSelectionTextField.setLayoutData(new GridData(
				GridData.FILL_HORIZONTAL));
		noSelectionTextField
				.setText(TernUIMessages.DetailsPanel_noSelectionLabel);

	}

	@Override
	protected Composite createContent(Composite parent, ITernFacet facet) {
		return new TernFacetDetailsPanel(parent, facet);
	}
}

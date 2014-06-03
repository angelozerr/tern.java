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
package tern.eclipse.ide.ui.controls;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Text;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.server.ITernFacet;

/**
 * Content of the "Options" Tab of tern facet selection.
 *
 */
public class OptionsPanel extends Composite {

	private Composite content;

	public OptionsPanel(Composite parent, TernFacetsBlock block) {
		super(parent, SWT.NONE);
		GridLayout layout = new GridLayout();
		super.setLayout(layout);
		// setLayout( glmargins( gl( 1 ), 5, 8 ) );
	}

	/**
	 * Refresh content of the options panel with the given tern facet.
	 * 
	 * @param facet
	 */
	public void refresh(ITernFacet facet) {
		if (this.content != null) {
			this.content.dispose();
		}

		if (facet == null) {
			this.content = new Composite(this, SWT.NONE);
			GridLayout layout = new GridLayout();
			this.content.setLayout(layout);

			final Text noSelectionTextField = new Text(this.content, SWT.WRAP
					| SWT.READ_ONLY);
			noSelectionTextField.setLayoutData(new GridData(
					GridData.FILL_HORIZONTAL));
			noSelectionTextField
					.setText(TernUIMessages.DetailsPanel_noSelectionLabel);
		} else {
			this.content = new TernFacetOptionsPanel(this, facet);
		}
		this.content
				.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
		super.layout();
	}

}

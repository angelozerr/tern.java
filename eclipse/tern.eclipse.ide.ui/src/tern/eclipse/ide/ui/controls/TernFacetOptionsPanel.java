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

import java.util.Collection;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;

import tern.metadata.TernFacetMetadata;
import tern.metadata.TernFacetMetadataManager;
import tern.metadata.TernFacetMetadataOption;
import tern.server.ITernFacet;

/**
 * Display options of the given tern plugin.
 *
 */
public class TernFacetOptionsPanel extends Composite {

	public TernFacetOptionsPanel(Composite parent, ITernFacet facet) {
		super(parent, SWT.NONE);
		createUI(facet);
	}

	private void createUI(ITernFacet facet) {
		TernFacetMetadata metadata = facet == null ? null
				: TernFacetMetadataManager.getInstance().getMetadata(
						facet.getName());

		GridLayout layout = new GridLayout(2, false);
		super.setLayout(layout);

		if (metadata != null) {
			// get the options of the given facet and display UI field for
			// each option.
			Collection<TernFacetMetadataOption> options = metadata.getOptions();
			for (TernFacetMetadataOption option : options) {
				createUI(this, option);
			}
		}

	}

	protected void createUI(Composite parent, TernFacetMetadataOption option) {
		createUI(parent, option.getName(), option.getDescription(),
				option.getType());
	}

	protected void createUI(Composite parent, String name, String description,
			String type) {
		Label label = new Label(parent, SWT.NONE);
		label.setLayoutData(new GridData(GridData.VERTICAL_ALIGN_BEGINNING));
		label.setText(new StringBuilder(name).append(":").toString());
		label.setToolTipText(description);

		Text textField = new Text(parent, SWT.BORDER);
		textField.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));

	}

}

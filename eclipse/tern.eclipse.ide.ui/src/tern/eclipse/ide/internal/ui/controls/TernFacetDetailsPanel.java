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

import org.eclipse.core.resources.IProject;
import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.ScrolledComposite;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.program.Program;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Link;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Text;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.viewers.TernFacetLabelProvider;
import tern.metadata.TernFacetMetadata;
import tern.server.ITernFacet;
import tern.utils.StringUtils;

/**
 * Display information of the tern facet.
 *
 */
public class TernFacetDetailsPanel extends AbstractTernFacetPanel {

	public TernFacetDetailsPanel(Composite parent, ITernFacet facet,
			IProject project) {
		super(parent, facet, project);
	}

	@Override
	protected void createUI(Composite parent, ITernFacet facet, IProject project) {

		GridLayout layout = new GridLayout(1, false);
		super.setLayout(layout);

		// Create title header of the facet with icon.
		createHeader(parent, facet);

		// Create separator
		createSeparator();

		// Create body of the facet.
		createBody(facet);

	}

	public void createSeparator() {
		final Label separator = new Label(this, SWT.SEPARATOR | SWT.HORIZONTAL);
		separator.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
	}

	public void createBody(ITernFacet facet) {

		GridLayout layout;
		final ScrolledComposite details = new ScrolledComposite(this,
				SWT.V_SCROLL | SWT.H_SCROLL);
		details.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
		details.setMinWidth(300);
		details.setExpandHorizontal(true);
		details.setExpandVertical(true);

		final Composite nestedDetailsComposite = new Composite(details,
				SWT.NONE);
		layout = new GridLayout(2, false);
		layout.marginLeft = 0;
		layout.marginTop = 0;
		layout.marginHeight = 0;
		nestedDetailsComposite.setLayout(layout);
		details.setContent(nestedDetailsComposite);

		TernFacetMetadata metadata = facet.getMetadata();
		if (metadata != null && !StringUtils.isEmpty(metadata.getDescription())) {
			final Text descTextField = new Text(nestedDetailsComposite,
					SWT.WRAP | SWT.READ_ONLY);
			GridData data = new GridData(GridData.FILL_HORIZONTAL);
			data.horizontalSpan = 2;
			descTextField.setLayoutData(data);
			descTextField.setText(metadata.getDescription());
		}

		// Home page
		addInfo(nestedDetailsComposite,
				TernUIMessages.TernFacetDetailsPanel_homepage, null,
				metadata != null ? metadata.getHomePage() : "", null, true);
		// Author
		addInfo(nestedDetailsComposite,
				TernUIMessages.TernFacetDetailsPanel_author, null,
				metadata != null ? metadata.getAuthor() : "", null, false);
		// Repository URL
		addInfo(nestedDetailsComposite,
				TernUIMessages.TernFacetDetailsPanel_repositoryURL, null,
				metadata != null ? metadata.getRepositoryURL() : "", null, true);
		// Bugs URL
		addInfo(nestedDetailsComposite,
				TernUIMessages.TernFacetDetailsPanel_bugsURL, null,
				metadata != null ? metadata.getBugsURL() : "", null, true);
		// Help URL
		addInfo(nestedDetailsComposite,
				TernUIMessages.TernFacetDetailsPanel_helpURL, null,
				metadata != null ? metadata.getHelpURL() : "", null, true);
		
	}

	public void createHeader(final Composite parent, ITernFacet facet) {
		Composite header = new Composite(this, SWT.NONE);
		GridLayout layout = new GridLayout(2, false);
		header.setLayout(layout);

		addInfo(header, null, TernFacetLabelProvider.getImageFacet(facet),
				facet.getName(),
				JFaceResources.getFontRegistry().get(DetailsPanel.HEADER_FONT),
				false);
	}

	public void addInfo(final Composite parent, String valueLabel, Image image,
			String valueInfo, Font font, boolean hyperlink) {

		Label label = new Label(parent, SWT.NONE);
		label.setLayoutData(new GridData(GridData.VERTICAL_ALIGN_BEGINNING));
		label.setText(valueLabel != null ? valueLabel : "");
		if (image != null) {
			label.setImage(image);
		}

		if (hyperlink) {
			Link link = new Link(parent, SWT.WRAP);
			link.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
			if (link != null) {
				link.setFont(font);
			}
			if (!StringUtils.isEmpty(valueInfo)) {
				setLinkTarget(link, valueInfo);
			}
		} else {
			Text textField = new Text(parent, SWT.WRAP | SWT.READ_ONLY);
			textField.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
			textField.setText(valueInfo != null ? valueInfo : "");
			if (textField != null) {
				textField.setFont(font);
			}
		}
	}

	private static void setLinkTarget(Link link, final String target) {
		link.setText(new StringBuilder("<a>").append(target).append("</a>")
				.toString());
		link.addListener(SWT.Selection, new Listener() {
			public void handleEvent(Event event) {
				Program.launch(target);
			}
		});
	}
}

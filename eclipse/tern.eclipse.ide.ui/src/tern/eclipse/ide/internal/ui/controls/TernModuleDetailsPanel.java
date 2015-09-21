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
package tern.eclipse.ide.internal.ui.controls;

import org.eclipse.core.resources.IProject;
import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.ScrolledComposite;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Link;
import org.eclipse.swt.widgets.Text;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.ui.utils.BrowserSupport;
import tern.eclipse.ide.ui.viewers.TernModuleLabelProvider;
import tern.metadata.TernModuleMetadata;
import tern.server.ITernModule;
import tern.utils.StringUtils;

/**
 * Display information of the tern module.
 *
 */
public class TernModuleDetailsPanel extends AbstractTernModulePanel {

	public TernModuleDetailsPanel(Composite parent, ITernModule module,
			IProject project) {
		super(parent, module, project);
	}

	@Override
	protected void createUI(Composite parent, ITernModule module,
			IProject project) {
		GridLayout layout = new GridLayout(1, false);
		super.setLayout(layout);
		// Create title header of the module with icon.
		createHeader(parent, module);
		// Create separator
		createSeparator();
		// Create body of the module.
		createBody(module);

	}

	private void createHeader(final Composite parent, ITernModule module) {
		Composite header = new Composite(this, SWT.NONE);
		GridLayout layout = new GridLayout(2, false);
		header.setLayout(layout);

		addInfo(header, null, TernModuleLabelProvider.getImageModule(module),
				module.getName(),
				JFaceResources.getFontRegistry().get(DetailsPanel.HEADER_FONT),
				false);
	}

	private void createSeparator() {
		final Label separator = new Label(this, SWT.SEPARATOR | SWT.HORIZONTAL);
		separator.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
	}

	private void createBody(ITernModule module) {

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

		TernModuleMetadata metadata = module.getMetadata();
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
				TernUIMessages.TernModuleDetailsPanel_homepage, null,
				metadata != null ? metadata.getHomePage() : "", null, true);
		// Author
		addInfo(nestedDetailsComposite,
				TernUIMessages.TernModuleDetailsPanel_author, null,
				metadata != null ? metadata.getAuthor() : "", null, false);
		// Repository URL
		addInfo(nestedDetailsComposite,
				TernUIMessages.TernModuleDetailsPanel_repositoryURL, null,
				metadata != null ? metadata.getRepositoryURL() : "", null, true);
		// Bugs URL
		addInfo(nestedDetailsComposite,
				TernUIMessages.TernModuleDetailsPanel_bugsURL, null,
				metadata != null ? metadata.getBugsURL() : "", null, true);
		// Help URL
		addInfo(nestedDetailsComposite,
				TernUIMessages.TernModuleDetailsPanel_helpURL, null,
				metadata != null ? metadata.getHelpURL() : "", null, true);

	}

	private void addInfo(final Composite parent, String valueLabel,
			Image image, String valueInfo, Font font, boolean hyperlink) {

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
				BrowserSupport.setLinkTarget(link, valueInfo, valueInfo);
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

}

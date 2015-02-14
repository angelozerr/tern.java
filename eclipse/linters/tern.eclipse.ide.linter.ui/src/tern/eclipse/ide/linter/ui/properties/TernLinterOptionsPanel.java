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
package tern.eclipse.ide.linter.ui.properties;

import java.io.IOException;

import org.eclipse.core.resources.IProject;
import org.eclipse.swt.SWT;
import org.eclipse.swt.browser.Browser;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Link;
import org.eclipse.swt.widgets.Text;

import tern.eclipse.ide.linter.core.ITernLinterOption;
import tern.eclipse.ide.ui.utils.BrowserSupport;
import tern.utils.IOUtils;
import tern.utils.StringUtils;

/**
 * Content of the "Options" panel of tern linter option selection.
 *
 */
public class TernLinterOptionsPanel extends Composite {

	private static final String docCSS;
	static {
		docCSS = getDocCSS();
	}

	protected static String getDocCSS() {
		try {
			return IOUtils.toString(TernLinterOptionsPanel.class
					.getResourceAsStream("doc.css"));
		} catch (IOException e) {
			return "";
		}
	}

	private final IProject project;
	private Composite content;
	private Button checkBoxValue;
	private Browser descTextField;

	public TernLinterOptionsPanel(Composite parent, IProject project) {
		super(parent, SWT.NONE);
		this.project = project;
		GridLayout layout = new GridLayout();
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		super.setLayout(layout);
	}

	/**
	 * Refresh content of the details panel with the given tern linter option.
	 * 
	 * @param option
	 */
	public void refresh(ITernLinterOption option) {
		if (this.content != null) {
			// dispose old content of the last selected option.
			this.content.dispose();
		}

		if (option == null) {
			// none option are selected, create empty body content
			this.content = new Composite(this, SWT.NONE);
			GridLayout layout = new GridLayout();
			this.content.setLayout(layout);

			createEmptyBodyContent(content);

		} else {
			// option is selected, display content of this option
			this.content = createContent(this, option, project);
		}
		this.content
				.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true));
		super.layout();
	}

	protected void createEmptyBodyContent(Composite parent) {

	}

	protected Composite createContent(Composite parent,
			ITernLinterOption option, IProject project) {
		Composite content = new Composite(parent, SWT.NONE);
		GridLayout layout = new GridLayout(1, false);
		layout.marginHeight = 0;
		layout.marginWidth = 0;
		content.setLayout(layout);

		// Create title header of the option with icon.
		createHeader(content, option);
		// Create separator
		createSeparator(content);
		// Create body of the option.
		createBody(content, option);
		return content;
	}

	private void createHeader(final Composite parent,
			final ITernLinterOption option) {
		Composite header = new Composite(parent, SWT.NONE);
		GridLayout layout = new GridLayout(2, false);
		header.setLayout(layout);

		String id = option.getId();
		String url = option.getUrl();
		if (url != null) {
			Link link = new Link(header, SWT.WRAP);
			link.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
			if (!StringUtils.isEmpty(id)) {
				BrowserSupport.setLinkTarget(link, id, url);
			}
		} else {
			Text textField = new Text(header, SWT.WRAP | SWT.READ_ONLY);
			textField.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
			textField.setText(id != null ? id : "");
		}
		if (option.isBooleanType()) {
			checkBoxValue = new Button(header, SWT.CHECK);
			checkBoxValue.setSelection(option.getBooleanValue());
			checkBoxValue.addSelectionListener(new SelectionAdapter() {
				@Override
				public void widgetSelected(SelectionEvent e) {
					option.setValue(checkBoxValue.getSelection());
				}
			});
		} else if (option.isNumberType()) {

		}
	}

	private void createSeparator(Composite parent) {
		final Label separator = new Label(parent, SWT.SEPARATOR
				| SWT.HORIZONTAL);
		separator.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
	}

	private void createBody(Composite ancestor, ITernLinterOption option) {

		Composite parent = new Composite(ancestor, SWT.BORDER);
		GridLayout layout = new GridLayout(1, false);
		layout.marginLeft = 0;
		layout.marginTop = 0;
		layout.marginHeight = 0;
		parent.setLayout(layout);
		parent.setLayoutData(new GridData(GridData.FILL_BOTH));

		// description
		String description = option.getDoc();
		if (description != null) {
			descTextField = new Browser(parent, SWT.NO_SCROLL);
			GridData data = new GridData(GridData.FILL_BOTH);
			descTextField.setLayoutData(data);
			descTextField.setText(getHTML(description));
		}
		// Type value
	}

	private String getHTML(String description) {
		StringBuilder html = new StringBuilder("<html>");
		html.append("<head>");
		html.append("<style>");
		html.append(docCSS);
		html.append("</style>");
		html.append("</head>");
		html.append("<body>");
		html.append(description);
		html.append("</html>");
		return html.toString();
	}

	public void updateEnabled(boolean enabled) {
		if (checkBoxValue != null) {
			checkBoxValue.setEnabled(enabled);
		}
		if (descTextField != null) {
			descTextField.setEnabled(enabled);
		}
	}

}

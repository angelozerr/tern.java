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
package tern.eclipse.ide.server.nodejs.internal.ui.preferences;

import org.eclipse.core.runtime.Assert;
import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.swt.events.DisposeEvent;
import org.eclipse.swt.events.DisposeListener;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Shell;

public abstract class StringButtonComboFieldEditor extends StringComboFieldEditor {
	private Button changeButton;
	private String changeButtonText;

	protected StringButtonComboFieldEditor(String[] items) {
		super(items);
	}

	protected StringButtonComboFieldEditor(String name, String labelText,
			String[] items,
			Composite parent) {
		super(items);
		init(name, labelText);
		createControl(parent);
	}

	protected void adjustForNumColumns(int numColumns) {
		((GridData) getTextControl().getLayoutData()).horizontalSpan = (numColumns - 2);
	}

	protected abstract String changePressed();

	protected void doFillIntoGrid(Composite parent, int numColumns) {
		super.doFillIntoGrid(parent, numColumns - 1);
		this.changeButton = getChangeControl(parent);
		GridData gd = new GridData();
		gd.horizontalAlignment = 4;
		int widthHint = convertHorizontalDLUsToPixels(this.changeButton, 61);
		gd.widthHint = Math.max(widthHint,
				this.changeButton.computeSize(-1, -1, true).x);
		this.changeButton.setLayoutData(gd);
	}

	protected Button getChangeControl(Composite parent) {
		if (this.changeButton == null) {
			this.changeButton = new Button(parent, 8);
			if (this.changeButtonText == null) {
				this.changeButtonText = JFaceResources.getString("openChange");
			}
			this.changeButton.setText(this.changeButtonText);
			this.changeButton.setFont(parent.getFont());
			this.changeButton.addSelectionListener(new SelectionAdapter() {
				public void widgetSelected(SelectionEvent evt) {
					String newValue = StringButtonComboFieldEditor.this
							.changePressed();
					if (newValue != null)
						StringButtonComboFieldEditor.this.setStringValue(newValue);
				}
			});
			this.changeButton.addDisposeListener(new DisposeListener() {
				public void widgetDisposed(DisposeEvent event) {
					StringButtonComboFieldEditor.this.changeButton = null;
				}
			});
		} else {
			checkParent(this.changeButton, parent);
		}
		return this.changeButton;
	}

	public int getNumberOfControls() {
		return 3;
	}

	protected Shell getShell() {
		if (this.changeButton == null) {
			return null;
		}
		return this.changeButton.getShell();
	}

	public void setChangeButtonText(String text) {
		Assert.isNotNull(text);
		this.changeButtonText = text;
		if (this.changeButton != null) {
			this.changeButton.setText(text);
			Point prefSize = this.changeButton.computeSize(-1, -1);
			GridData data = (GridData) this.changeButton.getLayoutData();
			data.widthHint = Math.max(-1, prefSize.x);
		}
	}

	public void setEnabled(boolean enabled, Composite parent) {
		super.setEnabled(enabled, parent);
		if (this.changeButton != null)
			this.changeButton.setEnabled(enabled);
	}
}
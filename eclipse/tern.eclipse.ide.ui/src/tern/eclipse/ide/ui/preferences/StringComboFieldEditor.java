/**
 *  Copyright (c) 2013-2016 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 */
package tern.eclipse.ide.ui.preferences;

import org.eclipse.core.runtime.Assert;
import org.eclipse.jface.preference.FieldEditor;
import org.eclipse.jface.resource.JFaceResources;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.DisposeEvent;
import org.eclipse.swt.events.DisposeListener;
import org.eclipse.swt.events.FocusAdapter;
import org.eclipse.swt.events.FocusEvent;
import org.eclipse.swt.events.KeyAdapter;
import org.eclipse.swt.events.KeyEvent;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;

public class StringComboFieldEditor extends FieldEditor {
	public static final int VALIDATE_ON_KEY_STROKE = 0;
	public static final int VALIDATE_ON_FOCUS_LOST = 1;
	public static int UNLIMITED = -1;
	private boolean isValid;
	protected String oldValue;
	Combo textField;
	private int widthInChars;
	private int textLimit;
	private String errorMessage;
	private boolean emptyStringAllowed;
	private int validateStrategy;
	private String[] items;

	protected StringComboFieldEditor(String[] items) {
		this.widthInChars = UNLIMITED;

		this.textLimit = UNLIMITED;

		this.emptyStringAllowed = true;

		this.validateStrategy = 0;
		
		this.items = items;
	}

	public StringComboFieldEditor(String name, String labelText, int width,
			int strategy, String[] items, Composite parent) {
		this.widthInChars = UNLIMITED;

		this.textLimit = UNLIMITED;

		this.emptyStringAllowed = true;

		this.validateStrategy = 0;

		init(name, labelText);
		this.widthInChars = width;
		setValidateStrategy(strategy);
		this.isValid = false;
		this.errorMessage = JFaceResources
				.getString("StringComboFieldEditor.errorMessage");
		this.items = items;
		createControl(parent);
	}

	public StringComboFieldEditor(String name, String labelText, int width,
			String[] items, Composite parent) {
		this(name, labelText, width, 0, items, parent);
	}

	public StringComboFieldEditor(String name, String labelText,
			String[] items, Composite parent) {
		this(name, labelText, UNLIMITED, items, parent);
	}

	protected void adjustForNumColumns(int numColumns) {
		GridData gd = (GridData) this.textField.getLayoutData();
		gd.horizontalSpan = (numColumns - 1);

		gd.grabExcessHorizontalSpace = (gd.horizontalSpan == 1);
	}

	protected boolean checkState() {
		boolean result = false;
		if (this.emptyStringAllowed) {
			result = true;
		}

		if (this.textField == null) {
			result = false;
		}

		String txt = this.textField.getText();

		result = (txt.trim().length() > 0) || (this.emptyStringAllowed);

		result = (result) && (doCheckState());

		if (result)
			clearErrorMessage();
		else {
			showErrorMessage(this.errorMessage);
		}

		return result;
	}

	protected boolean doCheckState() {
		return true;
	}

	@Override
	protected void doFillIntoGrid(Composite parent, int numColumns) {
		getLabelControl(parent);

		this.textField = getTextControl(parent);
		GridData gd = new GridData();
		gd.horizontalSpan = (numColumns - 1);
		if (this.widthInChars != UNLIMITED) {
			GC gc = new GC(this.textField);
			try {
				Point extent = gc.textExtent("X");
				gd.widthHint = (this.widthInChars * extent.x);
			} finally {
				gc.dispose();
			}
		} else {
			gd.horizontalAlignment = 4;
			gd.grabExcessHorizontalSpace = true;
		}
		this.textField.setLayoutData(gd);
	}

	@Override
	protected void doLoad() {
		if (this.textField != null) {
			String value = getPreferenceStore().getString(getPreferenceName());
			this.textField.setText(value);
			this.textField.setToolTipText(value);
			this.oldValue = value;
		}
	}

	@Override
	protected void doLoadDefault() {
		if (this.textField != null) {
			String value = getPreferenceStore().getDefaultString(
					getPreferenceName());
			this.textField.setText(value);
			this.textField.setToolTipText(value);
		}
		valueChanged();
	}

	@Override
	protected void doStore() {
		getPreferenceStore().setValue(getPreferenceName(),
				this.textField.getText());
	}

	public String getErrorMessage() {
		return this.errorMessage;
	}

	public int getNumberOfControls() {
		return 2;
	}

	public String getStringValue() {
		if (this.textField != null) {
			return this.textField.getText();
		}

		return getPreferenceStore().getString(getPreferenceName());
	}

	protected Combo getTextControl() {
		return this.textField;
	}

	public Combo getTextControl(Composite parent) {
		if (this.textField == null) {
			this.textField = new Combo(parent, SWT.NONE);
			this.textField.setItems(items);
			this.textField.setFont(parent.getFont());
			switch (this.validateStrategy) {
			case 0:
				this.textField.addKeyListener(new KeyAdapter() {
					public void keyReleased(KeyEvent e) {
						StringComboFieldEditor.this.valueChanged();
					}
				});
				this.textField.addFocusListener(new FocusAdapter() {
					public void focusLost(FocusEvent e) {
						StringComboFieldEditor.this.valueChanged();
					}
				});
				break;
			case 1:
				this.textField.addKeyListener(new KeyAdapter() {
					public void keyPressed(KeyEvent e) {
						StringComboFieldEditor.this.clearErrorMessage();
					}
				});
				this.textField.addFocusListener(new FocusAdapter() {
					public void focusGained(FocusEvent e) {
						StringComboFieldEditor.this.refreshValidState();
					}

					public void focusLost(FocusEvent e) {
						StringComboFieldEditor.this.valueChanged();
						StringComboFieldEditor.this.clearErrorMessage();
					}
				});
				break;
			default:
				Assert.isTrue(false, "Unknown validate strategy");
			}
			this.textField.addDisposeListener(new DisposeListener() {
				public void widgetDisposed(DisposeEvent event) {
					StringComboFieldEditor.this.textField = null;
				}
			});
			if (this.textLimit > 0)
				this.textField.setTextLimit(this.textLimit);
		} else {
			checkParent(this.textField, parent);
		}
		return this.textField;
	}

	public boolean isEmptyStringAllowed() {
		return this.emptyStringAllowed;
	}

	@Override
	public boolean isValid() {
		return this.isValid;
	}

	@Override
	protected void refreshValidState() {
		this.isValid = checkState();
	}

	public void setEmptyStringAllowed(boolean b) {
		this.emptyStringAllowed = b;
	}

	public void setErrorMessage(String message) {
		this.errorMessage = message;
	}

	public void setFocus() {
		if (this.textField != null)
			this.textField.setFocus();
	}

	public void setStringValue(String value) {
		if (this.textField != null) {
			if (value == null) {
				value = "";
			}
			this.oldValue = this.textField.getText();
			if (!(this.oldValue.equals(value))) {
				this.textField.setText(value);
				this.textField.setToolTipText(value);
				valueChanged();
			}
		}
	}

	public void setTextLimit(int limit) {
		this.textLimit = limit;
		if (this.textField != null)
			this.textField.setTextLimit(limit);
	}

	public void setValidateStrategy(int value) {
		Assert.isTrue((value == 1) || (value == 0));
		this.validateStrategy = value;
	}

	public void showErrorMessage() {
		showErrorMessage(this.errorMessage);
	}

	protected void valueChanged() {
		setPresentsDefaultValue(false);
		boolean oldState = this.isValid;
		refreshValidState();

		if (this.isValid != oldState) {
			fireStateChanged("field_editor_is_valid", oldState, this.isValid);
		}

		String newValue = this.textField.getText();
		if (!(newValue.equals(this.oldValue))) {
			fireValueChanged("field_editor_value", this.oldValue, newValue);
			this.oldValue = newValue;
		}
	}

	public void setEnabled(boolean enabled, Composite parent) {
		super.setEnabled(enabled, parent);
		getTextControl(parent).setEnabled(enabled);
	}
}

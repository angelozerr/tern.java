/**
 *  Copyright (c) 2015 Genuitec LLC.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Piotr Tomiak <piotr@genuitec.com> - initial API and implementation
 */
package tern.eclipse.ide.server.nodejs.internal.ui.preferences;

import org.eclipse.core.runtime.Assert;
import org.eclipse.jface.preference.FieldEditor;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;

/**
 * A field editor for a checkboxed combo box that allows the drop-down selection
 * of one of a list of items.
 */
public class CheckComboFieldEditor extends FieldEditor {

	/**
	 * The checkbox widget
	 */
	private Button fButton;

	/**
	 * Checkbox text
	 */
	private String checkboxText;

	/**
	 * The <code>Combo</code> widget.
	 */
	private Combo fCombo;

	/**
	 * The value (not the name) of the currently selected item in the Combo
	 * widget.
	 */
	private String fValue;

	/**
	 * The names (labels) and underlying values to populate the combo widget.
	 * These should be arranged as: { {name1, value1}, {name2, value2}, ...}
	 */
	private String[][] fEntryNamesAndValues;

	/**
	 * The value when checkbox is unselected
	 */
	private String unselectedValue;

	/**
	 * Create the combo box field editor.
	 * 
	 * @param name
	 *            the name of the preference this field editor works on
	 * @param labelText
	 *            the label text of the field editor
	 * @param entryNamesAndValues
	 *            the names (labels) and underlying values to populate the combo
	 *            widget. These should be arranged as: { {name1, value1},
	 *            {name2, value2}, ...}
	 * @param parent
	 *            the parent composite
	 */
	public CheckComboFieldEditor(String name, String labelText,
			String[][] entryNamesAndValues, String unselectedValue,
			Composite parent) {
		init(name, ""); //$NON-NLS-1$
		Assert.isTrue(checkArray(entryNamesAndValues));
		fEntryNamesAndValues = entryNamesAndValues;
		checkboxText = labelText;
		this.unselectedValue = unselectedValue;
		createControl(parent);
	}

	/**
	 * Checks whether given <code>String[][]</code> is of "type"
	 * <code>String[][2]</code>.
	 *
	 * @return <code>true</code> if it is ok, and <code>false</code> otherwise
	 */
	private boolean checkArray(String[][] table) {
		if (table == null) {
			return false;
		}
		for (int i = 0; i < table.length; i++) {
			String[] array = table[i];
			if (array == null || array.length != 2) {
				return false;
			}
		}
		return true;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.eclipse.jface.preference.FieldEditor#adjustForNumColumns(int)
	 */
	@Override
	protected void adjustForNumColumns(int numColumns) {
		if (numColumns > 1) {
			int left = numColumns - 1;
			((GridData) fButton.getLayoutData()).horizontalSpan = 1;
			Control control = getLabelControl();
			if (control != null) {
				((GridData) control.getLayoutData()).exclude = true;
			}
			((GridData) fCombo.getLayoutData()).horizontalSpan = left;
		} else {
			((GridData) fButton.getLayoutData()).horizontalSpan = 1;
			Control control = getLabelControl();
			if (control != null) {
				((GridData) control.getLayoutData()).exclude = true;
			}
			((GridData) fCombo.getLayoutData()).horizontalSpan = 1;
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.eclipse.jface.preference.FieldEditor#doFillIntoGrid(org.eclipse.swt
	 * .widgets.Composite, int)
	 */
	@Override
	protected void doFillIntoGrid(Composite parent, int numColumns) {
		int comboC = 1;
		if (numColumns > 1) {
			comboC = numColumns - 1;
		}

		Control control = getCheckControl(parent);
		GridData gd = new GridData();
		gd.horizontalSpan = 1;
		control.setLayoutData(gd);
		control.setFont(parent.getFont());

		control = getLabelControl(parent);
		gd = new GridData();
		gd.exclude = true;
		control.setLayoutData(gd);

		control = getComboBoxControl(parent);
		gd = new GridData();
		gd.horizontalSpan = comboC;
		gd.horizontalAlignment = GridData.FILL;
		control.setLayoutData(gd);
		control.setFont(parent.getFont());
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.eclipse.jface.preference.FieldEditor#doLoad()
	 */
	@Override
	protected void doLoad() {
		updateComboForValue(getPreferenceStore().getString(getPreferenceName()));
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.eclipse.jface.preference.FieldEditor#doLoadDefault()
	 */
	@Override
	protected void doLoadDefault() {
		updateComboForValue(getPreferenceStore().getDefaultString(
				getPreferenceName()));
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.eclipse.jface.preference.FieldEditor#doStore()
	 */
	@Override
	protected void doStore() {
		if (fValue == null) {
			getPreferenceStore().setToDefault(getPreferenceName());
			return;
		}
		getPreferenceStore().setValue(getPreferenceName(), fValue);
	}
	
	public String getValue() {
		return fValue;
	}
	
	public int getSelection() {
		return fCombo.getSelectionIndex();
	}

	@Override
	public int getNumberOfControls() {
		return 3;
	}

	/*
	 * Lazily create and return the Combo control.
	 */
	private Combo getComboBoxControl(Composite parent) {
		if (fCombo == null) {
			fCombo = new Combo(parent, SWT.READ_ONLY);
			fCombo.setFont(parent.getFont());
			for (int i = 0; i < fEntryNamesAndValues.length; i++) {
				fCombo.add(fEntryNamesAndValues[i][0], i);
			}

			fCombo.addSelectionListener(new SelectionAdapter() {
				@Override
				public void widgetSelected(SelectionEvent evt) {
					updateValue(fButton.getSelection(), fCombo.getText());
				}
			});
		}
		return fCombo;
	}

	/*
	 * Given the name (label) of an entry, return the corresponding value.
	 */
	private String getValueForName(String name) {
		for (int i = 0; i < fEntryNamesAndValues.length; i++) {
			String[] entry = fEntryNamesAndValues[i];
			if (name.equals(entry[0])) {
				return entry[1];
			}
		}
		return fEntryNamesAndValues[0][0];
	}

	/*
	 * Set the name in the combo widget to match the specified value.
	 */
	private void updateComboForValue(String value) {
		boolean select = !value.equals(unselectedValue);
		fButton.setSelection(select);
		updateComboBoxEnablement(fCombo.getParent(), select);
		fValue = value;
		for (int i = 0; i < fEntryNamesAndValues.length; i++) {
			if (value.equals(fEntryNamesAndValues[i][1])) {
				fCombo.setText(fEntryNamesAndValues[i][0]);
				return;
			}
		}
		if (fEntryNamesAndValues.length > 0) {
			if (select) {
				fValue = fEntryNamesAndValues[0][1];
			}
			fCombo.setText(fEntryNamesAndValues[0][0]);
		}
		refreshValidState();
		if (!isValid()) {
			fireStateChanged(IS_VALID, true, false);
		}
	}

	public boolean isCheckboxSelected() {
		return fButton == null || fButton.getSelection();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.eclipse.jface.preference.FieldEditor#setEnabled(boolean,
	 * org.eclipse.swt.widgets.Composite)
	 */
	@Override
	public void setEnabled(boolean enabled, Composite parent) {
		Button check = getCheckControl(parent);
		check.setEnabled(enabled);
		enabled = check.getSelection();
		super.setEnabled(enabled, parent);
		updateComboBoxEnablement(parent, enabled);
	}

	private void updateValue(boolean selected, String name) {
		String oldValue = fValue;
		if (selected) {
			fValue = getValueForName(name);
		} else {
			fValue = unselectedValue;
		}
		setPresentsDefaultValue(false);
		boolean oldState = isValid(); 
		refreshValidState();
		if (isValid() != oldState) {
			fireStateChanged(IS_VALID, oldState, isValid());
		}
		if (!fValue.equals(oldValue)) {
			fireValueChanged(VALUE, oldValue, fValue);
		}
	}

	protected void updateComboBoxEnablement(Composite parent, boolean enabled) {
		getComboBoxControl(parent).setEnabled(enabled);
		boolean oldState = isValid(); 
		refreshValidState();
		if (isValid() != oldState) {
			fireStateChanged(IS_VALID, oldState, isValid());
		}
	}

	private Button getCheckControl(final Composite parent) {
		if (fButton == null) {
			fButton = new Button(parent, SWT.CHECK);
			fButton.setFont(parent.getFont());
			fButton.setText(checkboxText);
			fButton.addSelectionListener(new SelectionAdapter() {
				@Override
				public void widgetSelected(SelectionEvent evt) {
					updateComboBoxEnablement(parent, fButton.getSelection());
					updateValue(fButton.getSelection(), fCombo.getText());
				}
			});
		}
		return fButton;
	}

}

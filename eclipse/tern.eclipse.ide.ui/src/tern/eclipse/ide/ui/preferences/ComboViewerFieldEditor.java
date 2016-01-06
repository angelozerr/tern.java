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

import org.eclipse.jface.preference.FieldEditor;
import org.eclipse.jface.viewers.ArrayContentProvider;
import org.eclipse.jface.viewers.ComboViewer;
import org.eclipse.jface.viewers.IBaseLabelProvider;
import org.eclipse.jface.viewers.IContentProvider;
import org.eclipse.jface.viewers.IStructuredContentProvider;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.viewers.StructuredSelection;
import org.eclipse.jface.viewers.StructuredViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;

/**
 * A field editor for a combo box that allows the drop-down selection of one of
 * a list of items with label/content provider.
 *
 */
public abstract class ComboViewerFieldEditor extends FieldEditor {

	/**
	 * The custom combo box control.
	 */
	private ComboViewer viewer;
	private Object selectedValue;
	private boolean isValid = true;

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
	public ComboViewerFieldEditor(String name, String labelText, Composite parent) {
		init(name, labelText);
		createControl(parent);
		setContentProvider(ArrayContentProvider.getInstance());
	}

	@Override
	protected void adjustForNumColumns(int numColumns) {
		Combo combo = viewer.getCombo();
		if (numColumns > 1) {
			Control control = getLabelControl();
			int left = numColumns;
			if (control != null) {
				((GridData) control.getLayoutData()).horizontalSpan = 1;
				left = left - 1;
			}
			((GridData) combo.getLayoutData()).horizontalSpan = left;
		} else {
			Control control = getLabelControl();
			if (control != null) {
				((GridData) control.getLayoutData()).horizontalSpan = 1;
			}
			((GridData) combo.getLayoutData()).horizontalSpan = 1;
		}
	}

	@Override
	protected void doFillIntoGrid(Composite parent, int numColumns) {
		int comboC = 1;
		if (numColumns > 1) {
			comboC = numColumns - 1;
		}
		Control control = getLabelControl(parent);
		GridData gd = new GridData();
		gd.horizontalSpan = 1;
		control.setLayoutData(gd);
		control = getComboBoxControl(parent);
		gd = new GridData();
		gd.horizontalSpan = comboC;
		gd.horizontalAlignment = GridData.FILL;
		control.setLayoutData(gd);
		control.setFont(parent.getFont());
	}

	@Override
	protected void doLoad() {
		updateComboForValue(getPreferenceStore().getString(getPreferenceName()));
	}

	@Override
	protected void doLoadDefault() {
		updateComboForValue(getPreferenceStore().getDefaultString(getPreferenceName()));
	}

	protected void updateComboForValue(String value) {
		selectedValue = getValueFromPreference(value);
		if (selectedValue != null) {
			viewer.setSelection(new StructuredSelection(selectedValue));
		}
	}

	@Override
	protected void doStore() {
		if (selectedValue == null) {
			getPreferenceStore().setToDefault(getPreferenceName());
			return;
		}
		getPreferenceStore().setValue(getPreferenceName(), getPreferenceValue(selectedValue));
	}

	@Override
	public int getNumberOfControls() {
		return 2;
	}

	/*
	 * Lazily create and return the Combo control.
	 */
	private Combo getComboBoxControl(Composite parent) {
		if (viewer == null) {
			Combo comboBox = new Combo(parent, SWT.READ_ONLY);
			comboBox.setFont(parent.getFont());
			viewer = new ComboViewer(comboBox);
			comboBox.addSelectionListener(new SelectionAdapter() {
				@Override
				public void widgetSelected(SelectionEvent evt) {
					boolean oldValid = isValid;
					Object oldValue = selectedValue;
					selectedValue = viewer.getSelection().isEmpty() ? null
							: ((IStructuredSelection) viewer.getSelection()).getFirstElement();
					setPresentsDefaultValue(false);
					fireValueChanged(VALUE, oldValue, selectedValue);

					refreshValidState();
					boolean newValid = isValid;
					if (oldValid != newValid) {
						fireValueChanged(IS_VALID, oldValid, newValid);
					}
				}
			});
		}
		return viewer.getCombo();
	}

	@Override
	public void setEnabled(boolean enabled, Composite parent) {
		super.setEnabled(enabled, parent);
		getComboBoxControl(parent).setEnabled(enabled);
	}

	/**
	 * @param labelProvider
	 *            the label provider used
	 * @see StructuredViewer#setLabelProvider(IBaseLabelProvider)
	 */
	public void setLabelProvider(IBaseLabelProvider labelProvider) {
		viewer.setLabelProvider(labelProvider);
	}

	/**
	 * @param provider
	 *            the content provider used
	 * @see StructuredViewer#setContentProvider(IContentProvider)
	 * @since 3.7
	 */
	public void setContentProvider(IStructuredContentProvider provider) {
		viewer.setContentProvider(provider);
	}

	/**
	 * @param input
	 *            the input used
	 * @see StructuredViewer#setInput(Object)
	 */
	public void setInput(Object input) {
		viewer.setInput(input);
		viewer.getCombo().select(0);
	}

	protected abstract String getPreferenceValue(Object selectedObject);

	protected abstract Object getValueFromPreference(String preferenceValue);

	public Object getSelectedValue() {
		return selectedValue;
	}

	@Override
	protected void refreshValidState() {
		isValid = checkState();
	}

	protected boolean checkState() {
		return true;
	}

	@Override
	public boolean isValid() {
		return isValid;
	}

	public ComboViewer getViewer() {
		return viewer;
	}
}

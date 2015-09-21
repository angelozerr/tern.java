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
package tern.eclipse.ide.internal.ui.viewers;

import org.eclipse.jface.viewers.ArrayContentProvider;
import org.eclipse.jface.viewers.CellEditor;
import org.eclipse.jface.viewers.ColumnViewer;
import org.eclipse.jface.viewers.ComboBoxViewerCellEditor;
import org.eclipse.jface.viewers.EditingSupport;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;

import tern.eclipse.ide.internal.ui.descriptors.options.LintRule;
import tern.eclipse.ide.internal.ui.descriptors.options.LintRuleSeverity;

/**
 * {@link EditingSupport} to display a combo with lint rules severity.
 *
 */
public class LintRulesSeverityEditingSupport extends EditingSupport {

	private ComboBoxViewerCellEditor cellEditor;

	public LintRulesSeverityEditingSupport(ColumnViewer viewer) {
		super(viewer);
	}

	@Override
	protected boolean canEdit(Object element) {
		return true;
	}

	@Override
	protected CellEditor getCellEditor(Object element) {
		if (cellEditor == null) {
			cellEditor = new ComboBoxViewerCellEditor((Composite) getViewer()
					.getControl(), SWT.READ_ONLY);
			cellEditor.setLabelProvider(new LabelProvider());
			cellEditor.setContentProvider(ArrayContentProvider.getInstance());
			cellEditor.setInput(LintRuleSeverity.toStringArray());
		}
		return cellEditor;
	}

	@Override
	protected Object getValue(Object element) {
		LintRule rule = (LintRule) element;
		return rule.getSeverity();
	}

	@Override
	protected void setValue(Object element, Object value) {
		String severity = value.toString();
		LintRule rule = (LintRule) element;
		rule.setSeverity(severity);
		getViewer().update(element, null);
	}

}

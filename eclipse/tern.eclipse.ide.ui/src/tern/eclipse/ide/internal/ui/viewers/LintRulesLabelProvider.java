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
package tern.eclipse.ide.internal.ui.viewers;

import org.eclipse.jface.fieldassist.FieldDecorationRegistry;
import org.eclipse.jface.viewers.ITableLabelProvider;
import org.eclipse.jface.viewers.LabelProvider;
import org.eclipse.swt.graphics.Image;

import tern.eclipse.ide.internal.ui.descriptors.options.LintRule;
import tern.eclipse.ide.internal.ui.descriptors.options.LintRuleSeverity;
import tern.utils.StringUtils;

public class LintRulesLabelProvider extends LabelProvider implements
		ITableLabelProvider {

	private static final LintRulesLabelProvider INSTANCE = new LintRulesLabelProvider();

	private static final int RULE_LABEL = 0;
	private static final int RULE_SEVERITY = 1;

	public static LintRulesLabelProvider getInstance() {
		return INSTANCE;
	}

	@Override
	public String getColumnText(Object element, int columnIndex) {
		LintRule rule = (LintRule) element;
		switch (columnIndex) {
		case RULE_LABEL:
			return rule.getLabel();
		case RULE_SEVERITY:
			return rule.getSeverity();
		}
		return null;
	}

	@Override
	public Image getColumnImage(Object element, int columnIndex) {
		LintRule rule = (LintRule) element;
		switch (columnIndex) {
		case RULE_LABEL:
			return null;
		case RULE_SEVERITY:
			String id = getFieldDecorationId(rule.getSeverity());
			if (!StringUtils.isEmpty(id)) {
				return FieldDecorationRegistry.getDefault()
						.getFieldDecoration(id).getImage();
			}
			return null;
		}
		return null;
	}

	private String getFieldDecorationId(String severity) {
		if (LintRuleSeverity.warning.name().equals(severity)) {
			return FieldDecorationRegistry.DEC_WARNING;
		} else if (LintRuleSeverity.error.name().equals(severity)) {
			return FieldDecorationRegistry.DEC_ERROR;
		}
		return null;
	}

}

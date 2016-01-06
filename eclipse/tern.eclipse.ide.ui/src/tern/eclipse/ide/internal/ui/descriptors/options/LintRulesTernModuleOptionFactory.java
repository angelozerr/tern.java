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
package tern.eclipse.ide.internal.ui.descriptors.options;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.eclipse.core.resources.IProject;
import org.eclipse.jface.viewers.ArrayContentProvider;
import org.eclipse.jface.viewers.TableViewer;
import org.eclipse.jface.viewers.TableViewerColumn;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Table;

import tern.eclipse.ide.internal.ui.TernUIMessages;
import tern.eclipse.ide.internal.ui.viewers.LintRulesLabelProvider;
import tern.eclipse.ide.internal.ui.viewers.LintRulesSeverityEditingSupport;
import tern.eclipse.ide.ui.descriptors.options.ITernModuleOptionFactory;
import tern.eclipse.ide.ui.viewers.JsonContentProvider;
import tern.metadata.TernModuleMetadataOption;
import tern.server.protocol.JsonHelper;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.eclipsesource.json.JsonValue;

/**
 * String tern module option.
 *
 */
public class LintRulesTernModuleOptionFactory implements
		ITernModuleOptionFactory {

	@Override
	public void createOption(Composite parent, IProject project,
			TernModuleMetadataOption metadata, final JsonObject options) {
		List<LintRule> rules = createRules(metadata, options);
		// create UI
		final TableViewer viewer = new TableViewer(parent, SWT.BORDER
				| SWT.H_SCROLL | SWT.V_SCROLL | SWT.FULL_SELECTION | SWT.MULTI);

		// create rule column
		TableViewerColumn ruleColumn = new TableViewerColumn(viewer, SWT.NONE);
		ruleColumn.getColumn().setWidth(200);
		ruleColumn.getColumn().setResizable(true);
		ruleColumn
				.getColumn()
				.setText(
						TernUIMessages.LintRulesTernModuleOptionFactory_rules_ruleColumn);

		// create severity column
		TableViewerColumn severityColumn = new TableViewerColumn(viewer,
				SWT.NONE);
		severityColumn.getColumn().setWidth(100);
		severityColumn.getColumn().setResizable(true);
		severityColumn
				.getColumn()
				.setText(
						TernUIMessages.LintRulesTernModuleOptionFactory_rules_severityColumn);
		severityColumn.setEditingSupport(new LintRulesSeverityEditingSupport(
				viewer));

		Table table = viewer.getTable();
		GridData data = new GridData(GridData.FILL_BOTH);
		data.widthHint = 350;
		table.setLayoutData(data);
		table.setFont(parent.getFont());

		table.setHeaderVisible(true);
		table.setLinesVisible(false);

		viewer.setLabelProvider(LintRulesLabelProvider.getInstance());
		viewer.setContentProvider(ArrayContentProvider.getInstance());
		viewer.setInput(rules);

	}

	private List<LintRule> createRules(TernModuleMetadataOption metadata,
			JsonObject options) {
		JsonObject rulesOption = (JsonObject) options.get("rules");
		if (rulesOption == null) {
			rulesOption = new JsonObject();
			options.set("rules", rulesOption);
		}
		List<LintRule> rules = new ArrayList<LintRule>();
		JsonArray defaultRules = (JsonArray) metadata.getJsonObject().get(
				"values");
		for (Iterator<JsonValue> iterator = defaultRules.iterator(); iterator
				.hasNext();) {
			JsonObject defaultRule = (JsonObject) iterator.next();
			rules.add(new LintRule(defaultRule, rulesOption));
		}
		return rules;
	}
}

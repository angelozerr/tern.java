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
package tern.server.protocol.outline;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultProcessor;
import tern.server.protocol.TernDoc;

/**
 * Tern outline result processor.
 *
 */
public class TernOutlineResultProcessor implements ITernResultProcessor<ITernOutlineCollector> {

	public static final TernOutlineResultProcessor INSTANCE = new TernOutlineResultProcessor();

	private static final String OUTLINE_FIELD_NAME = "outline"; // $NON-NLS-1$
	private static final String CHILDREN_FIELD_NAME = "children"; // $NON-NLS-1$

	@Override
	public void process(TernDoc doc, IJSONObjectHelper helper, Object jsonObject, ITernOutlineCollector collector) {
		Iterable<Object> outline = helper.getList(jsonObject, OUTLINE_FIELD_NAME);
		IJSNodeRoot root = collector.createRoot();
		if (outline != null) {
			addChildren(outline, root, collector, helper);
		}
	}

	protected void addChildren(Iterable<Object> jsonNodes, IJSNode parent, ITernOutlineCollector collector,
			IJSONObjectHelper helper) {
		String name = null;
		String type = null;
		String kind = null;
		String value = null;
		Long start = null;
		Long end = null;
		String file = null;
		IJSNode node = null;
		Iterable<Object> jsonChildren;
		for (Object jsonNode : jsonNodes) {
			name = helper.getText(jsonNode, "name");
			type = helper.getText(jsonNode, "type");
			kind = helper.getText(jsonNode, "kind");
			value = helper.getText(jsonNode, "value");
			start = helper.getLong(jsonNode, "start");
			end = helper.getLong(jsonNode, "end");
			file = helper.getText(jsonNode, "file");
			node = collector.createNode(name, type, kind, value, start, end, file, parent, jsonNode, helper);
			jsonChildren = helper.getList(jsonNode, CHILDREN_FIELD_NAME); // $NON-NLS-1$
			if (jsonChildren != null) {
				addChildren(jsonChildren, node, collector, helper);
			}
		}
	}

}

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
package tern.server.protocol.outline;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultProcessor;
import tern.server.protocol.TernDoc;

public class TernOutlineResultProcessor implements ITernResultProcessor<ITernOutlineCollector> {

	public static final TernOutlineResultProcessor INSTANCE = new TernOutlineResultProcessor();

	private static final String OUTLINE_FIELD_NAME = "outline";
	private static final String CHILDREN_FIELD_NAME = "children";

	@Override
	public void process(TernDoc doc, IJSONObjectHelper jsonObjectHelper, Object jsonObject,
			ITernOutlineCollector collector) {
		Iterable<Object> outline = jsonObjectHelper.getList(jsonObject, OUTLINE_FIELD_NAME); // $NON-NLS-1$
		JSNodeRoot root = new JSNodeRoot();
		if (outline != null) {
			addChildren(outline, root, jsonObjectHelper);
		}
		collector.setRoot(root);
	}

	protected void addChildren(Iterable<Object> jsonNodes, JSNode parent, IJSONObjectHelper helper) {
		String name = null;
		String type = null;
		Long start = null;
		Long end = null;
		JSNode node = null;
		Iterable<Object> jsonChildren;
		for (Object jsonNode : jsonNodes) {
			name = helper.getText(jsonNode, "name");
			type = helper.getText(jsonNode, "type");
			start = helper.getLong(jsonNode, "start");
			end = helper.getLong(jsonNode, "end");
			node = new JSNode(name, type, start, end, parent);
			jsonChildren = helper.getList(jsonNode, CHILDREN_FIELD_NAME); // $NON-NLS-1$
			if (jsonChildren != null) {
				addChildren(jsonChildren, node, helper);
			}
		}
	}

}

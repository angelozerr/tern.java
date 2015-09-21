/**
 *  Copyright (c) 2013-2015 Angelo ZERR.
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  which accompanies this distribution, and is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *  Angelo Zerr <angelo.zerr@gmail.com> - initial implementation
 */
package tern.server.protocol.highlight;

import tern.server.protocol.IJSONObjectHelper;
import tern.server.protocol.ITernResultProcessor;
import tern.server.protocol.TernDoc;

public class TernHighlightResultProcessor implements ITernResultProcessor<ITernHighlightCollector> {

	public static final TernHighlightResultProcessor INSTANCE = new TernHighlightResultProcessor();

	@Override
	public void process(TernDoc doc, IJSONObjectHelper jsonObjectHelper, Object jsonObject,
			ITernHighlightCollector collector) {
		String file = "highlight"; //doc.getQuery().getFile();
		Iterable<Object> elements = jsonObjectHelper.getList(jsonObject, file);
		for (Object elt : elements) {
			collector.higlight(jsonObjectHelper.getText(elt, "type"), jsonObjectHelper.getLong(elt, "start"),
					jsonObjectHelper.getLong(elt, "end"));
		}
	}

}

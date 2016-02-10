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
package tern.doc;

import tern.server.ITernServer;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.TernCompletionsQuery;

public class JSDocumentHelper {

	private JSDocumentHelper() {
	}

	public static TernDoc createDoc(IJSDocument doc) {

		boolean changed = doc.isChanged();

		String file = changed ? "#0" : doc.getName();
		Integer pos = doc.getCursor("end");

		TernCompletionsQuery query = new TernCompletionsQuery(file, pos);
		query.setTypes(true);
		query.setDocs(true);
		query.setUrls(true);
		query.setLineCharPositions(true);

		TernDoc t = new TernDoc(query);
		if (changed) {
			// the js doc has changed since last completion, reparse the js doc.
			t.addFile(doc.getName(), doc.getValue(), null, null);
		} else {
			// non changes, the js doc must not reparsed.
		}

		return t;
	}

	public static void registerDoc(IJSDocument doc, ITernServer server) {
		server.addFile(doc.getName(), doc.getValue());
	}

}

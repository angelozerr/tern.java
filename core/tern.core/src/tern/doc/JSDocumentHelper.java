package tern.doc;

import tern.server.ITernServer;
import tern.server.protocol.TernDoc;
import tern.server.protocol.completions.TernCompletionsQuery;

public class JSDocumentHelper {

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
			t.addFile(doc.getName(), doc.getValue(), null);
		} else {
			// non changes, the js doc must not reparsed.
		}

		return t;
	}

	public static void registerDoc(IJSDocument doc, ITernServer server) {
		server.addFile(doc.getName(), doc.getValue());
	}

}

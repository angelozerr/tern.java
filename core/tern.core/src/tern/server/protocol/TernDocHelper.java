package tern.server.protocol;

import tern.doc.IJSDocument;

public class TernDocHelper {

	public static TernDoc createDoc(IJSDocument doc) {
		TernDoc t = new TernDoc();

		TernCompletionQuery query = new TernCompletionQuery();
		query.setTypes(true);
		query.setDocs(true);
		query.setUrls(true);
		query.setEnd(doc.getCursor("end"));
		query.setLineCharPositions(true);
		t.setQuery(query);

		boolean changed = doc.isChanged();
		if (changed) {
			// the js doc has changed since last completion, reparse the js doc.
			query.setFile("#0");
			t.addFile(doc.getName(), doc.getValue(), null);
		} else {
			// non changes, the js doc must not reparsed.
			query.setFile(doc.getName());
		}

		return t;
	}
}

package tern.eclipse.ide.ui.utils;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.IDocument;

import tern.TernFileManager;
import tern.server.protocol.TernDoc;
import tern.server.protocol.TernQuery;

public class IDETernProtcolHelper {

	public static void updateDoc(TernDoc doc, IFile file, IDocument document,
			TernFileManager<IFile> fileManager) {
		if (file != null && file.exists()) {
			String name = fileManager.getFileName(file);
			String text = document.get();
			doc.addFile(name, text, null);
			TernQuery query = doc.getQuery();
			if (query != null) {
				query.setFile("#0");
			}
		}
	}
}

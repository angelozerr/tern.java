package tern.eclipse.ide.jsdt.internal.ui;

import org.eclipse.jface.text.IDocument;
import org.eclipse.wst.sse.ui.internal.reconcile.DocumentRegionProcessor;

public class JSDTDocumentRegionProcessor extends DocumentRegionProcessor {

	@Override
	public synchronized void startReconciling() {
		super.startReconciling();
	}

	@Override
	protected String getContentType(IDocument doc) {
		return "org.eclipse.wst.jsdt.core.jsSource";
	}
}
